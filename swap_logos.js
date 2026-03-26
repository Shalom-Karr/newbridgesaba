const fs = require('fs');

const path = 'C:/Users/nates/Documents/Blog Site/NewBridgesABA/landing-ads.html';
let html = fs.readFileSync(path, 'utf8');

const regex = /<span class="font-black text-gray-800 text-lg md:text-xl tracking-tight">Care Source<\/span>[\s\S]*?<span class="font-black text-gray-800 text-lg md:text-xl tracking-tight">Evernorth\/Cigna<\/span>/;

const replacement = `<img src="images/caresource.svg" alt="Care Source" class="h-8 md:h-10 w-auto object-contain">
                      <img src="images/evernorth.svg" alt="Evernorth" class="h-8 md:h-10 w-auto object-contain">`;

if (regex.test(html)) {
    html = html.replace(regex, replacement);
    fs.writeFileSync(path, html, 'utf8');
    console.log('Replaced text with logos using regex in landing-ads.html');
} else {
    console.log('Could not find target string in landing-ads.html');
}
