const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

// List of project identifiers in route or component format
const identifiers = [
  "city-open",
  "retro-rides",
  "soulstretch",
  "velvoria",
  "financial-market",
  "simple-threads",
  "gold-prediction",
  "titanic-prediction",
  "stock-price"
];

console.log("=== COMPONENT CONTENT EXTRACTION ===");
identifiers.forEach(id => {
  const idx = content.indexOf(id);
  if (idx !== -1) {
    console.log(`\n--- Match for: ${id} (around index ${idx}) ---`);
    // Find enclosing component structure or return some text
    console.log(content.substring(Math.max(0, idx - 100), Math.min(content.length, idx + 1000)));
  } else {
    console.log(`\n--- No exact match for: ${id} ---`);
  }
});
