const fs = require('fs');
const content = fs.readFileSync('/Users/adi/Desktop/Aditya\'s Portfolio/src/assets/bundle.js', 'utf8');

// Find all matches for project definitions
const regex = /{id:"([^"]+)",title:"([^"]+)",category:"([^"]+)",image:"([^"]+)",link:"([^"]+)"}/g;
let match;
console.log("=== PROJECT LISTINGS ===");
while ((match = regex.exec(content)) !== null) {
  console.log({
    id: match[1],
    title: match[2],
    category: match[3],
    image: match[4],
    link: match[5]
  });
}

// Find larger text blocks related to Zupper and Capstones
const keywords = ["zupper", "nurture", "zoom", "inhaus", "inventive", "iitj", "soulstretch", "velvoria", "retro", "tennis", "city-open"];
console.log("\n=== KEYWORD MATCHES ===");
keywords.forEach(keyword => {
  const idx = content.toLowerCase().indexOf(keyword.toLowerCase());
  if (idx !== -1) {
    console.log(`\n--- Keyword: ${keyword} ---`);
    console.log(content.substring(Math.max(0, idx - 200), Math.min(content.length, idx + 800)));
  }
});
