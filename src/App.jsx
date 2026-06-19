import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
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
import BlogArticle from './pages/BlogArticle';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Feedback from './pages/Feedback';
import Contact from './pages/Contact';
import About from './pages/About';
import Resources from './pages/Resources';

function App() {
  return (
    <>
      <ScrollToTop />
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
          <Route path="blog/:id" element={<BlogArticle />} />
          
          {/* Utility Routes */}
          <Route path="contact" element={<Contact />} />
          <Route path="expert" element={<Expert />} />
          <Route path="feedback" element={<Feedback />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="about" element={<About />} />
          <Route path="resources" element={<Resources />} />
          
          {/* 404 Route */}
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
