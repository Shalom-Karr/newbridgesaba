const { createClient } = require('@supabase/supabase-js');
const client = createClient('https://dehetulllpghyykxrwjj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlaGV0dWxsbHBnaHl5a3hyd2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NTQ2MjEsImV4cCI6MjA4ODMzMDYyMX0.OeKXNZ2FfZWrZJvKzBPSV8wBsR202rYd4gq7eORRJoY');

async function run() {
    await client.from('newbridges_content').insert([
        { 
            title: 'Springing into New Routines: April Autism Acceptance Month', 
            slug: 'springing-into-new-routines', 
            category: 'Community', 
            emoji: '🌷', 
            excerpt: 'As we enter April, Autism Acceptance Month, we share tips on transitioning to spring routines and celebrating neurodiversity.', 
            content: '<p class="mb-6">April is a special time. Not only does it bring the warmth and renewal of spring, but it is also Autism Acceptance Month—a time dedicated to promoting inclusion, understanding, and respect for neurodivergent individuals.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Embracing the Season</h2><p class="mb-6">The transition from winter to spring can be tricky. With daylight saving time and changing weather, sensory inputs and schedules shift. We recommend taking things slow and using visual schedules to map out new outdoor activities.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Celebrating Acceptance</h2><p class="mb-6">Acceptance goes beyond awareness. It means actively creating environments where autistic children and adults are valued for who they are. We are proud to support our families in NJ and OH as they advocate for their children every single day.</p>',
            created_at: '2026-04-01T12:00:00Z'
        }
    ]);
}
run().then(() => console.log('Done')).catch(console.error);
