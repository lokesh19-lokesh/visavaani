import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://qlxhcnqueecabzirouye.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFseGhjbnF1ZWVjYWJ6aXJvdXllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE3MzgxMzEsImV4cCI6MjA5NzMxNDEzMX0.aTE2HGRjB8l5C5L_bbQcFcM4NuY6HWsHQT7x8Shn4_A';

export const supabase = createClient(supabaseUrl, supabaseKey);
