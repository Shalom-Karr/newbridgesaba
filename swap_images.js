const fs = require('fs');
const path = require('path');

const rootDir = 'C:/Users/nates/Documents/Blog Site/NewBridgesABA';

const filesToUpdate = ['faq.html', 'services.html'];
const replacements = [
    { from: 'stock-photo-costume-call-center-girl-office-headset-2699551181.jpg', to: 'shutterstock_2699551181.jpg' },
    { from: 'kid-girl-playing-logical-toy-desk-nursery-room-kindergarten-child-arranging-sorting-colors-sizes-92394869.jpg', to: 'dreamstime_s_92394869.jpg' },
    { from: 'stock-photo-volunteer-teacher-helping-class-of-preschool-kids-305473358.jpg', to: 'empowering children.jpeg' },
    { from: 'stock-photo-putting-objects-into-bowls-while-hanging-2688428795.jpg', to: 'shutterstock_2688428691.jpg' } // closest matching new filename based on your upload list
];

filesToUpdate.forEach(file => {
    let content = fs.readFileSync(path.join(rootDir, file), 'utf8');
    let updated = content;
    replacements.forEach(r => {
        updated = updated.replace(r.from, r.to);
    });
    if (content !== updated) {
        fs.writeFileSync(path.join(rootDir, file), updated, 'utf8');
        console.log('Updated images in', file);
    }
});
