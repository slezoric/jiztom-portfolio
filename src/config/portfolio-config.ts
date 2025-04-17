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
    description: [
      "Enhanced open-world detection capabilities by utilizing advanced image processing techniques and machine learning algorithms, layering data on images for improved machine learning applications.",
      "Improved data handling efficiency by 30% by designing and implementing SQL Server data loaders and preprocessing pipelines.",
      "Increased accuracy of image-based predictions by 25% by refining and optimizing machine learning algorithms for agri-tech applications.",
      "Enhanced field accuracy in insect detection by pioneering novel sound-based detection techniques.",
      "Boosted user engagement and decision-making by 40% by streamlining and optimizing data visualization tools for agricultural data."
    ],
  },
  {
    title: "Data Science and Engineering Intern",
    company: "3M",
    period: "Summer 2023",
    description: [
      "Enhanced airflow sensor testing efficiency by 15% in the Dewey Duct Project by designing and implementing advanced testing protocols",
      "Increased accuracy of wound imagery modeling by contributing to the integration and refinement of U-Net based data pipeline techniques.",
      "Improved real-time data visualization capabilities by developing the Wanda Vision Platform, a sensor data visualization tool.",
      "Fostered innovation and effective project ideation by facilitating cross-functional team collaborations and brainstorming sessions.",
      "Delivered impactful results through innovative solutions by engaging in cross-functional team collaboration and idea generation."
    ],
  },
  {
    title: "Engineer Designer II/ Engineer I",
    company: "Iowa State University",
    period: "2020",
    description: [
      "Improved crop loss predictions by applying MATLAB for in-depth satellite imagery analysis.",
      "Enhanced data analytics and backup efficiency by scripting automated SQL operations, leading to streamlined data analytics.",
      "Boosted file system flexibility in research by pioneering VM products compatible with ext4 file systems.",
      "Engineered GPS tagging and third-party integration for digital agriculture solutions.",
      "Increased efficiency in documentation and image capture by developing a custom Android app."
    ],
  },
  {
    title: "Graduate Research Assistant – Digital Ag",
    company: "Iowa State University",
    period: "2019",
    description: [
      "Improved data accuracy by 30% in precision agriculture by engineering advanced vision systems and implementing them using MATLAB and LabVIEW.",
      "Enhanced data logger functionality by pioneering Linux-based development techniques, leading to more robust data collection systems.",
      "Refined object sensing capabilities across diverse terrains by spearheading tailored solutions for complex environments.",
      "Advanced machinery data logging systems by pioneering innovative designs, increasing operational efficiency in data collection.",
      "Implemented vision systems and mapping tools for precision agriculture, developed using MATLAB and LabVIEW to enhance operational accuracy."
    ],
  },
  {
    title: "Advanced Manufacturing Engineering Coop",
    company: "GE Appliances",
    period: "Fall 2018",
    description: [
      "Enhanced inventory management accuracy by 20% by creating and implementing a robust embedded inventory control label system.",
      "Increased product quality consistency by 15% by fine-tuning test sequences for optimal quality assurance.",
      "Improved quality control efficiency by 25% by ensuring quality in new product builds through meticulous testing.",
      "Reduced defect rates by 30% by analyzing and improving camera testing systems for critical quality control"
    ],
  },
];

// Projects Section
export const projectsInfo = [
  {
    title: "Residue Project",
    description: "Developed an advanced computer vision and machine learning pipeline to automate the assessment of crop residue coverage in agricultural fields, enabling precision farming and sustainable practices.",
    tech: ["Python", "TensorFlow", "OpenCV", "PyTorch", "SQL"],
    github: "https://github.com/jiztom/residue-project",
    live: "https://residue-project.com",
  },
  {
    title: "Multi-spectral Image Analysis",
    description: "Created a comprehensive analysis system for multi-spectral imagery in agriculture, integrating data from various sensors to provide actionable insights on crop health, soil conditions, and yield prediction.",
    tech: ["Python", "MATLAB", "Image Processing", "Deep Learning"],
    github: "https://github.com/jiztom/multi-spectral-analysis",
    live: "https://multi-spectral.demo.com",
  },
  {
    title: "Sound-Based Insect Detection",
    description: "Pioneered an innovative acoustic monitoring system that uses machine learning to identify and classify agricultural pests based on their distinctive sounds, providing early warning for farmers.",
    tech: ["Python", "TensorFlow", "Signal Processing", "IoT"],
    github: "https://github.com/jiztom/acoustic-pest-detection",
    live: "https://acoustic-pest-detection.demo.com",
  },
  {
    title: "Agricultural Data Pipeline",
    description: "Engineered a scalable data pipeline for processing and analyzing large-scale agricultural datasets, enabling researchers to derive meaningful patterns and insights from complex, heterogeneous data sources.",
    tech: ["Python", "SQL", "Docker", "Kubernetes", "Data Engineering"],
    github: "https://github.com/jiztom/agri-data-pipeline",
    live: "https://agri-data-pipeline.demo.com",
  },
];

