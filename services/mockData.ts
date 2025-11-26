import { JobDescription } from '../types';
import { supabase, isSupabaseConfigured } from './supabaseClient';

export const MOCK_JOBS: JobDescription[] = [
  {
    id: "a1b2c3d4-e5f6-4a5b-8c9d-0e1f2a3b4c5d",
    job_id: 1,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Shopee.svg/1200px-Shopee.svg.png",
    job_title: "Software Engineer",
    employer_name: "Shopee Singapore",
    salary_monthly: 6000,
    elimination_criteria: {
      age: "20-29",
      race: "Chinese",
      religion: "",
      ethnicity: "Han Chinese",
      nationality: "Singaporean",
      visa_status: "Singapore citizen",
      availability: "Immediate",
      salary_monthly: 6000,
      current_country: "Singapore",
      job_arrangement: "Full time",
      country_of_birth: "",
      "Required Religion": ["Christian"],
      "Required Country of Birth": ["Singapore"]
    },
    required_matching_criteria: {
      role: {field1: "executor", field2: "planner", field3: ""},
      domain: {field1: "COMMUNITIES - PROFESSIONAL SERVICES - SAFETY", field2: "GOVERNMENTS & KINGDOMS - LAW AND ORDER - LEGISLATIVE BODIES", field3: "LIFE & LIVING - SPORTS & RECREATION - COMPETITIVE & EXTREME SPORTS"},
      system: {field1: "Agile", field2: "Scrum", field3: "Git"},
      values: {field1: "Accuracy", field2: "Collaboration", field3: "Efficiency"},
      hobbies: {field1: "AI Research", field2: "Brand Building", field3: "Business Development"},
      talents: {field1: "Analytical Skills", field2: "Architecture Design", field3: "Attention to Detail"},
      function: {field1: "Accounting & Finance / IT & Corporate Reporting", field2: "", field3: ""},
      hierarchy: {field1: "Associate", field2: "Senior Associate", field3: ""},
      motivation: {field1: "Country", field2: "Family", field3: "Self"},
      maximum_weight: "80kg",
      minimum_height: "170cm",
      university_major: {field1: "Business Administration", field2: "Business Marketing", field3: "Finance"},
      education_subject: {field1: "Accounting", field2: "Business", field3: "Business Administration"},
      structural_skills: {field1: "Programming", field2: "Software Development", field3: "Problem Solving"},
      university_ranking: {field1: "Top 100", field2: "", field3: ""}
    }
  },
  {
    id: "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
    job_id: 2,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/DBS_Bank_logo.svg/1200px-DBS_Bank_logo.svg.png",
    job_title: "Finance Manager",
    employer_name: "DBS Bank",
    salary_monthly: 9500,
    elimination_criteria: {
      age: "30-39",
      race: "Chinese",
      religion: "",
      ethnicity: "Hokkien",
      nationality: "Singaporean",
      visa_status: "Singapore citizen",
      availability: "1 month notice",
      salary_monthly: 9500,
      current_country: "Singapore",
      job_arrangement: "Full time",
      country_of_birth: "",
      "Required Religion": ["Buddhist"],
      "Required Country of Birth": ["Malaysia"]
    },
    required_matching_criteria: {
      role: {field1: "leader", field2: "planner", field3: ""},
      domain: {field1: "COMMUNITIES - PROFESSIONAL SERVICES - SAFETY", field2: "GOVERNMENTS & KINGDOMS - LAW AND ORDER - LEGISLATIVE BODIES", field3: "LIFE & LIVING - SPORTS & RECREATION - COMPETITIVE & EXTREME SPORTS"},
      system: {field1: "SAP", field2: "Oracle", field3: "QuickBooks"},
      values: {field1: "Accuracy", field2: "Collaboration", field3: "Efficiency"},
      hobbies: {field1: "AI Research", field2: "Brand Building", field3: "Business Development"},
      talents: {field1: "Analytical Skills", field2: "Architecture Design", field3: "Attention to Detail"},
      function: {field1: "Accounting & Finance / IT & Corporate Reporting", field2: "", field3: ""},
      hierarchy: {field1: "Manager", field2: "Senior Manager", field3: ""},
      motivation: {field1: "Country", field2: "Family", field3: "Self"},
      maximum_weight: "75kg",
      minimum_height: "165cm",
      university_major: {field1: "Business Administration", field2: "Business Marketing", field3: "Finance"},
      education_subject: {field1: "Accounting", field2: "Business", field3: "Business Administration"},
      structural_skills: {field1: "Financial Analysis", field2: "Budget Management", field3: "Data Analysis"},
      university_ranking: {field1: "Top 100", field2: "", field3: ""}
    }
  },
  {
    id: "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
    job_id: 3,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Sony_logo.svg/1200px-Sony_logo.svg.png",
    job_title: "Regional Marketing Director",
    employer_name: "Sony Singapore",
    salary_monthly: 16000,
    elimination_criteria: {
      age: "30-39",
      race: "Asian (Japanese)",
      religion: "",
      ethnicity: "Japanese",
      nationality: "Japanese",
      visa_status: "Employment Pass Holder",
      availability: "2 months notice",
      salary_monthly: 16000,
      current_country: "Singapore",
      job_arrangement: "Full time",
      country_of_birth: "",
      "Required Religion": ["Christian"],
      "Required Country of Birth": ["Indonesia"]
    },
    required_matching_criteria: {
      role: {field1: "leader", field2: "negotiator", field3: "risk taker"},
      domain: {field1: "COMMUNITIES - PROFESSIONAL SERVICES - SAFETY", field2: "GOVERNMENTS & KINGDOMS - LAW AND ORDER - LEGISLATIVE BODIES", field3: "LIFE & LIVING - SPORTS & RECREATION - COMPETITIVE & EXTREME SPORTS"},
      system: {field1: "Salesforce", field2: "HubSpot", field3: "CRM"},
      values: {field1: "Accuracy", field2: "Collaboration", field3: "Efficiency"},
      hobbies: {field1: "AI Research", field2: "Brand Building", field3: "Business Development"},
      talents: {field1: "Analytical Skills", field2: "Architecture Design", field3: "Attention to Detail"},
      function: {field1: "Sales & Marketing / Customer Relationship Management (CRM)", field2: "", field3: ""},
      hierarchy: {field1: "Director", field2: "", field3: ""},
      motivation: {field1: "Country", field2: "Family", field3: "Self"},
      maximum_weight: "85kg",
      minimum_height: "175cm",
      university_major: {field1: "Business Administration", field2: "Business Marketing", field3: "Finance"},
      education_subject: {field1: "Accounting", field2: "Business", field3: "Business Administration"},
      structural_skills: {field1: "Brand Strategy", field2: "Market Analysis", field3: "Communication"},
      university_ranking: {field1: "Top 100", field2: "", field3: ""}
    }
  },
  {
    id: "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
    job_id: 4,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Grab_logo.svg/1200px-Grab_logo.svg.png",
    job_title: "Administrative Assistant",
    employer_name: "Grab",
    salary_monthly: 3200,
    elimination_criteria: {
      age: "20-29",
      race: "Chinese",
      religion: "",
      ethnicity: "Han Chinese",
      nationality: "Singaporean",
      visa_status: "Singapore citizen",
      availability: "Immediate",
      salary_monthly: 3200,
      current_country: "Singapore",
      job_arrangement: "Contract",
      country_of_birth: "",
      "Required Religion": ["Buddhist"],
      "Required Country of Birth": ["Singapore"]
    },
    required_matching_criteria: {
      role: {field1: "executor", field2: "", field3: ""},
      domain: {field1: "COMMUNITIES - PROFESSIONAL SERVICES - SAFETY", field2: "GOVERNMENTS & KINGDOMS - LAW AND ORDER - LEGISLATIVE BODIES", field3: "LIFE & LIVING - SPORTS & RECREATION - COMPETITIVE & EXTREME SPORTS"},
      system: {field1: "MS Office", field2: "Google Workspace", field3: ""},
      values: {field1: "Accuracy", field2: "Collaboration", field3: "Efficiency"},
      hobbies: {field1: "AI Research", field2: "Brand Building", field3: "Business Development"},
      talents: {field1: "Analytical Skills", field2: "Architecture Design", field3: "Attention to Detail"},
      function: {field1: "Human Resource (HR) Organisation & Administration", field2: "", field3: ""},
      hierarchy: {field1: "Associate", field2: "Trainee", field3: ""},
      motivation: {field1: "Country", field2: "Family", field3: "Self"},
      maximum_weight: "70kg",
      minimum_height: "160cm",
      university_major: {field1: "Business Administration", field2: "Business Marketing", field3: "Finance"},
      education_subject: {field1: "Accounting", field2: "Business", field3: "Business Administration"},
      structural_skills: {field1: "Office Management", field2: "Documentation", field3: "Communication"},
      university_ranking: {field1: "Top 100", field2: "", field3: ""}
    }
  },
  {
    id: "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
    job_id: 5,
    logo_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Citigroup_Logo.svg/1200px-Citigroup_Logo.svg.png",
    job_title: "Chief Operations Officer (COO)",
    employer_name: "Citibank",
    salary_monthly: 22000,
    elimination_criteria: {
      age: "40-49",
      race: "Caucasian",
      religion: "",
      ethnicity: "British",
      nationality: "United Kingdom",
      visa_status: "Employment Pass Holder",
      availability: "2 months notice",
      salary_monthly: 22000,
      current_country: "Singapore",
      job_arrangement: "Full time",
      country_of_birth: "",
      "Required Religion": [],
      "Required Country of Birth": []
    },
    required_matching_criteria: {
      role: {field1: "leader", field2: "risk taker", field3: "negotiator"},
      domain: {field1: "COMMUNITIES - PROFESSIONAL SERVICES - SAFETY", field2: "GOVERNMENTS & KINGDOMS - LAW AND ORDER - LEGISLATIVE BODIES", field3: "LIFE & LIVING - SPORTS & RECREATION - COMPETITIVE & EXTREME SPORTS"},
      system: {field1: "ERP", field2: "Lean Six Sigma", field3: "SAP"},
      values: {field1: "Accuracy", field2: "Collaboration", field3: "Efficiency"},
      hobbies: {field1: "AI Research", field2: "Brand Building", field3: "Business Development"},
      talents: {field1: "Analytical Skills", field2: "Architecture Design", field3: "Attention to Detail"},
      function: {field1: "Operations & Logistics / Facilities Management", field2: "", field3: ""},
      hierarchy: {field1: "Chief Executive Officer (CEO)", field2: "Director", field3: ""},
      motivation: {field1: "Country", field2: "Family", field3: "Self"},
      maximum_weight: "90kg",
      minimum_height: "180cm",
      university_major: {field1: "Business Administration", field2: "Business Marketing", field3: "Finance"},
      education_subject: {field1: "Accounting", field2: "Business", field3: "Business Administration"},
      structural_skills: {field1: "Strategic Planning", field2: "Process Optimization", field3: "Leadership"},
      university_ranking: {field1: "Top 100", field2: "", field3: ""}
    }
  }
];

export const fetchEmployerJobDescriptions = async (): Promise<JobDescription[]> => {
  // 1. Attempt to fetch from Supabase if keys are configured
  if (isSupabaseConfigured()) {
    try {
      console.log("Attempting to fetch from Supabase...");
      const { data, error } = await supabase
        .from('employer_job_descriptions')
        .select('*')
        .order('job_id', { ascending: true });

      if (error) {
        console.error("Supabase Error:", error);
        console.warn("Falling back to mock data...");
      } else if (data) {
        console.log("Successfully fetched from Supabase");
        return data as JobDescription[];
      }
    } catch (e) {
      console.error("Connection failed:", e);
    }
  } else {
    console.log("Supabase not configured. Using Mock Data.");
  }

  // 2. Fallback to Mock Data (Simulate network delay)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(MOCK_JOBS);
    }, 800);
  });
};