const fs = require('fs');

// 1. Fix the header positioning
let header = fs.readFileSync('header.js', 'utf8');
header = header.replace(/<nav class="fixed w-full/g, '<nav class="fixed top-0 left-0 w-full max-w-[100vw]');
fs.writeFileSync('header.js', header);

// 2. Fix the AOS (Animate on Scroll) horizontal scroll bug
// AOS 'fade-left' and 'fade-right' animations push elements off-screen before they animate in.
// This causes the browser to widen the page beyond 100vw on mobile, leading to horizontal scrolling.
// We fix this by adding overflow-x-hidden to the body tag of every HTML file.
const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  if (!content.includes('overflow-x-hidden')) {
    content = content.replace(/<body class="/g, '<body class="overflow-x-hidden w-full ');
    fs.writeFileSync(f, content);
  }
});

console.log('Fixed mobile hamburger menu overflow issue!');
