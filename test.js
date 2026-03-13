const fs = require('fs');
let header = fs.readFileSync('header.js', 'utf8');

// I will just remove the x-cloak from the header.js mobile menu for absolute safety.
// x-cloak combined with innerHTML injection often causes permanent hidden state because Alpine assumes it already evaluated the tree on DOMContentLoaded.
// Since the header is injected anyway, there's no "flash of unstyled content" because it's completely missing until it's ready.

header = header.replace(/x-cloak/g, '');
fs.writeFileSync('header.js', header);
console.log('Removed x-cloak from mobile menu to fix initialization bug');
