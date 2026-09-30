import os

def create_svg(filename_key, title, subtitle, icon_svg, primary_color, secondary_color, badge_text="ALNAVAR CAMPUS"):
    clean_title = title.replace("&", "&amp;")
    clean_subtitle = subtitle.replace("&", "&amp;")
    clean_badge = badge_text.replace("&", "&amp;")
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="100%" height="100%">
  <defs>
    <linearGradient id="grad_{filename_key}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="{primary_color}" />
      <stop offset="100%" stop-color="{secondary_color}" />
    </linearGradient>
    <linearGradient id="iconGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#F3C969" />
      <stop offset="100%" stop-color="#D9A441" />
    </linearGradient>
    <radialGradient id="glow_{filename_key}" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.45"/>
    </radialGradient>
    <pattern id="grid_{filename_key}" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    </pattern>
  </defs>
  
  <!-- Background -->
  <rect width="800" height="500" fill="url(#grad_{filename_key})"/>
  <rect width="800" height="500" fill="url(#glow_{filename_key})"/>
  <rect width="800" height="500" fill="url(#grid_{filename_key})"/>
  
  <!-- Decorative Circles -->
  <circle cx="700" cy="100" r="160" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="2"/>
  <circle cx="700" cy="100" r="120" fill="none" stroke="rgba(217, 164, 65, 0.2)" stroke-dasharray="6,6" stroke-width="2"/>
  <circle cx="120" cy="420" r="140" fill="none" stroke="rgba(255, 255, 255, 0.05)" stroke-width="1.5"/>
  
  <!-- Floating Card Glass Backdrop -->
  <rect x="40" y="35" width="720" height="430" rx="24" fill="rgba(7, 26, 61, 0.5)" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1.5"/>
  
  <!-- Badge -->
  <rect x="75" y="65" width="200" height="32" rx="16" fill="rgba(217, 164, 65, 0.2)" stroke="#D9A441" stroke-width="1"/>
  <text x="175" y="86" font-family="system-ui, -apple-system, sans-serif" font-size="12" font-weight="700" fill="#F3C969" text-anchor="middle" letter-spacing="1.5">{clean_badge}</text>
  
  <!-- Icon Center Visual -->
  <g transform="translate(540, 140)">
    <circle cx="80" cy="80" r="70" fill="rgba(255,255,255,0.08)" stroke="rgba(217,164,65,0.4)" stroke-width="2"/>
    <circle cx="80" cy="80" r="55" fill="rgba(7,26,61,0.6)"/>
    {icon_svg}
  </g>
  
  <!-- Title & Subtitle -->
  <text x="75" y="220" font-family="system-ui, -apple-system, sans-serif" font-size="34" font-weight="800" fill="#FFFFFF" letter-spacing="-0.5">
    {clean_title}
  </text>
  <text x="75" y="265" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="400" fill="rgba(255,255,255,0.85)">
    {clean_subtitle}
  </text>
  
  <!-- Divider -->
  <line x1="75" y1="320" x2="725" y2="320" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
  
  <!-- Footer Info -->
  <text x="75" y="375" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700" fill="#F3C969" letter-spacing="2">
    LEARN • GROW • LEAD
  </text>
  <text x="75" y="410" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="500" fill="rgba(255,255,255,0.7)">
    Smt. Annapurna C. Hiremath English Medium School, Alnavar
  </text>
  <text x="725" y="410" font-family="system-ui, -apple-system, sans-serif" font-size="13" font-weight="600" fill="#38BDF8" text-anchor="end">
    AES Campus • Dist. Dharwad
  </text>
