const fs = require('fs');
let index = fs.readFileSync('index.html', 'utf8');

index = index.replace(
    '<div class="flex flex-wrap gap-4">\r\n                        <a href="contact.html" class="bg-brandPurple text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl text-center flex items-center justify-center font-bold text-lg hover:scale-105 transition shadow-xl shadow-brandPurple/30">Discover ABA Therapy Today!</a>\r\n                        <a href="services.html" class="bg-white border-2 border-brandPurple/20 text-brandPurple px-6 md:px-10 py-4 md:py-5 rounded-2xl text-center flex items-center justify-center font-bold text-lg hover:bg-brandPurple hover:text-white transition">Explore Our Care</a>\r\n                    </div>',
    '<div class="flex flex-col xl:flex-row gap-4">\n                        <a href="contact.html" class="bg-brandPurple text-white px-6 md:px-10 py-4 md:py-5 rounded-2xl text-center flex items-center justify-center font-bold text-lg hover:scale-105 transition shadow-xl shadow-brandPurple/30 whitespace-nowrap">Discover ABA Therapy Today!</a>\n                        <a href="services.html" class="bg-white border-2 border-brandPurple/20 text-brandPurple px-6 md:px-10 py-4 md:py-5 rounded-2xl text-center flex items-center justify-center font-bold text-lg hover:bg-brandPurple hover:text-white transition whitespace-nowrap">Explore Our Care</a>\n                    </div>'
);
fs.writeFileSync('index.html', index);
console.log('Fixed button wrapping');
