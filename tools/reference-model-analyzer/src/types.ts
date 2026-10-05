export type ReferenceAttribute = {
  name: string;
  type?: string;
  required?: boolean;
};

export type ReferenceRelationship = {
  name: string;
  target: string;
  cardinality?: string;
};

export type ReferenceEntity = {
  id?: string;
  name: string;
  description?: string;
  attributes?: ReferenceAttribute[];
  relationships?: ReferenceRelationship[];
};

export type ReferenceAbe = {
  id?: string;
  name: string;
  description?: string;
  entities: ReferenceEntity[];
};

export type ReferenceDomain = {
  id?: string;
  name: string;
  description?: string;
  abes: ReferenceAbe[];
};

export type ReferenceCapability = {
  id?: string;
  name: string;
  description?: string;
  relatedAbes?: string[];
};

export type ReferenceInterface = {
  id?: string;
  name: string;
  operations?: string[];
};

export type ReferenceModel = {
  source: {
    system: string;
    version?: string;
  };
  domains: ReferenceDomain[];
  capabilities?: ReferenceCapability[];
  interfaces?: ReferenceInterface[];
};

export type MdeConcept = {
  domain: string;
  abe: string;
  entity: string;
  aliases?: string[];
};

export type MatchClassification =
  | "match"
  | "specialization"
  | "extension"
  | "candidate-abe"
  | "candidate-entity"
  | "source-specific"
  | "conflict";

export type AnalysisMatch = {
  source: {
    system: string;
    domain: string;
    abe: string;
    entity: string;
  };
  candidate?: MdeConcept;
  classification: MatchClassification;
  confidence: number;
  rationale: string;
  action: "accept" | "review" | "ignore";
};

export type AnalysisReport = {
  source: ReferenceModel["source"];
  matches: AnalysisMatch[];
  summary: Record<MatchClassification, number>;
};
