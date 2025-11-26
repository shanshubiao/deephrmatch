export interface FieldSet {
  field1: string;
  field2: string;
  field3: string;
}

export interface EliminationCriteria {
  age: string;
  ethnicity: string;
  race: string;
  religion?: string; // Legacy/fallback
  nationality: string;
  country_of_birth?: string; // Legacy/fallback
  current_country: string;
  availability: string;
  visa_status: string;
  job_arrangement: string;
  salary_monthly: number;
  "Required Religion"?: string[];
  "Required Country of Birth"?: string[];
}

export interface RequiredMatchingCriteria {
  motivation: FieldSet;
  values: FieldSet;
  hobbies: FieldSet;
  talents: FieldSet;
  education_subject: FieldSet;
  university_major: FieldSet;
  university_ranking: FieldSet;
  role: FieldSet;
  domain: FieldSet;
  function: FieldSet;
  structural_skills: FieldSet;
  system: FieldSet;
  hierarchy: FieldSet;
  minimum_height: string;
  maximum_weight: string;
}

export interface JobDescription {
  id: string;
  job_id: number;
  job_title: string;
  employer_name: string;
  logo_url: string | null;
  salary_monthly: number;
  elimination_criteria: EliminationCriteria;
  required_matching_criteria: RequiredMatchingCriteria;
}
