const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

const targets = ["JM=", "QM=", "KM=", "qM=", "YM="];

targets.forEach(t => {
  const idx = content.indexOf(t);
  if (idx !== -1) {
    console.log(`\n\n==================== ${t} ====================`);
    // Dump 12000 chars to cover the entire page
    console.log(content.substring(idx, idx + 12000));
  }
});
