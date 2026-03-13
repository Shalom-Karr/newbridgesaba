const fs = require('fs');
const files = fs.readdirSync('.').filter(f => f.endsWith('.html') || f.endsWith('.js'));

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');

  // 1. TYPOGRAPHY (Scale down massive text for mobile)
  content = content.replace(/text-3xl md:text-5xl lg:text-7xl lg:text-9xl/g, 'text-3xl md:text-5xl lg:text-7xl lg:text-9xl');
  content = content.replace(/text-4xl md:text-6xl lg:text-8xl/g, 'text-4xl md:text-6xl lg:text-8xl');
  content = content.replace(/text-3xl md:text-5xl lg:text-7xl/g, 'text-3xl md:text-5xl lg:text-7xl');
  content = content.replace(/text-3xl md:text-5xl lg:text-6xl/g, 'text-3xl md:text-5xl lg:text-6xl');
  content = content.replace(/text-3xl md:text-5xl/g, 'text-3xl md:text-5xl');

  // 2. PADDING & MARGINS (Reduce massive whitespace on mobile)
  content = content.replace(/py-16 lg:py-32/g, 'py-16 lg:py-16 lg:py-32');
  content = content.replace(/py-12 lg:py-24/g, 'py-12 lg:py-12 lg:py-24');
  content = content.replace(/py-10 lg:py-20/g, 'py-10 lg:py-10 lg:py-20');
  content = content.replace(/pt-24 pb-16 lg:pt-32 lg:pb-24/g, 'pt-24 pb-16 lg:pt-32 lg:pb-24');
  content = content.replace(/pt-32 pb-20 md:pt-48 md:pb-40/g, 'pt-32 pb-20 md:pt-32 pb-20 md:pt-48 md:pb-40');
  
  content = content.replace(/mb-8 lg:mb-12 lg:mb-24/g, 'mb-8 lg:mb-12 lg:mb-8 lg:mb-12 lg:mb-24');
  content = content.replace(/mb-10 lg:mb-20/g, 'mb-10 lg:mb-10 lg:mb-20');
  content = content.replace(/mb-8 lg:mb-16/g, 'mb-8 lg:mb-8 lg:mb-16');
  content = content.replace(/mb-8 lg:mb-12/g, 'mb-8 lg:mb-8 lg:mb-12');

  // 3. GAPS (Reduce grid/flex gaps on mobile)
  content = content.replace(/gap-6 lg:gap-8 lg:p-12 lg:gap-24/g, 'gap-6 lg:gap-8 lg:p-12 lg:gap-6 lg:gap-8 lg:p-12 lg:gap-24');
  content = content.replace(/gap-8 lg:gap-16/g, 'gap-8 lg:gap-8 lg:gap-16');
  content = content.replace(/gap-6 lg:gap-8 lg:p-12/g, 'gap-6 lg:gap-6 lg:gap-8 lg:p-12');
  content = content.replace(/gap-6 lg:gap-6 lg:p-10/g, 'gap-6 lg:gap-6 lg:gap-6 lg:p-10');

  // 4. INNER PADDINGS (Cards)
  content = content.replace(/p-8 lg:p-12/g, 'p-8 lg:p-8 lg:p-12');
  content = content.replace(/p-6 lg:p-10/g, 'p-6 lg:p-6 lg:p-10');

  // 5. BUTTONS (Stack on mobile, center text)
  content = content.replace(/flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5/g, 'flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5');
  content = content.replace(/flex flex-col sm:flex-row justify-center gap-4 sm:gap-6/g, 'flex flex-col sm:flex-row justify-center gap-4 sm:gap-6');
  
  content = content.replace(/px-8 md:px-12 py-4 md:py-6 rounded-2xl text-center flex items-center justify-center/g, 'px-8 md:px-12 py-4 md:py-6 rounded-2xl text-center flex items-center justify-center');
  content = content.replace(/px-8 md:px-12 py-4 md:py-5 rounded-2xl text-center flex items-center justify-center/g, 'px-8 md:px-12 py-4 md:py-5 rounded-2xl text-center flex items-center justify-center');
  content = content.replace(/px-6 md:px-10 py-4 md:py-5 rounded-2xl text-center flex items-center justify-center/g, 'px-6 md:px-10 py-4 md:py-5 rounded-2xl text-center flex items-center justify-center');

  // 6. BLOBS & BACKGROUND SHAPES (Scale down so they don't break viewport width/overflow on mobile X-axis)
  content = content.replace(/w-64 h-64 md:w-96 md:h-96/g, 'w-64 h-64 md:w-96 md:h-96');
  content = content.replace(/w-\[600px\] h-\[600px\]/g, 'w-72 h-72 md:w-[600px] md:h-[600px]');
  content = content.replace(/w-\[500px\] h-\[500px\]/g, 'w-64 h-64 md:w-[500px] md:h-[500px]');

  // Write changes
  fs.writeFileSync(f, content);
});

// Fix header.js specific mobile menu text size
let header = fs.readFileSync('header.js', 'utf8');
header = header.replace(/text-3xl font-black text-gray-900/g, 'text-2xl md:text-3xl font-black text-gray-900');
fs.writeFileSync('header.js', header);

console.log('Mobile optimizations applied!');
