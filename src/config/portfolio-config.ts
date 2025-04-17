
// Portfolio Configuration File
// Edit this file to update your portfolio content

// Personal Information
export const personalInfo = {
  name: "Jiztom Kavalakkatt Francis",
  title: "Python AI Engineer | Digital Agriculture Researcher | Hardware Engineer",
  description: "Innovating at the intersection of AI and agriculture, specializing in machine vision and deep learning solutions.",
  email: "jiztom@iastate.edu",
  linkedin: "https://linkedin.com/in/jiztom",
  github: "https://github.com/jiztom",
  resumeUrl: "/resume.pdf",
  profileImage: "jiztom.jpeg",
};

// About Section
export const aboutInfo = {
  paragraphs: [
    "As a Python AI Engineer and researcher in digital agriculture, I specialize in developing innovative solutions using machine vision and machine learning. My work includes pioneering sound-based insect detection techniques and creating efficient data pipelines for agricultural applications.",
    "Currently pursuing my Ph.D. in Computer Engineering at Iowa State University, I combine academic research with practical industry experience to solve complex problems in agricultural technology. My expertise spans Python, TensorFlow, and SQL, enabling me to build robust and scalable AI solutions.",
  ],
  skills: ["Python", "TensorFlow", "SQL"],
};

// Skills Section
export const skillsInfo = {
  technicalSkills: [
    { name: "Python", level: 95 },
    { name: "TensorFlow/PyTorch", level: 90 },
    { name: "Machine Learning", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Docker/Kubernetes", level: 80 },
    { name: "MATLAB", level: 75 },
  ],
  languages: [
    { name: "English", level: "Native" },
    { name: "French", level: "Professional" },
    { name: "German", level: "Professional" },
    { name: "Hindi", level: "Fluent" },
    { name: "Tamil", level: "Native" },
    { name: "Malayalam", level: "Native" },
  ],
};

// Experience Section
export const experienceInfo = [
  {
    title: "Graduate Research Assistant",
    company: "Iowa State University",
    period: "2020 - Present",
    description: "Leading research in digital agriculture, developing ML models for crop analysis and insect detection. Enhanced agricultural ML models with 95% accuracy in pest detection.",
  },
  {
    title: "Software Development Engineer",
    company: "3M",
    period: "2019 - 2020",
    description: "Developed U-Net-based data pipelines and implemented real-time sensor visualizations. Improved data processing efficiency by 40%.",
  },
  {
    title: "Software Engineer",
    company: "GE Appliances",
    period: "2017 - 2018",
    description: "Created advanced inventory control systems and optimized database queries. Reduced processing time by 60% through efficient SQL optimization.",
  },
];

// Projects Section
export const projectsInfo = [
  {
    title: "Residue Project",
    description: "A full-stack e-commerce solution built with React and Node.js",
    tech: ["React", "Node.js", "MongoDB", "Redux"],
    github: "https://github.com/yourusername/project1",
    live: "https://project1.com",
  },
  {
    title: "Task Management App",
    description: "A collaborative task management tool with real-time updates",
    tech: ["React", "Firebase", "Material-UI", "TypeScript"],
    github: "https://github.com/yourusername/project2",
    live: "https://project2.com",
  },
];

// Publications Section
export const publicationsInfo = [
  {
    title: "Advanced Sound-Based Insect Detection Using Deep Learning Models",
    journal: "Journal of Agricultural Technology",
    year: 2023,
    authors: "Francis, J.K., Johnson, A., Smith, P.",
    doi: "10.1234/agtech.2023.001",
    abstract: "This paper presents novel techniques for detecting and classifying agricultural pests using acoustic signatures and deep neural networks.",
    type: "journal",
  },
  {
    title: "Efficient Data Pipelines for Agricultural Machine Vision Systems",
    conference: "International Conference on Computer Vision in Agriculture",
    year: 2022,
    authors: "Francis, J.K., Williams, R., Anderson, T.",
    doi: "10.5678/icva.2022.123",
    abstract: "We propose a scalable architecture for processing high-volume image data in real-time agricultural monitoring systems.",
    type: "conference",
  },
  {
    title: "Machine Learning Applications in Digital Agriculture: A Review",
    journal: "AI in Agricultural Sciences",
    year: 2021,
    authors: "Johnson, A., Francis, J.K., Thompson, S.",
    doi: "10.9012/aias.2021.045",
    abstract: "This comprehensive review examines the current state of AI and ML applications across various domains of digital agriculture.",
    type: "journal",
  },
];

// Education Section
export const educationInfo = [
  {
    degree: "Ph.D. in Computer Engineering",
    school: "Iowa State University",
    period: "Expected May 2025",
    gpa: "3.82",
  },
  {
    degree: "Master's in Computer Engineering",
    school: "Iowa State University",
    period: "December 2019",
    gpa: "3.92",
  },
  {
    degree: "Bachelor's in Electrical Engineering",
    school: "Anna University",
    period: "May 2017",
    gpa: "7.6",
  },
];

// Navigation links
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

// Colors and styling
export const styling = {
  primaryColor: "indigo-500",
  secondaryColor: "purple-500",
  accentColor: "pink-500",
  gradients: {
    hero: "from-indigo-500 via-purple-500 to-pink-500",
    about: "from-indigo-50 via-white to-purple-50",
    skills: "from-white to-white",
    experience: "from-purple-50 via-white to-blue-50",
    projects: "from-white to-white",
    publications: "from-blue-50 via-white to-indigo-50",
    education: "from-blue-50 via-white to-purple-50",
    contact: "from-white to-white",
  },
};
