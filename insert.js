const { createClient } = require('@supabase/supabase-js');
const client = createClient('https://dehetulllpghyykxrwjj.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRlaGV0dWxsbHBnaHl5a3hyd2pqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NTQ2MjEsImV4cCI6MjA4ODMzMDYyMX0.OeKXNZ2FfZWrZJvKzBPSV8wBsR202rYd4gq7eORRJoY');

async function run() {
    await client.from('newbridges_content').insert([
        { 
            title: 'Personalized ABA Autism Care for Children in NJ & OH', 
            slug: 'personalized-aba-autism-care', 
            category: 'Education', 
            emoji: '🧩', 
            excerpt: 'Raising a child with Autism Spectrum Disorder brings moments of joy, concern, hope, and many questions. New Bridges ABA works closely with school districts and families to provide wrap-around care.', 
            content: '<p class="mb-6">Raising a child with Autism Spectrum Disorder brings moments of joy, concern, hope, and many questions. One of the most common challenges families face is the disconnect between how a child behaves and learns at school versus how they function at home.</p><p class="mb-6">New Bridges ABA works closely with school districts and families to provide wrap-around care. Our unique model utilizes the same trained therapist for both in-school support and in-home sessions. This continuity means the therapist understands exactly what happened during the childs day, eliminating the need to re-learn routines or adjust to different faces.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">The Importance of Generalization</h2><p class="mb-6">A skill learned in the classroom—like raising a hand or asking for a break—isn’t truly mastered until the child can successfully use it in the community or at the dinner table. Having a single consistent therapist bridges this gap, allowing for seamless skill generalization.</p>' 
        },
        { 
            title: 'The Benefits of Clinic-Based Early Intervention', 
            slug: 'benefits-of-clinic-based-early-intervention', 
            category: 'Clinical', 
            emoji: '✨', 
            excerpt: 'Early intervention in a structured clinical setting can significantly improve outcomes for young children diagnosed with autism.', 
            content: '<p class="mb-6">While in-home therapy provides incredible benefits for integrating skills into daily family life, there are specific advantages to structured, clinic-based early intervention, especially for children preparing to enter preschool or kindergarten.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">A Dedicated Learning Environment</h2><p class="mb-6">Clinics are designed from the ground up to minimize distractions and maximize learning opportunities. With specialized equipment, dedicated play areas, and a structured routine, children can focus entirely on their developmental goals without the typical interruptions found at home.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Socialization Opportunities</h2><p class="mb-6">One of the most significant benefits of a clinic setting is the opportunity for controlled social interactions. Under the guidance of skilled behavior technicians, children can practice turn-taking, sharing, and parallel play with peers in a safe, monitored environment. This real-world practice is invaluable for building the social skills necessary for school readiness.</p>' 
        },
        { 
            title: 'Parent Training: Empowering Families', 
            slug: 'parent-training-empowering-families', 
            category: 'Parenting', 
            emoji: '🙌', 
            excerpt: 'Parent training isn’t about becoming a therapist; it’s about equipping you with the practical tools to support your child’s growth.', 
            content: '<p class="mb-6">At New Bridges ABA, we firmly believe that parents are the true experts on their children. While our therapists bring clinical expertise, the most significant progress happens when we partner closely with families. This is why parent training is a foundational pillar of our ABA model.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Beyond the Session</h2><p class="mb-6">Therapy sessions are just a small fraction of a child’s week. To truly make an impact, the strategies and interventions used during therapy must be carried over into everyday life. Parent training isn’t about turning you into a clinician; it’s about providing you with a "toolbox" of practical, evidence-based strategies to use during mealtime, bedtime, and outings.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Building Confidence</h2><p class="mb-6">Our BCBAs work collaboratively with you to identify goals that matter most to your family’s quality of life. By learning how to consistently reinforce positive behaviors and manage challenging ones, families report feeling more confident, less stressed, and more deeply connected with their children.</p>' 
        }
    ]);
}
run().then(() => console.log('Done')).catch(console.error);
