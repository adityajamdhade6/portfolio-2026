const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

const targets = [
  "QM="
];

targets.forEach(target => {
  const matches = [];
  let pos = 0;
  while ((pos = content.indexOf(target, pos)) !== -1) {
    matches.push(pos);
    pos += target.length + 1;
  }
  
  console.log(`\n================== TARGET: ${target} ==================`);
  matches.forEach((idx, i) => {
    console.log(`Match ${i+1} at index ${idx}:`);
    console.log(content.substring(idx, Math.min(content.length, idx + 8000)));
  });
});
