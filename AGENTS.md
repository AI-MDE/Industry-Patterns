# AI Agent Instructions

This repository is the MDE Industry Patterns catalog: a canonical model of **common business models**, organized by subject, and the industry and modeling patterns that select from it. Read this before using or changing anything here. The [README](README.md) explains the repository; the [model README](model/README.md) explains the model.

There are two ways to work here. Know which one you are doing.

## Using the catalog (for an application)

You are eliciting the requirements of an application, usually as an MDE agent following its industry-patterns Feature. You read here; you never write here.

1. **Find the pattern.** Read [catalog.md](catalog.md), then the industry pattern (or patterns) closest to the business. A crane-rental business starts from crane rental; a field-service business from equipment service. Choose the variant the Goal needs: **Simple** for a focused application or a prototype, **Standard**, or **Enterprise**.
2. **Take common concepts from the subjects.** The pattern links each concept it uses to its canonical page in [model/subjects/](model/subjects/index.md). Take its definition and attributes as the starting point, in the business's own words. A page's *Also known as* and *In industries* sections show how other industries name and refine it: use them to recognize the concept, not to copy every attribute.
3. **Take only what the business needs.** Nothing comes in because the pattern has it. Include the specialization ancestors you need to understand a concept; inheritance does not mean a table per ancestor.
4. **Add what the model does not carry.** Each pattern's *Concepts applications typically add* names what that kind of business usually needs on top (a lift plan, a home exercise program). Define these in the application's own Specs, specializing the canonical concept named.
5. **Ask the pattern's questions.** Its modeling questions find the policy the business has not stated: ask them, with the pattern's default. Check the model against its pitfalls.
6. **Record what you took.** In the application's Domain, under *Industry patterns*: each pattern and variant used, what was taken, what was left out.

Relationships marked `review` in the model are open semantic questions: decide them for the application; do not assume them.

## Changing the catalog

You are maintaining the model or a pattern in this repository.

### The principles

- **Common models only.** The model carries what recurs across businesses. A concept only one kind of business needs belongs to the application, not here: name it in its industry pattern's *Concepts applications typically add* instead.
- **Find the common shape before specializing.** Before adding a concept, search the subjects for the same thing under another name (a claim, a case, a ticket; a quote, an estimate). If it exists, the new name is an alias and the industry's refinement goes in *In industries* on that page.
- **Organize by subject, never by industry.** A subject is an area of business knowledge with one responsibility. Industries are patterns, in `industry-patterns/`; there is no industry folder in `model/`. A subject one industry owns (Health Care, Insurance Coverage and Claims, Financial Accounts, Service Provisioning and Networks, Production, Travel) is still defined by its responsibility.
- **One home per concept.** Every concept has exactly one page, in one ABE, in one subject.
- **Business meaning only.** No architecture, implementation, UI, or technology in the model. Lifecycles are business guidance, not state machines.

### Deciding where a concept goes

| The concept is | Then |
|---|---|
| The same as an existing concept, under another name | Not a new page: add the name to that page's *Also known as*, its definition and attributes under *In industries*, and an alias in [terminology-aliases.json](model/terminology-aliases.json) with its pattern binding. |
| A variation many applications of an industry need, adding reusable knowledge (a rule, a lifecycle, a required relationship) | A new page, specializing the common concept (`Specializes:` line, `specializes` in the manifest), in the same subject. |
| Common, and in no subject yet | A new page in the subject whose responsibility it is; in the ABE of the concept it most belongs with, or a new ABE named after it. |
| Needed by one kind of business only, or nothing an application could not define | Not in the model: a line in its pattern's *Concepts applications typically add*. |
| About a migration or conversion project rather than the business | The [Data Migration](modeling-patterns/data-migration.md) modeling pattern. |

When the right subject is unclear, or a merge would change a definition other industries rely on, ask the user before changing it.

### The shape of the files

- `model/subjects/<subject>/README.md`: the subject, its responsibility, its ABEs.
- `model/subjects/<subject>/<abe>/README.md`: `type: abe`; the ABE, named after its primary entity, and its entities.
- `model/subjects/<subject>/<abe>/<entity>.md`: `type: entity`, `title`; then `Subject: … ABE: …`, optional `Specializes:` and `Also known as:` lines, and the sections *Definition and detail* (with `Logical attributes: …; …` and *In industries*), *Source terminology*, *Relationships*, and, where they apply, *Integrity rules*, *Operations*, *Lifecycle*.
- Subject-owned requirements (capabilities, roles, rules, use cases, workflows) sit beside the ABE folders, registered in [requirements.json](model/requirements.json).
- An industry's roles, lifecycles, events, and rules overview: `industry-patterns/behavior/<industry>.md`.

### Keeping it valid

- [model.json](model/model.json) is the manifest, maintained with the files: every subject, ABE, concept (path, name, subject, ABE, `specializes`), pattern binding, and relationship is listed there. Change both together.
- Links are relative Markdown links. When you move or rename a page, redirect every link to it.
- Before you finish, run, from the repository root:

  ```bash
  node tools/coherent-model/validate.mjs
  node --test tools/coherent-model/*.test.mjs
  ```

  Both must pass. Do not edit the validator to make a change pass.
- `references/` holds upstream source snapshots (BIAN), with their license: inputs for analysis, never edited, never part of the model.
- [docs/subject-reclassification.md](docs/subject-reclassification.md) records the move from domains to subjects; it is history, not a place to classify new concepts.
