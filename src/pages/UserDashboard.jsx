import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import { User, Receipt, CreditCard, CheckCircle2, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [session, setSession] = useState(null);
  const [profileData, setProfileData] = useState({
    fullName: '',
    phone: '',
    passportNumber: '',
    address: '',
  });
  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    let currentUser = null;

    const fetchProfile = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      setSession(session);
      
      if (session?.user) {
        currentUser = session.user;
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', currentUser.id)
          .single();
          
        if (data) {
          setProfileData({
            fullName: data.full_name || session.user.user_metadata?.full_name || '',
            phone: data.phone || '',
            passportNumber: data.passport_number || '',
            address: data.address || '',
          });
        } else if (session.user.user_metadata?.full_name) {
           setProfileData(prev => ({ ...prev, fullName: session.user.user_metadata.full_name }));
        }

        // Fetch Invoices
        const { data: invoiceData, error: invoiceError } = await supabase
          .from('invoices')
          .select('*')
          .eq('user_id', currentUser.id)
          .order('date', { ascending: false });
        
        if (invoiceData) {
          setInvoices(invoiceData);
        }
      }
    };

    fetchProfile();
  }, []);

  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prev => ({ ...prev, [name]: value }));
  };

  const saveProfile = async () => {
    if (!session?.user) return;
    
    try {
      const { error } = await supabase
        .from('profiles')
        .upsert({
          id: session.user.id,
          full_name: profileData.fullName,
          phone: profileData.phone,
          passport_number: profileData.passportNumber,
          address: profileData.address,
          updated_at: new Date()
        });

      if (error) throw error;
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Error updating profile. Please try again.");
    }
  };

  const handlePayment = (invoiceId) => {
    alert("Please select a payment gateway (e.g., Razorpay, Stripe) to continue processing payments.");
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <main className="py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto font-sans">
      <SEO 
        title="My Dashboard"
        description="Manage your VisaVaani profile, view immigration documents, and track invoices securely."
        url="/dashboard"
      />
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome back, {profileData.fullName || session?.user?.email}</p>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-200 mb-8">
        <button
          onClick={() => setActiveTab('profile')}
          className={`pb-4 px-2 flex items-center space-x-2 font-medium text-sm transition-colors relative ${
            activeTab === 'profile' ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <User size={18} />
          <span>My Profile</span>
          {activeTab === 'profile' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-md"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('invoices')}
          className={`pb-4 px-2 flex items-center space-x-2 font-medium text-sm transition-colors relative ${
            activeTab === 'invoices' ? 'text-primary' : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <Receipt size={18} />
          <span>Invoices & Payments</span>
          {activeTab === 'invoices' && (
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-md"></span>
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {activeTab === 'profile' && (
          <div>
            <div className="p-6 md:p-8 border-b border-gray-100">
              <h2 className="text-xl font-bold text-gray-900">Personal Information</h2>
              <p className="text-gray-500 text-sm mt-1">Update your personal details for visa processing.</p>
            </div>
            
            <div className="p-6 md:p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={profileData.fullName}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input 
                    type="email" 
                    disabled
                    value={session?.user?.email || ''}
                    className="w-full px-4 py-2 border border-gray-200 bg-gray-50 rounded-lg text-gray-500 cursor-not-allowed"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={profileData.phone}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+91 98765 43210"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Passport Number</label>
                  <input 
                    type="text" 
                    name="passportNumber"
                    value={profileData.passportNumber}
                    onChange={handleProfileChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="A1234567"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Residential Address</label>
                  <textarea 
                    name="address"
                    value={profileData.address}
                    onChange={handleProfileChange}
                    rows="3"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="123 Main Street, City, Country"
                  ></textarea>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button 
                  onClick={saveProfile}
                  className="bg-primary hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'invoices' && (
          <div>
            <div className="p-6 md:p-8 border-b border-gray-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <h2 className="text-xl font-bold text-gray-900">Invoices & Payments</h2>
                <p className="text-gray-500 text-sm mt-1">View your billing history and manage payments.</p>
              </div>
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
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {invoices.length === 0 ? (
                    <tr>
                      <td colSpan="6" className="px-6 py-12 text-center text-gray-500">
                        No invoices found.
                      </td>
                    </tr>
                  ) : (
                    invoices.map((invoice, index) => (
                      <tr key={index} className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">INV-{invoice.id.substring(0, 8).toUpperCase()}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(invoice.date)}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{invoice.description}</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-gray-900">{invoice.amount}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {invoice.status === 'Paid' ? (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800 border border-green-200">
                              <CheckCircle2 size={12} className="mr-1" />
                              Paid
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-100 text-amber-800 border border-amber-200">
                              <Clock size={12} className="mr-1" />
                              Unpaid
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          {invoice.status === 'Unpaid' ? (
                            <button onClick={() => handlePayment(invoice.id)} className="inline-flex items-center text-white bg-primary hover:bg-gray-800 px-4 py-2 rounded-lg transition-colors text-xs font-semibold shadow-sm">
                              <CreditCard size={14} className="mr-1.5" />
                              Pay Now
                            </button>
                          ) : (
                            <button className="text-secondary hover:text-orange-600 font-semibold transition-colors">
                              Download
                            </button>
                          )}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default UserDashboard;