</svg>"""
    return svg

def generate_campus_map_svg():
    svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700" width="100%" height="100%">
  <defs>
    <linearGradient id="mapBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#061224" />
      <stop offset="50%" stop-color="#0B1F3D" />
      <stop offset="100%" stop-color="#071A30" />
    </linearGradient>
    <radialGradient id="mapGlow" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#1E3A8A" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#020617" stop-opacity="0.9" />
    </radialGradient>
    <pattern id="gridPattern" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(217, 164, 65, 0.08)" stroke-width="1"/>
    </pattern>
  </defs>

  <!-- Background Base -->
  <rect width="1200" height="700" fill="url(#mapBg)"/>
  <rect width="1200" height="700" fill="url(#mapGlow)"/>
  <rect width="1200" height="700" fill="url(#gridPattern)"/>

  <!-- Compass / Header on Map -->
  <g transform="translate(60, 40)">
    <circle cx="20" cy="20" r="18" fill="rgba(217,164,65,0.15)" stroke="#D9A441" stroke-width="1.5"/>
    <text x="20" y="24" font-family="system-ui" font-size="12" font-weight="bold" fill="#D9A441" text-anchor="middle">N</text>
    <text x="50" y="16" font-family="system-ui" font-size="12" font-weight="700" fill="#F3C969" letter-spacing="1">ALNAVAR CAMPUS LAYOUT</text>
    <text x="50" y="32" font-family="system-ui" font-size="10" fill="rgba(255,255,255,0.6)">Alnavar Education Society • Master Plan</text>
  </g>

  <!-- Campus Pathways & Courtyards -->
  <path d="M 600 200 L 600 520 M 320 360 L 880 360 M 320 220 L 880 500 M 880 220 L 320 500" stroke="rgba(255,255,255,0.08)" stroke-dasharray="6,6" stroke-width="2" fill="none"/>
  
  <!-- Central Green Quadrangle -->
  <rect x="520" y="290" width="160" height="140" rx="20" fill="rgba(16, 185, 129, 0.12)" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1.5"/>
  <circle cx="600" cy="360" r="30" fill="rgba(217, 164, 65, 0.15)" stroke="#D9A441" stroke-width="1.5"/>
  <text x="600" y="364" font-family="system-ui" font-size="11" font-weight="bold" fill="#F3C969" text-anchor="middle">CENTRAL QUAD</text>

  <!-- 1. MAIN BLOCK (Top Center) -->
  <g transform="translate(460, 90)">
    <rect width="280" height="110" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="#D9A441" stroke-width="2"/>
    <rect x="15" y="15" width="250" height="80" rx="8" fill="rgba(30, 64, 175, 0.25)"/>
    <text x="140" y="52" font-family="system-ui" font-size="18" font-weight="bold" fill="#FFFFFF" text-anchor="middle">🏫 MAIN BLOCK</text>
    <text x="140" y="74" font-family="system-ui" font-size="11" fill="#F3C969" text-anchor="middle">Administration &bull; Principal &bull; Classrooms</text>
  </g>

  <!-- 2. SCIENCE LAB (Top Left) -->
  <g transform="translate(140, 190)">
    <rect width="220" height="95" rx="12" fill="rgba(15, 23, 42, 0.85)" stroke="#10B981" stroke-width="2"/>
    <text x="110" y="48" font-family="system-ui" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">🔬 SCIENCE LAB</text>
    <text x="110" y="70" font-family="system-ui" font-size="11" fill="#6EE7B7" text-anchor="middle">Physics, Chemistry &amp; Bio</text>
  </g>

  <!-- 3. LIBRARY (Top Right) -->
  <g transform="translate(840, 190)">
    <rect width="220" height="95" rx="12" fill="rgba(15, 23, 42, 0.85)" stroke="#A855F7" stroke-width="2"/>
    <text x="110" y="48" font-family="system-ui" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">📚 LIBRARY</text>
    <text x="110" y="70" font-family="system-ui" font-size="11" fill="#D8B4FE" text-anchor="middle">5,000+ Books &bull; Reading Zone</text>
  </g>

  <!-- 4. ART ROOM (Middle Left) -->
  <g transform="translate(100, 360)">
    <rect width="220" height="95" rx="12" fill="rgba(15, 23, 42, 0.85)" stroke="#EC4899" stroke-width="2"/>
    <text x="110" y="48" font-family="system-ui" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">🎨 ART ROOM</text>
    <text x="110" y="70" font-family="system-ui" font-size="11" fill="#F472B6" text-anchor="middle">Craft, Pottery &amp; Painting</text>
  </g>

  <!-- 5. COMPUTER LAB (Middle Right) -->
  <g transform="translate(880, 360)">
    <rect width="220" height="95" rx="12" fill="rgba(15, 23, 42, 0.85)" stroke="#38BDF8" stroke-width="2"/>
    <text x="110" y="48" font-family="system-ui" font-size="16" font-weight="bold" fill="#FFFFFF" text-anchor="middle">💻 COMPUTER LAB</text>
    <text x="110" y="70" font-family="system-ui" font-size="11" fill="#7DD3FC" text-anchor="middle">ICT &bull; Coding &bull; Digital Skills</text>
  </g>

  <!-- 6. SPORTS GROUND (Bottom Center-Left) -->
  <g transform="translate(320, 480)">
    <rect width="320" height="110" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="#F59E0B" stroke-width="2"/>
    <text x="160" y="52" font-family="system-ui" font-size="17" font-weight="bold" fill="#FFFFFF" text-anchor="middle">🏟️ SPORTS GROUND</text>
    <text x="160" y="74" font-family="system-ui" font-size="11" fill="#FCD34D" text-anchor="middle">Athletics &bull; Volleyball &bull; Kho-Kho &bull; Kabaddi</text>
  </g>

  <!-- 7. TRANSPORT BAY (Bottom Right) -->
  <g transform="translate(700, 490)">
    <rect width="250" height="100" rx="14" fill="rgba(15, 23, 42, 0.85)" stroke="#06B6D4" stroke-width="2"/>
    <text x="125" y="48" font-family="system-ui" font-size="17" font-weight="bold" fill="#FFFFFF" text-anchor="middle">🚌 TRANSPORT</text>
    <text x="125" y="70" font-family="system-ui" font-size="11" fill="#67E8F9" text-anchor="middle">Dedicated School Bus Fleet</text>
  </g>

  <!-- Surrounding Trees and Green accents -->
  <circle cx="80" cy="120" r="14" fill="rgba(16, 185, 129, 0.4)"/>
  <circle cx="1100" cy="120" r="14" fill="rgba(16, 185, 129, 0.4)"/>
  <circle cx="1120" cy="600" r="16" fill="rgba(16, 185, 129, 0.4)"/>
  <circle cx="80" cy="620" r="16" fill="rgba(16, 185, 129, 0.4)"/>
</svg>"""
    return svg

