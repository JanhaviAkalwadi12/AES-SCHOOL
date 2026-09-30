"""
Content Generator & Data Utility for Alnavar Education Society
Generates structured JSON and JS data models for faculty, events, achievements, facilities and institutional information.
"""

import os
import json

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BASE_DIR, "data")

SCHOOL_INFO = {
    "societyName": "Alnavar Education Society",
    "schoolName": "Smt. Annapurna C. Hiremath English Medium Primary / High School",
    "shortName": "A. C. Hiremath English Medium School",
    "location": "Alnavar, Dharwad District, Karnataka",
    "motto": "LEARN • GROW • LEAD",
    "tagline": "Where Knowledge Meets Character, and Potential Becomes Purpose.",
    "principal": {
        "name": "Smt. Shobha D Desai",
        "designation": "Principal",
        "qualification": "M.A., B.Ed. [Placeholder for official degrees]",
        "photo": "assets/images/faculty/principal-portrait.jpg",
        "deskPhoto": "assets/images/faculty/principal-smt-shobha-desai.jpg",
        "message": "Welcome to Smt. Annapurna C. Hiremath English Medium Primary & High School. Our institution stands as a beacon of academic excellence and value-based holistic education in Alnavar. Guided by the visionary leadership of the Alnavar Education Society, we nurture young minds to develop intellectual curiosity, moral integrity, physical vitality, and compassionate leadership. We welcome parents and students into our vibrant, disciplined, and forward-looking academic family."
    },
    "placeholders": {
        "phone": "[ADD SCHOOL PHONE]",
        "email": "[ADD SCHOOL EMAIL]",
        "address": "Alnavar Education Society Campus, Station Road / Main Road, Alnavar - 581103, Dist. Dharwad, Karnataka",
        "admissionHelpline": "[ADD ADMISSIONS PHONE]",
        "affiliationNo": "[ADD AFFILIATION NO]",
        "schoolCode": "[ADD SCHOOL CODE]"
    },
    "stats": [
        {"value": 25, "suffix": "+", "label": "Years of Dedication", "placeholder": "[XX]+"},
        {"value": 1200, "suffix": "+", "label": "Enrolled Students", "placeholder": "[XXXX]+"},
        {"value": 45, "suffix": "+", "label": "Qualified Faculty", "placeholder": "[XX]+"},
        {"value": 100, "suffix": "%", "label": "SSLC Pass Record", "placeholder": "[100%]"},
        {"value": 30, "suffix": "+", "label": "Co-Curricular Clubs", "placeholder": "[XX]+"},
        {"value": 50, "suffix": "+", "label": "Annual Competitions", "placeholder": "[XX]+"}
    ]
}

def generate_data_files():
    os.makedirs(DATA_DIR, exist_ok=True)
    
    # 1. school-data.js
    with open(os.path.join(DATA_DIR, "school-data.js"), "w", encoding="utf-8") as f:
        f.write(f"/**\n * Core Institutional Data\n * Alnavar Education Society\n */\nconst SCHOOL_DATA = {json.dumps(SCHOOL_INFO, indent=2)};\n\nif (typeof module !== 'undefined') module.exports = SCHOOL_DATA;\n")
        
    print("  [OK] Generated data/school-data.js")

if __name__ == "__main__":
    generate_data_files()
