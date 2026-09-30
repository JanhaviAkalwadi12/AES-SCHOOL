"""
Verification Script
Verifies that all local hyperlinks, image references, scripts, and CSS files exist on disk.
"""

import os
import re

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def verify_all_references():
    html_files = [os.path.join(BASE_DIR, 'index.html')]
    pages_dir = os.path.join(BASE_DIR, 'pages')
    if os.path.exists(pages_dir):
        for f in os.listdir(pages_dir):
            if f.endswith('.html'):
                html_files.append(os.path.join(pages_dir, f))
                
    broken_count = 0
    total_checked = 0
    
    for hf in html_files:
        with open(hf, 'r', encoding='utf-8') as f:
            content = f.read()
        dir_of_file = os.path.dirname(hf)
        
        # Regex to find src and href attribute values
        pattern = re.compile(r'(?:src|href)=["\']([^"\']+)["\']')
        matches = pattern.findall(content)
        
        for r in matches:
            if r.startswith(('http://', 'https://', 'tel:', 'mailto:', '#', 'javascript:', 'https://wa.me')):
                continue
            clean_r = r.split('?')[0].split('#')[0]
            if not clean_r:
                continue
            target = os.path.normpath(os.path.join(dir_of_file, clean_r))
            total_checked += 1
            if not os.path.exists(target):
                print(f"[ERROR] Broken link in {os.path.basename(hf)}: {r} -> {target}")
                broken_count += 1

    if broken_count == 0:
        print(f"[SUCCESS] All {total_checked} links, images, CSS and JS references verified perfectly!")
    else:
        print(f"[FAILURE] Found {broken_count} broken references.")

if __name__ == '__main__':
    verify_all_references()
