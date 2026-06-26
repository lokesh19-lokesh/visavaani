import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Lock, CheckCircle2, Shield, Bot } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { markAsPaid } from '../utils/paymentManager';
import { supabase } from '../services/supabase';

const PaymentModal = ({ isOpen, onClose, onSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const navigate = useNavigate();

  const RAZORPAY_KEY = 'rzp_test_T4YL0Eo5Mg5SN1';

  const handlePayment = async () => {
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      alert("Please log in to purchase the Premium AI Access.");
      onClose();
      navigate('/auth');
      return;
    }

    setIsProcessing(true);

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
        if (onSuccess) onSuccess();
        onClose();
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}. You now have unlimited AI access for 1 year.`);
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
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[200]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-white rounded-3xl shadow-2xl z-[201] overflow-hidden"
          >
            <div className="bg-primary p-6 text-white text-center relative">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/70 hover:text-white"
              >
                <X size={24} />
              </button>
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm border border-white/20">
                <Lock size={32} className="text-yellow-400" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Free Limit Reached</h2>
              <p className="text-white/80 text-sm">You have used your 3 free AI requests.</p>
            </div>

            <div className="p-8">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Unlock Unlimited AI</h3>
                <div className="flex items-center justify-center gap-2 text-primary font-bold text-4xl mb-2">
                  ₹499 <span className="text-base text-gray-500 font-normal">/ year</span>
                </div>
                <p className="text-gray-500 text-sm">Less than ₹42 per month for expert immigration guidance.</p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700"><strong className="text-gray-900">Unlimited AI Chat:</strong> Get instant answers to complex visa questions.</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700"><strong className="text-gray-900">Unlimited Voice Assistant:</strong> Practice interviews and get spoken guidance in your native language.</p>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700"><strong className="text-gray-900">Secure Payment:</strong> Processed securely via Razorpay (PayPal coming soon).</p>
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-full py-4 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold text-lg transition-colors flex items-center justify-center shadow-lg disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isProcessing ? 'Opening Secure Payment...' : 'Pay ₹499 to Unlock'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PaymentModal;
