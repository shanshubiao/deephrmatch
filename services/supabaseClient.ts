import { createClient } from '@supabase/supabase-js';

// TODO: REPLACE THESE WITH YOUR ACTUAL SUPABASE CREDENTIALS
// You can find these in your Supabase Dashboard -> Project Settings -> API
const SUPABASE_URL: string = 'YOUR_SUPABASE_PROJECT_URL';
const SUPABASE_ANON_KEY: string = 'YOUR_SUPABASE_ANON_KEY';

// Check if credentials are placeholders or invalid
export const isSupabaseConfigured = () => {
  return SUPABASE_URL !== 'YOUR_SUPABASE_PROJECT_URL' && 
         SUPABASE_ANON_KEY !== 'YOUR_SUPABASE_ANON_KEY' &&
         SUPABASE_URL.startsWith('http');
};

// Prevent crash by using a valid fallback URL during initialization if not configured.
// The createClient function throws an error if the URL is not a valid URL string (e.g., 'YOUR_SUPABASE_PROJECT_URL').
const clientUrl = isSupabaseConfigured() ? SUPABASE_URL : 'https://placeholder.supabase.co';
const clientKey = isSupabaseConfigured() ? SUPABASE_ANON_KEY : 'placeholder-key';

export const supabase = createClient(clientUrl, clientKey);