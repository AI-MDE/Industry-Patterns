#!/usr/bin/env python3
"""Identify explicitly documented behavior-capable Workday objects in a catalog extraction.
No inference of workflow instances, transition ordering, or business policy.
"""
import argparse,json,re
from pathlib import Path

TERMS=re.compile(r"(business_process|workflow|event|approval|condition|rule|notification|status)",re.I)
def build(catalog):
 objects=catalog.get("objects",[])
 byname={o["name"]:o for o in objects}
 matches=[]
 for o in objects:
  if not TERMS.search(o["name"]):continue
  fields=[{"name":f.get("Field Name"),"dataType":f.get("Data Type"),"description":f.get("Description","")} for f in o.get("fields",[])]
  relationships=[{"field":r.get("Source Field"),"target":r.get("Target Object"),"multiplicity":r.get("Relationship Type"),
    "description":r.get("Source Field Description"),"targetInCatalog":r.get("Target Object") in byname} for r in o.get("relationships",[])]
  matches.append({"object":o["name"],"description":o.get("description"),"fields":fields,"relationships":relationships,
    "evidence":"user-supplied-data-cloud-catalog","classification":"schema-metadata-only"})
 return {"source":catalog.get("source"),"reviewStatus":"unreviewed","objects":matches,
    "counts":{"candidateObjects":len(matches),"candidateFields":sum(len(o["fields"]) for o in matches),
      "candidateRelationships":sum(len(o["relationships"]) for o in matches)},
    "limits":"Definitions and associations only; no configured step sequences, process instances, rule predicates or execution semantics."}
def main():
 p=argparse.ArgumentParser();p.add_argument("--catalog-json",required=True);p.add_argument("--output",required=True);a=p.parse_args()
 d=build(json.loads(Path(a.catalog_json).read_text(encoding="utf8")));out=Path(a.output);out.parent.mkdir(parents=True,exist_ok=True);out.write_text(json.dumps(d,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
 print(json.dumps(d["counts"],indent=2))
if __name__=="__main__":main()
