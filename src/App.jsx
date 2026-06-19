import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Countries from './pages/Countries';
import CountryDetail from './pages/CountryDetail';
import VisaTypes from './pages/VisaTypes';
import VisaCategory from './pages/VisaCategory';
import Expert from './pages/Expert';
import AIAdvisor from './pages/AIAdvisor';
import Auth from './pages/Auth';
import PlaceholderPage from './pages/PlaceholderPage';
import Eligibility from './pages/Eligibility';
import Guides from './pages/Guides';
import GuideArticle from './pages/GuideArticle';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Checklists from './pages/Checklists';
import Faqs from './pages/Faqs';
import Blog from './pages/Blog';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="countries" element={<Countries />} />
        <Route path="countries/:id" element={<CountryDetail />} />
        <Route path="visas" element={<VisaTypes />} />
        <Route path="visas/:id" element={<VisaCategory />} />
        <Route path="advisor" element={<AIAdvisor />} />
        <Route path="auth" element={<Auth />} />
        
        {/* Active Routes */}
        <Route path="eligibility" element={<Eligibility />} />

        {/* Resource Routes */}
        <Route path="guides" element={<Guides />} />
        <Route path="guides/:id" element={<GuideArticle />} />
        <Route path="news" element={<News />} />
        <Route path="news/:id" element={<NewsArticle />} />
        <Route path="checklists" element={<Checklists />} />
        <Route path="faqs" element={<Faqs />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<PlaceholderPage title="Contact Us" />} />
        <Route path="expert" element={<Expert />} />
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
