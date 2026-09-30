/**
 * School Events & Academic Calendar Data
 * Smt. Annapurna C. Hiremath English Medium Primary / High School
 */

const EVENTS_DATA = [
  {
    id: "evt-investiture",
    title: "Annual Student Council Investiture Ceremony",
    category: "Event",
    date: "2026-07-15",
    displayDate: "July 15, 2026",
    time: "09:30 AM - 12:30 PM",
    venue: "Main Campus Grounds",
    image: "assets/images/events/investiture-ceremony.jpg",
    description: "Induction of the elected Student Parliament Ministers, Head Boy, Head Girl, and House Captains with badge pinning and oath-taking.",
    tags: ["Leadership", "Student Council", "Ceremony"]
  },
  {
    id: "evt-independence",
    title: "79th Independence Day Celebration & Flag Hoisting",
    category: "Event",
    date: "2026-08-15",
    displayDate: "August 15, 2026",
    time: "08:00 AM - 11:30 AM",
    venue: "School Flag Post Area",
    image: "assets/images/campus/campus-ground-assembly.jpg",
    description: "Patriotic parade, flag hoisting by chief guests, speech presentations in English and Kannada, and cultural dance performances by primary and high school students.",
    tags: ["National Festival", "Patriotism", "Cultural"]
  },
  {
    id: "evt-fa1",
    title: "Formative Assessment (FA-1) Examination",
    category: "Examination",
    date: "2026-08-22",
    displayDate: "August 22 - 27, 2026",
    time: "10:00 AM - 01:00 PM",
    venue: "Classroom Blocks",
    image: "assets/images/facilities/smart-classrooms.svg",
    description: "First periodic formative assessment for Grades 1 to 10 assessing early semester comprehension and subject competency.",
    tags: ["Academic", "Exam", "Assessment"]
  },
  {
    id: "evt-sports-meet",
    title: "Annual Inter-House Athletics & Sports Meet",
    category: "Sports",
    date: "2026-11-20",
    displayDate: "November 20 - 22, 2026",
    time: "08:30 AM - 04:30 PM",
    venue: "School Sports Complex",
    image: "assets/images/sports/sports-ground.jpg",
    description: "Track and field events, sprint races, relay, volleyball, kho-kho, kabaddi, and tug-of-war competitions between Red, Yellow, Blue, and Green Houses.",
    tags: ["Athletics", "Inter-House", "Championship"]
  },
  {
    id: "evt-kannada-rajyotsava",
    title: "Kannada Rajyotsava Cultural Fest",
    category: "Cultural",
    date: "2026-11-01",
    displayDate: "November 01, 2026",
    time: "09:00 AM - 01:00 PM",
    venue: "School Assembly Courtyard",
    image: "assets/images/facilities/art-craft-studio.svg",
    description: "Grand cultural celebration commemorating Karnataka's heritage, state anthems, folk drama, and literature recitation.",
    tags: ["Culture", "State Festival", "Music"]
  },
  {
    id: "evt-science-exhibition",
    title: "District Science & ATL Innovation Expo",
    category: "Academic",
    date: "2026-12-18",
    displayDate: "December 18, 2026",
    time: "10:00 AM - 04:00 PM",
    venue: "Science Labs & Central Corridor",
    image: "assets/images/facilities/atl-innovation-lab.svg",
    description: "Display of student working models in robotics, solar energy, sustainable agriculture, smart irrigation, and interactive chemistry demonstrations.",
    tags: ["Science", "Robotics", "Innovation"]
  },
  {
    id: "evt-ptm-midterm",
    title: "Mid-Term Parent-Teacher Conference (PTM)",
    category: "Parent Meeting",
    date: "2026-10-10",
    displayDate: "October 10, 2026",
    time: "09:00 AM - 01:30 PM",
    venue: "Respective Classrooms",
    image: "assets/images/faculty/staff-group.jpg",
    description: "Detailed one-on-one progress review between parents and class teachers regarding Mid-Term evaluation, attendance, and student growth plans.",
    tags: ["PTM", "Parent Engagement", "Feedback"]
  },
  {
    id: "evt-sslc-prep",
    title: "SSLC Board Preparatory Model Exams",
    category: "Examination",
    date: "2027-01-18",
    displayDate: "January 18 - 25, 2027",
    time: "09:30 AM - 12:45 PM",
    venue: "High School Exam Halls",
    image: "assets/images/facilities/highschool-wing.svg",
    description: "Rigorous full-length simulated board examination for Grade 10 SSLC candidates under strict board conditions with personalized feedback.",
    tags: ["SSLC", "State Board", "High School"]
  },
  {
    id: "evt-annual-day",
    title: "Grand Annual Day & School Felicitation Night",
    category: "Event",
    date: "2027-02-14",
    displayDate: "February 14, 2027",
    time: "05:00 PM - 09:30 PM",
    venue: "Main Open-Air Auditorium",
    image: "assets/images/campus/campus-ground-assembly.jpg",
    description: "A showcase of dance, theatrical performances, musical orchestra, academic awards distribution, and sports trophy honors.",
    tags: ["Annual Day", "Celebration", "Awards"]
  }
];

if (typeof window !== "undefined") {
  window.EVENTS_DATA = EVENTS_DATA;
}
