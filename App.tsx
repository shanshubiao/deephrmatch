import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import JobDescriptionPage from './components/JobDescriptionPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/all-job-descriptions-of-employers-v2" element={<JobDescriptionPage />} />
        {/* Redirect root to the requested page for this demo */}
        <Route path="/" element={<Navigate to="/all-job-descriptions-of-employers-v2" replace />} />
        {/* Catch all */}
        <Route path="*" element={<div className="p-10 text-center">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  );
};

export default App;