// Publications Section
export const publicationsInfo = [
  {
    title: "Multivariate Temporal Regression at Scale: A Three-Pillar Framework Combining ML, XAI and NLP",
    journal: "International Conference on Electrical, Computer, and Energy Technologies",
    year: 2025,
    authors: "J.F Kavalakkatt, M.J Darr",
    doi: "",
    abstract: "This paper introduces a novel framework that accelerates the discovery of actionable relationships in high-dimensional temporal data by integrating machine learning (ML), explainable AI (XAI), and natural language processing (NLP) to enhance data quality and streamline workflows. Traditional methods often fail to recognize complex temporal relationships, leading to noisy, redundant, or biased datasets. Our approach combines ML-driven pruning to identify and mitigate low-quality samples, XAI-based interpretability to validate critical feature interactions, and NLP for future contextual validation, reducing the time required to uncover actionable insights by 40–60\% . Evaluated on real-world agricultural and synthetic datasets, the framework significantly improves performance metrics (e.g., MSE, $R^2$, MAE) and computational efficiency, with hardware-agnostic scalability across diverse platforms. While long-term real-world impacts (e.g., cost savings, sustainability gains) are pending, this methodology provides an immediate pathway to accelerate data-centric AI in dynamic domains like agriculture and energy, enabling faster iteration cycles for domain experts.",
    type: "IEEE Conference",
  },
  {
    title: "Efficient Data Pipelines for Agricultural Machine Vision Systems",
    conference: "International Conference on Machine Learning and Application",
    year: 2023,
    authors: "J.F Kavalakkatt,C. Kumar,J. Herrera-Gerena, K. Kumar, M.J Darr",
    doi: "10.1109/ICMLA55696.2022.00125",
    abstract: "We propose a deep learning methodology for multivariable regression based on pattern recognition that triggers fast learning over sensor data. We used a conversion of sensors-to-image, which enables us to take advantage of Computer Vision architectures and training processes. In addition to this data preparation methodology, we explore using state-of-the-art architectures to generate regression outputs to predict agricultural crop continuous yield information. Finally, we compare with some top models reported in MLCAS2021. We found that using a straightforward training process, we were able to accomplish an MAE of 4.394, RMSE of 5.945, and R2 of 0.861.",
    type: "IEEE conference",
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

// Testimonials Section
export const testimonialsInfo = [
  {
    quote: "Jiztom's expertise in AI and agriculture has been instrumental in advancing our research initiatives. His innovative approaches to complex problems consistently deliver exceptional results.",
    name: "Dr. Michael Darr",
    title: "Professor, Iowa State University"
  },
  {
    quote: "Working with Jiztom on the agricultural data pipeline project transformed our approach to data analysis. His technical skills and domain knowledge made a significant impact on our operations.",
    name: "Sarah Johnson",
    title: "Research Lead, Digital Agriculture Initiative"
  },
  {
    quote: "The sound-based insect detection system developed by Jiztom represents a breakthrough in pest management technology. His work combines technical excellence with practical agricultural applications.",
    name: "Robert Chen",
    title: "Director of Innovation, AgTech Solutions"
  },
];

// Navigation links
export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Publications", href: "#publications" },
  { name: "Testimonials", href: "#testimonials" },
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
    testimonials: "from-purple-50 to-indigo-50",
    education: "from-blue-50 via-white to-purple-50",
    contact: "from-white to-white",
  },
};
