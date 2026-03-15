const fs = require('fs');
let header = fs.readFileSync('header.js', 'utf8');

// The issue is that backdrop-filter creates a new stacking context and containing block.
// Any ixed child is constrained to the size of the <nav>.
// By making the <nav> full screen when mobileMenu is true, the overlay can fill the screen.
header = header.replace(/<nav class="fixed top-0 left-0 w-full max-w-\[100vw\] z-\[100\] bg-white\/80 backdrop-blur-2xl border-b border-gray-100\/50"/g,
    '<nav class="fixed top-0 left-0 w-full max-w-[100vw] z-[100] bg-white/80 backdrop-blur-2xl border-b border-gray-100/50 transition-all duration-300" :class="{ \'h-screen !bg-white\': mobileMenu }"');

fs.writeFileSync('header.js', header);
console.log('Fixed mobile menu overlay height issue');
