const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

const target = "qM=";
const idx = content.indexOf(target);
if (idx !== -1) {
  console.log(content.substring(idx, idx + 6000));
} else {
  console.log("Not found");
}
