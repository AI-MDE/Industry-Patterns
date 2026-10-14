# Workday reference model (separate, independent)

**Scope:** Workday as its **own source model**, in this repository under `workday/`, not under `model/`. This is *not* an MDE canonical merge. Workday is a proprietary commercial system: publicly accessible material is **not a complete export of its internal model or configured behavior**.

## Current content (2026-10-14)

- [Public WWS 47.0 / 2026R2 service directory](sources/wws-v47-services.json) — inventory of **55 named services** from Workday's published production directory, including Human Resources, Staffing, Payroll, Financial Management, Recruiting, Learning, Professional Services Automation, Student, and others. Names reflect the directory, **not** downloaded schemas.
- [Extractor](tools/extract.py) — standalone Python standard-library reader for **a supplied Data Cloud XLSX** and a directory of **supplied WSDL/XSD** files. Saves object, field, relationship, security-domain, service, API operation, and type candidate inventories as JSON. Produces unparsed/error inventories; never silently promotes into the MDE canonical model.
- Prior hand-curated example records remain in [references/workday](../references/workday/README.md); they are not complete source captures or the canonical model.

## Official sources

- [Workday Data Cloud Catalog](https://doc.workday.com/admin-guide/en-us/workday-data-cloud/data-out/data-cloud-catalog.html), offering `Workday_Data_Cloud_Catalog_09162026.xlsx`. Workday expressly calls this **a curated subset** of its objects and fields.
- [Workday Public SOAP/WWS 47.0 directory](https://community.workday.com/sites/default/files/file-hosting/productionapi/index.html), with operations, WSDLs and XSDs.
- [Workday SOAP API Reference](https://community-content.workday.com/en-us/public/products/platform-and-product-extensions/soap-api-reference.html).
- For full configured workflows, tenant-based Workday Business Process Framework definitions, roles and rules would require **authorized tenant exports**. Public API operations and data definitions cannot prove the actual end-to-end process steps.

## Building a local source model

Download source files using their official Workday links under the permissions and terms applicable to you. Do not commit restricted, tenant-specific or confidential exports.

```sh
# From repository root; Python 3.10+ (no dependencies)
python workday/tools/extract.py \
  --catalog-xlsx /path/to/Workday_Data_Cloud_Catalog_09162026.xlsx \
  --wsdl-dir /path/to/workday-wsdl-and-xsd \
  --output workday/output/extracted.json
```

Both inputs are optional individually; specify at least one. To obtain WSDLs/XSDs, use the links in the official public WWS directory and preserve version and source URL for each downloaded artifact. The extractor processes input files already downloaded by the operator; it does **not** crawl Workday, sign into a tenant, or circumvent access controls.

## Organization

```text
workday/
  README.md
  sources/
    wws-v47-services.json      directory inventory
  tools/
    extract.py                 spreadsheet + XML schema intake
  output/                      generated locally; never treated as canonical
```

## What is not yet done

The supplied catalog/XSD *bytes* were not accessible in this execution environment, so this repository **does not yet contain full extracted columns, data types, WSDL definitions, operation signatures, or source-specific business process definitions**. The extractor has not been executed against real Workday source files here; XLSX layout handling must be tested against the actual catalog and adjusted where necessary.

Even after both public sources are extracted, describe the result accurately as a **Workday public interface and Data Cloud reference model**, not the complete proprietary internal Workday model. Do not infer approval conditions, employee policies, compensation algorithms or internal entity behavior from WSDL type names.

The `model/` unified MDE model remains untouched by this Workday folder. Any future merge should be separately proposed, mapped and reviewed.
