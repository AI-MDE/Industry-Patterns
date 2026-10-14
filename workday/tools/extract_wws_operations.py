#!/usr/bin/env python3
"""Download public Workday WWS v47 operation indexes and preserve exact source evidence.

Run only against publicly accessible documentation; never use tenant credentials.
This extracts API operation descriptions, not complete internal workflows.
"""
import argparse
from html.parser import HTMLParser
import json
from pathlib import Path
import re
import time
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError

BASE = "https://community.workday.com/sites/default/files/file-hosting/productionapi"
class Links(HTMLParser):
    def __init__(self):
        super().__init__()
        self.anchor = None
        self.links = []
        self.in_row = False
        self.row = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "tr":
            self.in_row = True
            self.row = []
        if tag == "a":
            self.anchor = {"href": a.get("href", ""), "text": ""}
    def handle_data(self, data):
        if self.anchor is not None:
            self.anchor["text"] += data
        if self.in_row:
            self.row.append(data)
    def handle_endtag(self, tag):
        if tag == "a" and self.anchor is not None:
            self.links.append({**self.anchor, "description": " ".join(" ".join(self.row).split())})
            self.anchor = None
        if tag == "tr":
            self.in_row = False
def get(url):
    req = Request(url, headers={"User-Agent":"MDE-Public-Reference-Extractor/1.0"})
    with urlopen(req, timeout=25) as stream:
        return stream.read().decode("utf-8", errors="replace")
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--service-inventory", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--max-services", type=int, default=0, help="0 means all")
    ap.add_argument("--delay", type=float, default=0.5)
    args = ap.parse_args()
    inventory = json.loads(Path(args.service_inventory).read_text(encoding="utf-8"))
    services = inventory["services"]
    if args.max_services:
        services = services[:args.max_services]
    output = {"source": {"system":"Workday","version":"v47.0","directory":BASE+"/index.html"},
              "coverage":"published API operation descriptions only; internal business processes are not exposed",
              "services":[], "fetchErrors":[], "reviewStatus":"unreviewed"}
    for service in services:
        name = service["id"]
        url = f"{BASE}/{name}/v47.0/{name}.html"
        try:
            parser = Links()
            parser.feed(get(url))
            seen = set()
            ops = []
            for entry in parser.links:
                href = entry["href"]
                operation = entry["text"].strip()
                if not re.fullmatch(r"[A-Za-z][A-Za-z0-9_]+",operation):
                    continue
                if not href.endswith(".html") or operation in seen or operation in (name,):
                    continue
                if "/" in href and not href.startswith("./"):
                    continue
                seen.add(operation)
                ops.append({"name":operation,"description":entry["description"],
                    "sourceUrl":url.rsplit("/",1)[0]+"/"+href.lstrip("./"),
                    "evidenceType":"operation-directory-description"})
            output["services"].append({"name":name,"sourceUrl":url,"operations":ops})
            print(f"{name}: {len(ops)} operations")
        except (HTTPError, URLError, OSError, UnicodeError) as ex:
            output["fetchErrors"].append({"service":name,"url":url,"error":str(ex)})
            print(f"{name}: ERROR {ex}")
        time.sleep(max(0,args.delay))
    p = Path(args.out)
    p.parent.mkdir(parents=True,exist_ok=True)
    p.write_text(json.dumps(output, indent=2, ensure_ascii=False)+"\n",encoding="utf-8")
    print(f"Extracted {sum(len(x['operations']) for x in output['services'])} operation descriptions; errors={len(output['fetchErrors'])}")
if __name__ == "__main__":
    main()
