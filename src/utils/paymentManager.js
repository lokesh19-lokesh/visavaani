import { supabase } from '../services/supabase';

export const AI_FREE_LIMIT = 3;

export const getAiUsage = () => {
  const usage = localStorage.getItem('ai_usage_count');
  return usage ? parseInt(usage, 10) : 0;
};

export const incrementAiUsage = () => {
  const current = getAiUsage();
  localStorage.setItem('ai_usage_count', (current + 1).toString());
  return current + 1;
};

export const hasPaidForAi = () => {
  const expiry = localStorage.getItem('ai_expiry_date');
  if (!expiry) {
    // Check legacy true string
    if (localStorage.getItem('ai_has_paid') === 'true') {
      // Convert legacy to expiry
      markAsPaid();
      return true;
    }
    return false;
  }
  
  // Check if current date is before expiry
  return new Date().getTime() < parseInt(expiry, 10);
};

export const getExpiryDate = () => {
  const expiry = localStorage.getItem('ai_expiry_date');
  return expiry ? new Date(parseInt(expiry, 10)) : null;
};

export const markAsPaid = async (paymentId = 'N/A') => {
  // Set expiry to 1 year from now
  const oneYearFromNow = new Date();
  oneYearFromNow.setFullYear(oneYearFromNow.getFullYear() + 1);
  localStorage.setItem('ai_expiry_date', oneYearFromNow.getTime().toString());
  localStorage.setItem('ai_has_paid', 'true'); // For legacy compatibility

  const generateUUID = () => {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  };

  try {
    const { data: { session } } = await supabase.auth.getSession();
    if (session?.user) {
      const { error } = await supabase.from('invoices').insert([
        {
          id: generateUUID(),
          user_id: session.user.id,
          date: new Date().toISOString(),
          description: '1 Year Premium AI Access',
          amount: '₹499',
          status: 'Paid'
        }
      ]);
      if (error) {
        console.error('Supabase Insert Error:', error);
        alert('DB Error: ' + JSON.stringify(error));
      } else {
        console.log('Invoice saved successfully to Supabase');
      }
    } else {
      console.warn('User not logged in, skipping invoice creation.');
      alert('Error: You are not logged in. Invoice could not be saved.');
    }
  } catch (error) {
    console.error('Failed to create invoice:', error);
    alert('Exception creating invoice: ' + error.message);
  }
};

export const canUseAi = () => {
  if (hasPaidForAi()) return true;
  return getAiUsage() < AI_FREE_LIMIT;
};

export const checkIsAdmin = async () => {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.user?.email?.toLowerCase() === 'yestickai@gmail.com';
};
