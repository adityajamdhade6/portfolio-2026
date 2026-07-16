import re
import json

with open("scratch/bundle.js", "r", encoding="utf-8") as f:
    content = f.read()

# Look for zoom in the bundle
zoom_matches = re.finditer(r'.{0,50}zoom.{0,50}', content, re.IGNORECASE)
for i, match in enumerate(zoom_matches):
    print(f"Match {i}: {match.group(0)}")
