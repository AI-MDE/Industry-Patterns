#!/usr/bin/env python3
"""Workday external reference extraction (stdlib only). Inputs must be obtained lawfully.
No Workday tenant access and no auto-promotion into MDE's canonical model.
"""
import argparse, json, pathlib, re, sys, zipfile, xml.etree.ElementTree as ET
from datetime import date

def xlsx_rows(filename):
    ns = '{http://schemas.openxmlformats.org/spreadsheetml/2006/main}'
    rel = '{http://schemas.openxmlformats.org/officeDocument/2006/relationships}'
    pkg = '{http://schemas.openxmlformats.org/package/2006/relationships}'
    with zipfile.ZipFile(filename) as z:
        names = set(z.namelist())
        shared = []
        if 'xl/sharedStrings.xml' in names:
            root = ET.fromstring(z.read('xl/sharedStrings.xml'))
            for si in root.findall(ns+'si'):
                shared.append(''.join(e.text or '' for e in si.iter(ns+'t')))
        book = ET.fromstring(z.read('xl/workbook.xml'))
        links = ET.fromstring(z.read('xl/_rels/workbook.xml.rels'))
        targets = {r.get('Id'): r.get('Target') for r in links.findall(pkg+'Relationship')}
        for sheet in book.findall('.//'+ns+'sheet'):
            target = targets.get(sheet.get(rel+'id'))
            if not target: continue
            target = target.lstrip('/')
            path = target if target.startswith('xl/') else 'xl/'+target
            if path not in names: continue
            root = ET.fromstring(z.read(path))
            rows = []
            for row in root.findall('.//'+ns+'sheetData/'+ns+'row'):
                cells = {}
                for c in row.findall(ns+'c'):
                    ref = c.get('r','')
                    letters = re.match(r'[A-Z]+',ref)
                    if not letters: continue
                    idx = 0
                    for ch in letters.group(): idx = idx*26+ord(ch)-64
                    value = c.find(ns+'v')
                    inline = c.find(ns+'is')
                    text = value.text if value is not None else ''.join(t.text or '' for t in inline.iter(ns+'t')) if inline is not None else ''
                    if c.get('t') == 's' and text is not None: text = shared[int(text)]
                    cells[idx-1] = text or ''
                if cells: rows.append([cells.get(i,'') for i in range(max(cells)+1)])
            yield sheet.get('name','Sheet'), rows

def catalog(filename):
    tables = {}; sheets = []; unsupported = []
    def norm(s): return re.sub(r'[^a-z0-9]+',' ',str(s).lower()).strip()
    for title, rows in xlsx_rows(filename):
        sheets.append({'name':title,'rows':len(rows)})
        # Worksheet layouts vary. Find a header row describing columns or a per-table column inventory.
        for n,row in enumerate(rows):
            header = [norm(x) for x in row]
            if not ('data type' in header and ('column' in header or 'column name' in header or 'field' in header or 'field name' in header)):
                continue
            def value(data, *names):
                for key in names:
                    if key in header:
                        i=header.index(key)
                        return data[i] if i < len(data) else ''
                return ''
            for data in rows[n+1:]:
                field = value(data,'column','column name','field','field name')
                if not field: continue
                table = value(data,'table','table name','business object','business object name') or title
                item = tables.setdefault(table,{'name':table,'fields':[],'relationships':[],'sourceSheet':title})
                typ = value(data,'data type'); key = value(data,'key')
                target = value(data,'fk target reference table','fk target','foreign key target')
                entry={'name':field,'type':typ,'key':key,'nullable':value(data,'nullable'),
                       'description':value(data,'description'),'securityDomain':value(data,'domain')}
                item['fields'].append(entry)
                if target and ('FK' in str(key).upper() or 'ARRAY' in str(typ).upper()):
                    item['relationships'].append({'name':field,'target':target,
                      'cardinality':'0..*' if '[]' in str(key) or 'ARRAY' in str(typ).upper() else '0..1',
                      'evidence':'catalog-column'})
            break
        else: unsupported.append(title)
    return {'objects':list(tables.values()),'sheets':sheets,'unparsedSheets':unsupported,
            'warning':'Review catalog sheet layouts and extracted field ownership; unmapped sheets are never silently discarded.'}

def wsdl_files(folder):
    services=[]; types=[]; operations=[]; errors=[]
    for filepath in sorted(pathlib.Path(folder).rglob('*')):
        if filepath.suffix.lower() not in ('.wsdl','.xsd','.xml'): continue
        try: root=ET.parse(filepath).getroot()
        except ET.ParseError as e:
            errors.append({'file':str(filepath),'error':str(e)});continue
        source=str(filepath.relative_to(folder))
        for el in root.iter():
            kind=el.tag.rsplit('}',1)[-1]
            if kind in ('complexType','simpleType','element') and el.get('name'):
                types.append({'name':el.get('name'),'kind':kind,'file':source,
                              'attributes':sorted(set(x.get('name') for x in el.iter()
                                if x is not el and x.tag.rsplit('}',1)[-1] == 'element' and x.get('name'))),
                              'base':el.get('type')})
            elif kind=='portType':
                service={'name':el.get('name'),'file':source,
                         'operations':[x.get('name') for x in el if x.tag.rsplit('}',1)[-1]=='operation' and x.get('name')]}
                services.append(service)
                operations.extend({'name':op,'service':service['name'],'file':source} for op in service['operations'])
    return {'services':services,'types':types,'operations':operations,'errors':errors,
            'warning':'WSDL/XSD service types are integration structures; not evidence of internal persistence or complete business behavior.'}

def main():
    p=argparse.ArgumentParser()
    p.add_argument('--catalog-xlsx',type=pathlib.Path)
    p.add_argument('--wsdl-dir',type=pathlib.Path)
    p.add_argument('--output',type=pathlib.Path,required=True)
    args=p.parse_args()
    if not args.catalog_xlsx and not args.wsdl_dir: p.error('provide --catalog-xlsx and/or --wsdl-dir')
    data={'source':{'system':'Workday','extractionDate':date.today().isoformat(),'scope':'provided files only'},
          'catalog':catalog(args.catalog_xlsx) if args.catalog_xlsx else None,
          'api':wsdl_files(args.wsdl_dir) if args.wsdl_dir else None,
          'status':'extracted-unreviewed','promotion':'manual-review-only'}
    args.output.parent.mkdir(parents=True,exist_ok=True)
    args.output.write_text(json.dumps(data,indent=2,ensure_ascii=False)+'\n',encoding='utf-8')
    print('Catalog objects:',len(data['catalog']['objects']) if data['catalog'] else 0,
          'WSDL/XSD types:',len(data['api']['types']) if data['api'] else 0,
          'operations:',len(data['api']['operations']) if data['api'] else 0)

if __name__=='__main__': main()
