/**
 * School Master Data
 * ALNAVAR EDUCATION SOCIETY'S
 * SMT. ANNAPURNA C. HIREMATH ENGLISH MEDIUM PRIMARY / HIGH SCHOOL, ALNAVAR
 */

const SCHOOL_DATA = {
  societyName: "Alnavar Education Society",
  schoolName: "Smt. Annapurna C. Hiremath English Medium Primary / High School",
  shortName: "A. C. Hiremath English Medium School",
  location: "Alnavar, Dharwad District, Karnataka, India",
  motto: "LEARN • GROW • LEAD",
  tagline: "Where Knowledge Meets Character, and Potential Becomes Purpose.",
  crestValues: ["INTEGRITY", "WISDOM", "KNOWLEDGE IS POWER"],
  
  contact: {
    phone: "[ADD SCHOOL PHONE]",
    altPhone: "[ADD ALTERNATE PHONE]",
    email: "[ADD SCHOOL EMAIL]",
    admissionEmail: "[ADD ADMISSIONS EMAIL]",
    address: "Alnavar Education Society Campus, Station Road / School Road, Alnavar - 581103, Dist. Dharwad, Karnataka",
    workingHours: "Monday to Saturday: 8:30 AM – 4:30 PM (Sunday Holiday)",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.757827464366!2d74.7258!3d15.4345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb8b7cb625f69db%3A0x6bfa5a9ebf5223e!2sAlnavar%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
  },

  principal: {
    name: "Smt. Shobha D Desai",
    designation: "Principal",
    qualification: "[ADD PRINCIPAL QUALIFICATION / M.A., B.Ed.]",
    experience: "[XX]+ Years of Educational Leadership",
    photo: "assets/images/faculty/principal-portrait.jpg",
    deskPhoto: "assets/images/faculty/principal-smt-shobha-desai.jpg",
    message: "At Smt. Annapurna C. Hiremath English Medium School, education goes far beyond textbooks and examinations. Our sacred commitment is to ignite intellectual curiosity, instill unshakable moral principles, and empower every student to discover their true calling. Supported by the forward-thinking vision of the Alnavar Education Society and a team of devoted educators, we blend academic rigour with character-building, technological literacy, and vibrant co-curricular pursuits. We welcome you to experience an ecosystem where young minds learn passionately, grow fearlessly, and lead honorably."
  },

  management: {
    chairmanName: "[ADD CHAIRMAN NAME]",
    chairmanDesignation: "Chairman, Alnavar Education Society",
    secretaryName: "[ADD SECRETARY NAME]",
    secretaryDesignation: "Secretary, Alnavar Education Society",
    message: "The Alnavar Education Society was founded with a profound mission: to provide world-class, value-based English medium education accessible to the youth of Alnavar and neighbouring regions. Smt. Annapurna C. Hiremath English Medium Primary / High School stands as the crowning jewel of this noble vision, continuously setting benchmarks in holistic student development and disciplined excellence."
  },

  stats: [
    { value: 25, suffix: "+", label: "Years of Educational Excellence", placeholder: "[XX]+" },
    { value: 1200, suffix: "+", label: "Enthusiastic Learners", placeholder: "[XXXX]+" },
    { value: 45, suffix: "+", label: "Dedicated & Expert Faculty", placeholder: "[XX]+" },
    { value: 100, suffix: "%", label: "SSLC Board Result Excellence", placeholder: "[100%]" },
    { value: 100, suffix: "%", label: "Holistic Development Focus", placeholder: "[100%]" },
    { value: 4, suffix: " Houses", label: "Dynamic Student Houses", placeholder: "4 Houses" }
  ],

  houses: [
    { name: "Red House", motto: "Courage & Valour", color: "#DC2626", badge: "Ruby" },
    { name: "Yellow House", motto: "Wisdom & Radiance", color: "#D97706", badge: "Amber" },
    { name: "Blue House", motto: "Integrity & Loyalty", color: "#2563EB", badge: "Sapphire" },
    { name: "Green House", motto: "Growth & Harmony", color: "#16A34A", badge: "Emerald" }
  ],

  wings: [
    {
      id: "kindergarten",
      title: "Kindergarten (Pre-Primary)",
      grades: "Nursery, LKG, UKG",
      focus: "Sensory learning, phonics, fine motor skills, foundational social habits and imaginative play.",
      highlights: ["Activity-based discovery", "Safe, vibrant play arena", "Phonics & storytelling", "Caring mentor ratio"],
      image: "assets/images/facilities/kindergarten-wing.svg"
    },
    {
      id: "primary",
      title: "Primary School",
      grades: "Grade 1 to Grade 7",
      focus: "Foundational academic mastery, multilingual fluency, mathematical reasoning, environmental awareness, and moral science.",
      highlights: ["Inquiry-based pedagogy", "English language lab", "Experiential science projects", "Physical & arts integration"],
      image: "assets/images/facilities/primary-wing.svg"
    },
    {
      id: "highschool",
      title: "High School",
      grades: "Grade 8 to Grade 10 (SSLC)",
      focus: "Rigorous academic preparation, scientific exploration, state board curriculum excellence, leadership training, and career orientation.",
      highlights: ["Specialized science & ICT labs", "Comprehensive board preparatory tests", "Student council leadership", "Competitive exam guidance"],
      image: "assets/images/facilities/highschool-wing.svg"
    }
  ]
};

if (typeof window !== "undefined") {
  window.SCHOOL_DATA = SCHOOL_DATA;
}
