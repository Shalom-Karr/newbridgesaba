const fs = require('fs');

// 1. Fix locations.html to fully remove the empty "Clinic 2" Shaker block
let locHtml = fs.readFileSync('C:/Users/nates/Documents/Blog Site/NewBridgesABA/locations.html', 'utf8');
const shakerRegex = /<!-- Clinic 2 -->[\s\S]*?<\/svg>\s*<\/div>\s*<\/div>/;
if (shakerRegex.test(locHtml)) {
    locHtml = locHtml.replace(shakerRegex, '');
    fs.writeFileSync('C:/Users/nates/Documents/Blog Site/NewBridgesABA/locations.html', locHtml, 'utf8');
    console.log('Removed empty Shaker Clinic block from locations.html');
}

// 2. Process landing-ads.html
let landingHtml = fs.readFileSync('C:/Users/nates/Documents/Blog Site/NewBridgesABA/landing-ads.html', 'utf8');

// "Expert ABA Therapy, In School & At Home." -> "In School & Home."
landingHtml = landingHtml.replace('In School & At Home.', 'In School & Home.');

// "Immediate Openings Available" -> "NO WAITLIST"
landingHtml = landingHtml.replace('Immediate Openings Available', 'NO WAITLIST');

// "Your Journey with us Number 4 is green can we match that to the gold in number 2"
landingHtml = landingHtml.replace(
    'bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl shadow-green-500/20 border-4 border-white">4</div>',
    'bg-brandOrange text-brandPurple rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl shadow-brandOrange/20 border-4 border-white">4</div>'
);

// "No Waitlists in NJ & OH can we get that to flash"
// It currently has `<span class="w-2 h-2 rounded-full bg-brandLightPurple animate-pulse"></span>` 
// and `<span class="text-xs font-black uppercase tracking-widest text-brandLightPurple">No Waitlists in NJ & OH</span>`
// Let's make the whole thing flash (animate-pulse) and maybe turn it red or just keep brand colors but flash the text.
landingHtml = landingHtml.replace(
    '<span class="text-xs font-black uppercase tracking-widest text-brandLightPurple">No Waitlists in NJ & OH</span>',
    '<span class="text-xs font-black uppercase tracking-widest text-brandLightPurple animate-pulse text-red-500" style="animation-duration: 1s;">No Waitlists in NJ & OH</span>'
);

// "can the insurance icons match the website" (remove grayscale/opacity)
// It currently has: `opacity-60 grayscale hover:grayscale-0`
landingHtml = landingHtml.replace('opacity-60 grayscale hover:grayscale-0', '');
// Wait, `flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale\nhover:grayscale-0 transition-all duration-500`
landingHtml = landingHtml.replace('flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60 grayscale\nhover:grayscale-0 transition-all duration-500', 'flex flex-wrap justify-center items-center gap-8 md:gap-12 transition-all duration-500');

// "Can we add a picture where the Request a free consult box is and put the box somewhere else"
// Extract the form block
const formRegex = /<!-- Quick Intake Form Overlay -->[\s\S]*?<\/div>\s*<\/div>\s*<\/div>/;
const formMatch = landingHtml.match(formRegex);

if (formMatch) {
    const formBlock = formMatch[0];
    
    // Replace form in hero with image
    const imageReplacement = `<!-- Hero Image -->
                <div data-aos="fade-left" class="relative">
                    <div class="absolute -top-6 -right-6 w-32 h-32 bg-brandLightPurple/20 rounded-full blur-3xl z-0"></div>
                    <img src="https://images.unsplash.com/photo-1587313835697-3908c6cb41fa?q=80&w=2000&auto=format&fit=crop" alt="ABA Therapy" class="relative z-10 w-full h-auto object-cover rounded-[2.5rem] shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-square">
                </div>`;
                
    landingHtml = landingHtml.replace(formRegex, imageReplacement);
    
    // Inject form block below the Hero Section, right before Trust Badges
    const insertTarget = '<!-- TRUST BADGES (Insurances) -->';
    const formSection = `
        <!-- DEDICATED INTAKE SECTION -->
        <section class="py-16 bg-gray-50 border-t border-gray-100" id="intake-section">
            <div class="max-w-3xl mx-auto px-6">
                ${formBlock.replace('id="form"', 'id="form" class="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-gray-100 relative"')}
            </div>
        </section>
        
        `;
    landingHtml = landingHtml.replace(insertTarget, formSection + insertTarget);
    console.log('Moved form and injected image into landing-ads.html');
}

fs.writeFileSync('C:/Users/nates/Documents/Blog Site/NewBridgesABA/landing-ads.html', landingHtml, 'utf8');

// 3. Process index.html for identical wording/color changes
let indexHtml = fs.readFileSync('C:/Users/nates/Documents/Blog Site/NewBridgesABA/index.html', 'utf8');

indexHtml = indexHtml.replace('In School &amp; At Home.', 'In School &amp; Home.');
indexHtml = indexHtml.replace('In School & At Home.', 'In School & Home.');
indexHtml = indexHtml.replace('In School &amp; At Home', 'In School &amp; Home');
indexHtml = indexHtml.replace('In School & At Home', 'In School & Home');
indexHtml = indexHtml.replace('Immediate Openings Available', 'NO WAITLIST');
indexHtml = indexHtml.replace('opacity-60 grayscale hover:grayscale-0 transition-all duration-500', 'transition-all duration-500');
indexHtml = indexHtml.replace('opacity-60 grayscale hover:grayscale-0', '');
indexHtml = indexHtml.replace(
    'bg-green-500 text-white rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl shadow-green-500/20 border-4 border-white">4</div>',
    'bg-brandOrange text-brandPurple rounded-full flex items-center justify-center text-2xl font-black mb-6 shadow-xl shadow-brandOrange/20 border-4 border-white">4</div>'
);

fs.writeFileSync('C:/Users/nates/Documents/Blog Site/NewBridgesABA/index.html', indexHtml, 'utf8');
console.log('Processed index.html');
