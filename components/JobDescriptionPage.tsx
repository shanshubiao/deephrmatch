import React, { useState, useEffect } from 'react';
import { 
  Brain, 
  LogOut, 
  ChevronRight, 
  ChevronDown, 
  ArrowLeft, 
  Loader2, 
  Briefcase, 
  Building2 
} from 'lucide-react';
import { fetchEmployerJobDescriptions } from '../services/mockData';
import { JobDescription, FieldSet, EliminationCriteria, RequiredMatchingCriteria } from '../types';

// --- HELPER COMPONENTS AS REQUESTED ---

// 1. InfoFieldSingle: Label + Value pair in Grid
// Prompt: 280px label, 1fr value
const InfoFieldSingle: React.FC<{ label: string; value: string | number }> = ({ label, value }) => (
  <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-2 py-2 border-b border-gray-200 last:border-0 items-center">
    <span className="text-gray-600 font-medium">{label}</span>
    <span className="text-gray-900 font-semibold break-words">{value}</span>
  </div>
);

// 2. InfoField: Label + 3 Values (Grid)
// Prompt: 240px label, 1fr for each value
const InfoField: React.FC<{ label: string; fieldSet: FieldSet }> = ({ label, fieldSet }) => (
  <div className="grid grid-cols-1 md:grid-cols-[240px_1fr_1fr_1fr] gap-4 py-3 border-b border-gray-200 last:border-0 items-center">
    <span className="text-gray-600 font-medium">{label}</span>
    <span className="text-gray-800 bg-white/50 px-2 py-1 rounded border border-gray-100 text-sm md:text-base">{fieldSet.field1}</span>
    <span className="text-gray-800 bg-white/50 px-2 py-1 rounded border border-gray-100 text-sm md:text-base">{fieldSet.field2}</span>
    <span className="text-gray-800 bg-white/50 px-2 py-1 rounded border border-gray-100 text-sm md:text-base">{fieldSet.field3}</span>
  </div>
);

// 3. InfoTableSingle: Container for Elimination Criteria
const InfoTableSingle: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-sm">
    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-red-200 pb-2">{title}</h3>
    <div className="flex flex-col">
      {children}
    </div>
  </div>
);

// 4. InfoTable: Container for Matching Criteria
const InfoTable: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
  <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-sm h-full">
    <h3 className="text-xl font-bold text-gray-800 mb-4 border-b border-green-200 pb-2">{title}</h3>
    {/* Header for the 3 columns, offset by label width */}
    <div className="hidden md:grid grid-cols-[240px_1fr_1fr_1fr] gap-4 pb-2 mb-2 border-b border-gray-300/50 text-sm font-bold text-gray-500 uppercase tracking-wider">
      <div>Field</div>
      <div>Priority 1</div>
      <div>Priority 2</div>
      <div>Priority 3</div>
    </div>
    <div className="flex flex-col">
      {children}
    </div>
  </div>
);

// Helper component for Employer Logo with fallback
const EmployerLogo: React.FC<{ url: string | null; name: string }> = ({ url, name }) => {
  const [error, setError] = useState(false);

  if (url && !error) {
    return (
      <img 
        src={url} 
        alt={name} 
        className="w-full h-full object-contain p-0.5 bg-white" 
        onError={() => setError(true)}
      />
    );
  }

  return (
    <span className="text-gray-500 font-bold text-xs">
      {name.substring(0, 2).toUpperCase()}
    </span>
  );
};

// --- MAIN COMPONENT ---

