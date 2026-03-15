-- ==========================================
-- SEED DATA: 5 NEW BLOG POSTS
-- ==========================================
-- Run this script in your Supabase SQL Editor to insert 5 new blog posts
-- backdated to February 2026, January 2026, December 2025, November 2025, and October 2025.

INSERT INTO public.newbridges_content (created_at, title, slug, category, emoji, excerpt, content)
VALUES 
(
    '2026-02-15 10:00:00+00',
    'Navigating IEP Meetings: A Parent''s Guide',
    'navigating-iep-meetings-parents-guide',
    'Education',
    '🏫',
    'Learn how to prepare for your child''s Individualized Education Program (IEP) meeting and advocate effectively for their needs in the classroom.',
    '<p class="mb-6">Individualized Education Program (IEP) meetings can feel overwhelming, but they are a crucial step in ensuring your child receives the support they need in school.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Preparation is Key</h2><p class="mb-6">Before the meeting, review your child''s current IEP and note any progress or continuing struggles. Bring your own list of goals and don''t hesitate to ask questions about the accommodations being proposed.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Collaborating with the School</h2><p class="mb-6">Remember that you are an equal member of the IEP team. Our BCBAs at New Bridges ABA frequently collaborate with school districts in NJ and OH to ensure that the goals set in the classroom align with the progress we are targeting at home.</p>'
),
(
    '2026-01-20 10:00:00+00',
    'Fun Indoor Activities for Sensory Processing',
    'fun-indoor-activities-sensory-processing',
    'Parenting',
    '🎨',
    'Winter months can be challenging. Discover engaging, sensory-friendly indoor activities that help your child play and learn when it''s too cold outside.',
    '<p class="mb-6">When the weather keeps you indoors, finding ways to keep a child with autism engaged without overwhelming their sensory systems can be tough.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Sensory Bins and Tactile Play</h2><p class="mb-6">Creating a sensory bin with rice, beans, or kinetic sand is an easy way to provide tactile input. Hide small toys inside and encourage your child to dig and find them, which also helps with fine motor skills.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Heavy Work Activities</h2><p class="mb-6">If your child is seeking input, "heavy work" activities like building a pillow fort, pushing a laundry basket, or indoor obstacle courses can provide the proprioceptive feedback they crave to feel grounded and calm.</p>'
),
(
    '2025-12-10 10:00:00+00',
    'Managing Holiday Routines with ASD',
    'managing-holiday-routines-with-asd',
    'Parenting',
    '❄️',
    'The holidays bring joy but also disruption. Read our top tips for preparing your child for schedule changes and sensory-rich holiday gatherings.',
    '<p class="mb-6">The holiday season is filled with changes in routine, new environments, and overwhelming sensory inputs like flashing lights and loud music. For children with ASD, this can easily lead to sensory overload.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Use Visual Schedules</h2><p class="mb-6">Prepare your child for upcoming events by using visual schedules or social stories. Showing them pictures of relatives they will see or explaining the sequence of events (e.g., First dinner, then presents, then home) can significantly reduce anxiety.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Create a Safe Space</h2><p class="mb-6">If you are visiting family, establish a quiet "safe zone" where your child can retreat if they feel overwhelmed. Bring their favorite comforting items, noise-canceling headphones, and familiar snacks to help them self-regulate.</p>'
),
(
    '2025-11-05 10:00:00+00',
    'The Role of Play in ABA Therapy',
    'role-of-play-in-aba-therapy',
    'Clinical',
    '🧸',
    'Did you know that some of the most effective ABA therapy looks just like play? Explore how Natural Environment Teaching (NET) makes learning fun.',
    '<p class="mb-6">There is a common misconception that ABA therapy only happens at a table with flashcards. In reality, some of the most effective ABA happens on the floor, during play!</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Natural Environment Teaching (NET)</h2><p class="mb-6">NET involves integrating learning goals into the child''s natural environment and following their motivation. If a child loves trains, the therapist will use trains to teach colors, counting, or requesting.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Making Learning Fun</h2><p class="mb-6">When children are having fun, they are more engaged and retain information better. By embedding therapy into playtime, we help children generalize skills seamlessly without it ever feeling like "work."</p>'
),
(
    '2025-10-18 10:00:00+00',
    'Recognizing Early Signs of Autism',
    'recognizing-early-signs-of-autism',
    'Resources',
    '🔍',
    'Early intervention is crucial. Learn about the early developmental milestones and common signs of autism spectrum disorder in toddlers.',
    '<p class="mb-6">Early intervention is one of the most powerful tools for improving outcomes in children with autism. Knowing the early signs can help you seek evaluations and support as soon as possible.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Social and Communication Milestones</h2><p class="mb-6">Some early signs include not responding to their name by 12 months, avoiding eye contact, preferring to play alone, or delayed speech and language skills. A lack of pointing or gesturing to share interest is also a common indicator.</p><h2 class="text-2xl font-black text-gray-900 mt-10 mb-4">Behavioral Differences</h2><p class="mb-6">You might notice repetitive movements like flapping hands, rocking, or spinning. A child might also become highly upset by minor changes in routine or have intense reactions to certain sounds, textures, or lights. If you have concerns, trust your instincts and consult with a pediatrician.</p>'
);
