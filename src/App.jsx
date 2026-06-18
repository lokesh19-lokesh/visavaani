import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Countries from './pages/Countries';
import VisaTypes from './pages/VisaTypes';
import AIAdvisor from './pages/AIAdvisor';
import Auth from './pages/Auth';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="countries" element={<Countries />} />
        <Route path="visas" element={<VisaTypes />} />
        <Route path="advisor" element={<AIAdvisor />} />
        <Route path="auth" element={<Auth />} />
        {/* Placeholder for missing routes */}
        <Route path="*" element={<div className="p-20 text-center text-2xl font-bold text-gray-400">Page Coming Soon</div>} />
      </Route>
    </Routes>
  );
}

export default App;
