"""
Image Organizer Utility
Handles optimization, rotation, categorization and asset management for
Alnavar Education Society's Smt. Annapurna C. Hiremath English Medium Primary / High School
"""

import os
import shutil
from PIL import Image

SOURCE_DIR = r"C:/Users/hp/.gemini/antigravity/brain/422ff626-fa72-4fe5-a890-ec8c1fca1063/.user_uploaded"
BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def organize_uploaded_images():
    print("Processing uploaded images...")
    
    # 1. School Logo
    logo_src = os.path.join(SOURCE_DIR, "media_1790595619717.png")
    if os.path.exists(logo_src):
        logo_dest = os.path.join(BASE_DIR, "assets", "images", "school", "school-logo.png")
        shutil.copy2(logo_src, logo_dest)
        
        # Also create favicon.ico
        img = Image.open(logo_src)
        favicon_dest = os.path.join(BASE_DIR, "favicon.ico")
        img.resize((64, 64), Image.Resampling.LANCZOS).save(favicon_dest, format="ICO")
        print("  [OK] Saved school logo and favicon.ico")

    # 2. Principal Smt. Shobha D Desai
    principal_src = os.path.join(SOURCE_DIR, "media_1790595676070.png")
    if os.path.exists(principal_src):
        img = Image.open(principal_src)
        # Rotate 90 degrees clockwise (270 deg)
        img_rotated = img.rotate(270, expand=True)
        
        # Save full desk photo
        full_dest = os.path.join(BASE_DIR, "assets", "images", "faculty", "principal-smt-shobha-desai.jpg")
        img_rotated.convert("RGB").save(full_dest, "JPEG", quality=92)
        
        # Create a nice cropped portrait focused on the principal
        w, h = img_rotated.size
        left = int(w * 0.40)
        top = int(h * 0.05)
        right = int(w * 0.82)
        bottom = int(h * 0.95)
        portrait = img_rotated.crop((left, top, right, bottom))
        portrait_dest = os.path.join(BASE_DIR, "assets", "images", "faculty", "principal-portrait.jpg")
        portrait.convert("RGB").save(portrait_dest, "JPEG", quality=95)
        print("  [OK] Processed and oriented Principal photo and portrait crop")

    # 3. Faculty / Staff Group
    faculty_src = os.path.join(SOURCE_DIR, "media_1790595610254.jpg")
    if os.path.exists(faculty_src):
        f_dest1 = os.path.join(BASE_DIR, "assets", "images", "faculty", "staff-group.jpg")
        f_dest2 = os.path.join(BASE_DIR, "assets", "images", "school", "faculty-team.jpg")
        f_dest3 = os.path.join(BASE_DIR, "assets", "images", "gallery", "gallery-faculty.jpg")
        shutil.copy2(faculty_src, f_dest1)
        shutil.copy2(faculty_src, f_dest2)
        shutil.copy2(faculty_src, f_dest3)
        print("  [OK] Saved faculty team photos")

    # 4. Student Council / Investiture
    council_src = os.path.join(SOURCE_DIR, "media_1790595554137.jpg")
    if os.path.exists(council_src):
        c_dest1 = os.path.join(BASE_DIR, "assets", "images", "students", "student-council.jpg")
        c_dest2 = os.path.join(BASE_DIR, "assets", "images", "events", "investiture-ceremony.jpg")
        c_dest3 = os.path.join(BASE_DIR, "assets", "images", "gallery", "gallery-student-council.jpg")
        shutil.copy2(council_src, c_dest1)
        shutil.copy2(council_src, c_dest2)
        shutil.copy2(council_src, c_dest3)
        print("  [OK] Saved student council and investiture ceremony photos")

    # 5. Campus Ground / Assembly
    campus_src = os.path.join(SOURCE_DIR, "media_1790595653432.jpg")
    if os.path.exists(campus_src):
        g_dest1 = os.path.join(BASE_DIR, "assets", "images", "campus", "campus-ground-assembly.jpg")
        g_dest2 = os.path.join(BASE_DIR, "assets", "images", "sports", "sports-ground.jpg")
        g_dest3 = os.path.join(BASE_DIR, "assets", "images", "school", "hero-campus.jpg")
        g_dest4 = os.path.join(BASE_DIR, "assets", "images", "gallery", "gallery-campus-assembly.jpg")
        shutil.copy2(campus_src, g_dest1)
        shutil.copy2(campus_src, g_dest2)
        shutil.copy2(campus_src, g_dest3)
        shutil.copy2(campus_src, g_dest4)
        print("  [OK] Saved campus ground, assembly and hero visuals")

