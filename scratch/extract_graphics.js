const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

const components = ["BM", "VM"];
components.forEach(comp => {
  const matches = [];
  let pos = 0;
  while ((pos = content.indexOf(comp + "=", pos)) !== -1) {
    matches.push(pos);
    pos += comp.length + 1;
  }
  
  console.log(`\n================== COMPONENT: ${comp} ==================`);
  matches.forEach((idx, i) => {
    console.log(`Match ${i+1} at index ${idx}:`);
    console.log(content.substring(idx, Math.min(content.length, idx + 1800)));
  });
});
