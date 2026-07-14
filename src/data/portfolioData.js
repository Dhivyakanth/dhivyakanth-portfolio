// All static portfolio content lives here so components stay clean
// and content can be edited in one place.

export const profile = {
  name: 'Dhivyakanth',
  email: 'dhivyakanth20@gmail.com',
  phone: '8072181949',
  location: 'Tiruchengode, Namakkal',
  avatar: 'https://i.pravatar.cc/300?img=68',
  roles: ['Full Stack Developer', 'AI & ML Engineer', 'React Developer', 'Node.js Expert'],
  bio: "I thrive on solving real-world problems, turning ideas into clean, maintainable code, and learning through experimentation. You'll find me building side projects, diving into new tech stacks, or simply exploring AI development.",
  socials: {
    linkedin: '#',
    github: '#',
    leetcode: '#',
  },
};

export const navSections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const sectionBackgrounds = {
  about: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,80,40,0.35) 0%, transparent 70%)',
  skills: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(0,60,100,0.25) 0%, transparent 70%)',
  experience: 'radial-gradient(ellipse 70% 50% at 70% 50%, rgba(0,60,80,0.2) 0%, transparent 70%)',
  projects: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(60,0,100,0.25) 0%, transparent 70%)',
  education: 'radial-gradient(ellipse 70% 50% at 30% 50%, rgba(0,80,60,0.2) 0%, transparent 70%)',
  contact: 'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,60,30,0.3) 0%, transparent 70%)',
};

export const stats = [
  { num: '9.0', label: 'CGPA' },
  { num: '3+', label: 'Internships' },
  { num: '4+', label: 'Projects' },
];

export const skillCategories = [
  {
    icon: '{ }',
    title: 'Programming Languages',
    num: '01',
    pills: ['Java', 'Python', 'C', 'JavaScript', 'SQL'],
    active: false,
  },
  {
    icon: '</>',
    title: 'Web Technologies',
    num: '02',
    pills: ['HTML', 'CSS', 'React JS', 'Node.js', 'Express.js'],
    active: false,
  },
  {
    icon: '⚡',
    title: 'AI / ML',
    num: '03',
    pills: ['Machine Learning', 'Computer Vision', 'TensorFlow', 'MediaPipe'],
    active: true,
  },
  {
    icon: '⚙',
    title: 'Tools & Platforms',
    num: '04',
    pills: ['Power BI', 'JDBC', 'GitHub', 'REST APIs'],
    active: false,
  },
];

export const experiences = [
  {
    company: 'SiDRA Hub (Inaiyam Innovations), Tiruchengode',
    date: '07/2025 – 10/2025',
    role: 'Full Stack Developer Intern',
    bullets: [
      'Built a smart agricultural advisory system with real-time weather automation (React.js, Node.js)',
      'Automated location-based weather alerts and crop advisories (n8n, APIs)',
      'Managed scalable farmer data and reporting systems (Firebase, MySQL)',
    ],
  },
  {
    company: 'Hertzworkz Private Limited, Namakkal',
    date: '04/2025 – 07/2025',
    role: 'AIML Intern',
    bullets: [
      'Built real-time computer vision applications using MediaPipe and OpenCV',
      'Trained chatbots and fine-tuned LLMs for domain-specific tasks using RAG',
      'Gained hands-on experience in model deployment, data handling, and AI system development',
    ],
  },
  {
    company: 'Online',
    date: '04/2025 – 06/2025',
    role: 'Google for Developers – AIML Virtual Internship',
    bullets: [
      'Learned TensorFlow, image classification, and object detection (SSD, Faster R-CNN)',
      'Worked on CNN feature extraction and optimization techniques',
      'Deployed real-world computer vision applications',
    ],
  },
];

export const mediaCards = [
  {
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80',
    badge: 'SMART',
    label: 'SMART SYSTEMS',
  },
  {
    img: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    badge: 'VISUAL',
    label: 'NEURAL NETWORK',
  },
  {
    img: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?w=600&q=80',
    badge: 'VISION',
    label: 'COMPUTER VISION',
  },
  {
    img: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?w=600&q=80',
    badge: 'ROBOTICS',
    label: 'ROBOTICS',
  },
];

export const projects = [
  {
    badge: 'IoT',
    title: 'River AI',
    desc: 'An IoT solution for real-time environmental monitoring of water quality using pH, turbidity sensors.',
    tags: ['Raspberry Pi 5', 'IoT', 'GPS/GSM'],
    offset: { x: -220, y: 20, rot: -8 },
  },
  {
    badge: 'Full-Stack',
    title: 'AI Sales Chatbot',
    desc: 'Built a full-stack chatbot using React, Flask, and Gemini API with real-time sales data integration.',
    tags: ['React', 'Flask', 'Gemini API'],
    offset: { x: 0, y: -20, rot: 2 },
  },
  {
    badge: 'Multi-Tier',
    title: 'Sign Language Chatbot',
    desc: 'Sign Language recognition using OpenCV with CNN models for gesture understanding.',
    tags: ['MediaPipe', 'OpenCV', 'TensorFlow'],
    offset: { x: 220, y: 20, rot: 8 },
  },
];

export const education = [
  {
    name: 'K.S. Rangasamy College of Technology',
    degree: 'B.E. in Computer Science and Engineering',
    meta: 'CGPA: 9.0 / 10',
    years: '2024 – 2027',
  },
  {
    name: 'K.S.R Matric Higher Secondary School',
    degree: 'Higher Secondary Education',
    meta: 'Percentage: 93%',
    years: '2021 – 2024',
  },
];

export const educationImages = [
  {
    img: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80',
    badge: 'LEARN',
    label: 'K.S. RANGASAMY COLLEGE OF TECHNOLOGY',
    badgeColor: 'var(--green)',
  },
  {
    img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80',
    badge: 'LEARNING',
    label: 'ACADEMIC EXCELLENCE',
    badgeColor: '#00ccff',
  },
];

export const certifications = [
  'Infosys Java Programming Certification',
  'Oracle Cloud Infrastructure AI Foundation Associate',
  'Oracle Cloud DevOps Professional',
  'Oracle Cloud Generative AI Professional',
];

export const achievements = [
  "Co-author of the book Hope's Tapestry",
  'Regular coding practice on LeetCode platform',
  'Selected for Smart India Hackathon (college level)',
];

export const contactCards = [
  { icon: '✉', label: 'Email', value: profile.email },
  { icon: '📞', label: 'Phone', value: profile.phone },
  { icon: '📍', label: 'Location', value: profile.location },
];
