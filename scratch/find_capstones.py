import re

bundle_path = "/Users/adi/Desktop/Aditya's Portfolio/src/assets/bundle.js"

with open(bundle_path, 'r', encoding='utf-8') as f:
    content = f.read()

targets = ["financial-market", "simple-threads", "streamverse-etl"]

for target in targets:
    print(f"\n==================== TARGET: {target} ====================")
    matches = [m.start() for m in re.finditer(re.escape(target), content)]
    for idx in matches:
        start = max(0, idx - 500)
        end = min(len(content), idx + 1500)
        snippet = content[start:end]
        print(f"Match at index {idx}:\n{snippet}\n")
