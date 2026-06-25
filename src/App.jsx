import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import MainLayout from './layouts/MainLayout';
import PageLoader from './components/PageLoader';

// Lazy load all page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const Countries = lazy(() => import('./pages/Countries'));
const CountryDetail = lazy(() => import('./pages/CountryDetail'));
const VisaTypes = lazy(() => import('./pages/VisaTypes'));
const VisaCategory = lazy(() => import('./pages/VisaCategory'));
const Expert = lazy(() => import('./pages/Expert'));
const AIAdvisor = lazy(() => import('./pages/AIAdvisor'));
const Auth = lazy(() => import('./pages/Auth'));
const PlaceholderPage = lazy(() => import('./pages/PlaceholderPage'));
const Eligibility = lazy(() => import('./pages/Eligibility'));
const Compare = lazy(() => import('./pages/Compare'));
const Guides = lazy(() => import('./pages/Guides'));
const GuideArticle = lazy(() => import('./pages/GuideArticle'));
const News = lazy(() => import('./pages/News'));
const NewsArticle = lazy(() => import('./pages/NewsArticle'));
const Checklists = lazy(() => import('./pages/Checklists'));
const Faqs = lazy(() => import('./pages/Faqs'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogArticle = lazy(() => import('./pages/BlogArticle'));
const Terms = lazy(() => import('./pages/Terms'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Feedback = lazy(() => import('./pages/Feedback'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Resources = lazy(() => import('./pages/Resources'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
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
            <Route path="compare" element={<Compare />} />

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
      </Suspense>
    </>
  );
}

export default App;
