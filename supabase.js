// supabase.js
// Supabase Configuration

const SUPABASE_URL = 'https://dehetulllpghyykxrwjj.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlaGV0dWxsbHBnaHl5a3hyd2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NTQ2MjEsImV4cCI6MjA4ODMzMDYyMX0.OeKXNZ2FfZWrZJvKzBPSV8wBsR202rYd4gq7eORRJoY';

// Create the raw client
const rawClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Create a restricted wrapper around the client
// This prevents accidental queries to other companies' tables in the frontend code
window.supabaseClient = new Proxy(rawClient, {
    get(target, prop) {
        if (prop === 'from') {
            return function(tableName) {
                // Intercept and check the table name
                if (!tableName.startsWith('newbridges_')) {
                    console.error('Security Block: Attempted to access restricted table "'+tableName+'". Access is limited to "newbridges_*" tables.');
                    throw new Error('Security Block: Cannot access table "'+tableName+'".');
                }
                return target.from(tableName);
            };
        }
        
        // Pass through all other properties and bind functions correctly
        const value = target[prop];
        return typeof value === 'function' ? value.bind(target) : value;
    }
});

// For Supabase Auth methods, we expose them directly
window.supabaseAuth = rawClient.auth;
