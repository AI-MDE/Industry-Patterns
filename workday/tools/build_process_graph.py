#!/usr/bin/env python3
"""Create a source-traceable Workday process metamodel graph from extracted catalog JSON.
Input: JSON created by extract_catalog.py (not the simpler extract.py output).
Only schema declarations are evidence. No tenant process flows are inferred.
"""
import argparse,json
from pathlib import Path

def build(src):
 objects={x["name"]:x for x in src["objects"]}
 roots=("business_process_definition","business_process_type","workflow_step","workflow_notification","workflow_step_type")
 selected={n for n in roots if n in objects}
 for n in list(selected):
  selected.update(r["Target Object"] for r in objects[n]["relationships"] if r["Target Object"] in objects)
 nodes=[];edges=[]
 for n in sorted(selected):
  obj=objects[n]
  nodes.append({"id":n,"label":obj.get("description") or n,
   "fields":[{"name":f["Field Name"],"type":f["Data Type"],"description":f.get("Description",""),"nullable":f.get("Nullable")} for f in obj["fields"]],
   "provenance":{"source":"Workday Data Cloud Catalog 2026-09-16","kind":"catalog-schema"}})
  for r in obj["relationships"]:
   edges.append({"from":n,"field":r["Source Field"],"to":r["Target Object"],
    "cardinality":"many" if "[]" in r["Relationship Type"] else "one",
    "description":r.get("Source Field Description",""),
    "targetPublished":r["Target Object"] in objects,"evidence":"explicit-catalog-relationship"})
 return {"title":"Workday business-process schema graph","evidence":"published-Data-Cloud-catalog-schema-only",
  "nodes":nodes,"edges":edges,"limitations":["No tenant business-process definition rows or workflow instances",
  "No transition conditions or approval routing expressions",
  "No operation-to-process equivalence has been verified"],
  "stats":{"nodes":len(nodes),"edges":len(edges),"danglingEdges":sum(not e["targetPublished"] for e in edges)}}
if __name__=="__main__":
 p=argparse.ArgumentParser();p.add_argument("--catalog-json",required=True);p.add_argument("--output",required=True);a=p.parse_args()
 g=build(json.loads(Path(a.catalog_json).read_text(encoding="utf8")))
 o=Path(a.output);o.parent.mkdir(parents=True,exist_ok=True);o.write_text(json.dumps(g,indent=2,ensure_ascii=False)+"\n",encoding="utf8")
 print(g["stats"])
