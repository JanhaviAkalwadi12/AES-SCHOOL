/**
 * Achievements & Accolades Data
 * Smt. Annapurna C. Hiremath English Medium Primary / High School
 */

const ACHIEVEMENTS_DATA = [
  {
    id: "ach-1",
    category: "Academic",
    title: "100% SSLC State Board Result Distinction",
    year: "Academic Session",
    badge: "Board Excellence",
    description: "Our Grade 10 batches consistently achieve exemplary pass rates with multiple student distinctions and top scoring performances across science and mathematics.",
    image: "assets/images/facilities/highschool-wing.svg",
    icon: "award"
  },
  {
    id: "ach-2",
    category: "Leadership",
    title: "Dynamic Student Parliament & Investiture Leadership",
    year: "Annual Feature",
    badge: "Student Governance",
    description: "Empowering student leaders across Prime Minister, Discipline, Environmental, Cultural, Sports and Finance portfolios with real-world democratic governance experience.",
    image: "assets/images/students/student-council.jpg",
    icon: "shield"
  },
  {
    id: "ach-3",
    category: "Sports",
    title: "Taluk & District Level Athletics & Kho-Kho Trophies",
    year: "Sports Division",
    badge: "Athletics Champions",
    description: "School athletes and house teams regularly secure top podium spots in sprint, volleyball, relay and indigenous sports at regional inter-school meets.",
    image: "assets/images/sports/sports-ground.jpg",
    icon: "zap"
  },
  {
    id: "ach-4",
    category: "Cultural",
    title: "Pratibha Karanji & State Cultural Fest Honors",
    year: "Cultural Circuit",
    badge: "Arts & Culture",
    description: "Students bag prestigious prizes in patriotic songs, folk drama, drawing, debate, and Kannada elocution at the annual Pratibha Karanji competitions.",
    image: "assets/images/facilities/art-craft-studio.svg",
    icon: "star"
  },
  {
    id: "ach-5",
    category: "Science",
    title: "Science & Innovation Model Fair Awards",
    year: "STEM Showcase",
    badge: "Innovation",
    description: "Innovative engineering and green energy working prototypes designed by school students receive commendations at district-level science exhibitions.",
    image: "assets/images/facilities/atl-innovation-lab.svg",
    icon: "cpu"
  },
  {
    id: "ach-6",
    category: "Community",
    title: "Green Campus & Swachh Vidyalaya Recognition",
    year: "Eco Initiative",
    badge: "Sustainability",
    description: "Active tree plantation drives, environmental ministry initiatives, and cleanliness protocols maintained enthusiastically by staff and student eco-clubs.",
    image: "assets/images/campus/campus-ground-assembly.jpg",
    icon: "globe"
  }
];

if (typeof window !== "undefined") {
  window.ACHIEVEMENTS_DATA = ACHIEVEMENTS_DATA;
}
