const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

// Search for nurture and zoom case study components
const targets = ["nurture", "zoom", "Lv=", "FM="];

targets.forEach(target => {
  const matches = [];
  let pos = 0;
  while ((pos = content.indexOf(target, pos)) !== -1) {
    matches.push(pos);
    pos += target.length + 1;
    if (matches.length > 3) break; // only grab first 3 matches
  }
  
  console.log(`\n================== TARGET: ${target} ==================`);
  matches.forEach((idx, i) => {
    console.log(`Match ${i+1} at index ${idx}:`);
    console.log(content.substring(idx - 200, Math.min(content.length, idx + 1000)));
    console.log("...");
  });
});
