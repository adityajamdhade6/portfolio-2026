const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

// Print full body of component QM (Financial market dynamics description details)
console.log("=== COMPONENT QM ===");
console.log(content.substring(693229, 693229 + 4000));

// Print full body of component JM (Simple Threads business analysis description details)
console.log("\n=== COMPONENT JM ===");
console.log(content.substring(710741, 710741 + 4000));