const JobDescriptionPage: React.FC = () => {
  // State
  const [jobs, setJobs] = useState<JobDescription[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());

  // Data Fetching
  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchEmployerJobDescriptions();
        // Sort by job_id ascending as per requirement
        const sortedData = data.sort((a, b) => a.job_id - b.job_id);
        setJobs(sortedData);
      } catch (error) {
        console.error("Failed to fetch jobs", error);
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  // Handlers
  const toggleRow = (id: string) => {
    setExpandedRows(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  // Utility to safely join array strings or fallback
  const getArrayString = (arr?: string[], fallback?: string) => {
    if (arr && Array.isArray(arr) && arr.length > 0) {
      return arr.join(", ");
    }
    return fallback || "Any";
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(val);
  };

  return (
    <div className="min-h-screen bg-[#EFF5FF] flex flex-col font-sans">
      
      {/* 1. Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md h-16 px-4 md:px-8 flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
            <Brain className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold text-gray-800 tracking-tight hidden sm:block">Deep HR Match</span>
        </div>

        {/* Center */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:block">
          <span className="text-gray-500 font-semibold uppercase tracking-widest text-sm">Admin Dashboard</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <p className="text-xs text-gray-500">Logged in as</p>
            <p className="text-sm font-bold text-gray-800">Winston Tan</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-md transition-colors">
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* 2. Main Content */}
      <main className="flex-grow p-4 md:p-8 max-w-[1600px] mx-auto w-full">
        
        {/* Back Button */}
        <div className="mb-6">
          <button 
            onClick={() => console.log("Navigate back")}
            className="flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors px-4 py-2 border border-gray-300 rounded-lg hover:border-blue-600 bg-white"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Admin Dashboard</span>
          </button>
        </div>

        {/* Page Title Area */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-2">
            All Job Descriptions of Employers
          </h1>
          <p className="text-lg text-gray-600 mb-4">
            Complete overview of employer job requirements with expandable details
          </p>
          <p className="text-blue-600 font-medium flex items-center gap-2 bg-blue-50 w-fit px-3 py-1 rounded-full text-sm">
             💡 Click on any row to expand and view detailed elimination and matching criteria
          </p>
        </div>

        {/* 3. Table */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader2 className="w-10 h-10 text-blue-600 animate-spin" />
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#9b87f5] text-white">
                    <th className="p-4 font-semibold text-sm uppercase tracking-wider w-24">ID</th>
                    <th className="p-4 font-semibold text-sm uppercase tracking-wider w-24">Logo</th>
                    <th className="p-4 font-semibold text-sm uppercase tracking-wider">Job Title</th>
                    <th className="p-4 font-semibold text-sm uppercase tracking-wider">Employer</th>
                    <th className="p-4 w-10"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {jobs.map((job) => {
                    const isExpanded = expandedRows.has(job.id);
                    
                    return (
                      <React.Fragment key={job.id}>
                        {/* Main Row */}
                        <tr 
                          onClick={() => toggleRow(job.id)}
                          className={`cursor-pointer transition-colors duration-200 ${isExpanded ? 'bg-blue-50/50' : 'hover:bg-blue-50'}`}
                        >
                          <td className="p-4 text-gray-600 font-mono text-sm">#{job.job_id}</td>
                          <td className="p-4">
                            <div className="w-10 h-10 rounded-full overflow-hidden border border-gray-200 bg-white flex items-center justify-center">
                              <EmployerLogo url={job.logo_url} name={job.employer_name} />
                            </div>
                          </td>
                          <td className="p-4 font-semibold text-gray-800 flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-gray-400" />
                            {job.job_title}
                          </td>
                          <td className="p-4 text-gray-700">
                            <div className="flex items-center gap-2">
                               <Building2 className="w-4 h-4 text-gray-400" />
                               {job.employer_name}
                            </div>
                          </td>
                          <td className="p-4 text-gray-400">
                            {isExpanded ? <ChevronDown className="w-5 h-5 text-blue-600" /> : <ChevronRight className="w-5 h-5" />}
                          </td>
                        </tr>

                        {/* 4. Expanded Row Details */}
                        {isExpanded && (
                          <tr className="bg-gray-50 border-b border-gray-200">
                            <td colSpan={5} className="p-4 md:p-8 cursor-default">
                              <div className="grid grid-cols-1 xl:grid-cols-[0.8fr_2.2fr] gap-8">
                                
                                {/* Left Column - Elimination Criteria (Red) */}
                                <InfoTableSingle title="Elimination Criteria">
                                  <InfoFieldSingle label="Required Age" value={job.elimination_criteria.age} />
                                  <InfoFieldSingle label="Required Ethnicity" value={job.elimination_criteria.ethnicity} />
                                  <InfoFieldSingle label="Required Race" value={job.elimination_criteria.race} />
                                  <InfoFieldSingle 
                                    label="Required Religion" 
                                    value={getArrayString(job.elimination_criteria["Required Religion"], job.elimination_criteria.religion)} 
                                  />
                                  <InfoFieldSingle label="Required Nationality" value={job.elimination_criteria.nationality} />
                                  <InfoFieldSingle 
                                    label="Required Country of Birth" 
                                    value={getArrayString(job.elimination_criteria["Required Country of Birth"], job.elimination_criteria.country_of_birth)} 
                                  />
                                  <InfoFieldSingle label="Required Current Country" value={job.elimination_criteria.current_country} />
                                  <InfoFieldSingle label="Maximum Salary" value={formatCurrency(job.elimination_criteria.salary_monthly)} />
                                  <InfoFieldSingle label="Required Availability" value={job.elimination_criteria.availability} />
                                  <InfoFieldSingle label="Required Employment Eligibility Visa" value={job.elimination_criteria.visa_status} />
                                  <InfoFieldSingle label="Required Job Arrangement" value={job.elimination_criteria.job_arrangement} />
                                </InfoTableSingle>

                                {/* Right Column - Required Matching Criteria (Green) */}
                                <InfoTable title="Required Matching Criteria">
                                  {/* Loop through known field sets */}
                                  <InfoField label="Required Role" fieldSet={job.required_matching_criteria.role} />
                                  <InfoField label="Required Domain" fieldSet={job.required_matching_criteria.domain} />
                                  <InfoField label="Required Function" fieldSet={job.required_matching_criteria.function} />
                                  <InfoField label="Required Structural Skills" fieldSet={job.required_matching_criteria.structural_skills} />
                                  <InfoField label="Required System" fieldSet={job.required_matching_criteria.system} />
                                  <InfoField label="Required Hierarchy" fieldSet={job.required_matching_criteria.hierarchy} />
                                  <InfoField label="Required Values" fieldSet={job.required_matching_criteria.values} />
                                  <InfoField label="Required Education Subject" fieldSet={job.required_matching_criteria.education_subject} />
                                  <InfoField label="Required University Major" fieldSet={job.required_matching_criteria.university_major} />
                                  <InfoField label="Required University Ranking" fieldSet={job.required_matching_criteria.university_ranking} />
                                  <InfoField label="Required Motivation" fieldSet={job.required_matching_criteria.motivation} />
                                  <InfoField label="Required Hobbies" fieldSet={job.required_matching_criteria.hobbies} />
                                  <InfoField label="Required Talents" fieldSet={job.required_matching_criteria.talents} />
                                  
                                  <div className="mt-6 pt-4 border-t border-green-200 grid grid-cols-1 md:grid-cols-2 gap-6">
                                      <InfoFieldSingle label="Required Minimum Height" value={job.required_matching_criteria.minimum_height} />
                                      <InfoFieldSingle label="Maximum Weight" value={job.required_matching_criteria.maximum_weight} />
                                  </div>
                                </InfoTable>

                              </div>
                            </td>
                          </tr>
                        )}
                      </React.Fragment>
                    );
                  })}
                </tbody>
              </table>
              
              {!loading && jobs.length === 0 && (
                <div className="p-12 text-center text-gray-500">
                  No job descriptions found.
                </div>
              )}
            </div>
            
            {/* Footer of the Table (Optional summary) */}
            <div className="bg-gray-50 p-4 border-t border-gray-200 flex justify-between items-center text-xs text-gray-500">
               <span>Showing {jobs.length} job descriptions</span>
               <span>Data synced from Supabase</span>
            </div>
          </div>
        )}

      </main>

      {/* 5. Footer Component */}
      <footer className="bg-[#0F172A] text-white py-12 border-t border-gray-800 mt-8">
        <div className="max-w-[1600px] mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            
            {/* Column 1: Logo & Description */}
            <div className="col-span-1 md:col-span-2 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                  <Brain className="text-white w-6 h-6" />
                </div>
                <span className="text-2xl font-bold tracking-tight text-white">Deep HR Match</span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed">
                AI-powered recruitment platform connecting the right talent with the right opportunities.
              </p>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-4">
                {['About Us', 'How It Works', 'Pricing', 'Success Stories', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Support */}
            <div>
              <h3 className="text-white font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-4">
                {['Help Center', 'Contact Support', 'FAQ', 'API Documentation', 'System Status'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
            <p>© 2025 Deep HR Match. All rights reserved.</p>
            <div className="flex gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map((item) => (
                <a key={item} href="#" className="hover:text-gray-300 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default JobDescriptionPage;