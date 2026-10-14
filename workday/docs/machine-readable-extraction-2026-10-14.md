# Workday machine-readable extraction — 2026-10-14

## Verified sources

- Public WWS 47.0 / 2026R2 service directory: https://community.workday.com/sites/default/files/file-hosting/productionapi/index.html
- Official service pages include operation names and descriptions; these **are not** full internal process specifications.
- WSDL/XSD document interfaces, request/response structures and schema constraints, not tenant-specific approvals or all internal validations.

## Completed locally from the supplied Data Cloud Catalog

The user-supplied `Workday_Data_Cloud_Catalog_09162026.xlsx` was read and its actual worksheets processed (not estimated):
- 287 catalog business objects
- 2,436 field entries
- 1,932 relationship entries
- 1,034 joiner-table entries
- 397 domain/function-scope mappings
- 116 distinct relationship target names not present among catalog objects; preserve as unresolved external references.
The 2.2 MB generated JSON and the original workbook are **not committed to GitHub** because they are local inputs/outputs. This is not a claim that Workday's complete internal model was extracted.

## New operation importer

Run from the root:

```sh
python workday/tools/extract_wws_operations.py \
  --service-inventory workday/sources/wws-v47-services.json \
  --out workday/output/wws-v47-operations.json
```

It will enumerate all listed services, fetch their public HTML operation directories, record operation names, descriptions and exact URLs, and retain fetch failures for review. Optional `--max-services 2` gives a small test. Requires internet access to Workday's public site.

For downloaded WSDL/XSD and the catalog, use existing `workday/tools/extract.py`. **No operation directory crawler substitutes for WSDL/XSD ingestion**.

## Verified vs pending

- **Verified**: Workday official v47 public directory and Staffing operation listings including Hire_Employee and configurable eligibility rule API names.
- **Completed**: Full spreadsheet table extraction, made available separately as a local JSON deliverable.
- **Committed**: Public operation directory importer; not executed online from this environment because public Workday file downloads from the runtime were unavailable.
- **Pending**: Download WSDL/XSD payloads; extract signatures and schema facets; validate operation crawler with live access; extract detailed operation documentation safely; align with catalog and canonical model only after review.
- **Not publicly established**: Complete Workday implementation workflows, internal business policies and tenant-specific rules.

## Evidence classification

Keep `explicit-schema`, `operation-directory-description`, `documented-rule`, `inferred`, and `tenant-configuration` separate. Never represent inferred process steps as Workday-verified standard behavior.
