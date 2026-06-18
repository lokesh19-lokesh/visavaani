import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';
import VisaTypes from './pages/VisaTypes';
import AIAdvisor from './pages/AIAdvisor';
import Auth from './pages/Auth';
import PlaceholderPage from './pages/PlaceholderPage';
import Eligibility from './pages/Eligibility';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="countries" element={<Countries />} />
        <Route path="countries/:id" element={<CountryDetail />} />
        <Route path="visas" element={<VisaTypes />} />
        <Route path="advisor" element={<AIAdvisor />} />
        <Route path="auth" element={<Auth />} />
        
        {/* Active Routes */}
        <Route path="eligibility" element={<Eligibility />} />

        {/* Placeholder Routes for Footer & Nav Links */}
        <Route path="guides" element={<PlaceholderPage title="Visa Guides" />} />
        <Route path="news" element={<PlaceholderPage title="News & Updates" />} />
        <Route path="checklists" element={<PlaceholderPage title="Document Checklists" />} />
        <Route path="faqs" element={<PlaceholderPage title="Frequently Asked Questions" />} />
        <Route path="blog" element={<PlaceholderPage title="VisaVaani Blog" />} />
        <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
        <Route path="expert" element={<PlaceholderPage title="Talk to an Expert" />} />
        <Route path="feedback" element={<PlaceholderPage title="Provide Feedback" />} />
        <Route path="privacy" element={<PlaceholderPage title="Privacy Policy" />} />
        <Route path="terms" element={<PlaceholderPage title="Terms of Use" />} />
        <Route path="about" element={<PlaceholderPage title="About Us" />} />
        <Route path="resources" element={<PlaceholderPage title="Immigration Resources" />} />
        
        {/* Catch-all for any other unmatched routes */}
        <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
      </Route>
    </Routes>
  );
}

export default App;
