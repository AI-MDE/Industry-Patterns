import { readFile } from "node:fs/promises";
import { analyze } from "./analyzer.js";
import { MdeConcept, ReferenceModel } from "./types.js";

async function readJson<T>(path: string): Promise<T> {
  return JSON.parse(await readFile(path, "utf8")) as T;
}

async function main() {
  const [, , referencePath, conceptsPath] = process.argv;

  if (!referencePath || !conceptsPath) {
    console.error(
      "Usage: npm run analyze -- <reference-model.json> <mde-concepts.json>"
    );
    process.exitCode = 1;
    return;
  }

  const reference = await readJson<ReferenceModel>(referencePath);
  const concepts = await readJson<MdeConcept[]>(conceptsPath);
  const report = analyze(reference, concepts);

  process.stdout.write(JSON.stringify(report, null, 2) + "\n");
}

main().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
