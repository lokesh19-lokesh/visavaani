import { createClient } from '@supabase/supabase-js';
import fs from 'fs';

const env = fs.readFileSync('.env', 'utf-8').split('\n').reduce((acc, line) => {
  const [key, ...value] = line.split('=');
  if (key) acc[key.trim()] = value.join('=').trim();
  return acc;
}, {});

const supabase = createClient(env.VITE_SUPABASE_URL, env.VITE_SUPABASE_ANON_KEY);

async function runTest() {
  console.log("Signing up dummy user...");
  const { data: authData, error: authError } = await supabase.auth.signUp({
    email: `dummy_${Date.now()}@example.com`,
    password: 'password123',
  });

  if (authError) {
    console.error("Auth Error:", authError);
    return;
  }

  console.log("User created:", authData.user?.id);
  const user = authData.user;
  
  if (!user) {
    console.error("No user returned");
    return;
  }

  console.log("Attempting to insert invoice...");
  const { error: insertError } = await supabase.from('invoices').insert([
    {
      id: crypto.randomUUID(),
      user_id: user.id,
      date: new Date().toISOString(),
      description: '1 Year Premium AI Access',
      amount: '₹499',
      status: 'Paid'
    }
  ]);

  if (insertError) {
    console.error("Insert Error:", insertError);
  } else {
    console.log("Insert Successful!");
  }
}

runTest();
