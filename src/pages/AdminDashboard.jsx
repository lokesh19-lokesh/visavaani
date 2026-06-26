import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { useNavigate } from 'react-router-dom';
import { Users, Settings, LogOut, FileText, Database, Home } from 'lucide-react';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ users: 0, forms: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    // Get user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    // Call edge function for stats
    const fetchStats = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('admin-stats');
        if (!error && data) {
          setStats(data);
        }
      } catch (err) {
        console.error('Error fetching admin stats:', err);
      }
    };
    
    fetchStats();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-gray-200 shadow-sm flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2 text-primary font-bold text-xl">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">V</span>
            </div>
            VisaVaani Admin
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <button className="w-full flex items-center gap-3 px-4 py-3 text-primary bg-primary/10 rounded-lg font-medium">
            <Database className="w-5 h-5" /> Dashboard
          </button>
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
          >
            <Home className="w-5 h-5" /> Home
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <Users className="w-5 h-5" /> Users
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <FileText className="w-5 h-5" /> Content
          </button>
          <button className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors">
            <Settings className="w-5 h-5" /> Settings
          </button>
        </nav>
        <div className="p-4 border-t border-gray-200">
          <button 
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg font-medium transition-colors"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Welcome back, Admin</h1>
            <p className="text-gray-500 mt-1">Here is what's happening today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold uppercase">
              {user?.email?.[0] || 'A'}
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Total Users</h3>
              <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                <Users className="w-5 h-5" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.users || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">Active Forms</h3>
              <div className="p-2 bg-green-50 rounded-lg text-green-600">
                <FileText className="w-5 h-5" />
              </div>
            </div>
            <p className="text-3xl font-bold text-gray-900">{stats.forms || 0}</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-gray-500 font-medium">System Status</h3>
              <div className="p-2 bg-purple-50 rounded-lg text-purple-600">
                <Database className="w-5 h-5" />
              </div>
            </div>
            <p className="text-xl font-bold text-green-500">Operational</p>
          </div>
        </div>

        {/* Placeholder for Data Table */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
          </div>
          <div className="p-6 text-center text-gray-500 py-12">
            Admin specific data tables will go here. Connect your Supabase Edge Functions to populate this securely.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
