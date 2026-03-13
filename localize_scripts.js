const fs = require('fs');

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // Replace Tailwind
  content = content.replace(/https:\/\/cdn\.tailwindcss\.com/g, 'vendor/tailwindcss.js');
  
  // Replace Alpine JS Base
  content = content.replace(/https:\/\/unpkg\.com\/alpinejs@3\.x\.x\/dist\/cdn\.min\.js/g, 'vendor/alpine.min.js');
  
  // Replace Alpine JS Collapse Plugin
  content = content.replace(/https:\/\/unpkg\.com\/@alpinejs\/collapse@3\.x\.x\/dist\/cdn\.min\.js/g, 'vendor/alpine-collapse.min.js');

  // Replace AOS CSS
  content = content.replace(/https:\/\/unpkg\.com\/aos@2\.3\.1\/dist\/aos\.css/g, 'vendor/aos.css');

  // Replace AOS JS
  content = content.replace(/https:\/\/unpkg\.com\/aos@2\.3\.1\/dist\/aos\.js/g, 'vendor/aos.js');

  fs.writeFileSync(f, content);
});

console.log('Dependencies updated in all HTML files.');
