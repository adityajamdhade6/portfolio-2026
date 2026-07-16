const fs = require('fs');
const data = require('./capstone_data.json');

// Let's parse the minified JSX code to extract readable strings
// Since it's minified React, text strings are wrapped in double quotes or template literals, e.g. children:"..."
for (const [key, code] of Object.entries(data)) {
  console.log(`\n\n======================================================`);
  console.log(`PROJECT ID: ${key}`);
  console.log(`======================================================`);
  
  // Find all children strings and headers
  const re = /children:\s*("[^"]+"|`[^`]+`|\[[^\]]+\]|e)/g;
  let match;
  const matches = [];
  
  // Let's search for text strings in the minified output
  const strMatches = code.match(/"[^"]{10,200}"|`[^`]{10,200}`/g) || [];
  strMatches.forEach(str => {
    // Clean up escaping
    const cleaned = str.replace(/^["`]|["`]$/g, '').replace(/\\u003c/g, '<').replace(/\\u003e/g, '>').replace(/\\n/g, '\n');
    if (!cleaned.includes("className") && !cleaned.includes("style") && !cleaned.includes("svg") && !cleaned.includes("path")) {
      matches.push(cleaned);
    }
  });
  
  // Print unique sentences
  const seen = new Set();
  matches.forEach(m => {
    const trimmed = m.trim();
    if (trimmed.length > 5 && !seen.has(trimmed)) {
      seen.add(trimmed);
      console.log(`- ${trimmed}`);
    }
  });
}
