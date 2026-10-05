export type Provenance = {
    file: string;
    locator: string;
    originalName: string;
    originalType?: string;
    originalId?: string;
    alignedType?: string;
    original?: unknown;
};
export type ReferenceAttribute = {
    name: string;
    type?: string;
    required?: boolean;
    provenance?: Provenance;
    [key: string]: unknown;
};
export type ReferenceRelationship = {
    name: string;
    target: string;
    cardinality?: string;
    kind?: string;
    lifecycle?: string;
    cascade?: unknown;
    provenance?: Provenance;
    [key: string]: unknown;
};
export type ReferenceEntity = {
    id?: string;
    name: string;
    description?: string;
    attributes?: ReferenceAttribute[];
    relationships?: ReferenceRelationship[];
    specializes?: string;
    sourceSpecific?: boolean;
    provenance?: Provenance;
    [key: string]: unknown;
};
export type ReferenceAbe = {
    id?: string;
    name: string;
    description?: string;
    entities: ReferenceEntity[];
    provenance?: Provenance;
    [key: string]: unknown;
};
export type ReferenceDomain = {
    id?: string;
    name: string;
    description?: string;
    abes: ReferenceAbe[];
    provenance?: Provenance;
    [key: string]: unknown;
};
export type ReferenceCapability = {
    id?: string;
    name: string;
    description?: string;
    relatedAbes?: string[];
    provenance?: Provenance;
    [key: string]: unknown;
};
export type ReferenceInterface = {
    id?: string;
    name: string;
    operations?: string[];
    provenance?: Provenance;
    [key: string]: unknown;
};
export type ReferenceModel = {
    source: {
        system: string;
        version?: string;
        file?: string;
        adapter?: string;
        [key: string]: unknown;
    };
    domains: ReferenceDomain[];
    capabilities?: ReferenceCapability[];
    interfaces?: ReferenceInterface[];
    modules?: Array<{
        name: string;
        provenance?: Provenance;
        [key: string]: unknown;
    }>;
    workflows?: Array<{
        name: string;
        provenance?: Provenance;
        [key: string]: unknown;
    }>;
    unmapped?: Array<{
        name: string;
        sourceType: string;
        provenance: Provenance;
    }>;
    warnings?: string[];
    [key: string]: unknown;
};
export type MdeConcept = {
    domain: string;
    abe: string;
    entity: string;
    path?: string;
    aliases?: string[];
    scopedAliases?: Array<{
        term: string;
        source: string;
    }>;
    attributes?: ReferenceAttribute[];
    relationships?: ReferenceRelationship[];
    specializes?: string;
};
export type MdeCatalog = {
    concepts: MdeConcept[];
    domains: string[];
    abes: Array<{
        name: string;
        domain: string;
        path?: string;
    }>;
    capabilities: ReferenceCapability[];
    interfaces: ReferenceInterface[];
    warnings: string[];
};
export type MatchClassification = 'match' | 'specialization' | 'extension' | 'candidate-abe' | 'candidate-entity' | 'source-specific' | 'conflict';
export type AnalysisMatch = {
    source: {
        system: string;
        domain: string;
        abe: string;
        entity: string;
        id?: string;
        provenance?: Provenance;
    };
    candidate?: MdeConcept;
    alternatives?: MdeConcept[];
    classification: MatchClassification;
    confidence: number;
    rationale: string;
    action: 'review';
    attributeGaps?: string[];
    relationshipFindings?: Array<{
        relationship: ReferenceRelationship;
        status: string;
    }>;
};
export type StructuralMatch = {
    source: string;
    domain?: string;
    candidates: string[];
    classification: MatchClassification;
    rationale: string;
    provenance?: Provenance;
    action: 'review';
};
export type AnalysisReport = {
    source: ReferenceModel['source'];
    matches: AnalysisMatch[];
    summary: Record<MatchClassification, number>;
    domainMatches: StructuralMatch[];
    abeMatches: StructuralMatch[];
    capabilityMatches: StructuralMatch[];
    interfaceMatches: StructuralMatch[];
    unmapped: ReferenceModel['unmapped'];
    warnings: string[];
    adoption: 'manual-review-only';
};
export type ImportOptions = {
    system?: string;
    version?: string;
    file: string;
    aliases?: Record<string, Array<{
        alias: string;
        source: string;
    }>>;
};