def main():
    icon_kindergarten = '<path d="M80 45 L115 75 L105 115 L55 115 L45 75 Z" fill="none" stroke="#F3C969" stroke-width="4" stroke-linejoin="round"/><circle cx="80" cy="80" r="12" fill="#38BDF8"/>'
    icon_primary = '<path d="M50 65 L80 50 L110 65 L80 80 Z" fill="#F3C969" stroke="#F3C969" stroke-width="2"/><path d="M60 85 L60 105 Q80 115 100 105 L100 85" fill="none" stroke="#FFFFFF" stroke-width="3"/>'
    icon_highschool = '<path d="M50 110 L50 60 L80 45 L110 60 L110 110 Z" fill="none" stroke="#F3C969" stroke-width="3.5"/><circle cx="80" cy="75" r="10" fill="#F43F5E"/><path d="M65 110 L65 95 L95 95 L95 110" fill="none" stroke="#38BDF8" stroke-width="3"/>'
    icon_lab = '<path d="M70 50 L90 50 L90 70 L115 110 A 10 10 0 0 1 105 125 L55 125 A 10 10 0 0 1 45 110 L70 70 Z" fill="none" stroke="#38BDF8" stroke-width="4"/><circle cx="75" cy="105" r="4" fill="#F3C969"/><circle cx="88" cy="95" r="3" fill="#F3C969"/>'
    icon_library = '<path d="M50 55 C65 50 80 55 80 55 C80 55 95 50 110 55 L110 115 C95 110 80 115 80 115 C80 115 65 110 50 115 Z" fill="none" stroke="#F3C969" stroke-width="4"/><line x1="80" y1="55" x2="80" y2="115" stroke="#38BDF8" stroke-width="3"/>'
    icon_computer = '<rect x="48" y="52" width="64" height="44" rx="4" fill="none" stroke="#38BDF8" stroke-width="4"/><line x1="65" y1="96" x2="95" y2="96" stroke="#F3C969" stroke-width="4"/><line x1="80" y1="96" x2="80" y2="112" stroke="#F3C969" stroke-width="4"/><line x1="58" y1="112" x2="102" y2="112" stroke="#F3C969" stroke-width="4"/>'
    icon_art = '<circle cx="80" cy="80" r="35" fill="none" stroke="#EC4899" stroke-width="4"/><circle cx="68" cy="70" r="5" fill="#F3C969"/><circle cx="88" cy="68" r="5" fill="#38BDF8"/><circle cx="95" cy="85" r="5" fill="#10B981"/><circle cx="80" cy="95" r="5" fill="#8B5CF6"/>'
    icon_sports = '<circle cx="80" cy="80" r="35" fill="none" stroke="#F3C969" stroke-width="4"/><path d="M55 80 Q80 55 105 80" fill="none" stroke="#F3C969" stroke-width="3"/><path d="M55 80 Q80 105 105 80" fill="none" stroke="#F3C969" stroke-width="3"/><line x1="80" y1="45" x2="80" y2="115" stroke="#38BDF8" stroke-width="3"/>'
    icon_transport = '<rect x="48" y="58" width="64" height="42" rx="6" fill="none" stroke="#F3C969" stroke-width="4"/><circle cx="62" cy="105" r="8" fill="#38BDF8"/><circle cx="98" cy="105" r="8" fill="#38BDF8"/><line x1="48" y1="82" x2="112" y2="82" stroke="rgba(255,255,255,0.6)" stroke-width="2"/>'
    icon_smartclass = '<rect x="48" y="50" width="64" height="46" rx="4" fill="none" stroke="#10B981" stroke-width="4"/><polygon points="74,65 74,81 88,73" fill="#F3C969"/>'
    icon_atl = '<polygon points="80,48 95,78 125,82 102,104 108,134 80,119 52,134 58,104 35,82 65,78" fill="none" stroke="#8B5CF6" stroke-width="3.5"/>'

    files_to_gen = [
        ('kindergarten-wing.svg', 'Kindergarten Pre-Primary Wing', 'Sensory play, phonetic foundation & cheerful discovery', icon_kindergarten, '#831843', '#BE185D', 'PRE-PRIMARY WING'),
        ('primary-wing.svg', 'Primary School Wing (Grades 1-7)', 'Conceptual math, languages, moral values & arts', icon_primary, '#0C4A6E', '#0284C7', 'PRIMARY SECTION'),
        ('highschool-wing.svg', 'High School Wing (Grades 8-10)', 'SSLC board mastery, science immersion & leadership', icon_highschool, '#1E1B4B', '#4338CA', 'HIGH SCHOOL SECTION'),
        ('science-lab.svg', 'Composite Science Laboratory', 'Physics, Chemistry & Biology investigative suites', icon_lab, '#064E3B', '#059669', 'INNOVATION & LABS'),
        ('digital-library.svg', 'Central Digital & Print Library', '5,000+ reference volumes, quiet study bay & e-books', icon_library, '#701A75', '#A21CAF', 'KNOWLEDGE HUB'),
        ('computer-lab.svg', 'Advanced Computer & ICT Lab', 'High-speed workstations, coding & digital literacy', icon_computer, '#0F172A', '#1E40AF', 'DIGITAL CAMPUS'),
        ('art-craft-studio.svg', 'Creative Arts & Culture Studio', 'Fine arts, clay modeling, theatre & cultural ateliers', icon_art, '#4A044E', '#C026D3', 'ARTS & CRAFTS'),
        ('sports-complex.svg', 'Athletic Complex & Sports Arena', 'Volleyball, Kho-Kho, Kabaddi & morning physical drills', icon_sports, '#7C2D12', '#EA580C', 'SPORTS ARENA'),
        ('transportation.svg', 'School Bus Fleet & Transport Hub', 'GPS-enabled safe transportation covering Alnavar routes', icon_transport, '#78350F', '#D97706', 'SAFE TRANSPORT'),
        ('smart-classrooms.svg', 'Interactive Smart Classrooms', 'Audio-visual panels, ergonomic desks & airy halls', icon_smartclass, '#14532D', '#16A34A', 'SMART CLASSROOMS'),
        ('atl-innovation-lab.svg', 'ATL Robotics & Innovation Hub', 'STEM kits, tinkering, microcontrollers & prototypes', icon_atl, '#3B0764', '#7E22CE', 'STEM & ROBOTICS'),
    ]

    os.makedirs(os.path.join('assets', 'images', 'facilities'), exist_ok=True)
    os.makedirs(os.path.join('assets', 'images', 'gallery'), exist_ok=True)
    os.makedirs(os.path.join('assets', 'images', 'campus'), exist_ok=True)

    for filename, title, subtitle, icon, c1, c2, btext in files_to_gen:
        key = filename.replace('.svg', '')
        content = create_svg(key, title, subtitle, icon, c1, c2, btext)
        with open(os.path.join('assets', 'images', 'facilities', filename), 'w', encoding='utf-8') as f:
            f.write(content)
        with open(os.path.join('assets', 'images', 'gallery', filename), 'w', encoding='utf-8') as f:
            f.write(content)

    map_svg = generate_campus_map_svg()
    with open(os.path.join('assets', 'images', 'campus', 'campus-map-interactive.svg'), 'w', encoding='utf-8') as f:
        f.write(map_svg)

    print("SVG Generation complete!")

if __name__ == '__main__':
    main()
