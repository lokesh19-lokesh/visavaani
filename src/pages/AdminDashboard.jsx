import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabase';
import { useNavigate } from 'react-router-dom';
import { Users, Settings, LogOut, FileText, Database, Home, CheckCircle2, Clock } from 'lucide-react';

const AdminDashboard = () => {
  const [user, setUser] = useState(null);
  const [stats, setStats] = useState({ users: 0, invoices: 0 });
  const [activeTab, setActiveTab] = useState('dashboard');
  const [usersList, setUsersList] = useState([]);
  const [recentInvoices, setRecentInvoices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Get user
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
    });

    const fetchData = async () => {
      try {
        // Fetch profiles (users)
        const { data: profiles, error: profileError } = await supabase
          .from('profiles')
          .select('*')
          .order('updated_at', { ascending: false });

        if (!profileError && profiles) {
          setUsersList(profiles);
          setStats(prev => ({ ...prev, users: profiles.length }));
        }

        // Fetch invoices
        const { data: invoices, error: invoiceError } = await supabase
          .from('invoices')
          .select('*')
          .order('date', { ascending: false });

        if (!invoiceError && invoices) {
          setRecentInvoices(invoices.slice(0, 5)); // Just take 5 for recent activity
          setStats(prev => ({ ...prev, invoices: invoices.length }));
        }

      } catch (err) {
        console.error('Error fetching admin data:', err);
      }
    };
    
    fetchData();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
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
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'dashboard' ? 'text-primary bg-primary/10' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Database className="w-5 h-5" /> Dashboard
          </button>
          <button 
            onClick={() => navigate('/')}
            className="w-full flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-lg font-medium transition-colors"
          >
            <Home className="w-5 h-5" /> Home
          </button>
          <button 
            onClick={() => setActiveTab('users')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'users' ? 'text-primary bg-primary/10' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <Users className="w-5 h-5" /> Users
          </button>
          <button 
            onClick={() => setActiveTab('content')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'content' ? 'text-primary bg-primary/10' : 'text-gray-600 hover:bg-gray-50'}`}
          >
            <FileText className="w-5 h-5" /> Content
          </button>
          <button 
            onClick={() => setActiveTab('settings')}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${activeTab === 'settings' ? 'text-primary bg-primary/10' : 'text-gray-600 hover:bg-gray-50'}`}
          >
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
      <div className="flex-1 p-8 overflow-y-auto h-screen">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {activeTab === 'dashboard' ? 'Welcome back, Admin' : 
               activeTab === 'users' ? 'Manage Users' : 
               activeTab === 'content' ? 'Manage Content' : 'Settings'}
            </h1>
            <p className="text-gray-500 mt-1">Here is what's happening today.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold uppercase">
              {user?.email?.[0] || 'A'}
            </div>
          </div>
        </header>

        {activeTab === 'dashboard' && (
          <>
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Total Users</h3>
                  <div className="p-2 bg-blue-50 rounded-lg text-blue-600">
                    <Users className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stats.users}</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-gray-500 font-medium">Total Invoices</h3>
                  <div className="p-2 bg-green-50 rounded-lg text-green-600">
                    <FileText className="w-5 h-5" />
                  </div>
                </div>
                <p className="text-3xl font-bold text-gray-900">{stats.invoices}</p>
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

            {/* Recent Activity Table */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold text-gray-900">Recent Invoices</h2>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Invoice ID</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Description</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Amount</th>
                      <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {recentInvoices.length === 0 ? (
                      <tr>
                        <td colSpan="5" className="px-6 py-8 text-center text-gray-500">No recent invoices found.</td>
                      </tr>
                    ) : (
                      recentInvoices.map((invoice, idx) => (
                        <tr key={idx} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">INV-{invoice.id?.substring(0, 8).toUpperCase() || 'N/A'}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(invoice.date)}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{invoice.description}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{invoice.amount}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            {invoice.status === 'Paid' ? (
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                <CheckCircle2 size={12} className="mr-1" /> Paid
                              </span>
                            ) : (
                              <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800">
                                <Clock size={12} className="mr-1" /> Unpaid
                              </span>
                            )}
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {activeTab === 'users' && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">All Registered Users</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Full Name</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Passport Number</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Last Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {usersList.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="px-6 py-8 text-center text-gray-500">No users found.</td>
                    </tr>
                  ) : (
                    usersList.map((usr, idx) => (
                      <tr key={idx} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{usr.full_name || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usr.phone || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{usr.passport_number || 'N/A'}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(usr.updated_at)}</td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {(activeTab === 'content' || activeTab === 'settings') && (
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden p-12 text-center text-gray-500">
            This section is under development.
          </div>
        )}

      </div>
    </div>
  );
};

export default AdminDashboard;
