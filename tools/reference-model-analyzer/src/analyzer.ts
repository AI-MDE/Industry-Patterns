import {
  AnalysisMatch,
  AnalysisReport,
  MatchClassification,
  MdeConcept,
  ReferenceEntity,
  ReferenceModel
} from "./types.js";

function normalize(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function tokens(value: string): Set<string> {
  return new Set(normalize(value).split(/\s+/).filter(Boolean));
}

function similarity(a: string, b: string): number {
  const aa = tokens(a);
  const bb = tokens(b);
  if (!aa.size || !bb.size) return 0;

  let intersection = 0;
  for (const token of aa) {
    if (bb.has(token)) intersection++;
  }

  const union = new Set([...aa, ...bb]).size;
  return intersection / union;
}

function bestCandidate(entity: ReferenceEntity, concepts: MdeConcept[]) {
  let best: { concept: MdeConcept; score: number } | undefined;

  for (const concept of concepts) {
    const names = [concept.entity, ...(concept.aliases ?? [])];
    const score = Math.max(...names.map(name => similarity(entity.name, name)));
    if (!best || score > best.score) best = { concept, score };
  }

  return best;
}

function classify(score: number): MatchClassification {
  if (score >= 0.95) return "match";
  if (score >= 0.55) return "extension";
  return "candidate-entity";
}

export function analyze(
  reference: ReferenceModel,
  concepts: MdeConcept[]
): AnalysisReport {
  const matches: AnalysisMatch[] = [];

  for (const domain of reference.domains) {
    for (const abe of domain.abes) {
      for (const entity of abe.entities) {
        const best = bestCandidate(entity, concepts);
        const score = best?.score ?? 0;
        const classification = classify(score);

        matches.push({
          source: {
            system: reference.source.system,
            domain: domain.name,
            abe: abe.name,
            entity: entity.name
          },
          candidate: best && score >= 0.2 ? best.concept : undefined,
          classification,
          confidence: Number(score.toFixed(2)),
          rationale:
            classification === "match"
              ? "Strong name/alias match to an existing MDE concept."
              : classification === "extension"
                ? "Related to an existing MDE concept; review for specialization or added ABE detail."
                : "No strong existing concept match; review for reusable cross-industry value.",
          action: classification === "match" ? "accept" : "review"
        });
      }
    }
  }

  const categories: MatchClassification[] = [
    "match",
    "specialization",
    "extension",
    "candidate-abe",
    "candidate-entity",
    "source-specific",
    "conflict"
  ];

  const summary = Object.fromEntries(
    categories.map(category => [
      category,
      matches.filter(match => match.classification === category).length
    ])
  ) as Record<MatchClassification, number>;

  return { source: reference.source, matches, summary };
}
