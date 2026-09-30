/**
 * Campus Facilities & Infrastructure Data
 * Smt. Annapurna C. Hiremath English Medium Primary / High School
 */

const FACILITIES_DATA = [
  {
    id: "fac-smart-class",
    title: "Interactive Smart Classrooms",
    category: "Academic",
    shortDesc: "Digitally-equipped classrooms featuring multimedia learning tools and audio-visual displays.",
    fullDesc: "Spacious, well-ventilated, and acoustically balanced learning rooms equipped with digital presentation boards, ergonomic single/dual student desks, and interactive multimedia software to make abstract concepts lively and intuitive.",
    features: ["Digital teaching aids", "Ergonomic seating", "Natural ventilation & lighting", "CCTV safety coverage"],
    image: "assets/images/facilities/smart-classrooms.svg",
    hotspot: { x: 30, y: 45 }
  },
  {
    id: "fac-science-lab",
    title: "Composite Science Laboratory",
    category: "Labs",
    shortDesc: "Fully equipped laboratory supporting hands-on Physics, Chemistry, and Biology experiments.",
    fullDesc: "Modern scientific apparatus, safety stations, demonstration tables, and specimen collections designed to foster practical inquiry, hypothesis testing, and experiential scientific thinking in line with high school curricula.",
    features: ["Precision microscopes & glassware", "Chemical safety equipment", "Dissecting kits & 3D models", "Individual student workstations"],
    image: "assets/images/facilities/science-lab.svg",
    hotspot: { x: 65, y: 35 }
  },
  {
    id: "fac-comp-lab",
    title: "Modern Computer & ICT Lab",
    category: "Labs",
    shortDesc: "High-speed networked desktop computers providing foundational digital skills and coding.",
    fullDesc: "A dedicated computing center where students from primary to high school learn computer fundamentals, typing, office productivity software, internet ethics, and introductory computational logic in a supervised environment.",
    features: ["Individual PC terminals", "High-speed broadband connectivity", "UPS power backup", "Curated educational software"],
    image: "assets/images/facilities/computer-lab.svg",
    hotspot: { x: 50, y: 30 }
  },
  {
    id: "fac-library",
    title: "Knowledge & Resource Library",
    category: "Academic",
    shortDesc: "Extensive collection of reference books, encyclopedias, storybooks, and regional literature.",
    fullDesc: "A tranquil reading haven housing thousands of volumes in English, Kannada, and Hindi, along with educational periodicals, competitive exam guides, and reference material that cultivates a lifelong love for reading.",
    features: ["Extensive fiction & non-fiction collection", "Peaceful reading lounge", "Subject reference section", "Daily newspapers & journals"],
    image: "assets/images/facilities/digital-library.svg",
    hotspot: { x: 20, y: 35 }
  },
  {
    id: "fac-sports-ground",
    title: "Spacious Sports Ground & Athletics Arena",
    category: "Sports",
    shortDesc: "Expansive outdoor playground for team games, athletics, drill, and mass assemblies.",
    fullDesc: "A vast open-air athletic ground serving as the heartbeat of school life, hosting morning assemblies, physical training drills, volleyball tournaments, kho-kho, kabaddi, badminton, and track events under professional PE coaching.",
    features: ["Dedicated volleyball & kho-kho courts", "Running track & field area", "Flag ceremony podium", "Indoor table games & chess area"],
    image: "assets/images/sports/sports-ground.jpg",
    hotspot: { x: 75, y: 70 }
  },
  {
    id: "fac-atl-lab",
    title: "ATL Innovation & STEM Lab",
    category: "Innovation",
    shortDesc: "Hands-on hub for robotics, electronics, 3D exploration, and creative scientific prototyping.",
    fullDesc: "A specialized innovation zone where young inventors experiment with microcontrollers, sensor kits, robotics assemblies, and do-it-yourself engineering projects to develop problem-solving skills for the 21st century.",
    features: ["Robotics & sensor kits", "Electronics prototyping boards", "Design thinking workstations", "STEM project mentoring"],
    image: "assets/images/facilities/atl-innovation-lab.svg",
    hotspot: { x: 45, y: 55 }
  },
  {
    id: "fac-art-studio",
    title: "Creative Arts & Cultural Studio",
    category: "Cultural",
    shortDesc: "Vibrant studio for painting, craftwork, traditional drama, and musical rehearsals.",
    fullDesc: "Dedicated creative workspace allowing students to explore their artistic talents across sketching, watercoloring, clay modeling, origami, cultural folk songs, and theatrical rehearsals.",
    features: ["Art easels & craft tables", "Traditional musical instruments", "Stage property storage", "Exhibition display boards"],
    image: "assets/images/facilities/art-craft-studio.svg",
    hotspot: { x: 80, y: 25 }
  },
  {
    id: "fac-transport",
    title: "Safe Student Transportation Network",
    category: "Campus",
    shortDesc: "Dedicated school buses covering safe, timely transit across Alnavar and surrounding villages.",
    fullDesc: "A well-maintained fleet of school buses operated by certified drivers and accompanied by school attendants, providing punctual and secure transit across residential areas and nearby rural belts.",
    features: ["Experienced, vetted drivers", "Safety handrails & first-aid kits", "Punctual route scheduling", "Attendant supervision on board"],
    image: "assets/images/facilities/transportation.svg",
    hotspot: { x: 15, y: 80 }
  },
  {
    id: "fac-safety-health",
    title: "Campus Safety & First Aid Infirmary",
    category: "Campus",
    shortDesc: "24/7 CCTV surveillance, purified RO drinking water, and immediate first-aid medical support.",
    fullDesc: "Comprehensive campus health and security infrastructure comprising continuous CCTV monitoring, perimeter security, clean hygienic sanitary facilities, certified fire extinguishers, and a dedicated infirmary for prompt medical attention.",
    features: ["24/7 CCTV security coverage", "RO purified drinking water plants", "Dedicated first-aid infirmary", "Regular sanitization protocols"],
    image: "assets/images/facilities/kindergarten-wing.svg",
    hotspot: { x: 50, y: 85 }
  }
];

if (typeof window !== "undefined") {
  window.FACILITIES_DATA = FACILITIES_DATA;
}
