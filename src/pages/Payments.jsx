import React from 'react';
import SEO from '../components/SEO';
import { CheckCircle2, Shield, Bot, CreditCard, Sparkles } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { hasPaidForAi, markAsPaid, getExpiryDate } from '../utils/paymentManager';
import { supabase } from '../services/supabase';

const Payments = () => {
  const isPaid = hasPaidForAi();
  const [isProcessing, setIsProcessing] = React.useState(false);
  const navigate = useNavigate();

  const handlePayment = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      alert("Please log in to purchase the Premium AI Access.");
      navigate('/auth');
      return;
    }

    setIsProcessing(true);

    const RAZORPAY_KEY = 'rzp_test_T4YL0Eo5Mg5SN1';
    
    const options = {
      key: RAZORPAY_KEY,
      amount: 499 * 100, // Razorpay works in paise
      currency: 'INR',
      name: 'VisaVaani AI',
      description: '1 Year Premium AI Access',
      image: '/fev.png',
      handler: async function (response) {
        // Payment successful
        await markAsPaid(response.razorpay_payment_id);
        setIsProcessing(false);
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}. You now have unlimited AI access for 1 year.`);
        navigate(0); // Refresh to show paid state
      },
      prefill: {
        name: 'User',
        email: 'user@example.com',
        contact: '9999999999'
      },
      notes: {
        address: 'VisaVaani Premium'
      },
      theme: {
        color: '#0B2D6B'
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', function (response) {
        setIsProcessing(false);
        alert(`Payment failed: ${response.error.description}`);
      });
      rzp.open();
    } else {
      setIsProcessing(false);
      alert('Payment system is not loaded properly. Please refresh the page.');
    }
  };

  return (
    <div className="bg-[#F8FAFC] min-h-screen pt-24 pb-16">
      <SEO 
        title="Premium AI Subscriptions"
        description="Unlock unlimited access to VisaVaani's AI Immigration Advisor and Voice Assistant."
        url="/payments"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 font-display">Premium AI Access</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get unlimited expert guidance for your immigration journey with our advanced AI tools.
          </p>
        </div>

        {isPaid ? (
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 size={40} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">You are a Premium Member!</h2>
            <p className="text-gray-600 mb-4 text-lg">
              Thank you for subscribing. You have unlimited access to VisaVaani AI Advisor and Voice Assistant.
            </p>
            {getExpiryDate() && (
              <div className="bg-blue-50 text-blue-700 py-3 px-4 rounded-xl inline-block mb-8 font-medium">
                Subscription valid until: {getExpiryDate().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
            )}
            <div className="flex gap-4 justify-center">
              <Link to="/advisor" className="px-6 py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90 transition-colors">
                Open AI Chat
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Pricing Card */}
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-yellow-900 font-bold px-4 py-1 text-sm rounded-bl-xl">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Yearly Plan</h3>
              <p className="text-gray-500 mb-6">Everything you need for your visa journey.</p>
              
              <div className="flex items-baseline gap-2 mb-8 border-b border-gray-100 pb-8">
                <span className="text-5xl font-bold text-primary">₹499</span>
                <span className="text-gray-500">/ year</span>
              </div>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-gray-700"><strong>Unlimited AI Chat:</strong> Get instant answers to complex visa questions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-gray-700"><strong>Unlimited Voice AI:</strong> Practice interviews and get spoken guidance in 11+ Indian languages.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 shrink-0" />
                  <span className="text-gray-700"><strong>Priority Support:</strong> Faster response times and latest immigration updates.</span>
                </li>
              </ul>
              
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
              >
                {isProcessing ? 'Opening Secure Payment...' : 'Pay ₹499 to Unlock'}
              </button>
            </div>

            {/* Info Section */}
            <div className="flex flex-col justify-center space-y-8">
              <div>
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-4">
                  <Bot size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Why VisaVaani AI?</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our AI is specifically trained on global immigration policies, providing accurate, tailored advice for Indian citizens looking to study, work, or settle abroad.
                </p>
              </div>

              <div>
                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-2xl flex items-center justify-center mb-4">
                  <Shield size={24} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">Secure Transactions</h4>
                <p className="text-gray-600 leading-relaxed">
                  All payments are processed securely through Razorpay. We do not store your credit card information. (PayPal integration coming soon for international payments).
                </p>
              </div>
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Payments;
