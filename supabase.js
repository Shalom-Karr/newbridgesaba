// supabase.js
// Supabase Configuration
// To make this fully functional, replace the placeholders with your actual Supabase Project URL and Anon Key.
// You can find these in your Supabase Dashboard under Settings > API.

const SUPABASE_URL = 'YOUR_SUPABASE_URL_HERE';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY_HERE';

if (SUPABASE_URL !== 'YOUR_SUPABASE_URL_HERE') {
    window.supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
} else {
    console.warn("Supabase is not configured! Please add your keys to supabase.js");
}