def generate_styled_facility_graphics():
    """Generates elegant modern SVG visual graphics for facilities & wings"""
    print("Generating supplementary facility visuals...")
    
    facilities = [
        ("science-lab", "Science & Discovery Laboratory", "Hands-on Chemistry, Physics & Biology experiments", "#071A3D", "#123D73"),
        ("computer-lab", "Advanced Computing & ICT Lab", "Modern computers, digital literacy & coding stations", "#0F172A", "#1E40AF"),
        ("digital-library", "Knowledge & Resource Library", "Rich collection of literature, periodicals & digital archives", "#1E1B4B", "#312E81"),
        ("smart-classrooms", "Interactive Smart Classrooms", "Audio-visual digital boards and collaborative seating", "#064E3B", "#047857"),
        ("atl-innovation-lab", "ATL Innovation & Robotics Hub", "STEM kits, robotics, microcontrollers & creative prototyping", "#431407", "#C2410C"),
        ("art-craft-studio", "Creative Arts & Cultural Studio", "Fine arts, music, dramatics and traditional crafts", "#4C0519", "#9F1239"),
        ("sports-complex", "Sports Ground & Athletics Field", "Track, volleyball, kabaddi, badminton & indoor games", "#14532D", "#15803D"),
        ("transportation", "Safe Student Transportation", "Dedicated school buses covering surrounding rural and urban routes", "#78350F", "#B45309"),
        ("kindergarten-wing", "Pre-Primary Kindergarten Wing", "Playful, nurturing & activity-centric foundational learning", "#831843", "#BE185D"),
        ("primary-wing", "Primary School Academic Wing", "Holistic foundational literacy, numeracy & moral development", "#1E3A8A", "#2563EB"),
        ("highschool-wing", "High School Academic Wing", "Rigorous academic preparation, board focus & leadership", "#0F172A", "#334155"),
    ]
    
    for filename, title, subtitle, col1, col2 in facilities:
        svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{col1}" />
      <stop offset="100%" stop-color="{col2}" />
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#D9A441" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#D9A441" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    </pattern>
  </defs>
  
  <rect width="800" height="500" fill="url(#bgGrad)"/>
  <rect width="800" height="500" fill="url(#glow)"/>
  <rect width="800" height="500" fill="url(#grid)"/>
  
  <circle cx="700" cy="100" r="180" fill="none" stroke="rgba(217, 164, 65, 0.15)" stroke-width="2"/>
  <circle cx="700" cy="100" r="140" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-dasharray="6,6" stroke-width="2"/>
  <circle cx="100" cy="420" r="160" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1.5"/>
  
  <rect x="60" y="50" width="180" height="28" rx="14" fill="rgba(217, 164, 65, 0.2)" stroke="#D9A441" stroke-width="1"/>
  <text x="150" y="69" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="700" fill="#D9A441" text-anchor="middle" letter-spacing="1.5">ALNAVAR CAMPUS</text>
  
  <text x="60" y="270" font-family="'Plus Jakarta Sans', sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" letter-spacing="-0.5">
    {title}
  </text>
  <text x="60" y="315" font-family="'Inter', sans-serif" font-size="18" font-weight="400" fill="rgba(255,255,255,0.85)">
    {subtitle}
  </text>
  
  <line x1="60" y1="365" x2="740" y2="365" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  <text x="60" y="415" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="600" fill="#D9A441" letter-spacing="2">
    LEARN - GROW - LEAD
  </text>
  <text x="740" y="415" font-family="'Inter', sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.6)" text-anchor="end">
    Smt. Annapurna C. Hiremath School
  </text>
</svg>'''
        
        fpath = os.path.join(BASE_DIR, "assets", "images", "facilities", f"{filename}.svg")
        with open(fpath, "w", encoding="utf-8") as f:
            f.write(svg_content)
            
        gpath = os.path.join(BASE_DIR, "assets", "images", "gallery", f"{filename}.svg")
        with open(gpath, "w", encoding="utf-8") as f:
            f.write(svg_content)

    print("  [OK] Generated SVG visuals for all facilities and academic wings")

def create_sample_documents():
    """Create sample placeholder documents for downloadables"""
    print("Creating sample institutional documents...")
    docs = [
        ("prospectus/school-prospectus-2026-27.txt", "ALNAVAR EDUCATION SOCIETY'S\nSMT. ANNAPURNA C. HIREMATH ENGLISH MEDIUM PRIMARY / HIGH SCHOOL\n\nOFFICIAL ADMISSION PROSPECTUS 2026-2027\n\n[Official Prospectus Document Placeholder]\n- Academic Vision\n- Curriculum & Pedagogy\n- Fee Schedule\n- Code of Conduct"),
        ("syllabus/primary-wing-syllabus.txt", "PRIMARY WING (GRADES 1 TO 7) SYLLABUS & CURRICULUM BLUEPRINT\nState Board & Comprehensive English Medium Curriculum\n\nSubjects: English, Mathematics, Environmental Studies, Science, Social Studies, Kannada, Hindi, Art & Craft, Physical Education, Moral Science."),
        ("syllabus/high-school-syllabus.txt", "HIGH SCHOOL (GRADES 8 TO 10) ACADEMIC CURRICULUM & SSLC PREPARATION BLUEPRINT\n\nCore Subjects: English, Mathematics, Science (Physics, Chemistry, Biology), Social Science (History, Civics, Geography, Economics), Second Language, Third Language, Computer Literacy."),
        ("model-papers/sslc-model-question-paper.txt", "HIGH SCHOOL SECTION - MODEL QUESTION PAPERS & BLUEPRINT\nSSLC Board Pattern Preparatory Question Papers & Practice Sets\n\nIncludes Mathematics, Science, Social Science, and Language Model Papers."),
        ("mandatory-disclosure/mandatory-disclosure-details.txt", "MANDATORY PUBLIC DISCLOSURE (APPENDIX-IX)\n\nSchool Name: SMT. ANNAPURNA C. HIREMATH ENGLISH MEDIUM PRIMARY / HIGH SCHOOL\nSociety: ALNAVAR EDUCATION SOCIETY (R)\nLocation: Alnavar, Karnataka\nPrincipal: Smt. Shobha D Desai\nAffiliation: State Board of Karnataka (English Medium)\nFire & Safety: Certified\nBuilding Safety: Certified\nWater & Sanitation: Certified\nAcademic Session: June to April"),
    ]
    for rel_path, content in docs:
        full_p = os.path.join(BASE_DIR, "assets", "documents", rel_path)
        os.makedirs(os.path.dirname(full_p), exist_ok=True)
        with open(full_p, "w", encoding="utf-8") as f:
            f.write(content)
    print("  [OK] Created sample institutional documents")

if __name__ == "__main__":
    organize_uploaded_images()
    generate_styled_facility_graphics()
    create_sample_documents()
    print("All image and asset organizing tasks complete!")
