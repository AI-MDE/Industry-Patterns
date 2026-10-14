#!/usr/bin/env python3
"""Extract evidence from lawfully obtained, locally saved Workday HTML and WSDL/XSD.
API documentation does not establish tenant workflows. Python standard library only.
"""
import argparse,json,re,xml.etree.ElementTree as ET
from pathlib import Path
from html.parser import HTMLParser
from collections import defaultdict
class Sections(HTMLParser):
 def __init__(self):
  super().__init__(convert_charrefs=True);self.heading="document";self.heading_open=False;self.buf=[];self.sections=defaultdict(list)
 def handle_starttag(self,tag,attrs):
  if re.fullmatch("h[1-6]",tag):self.flush();self.heading_open=True
  if tag=="br":self.buf.append(" ")
 def handle_data(self,data):self.buf.append(data)
 def handle_endtag(self,tag):
  if re.fullmatch("h[1-6]",tag):
   self.heading=" ".join(" ".join(self.buf).split()) or self.heading;self.buf=[];self.heading_open=False
  elif tag in ("p","li","div","tr") and not self.heading_open:self.flush()
 def flush(self):
  value=" ".join(" ".join(self.buf).split());self.buf=[]
  if value and value not in self.sections[self.heading]:self.sections[self.heading].append(value)
def html(path,root):
 p=Sections();p.feed(path.read_text(encoding="utf8",errors="replace"));p.flush()
 sections=dict(p.sections);pattern=re.compile("validat|condition|constraint|error|exception|prerequi|subprocess|approval|step|response|request|business process",re.I)
 candidates=[{"section":section,"text":text[:2000],"evidenceType":"published-description","sourceFile":str(path.relative_to(root))} for section,paragraphs in sections.items() if pattern.search(section) for text in paragraphs]
 return {"operation":path.stem,"sourceFile":str(path.relative_to(root)),"sections":sections,"behaviourCandidates":candidates,"classification":"published-api-description-not-internal-workflow"}
def xml(path,root):
 doc=ET.parse(path).getroot();w="{http://schemas.xmlsoap.org/wsdl/}";x="{http://www.w3.org/2001/XMLSchema}"
 ops=[]
 for e in doc.iter(w+"operation"):
  if not e.get("name"):continue
  op={"name":e.get("name"),"messages":[],"faults":[]}
  for c in e:
   kind=c.tag.rsplit("}",1)[-1]
   if kind in ("input","output"):op["messages"].append({"direction":kind,"name":c.get("name"),"message":c.get("message")})
   if kind=="fault":op["faults"].append({"name":c.get("name"),"message":c.get("message")})
  ops.append(op)
 keys=("name","type","minOccurs","maxOccurs","default","fixed","nillable")
 elements=[{k:e.get(k) for k in keys if e.get(k) is not None} for e in doc.iter(x+"element") if e.get("name")]
 restrictions=("enumeration","pattern","minInclusive","maxInclusive","minLength","maxLength","length")
 types=[{"name":t.get("name"),"restrictions":[{"kind":e.tag.rsplit("}",1)[-1],"value":e.get("value")} for e in t.iter() if e.tag.rsplit("}",1)[-1] in restrictions]} for t in doc.iter(x+"simpleType") if t.get("name")]
 return {"file":str(path.relative_to(root)),"operations":ops,"elements":elements,"types":types}
def main():
 ap=argparse.ArgumentParser();ap.add_argument("--docs-dir",type=Path,required=True);ap.add_argument("--output",type=Path,required=True);a=ap.parse_args()
 if not a.docs_dir.is_dir():ap.error("docs-dir must exist")
 out={"source":"supplied Workday documentation","reviewStatus":"unreviewed","claimLimit":"API contracts and documented descriptions only; not complete tenant workflows","htmlOperations":[],"xmlContracts":[],"errors":[]}
 for p in sorted(a.docs_dir.rglob("*")):
  if not p.is_file():continue
  try:
   if p.suffix.lower() in (".html",".htm"):out["htmlOperations"].append(html(p,a.docs_dir))
   elif p.suffix.lower() in (".wsdl",".xsd"):out["xmlContracts"].append(xml(p,a.docs_dir))
  except (OSError,UnicodeError,ET.ParseError,ValueError) as ex:out["errors"].append({"file":str(p.relative_to(a.docs_dir)),"error":str(ex)})
 a.output.parent.mkdir(parents=True,exist_ok=True);a.output.write_text(json.dumps(out,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
 print("HTML:",len(out["htmlOperations"]),"XML:",len(out["xmlContracts"]),"errors:",len(out["errors"]))
if __name__=="__main__":main()
