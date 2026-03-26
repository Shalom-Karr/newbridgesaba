const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/nates/Documents/Blog Site/NewBridgesABA/src';

const jsFiles = ['analytics.js', 'footer.js', 'header.js', 'supabase.js'];

const htmlFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.html'));

htmlFiles.forEach(file => {
    let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    let updated = content;

    // Update JS paths to point to /js/ since we moved them there
    jsFiles.forEach(js => {
        // Find src="/analytics.js" or src="analytics.js" and replace with src="/js/analytics.js"
        updated = updated.replace(new RegExp(`src=[\"']\/?${js}[\"']`, 'g'), `src="/js/${js}"`);
    });

    if (content !== updated) {
        fs.writeFileSync(path.join(srcDir, file), updated, 'utf8');
        console.log('Updated JS references in', file);
    }
});

