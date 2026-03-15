const fs = require('fs');

let header = fs.readFileSync('header.js', 'utf8');
header = header.replace(/if\s*\(typeof window\.Alpine\.start === 'function'\)\s*\{\s*try\s*\{\s*window\.Alpine\.start\(\);\s*\}\s*catch\s*\(e\)\s*\{\}\s*\}/, '');
fs.writeFileSync('header.js', header);

const files = fs.readdirSync('.').filter(f => f.endsWith('.html'));
const collapseScript = '<script defer src="https://unpkg.com/@alpinejs/collapse@3.x.x/dist/cdn.min.js"></script>\n    <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>';

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  if (!content.includes('@alpinejs/collapse')) {
    content = content.replace(/<script defer src="https:\/\/unpkg\.com\/alpinejs@3\.x\.x\/dist\/cdn\.min\.js"><\/script>/, collapseScript);
    fs.writeFileSync(file, content);
  }
});

console.log('Fixed Alpine warnings');
