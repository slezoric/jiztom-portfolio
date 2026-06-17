
import { PortfolioConfig } from './types';

// Portfolio Configuration File
// Edit this file to update your portfolio content

export const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    name: "Dr. Jiztom Kavalakkatt Francis",
    shortName: "Dr. Jiztom",
    title: "Machine Learning Engineer · Applied AI Scientist",
    description:
      "PhD in Computer Engineering specializing in interpretable, production-grade AI — building end-to-end machine-learning systems for healthcare, energy, and industrial monitoring.",
    email: "jiztom@iastate.edu",
    linkedin: "https://linkedin.com/in/jiztom",
    github: "https://github.com/jiztom",
    resumeUrl: "/resume.pdf",
    profileImage: "jiztom.jpeg",
    location: "West Des Moines, IA · Open to remote & relocation",
    availability: "Open to AI/ML Engineer, Applied Scientist & ML Platform roles",
    highlights: [
      { label: "PhD", value: "Computer Engineering" },
      { label: "Experience", value: "4+ yrs in applied ML" },
      { label: "Publications", value: "IEEE ICMLA · ICECET · Access" },
    ],
  },

  aboutInfo: {
    paragraphs: [
      "I'm a machine-learning engineer and recently minted PhD (Computer Engineering, Iowa State University) with 4+ years building end-to-end AI systems. My doctoral research delivered a unified deep-learning pipeline that turns messy, heterogeneous sensor streams into interpretable forecasts — fusing ResNet and Transformer architectures, automatically pruning data to cut computational load by 40%+, and layering Grad-CAM and SHAP so every prediction ships with a human-readable explanation.",
      "I care about AI that is not just accurate but transparent and production-ready. I've delivered measurable results across domains — a 20% RMSE reduction on energy forecasting, 94.1% accuracy on ECG arrhythmia detection, and a 15% gain in real-time sensor testing at 3M — and published this work across IEEE ICMLA, ICECET, and IEEE Access. Whether the problem lives in healthcare, energy, industrial monitoring, or agriculture, I bridge rigorous research and shippable engineering.",
    ],
    skills: [
      "Interpretable AI (XAI)",
      "Time-Series Forecasting",
      "Deep Learning",
      "Data Engineering",
      "Computer Vision",
      "MLOps",
    ],
  },

  skillsInfo: {
    technicalSkills: [
      { name: "Python", level: 95 },
      { name: "PyTorch / TensorFlow", level: 90 },
      { name: "Deep Learning & Neural Networks", level: 90 },
      { name: "Explainable AI (SHAP, Grad-CAM)", level: 88 },
      { name: "Time-Series Forecasting", level: 88 },
      { name: "Data Engineering (SQL, Pipelines)", level: 85 },
      { name: "Computer Vision", level: 82 },
      { name: "C / C++", level: 78 },
      { name: "MATLAB", level: 72 },
      { name: "Docker / Kubernetes", level: 70 },
      { name: "Cloud (AWS / Azure)", level: 68 },
    ],
    languages: [
      { name: "English", level: "Native / Bilingual" },
      { name: "Malayalam", level: "Native" },
      { name: "Tamil", level: "Native" },
      { name: "Hindi", level: "Fluent" },
      { name: "French", level: "Professional" },
      { name: "German", level: "Professional" },
    ],
  },

  experienceInfo: [
    {
      title: "Lead Developer, DSP Applications",
      company: "Make Believe Studios",
      period: "December 2025 - Present",
      location: "Nebraska, USA",
      description: [
        "Developed high-performance audio plugins compatible with major Digital Audio Workstations (DAWs) using the JUCE Framework.",
        "Engineered optimized C++ code for real-time audio modulation and tuning, ensuring low-latency execution and stability.",
        "Implemented Test-Driven Development (TDD) with GoogleTest (GTest) to rigorously validate code quality and streamline debugging.",
      ],
    },
    {
      title: "Founder & Chief Technology Officer",
      company: "LumenWorks LLC",
      period: "September 2025 - Present",
      location: "Remote, USA",
      description: [
        "Architect and deliver custom web and AI solutions for small businesses via a subscription model, implementing advanced SEO strategies to maximize digital presence.",
        "Lead end-to-end R&D for bespoke hardware and software projects, managing the full lifecycle from rapid prototyping to production deployment.",
        "Design and integrate applied-AI tools and plugins that automate client workflows and extend business-application capabilities.",
      ],
    },
    {
      title: "Digital Ag Graduate RA — Machine Vision / Machine Learning",
      company: "Iowa State University",
      period: "January 2020 - May 2025",
      location: "Ames, IA, USA",
      description: [
        "Increased detection accuracy by 18% in open-world agricultural image analysis by enhancing image datasets and layering data to strengthen model performance.",
        "Published peer-reviewed research by developing and validating novel pattern-based multivariable regression and sensor-data regression techniques for AI solutions.",
        "Reduced data processing time by 30% for large-scale sensor and image data by building SQL Server data loaders and preprocessing pipelines for efficient ML workflows.",
        "Improved object detection precision by 22% in agricultural field segmentation by refining and optimizing machine-learning algorithms for image-based prediction.",
        "Enhanced field insect detection rates by 25% in sound-based monitoring systems by pioneering novel ML techniques and integrating predictive analytics.",
      ],
    },
    {
      title: "Data Science & Engineering Intern",
      company: "3M",
      period: "May 2023 - August 2023",
      location: "St. Paul, MN, USA",
      description: [
        "Enhanced airflow sensor testing efficiency by 15% in the Dewey Duct Project by designing and implementing advanced testing methodologies.",
        "Improved wound-imagery model accuracy by contributing to a robust U-Net based data pipeline for medical image analysis.",
        "Enabled real-time visualization of sensor data by developing the Wanda Vision Platform, turning raw streams into actionable insight.",
        "Accelerated project ideation and rapid prototyping by facilitating cross-functional brainstorming and collaboration.",
      ],
    },
    {
      title: "Engineer Designer II / Engineer I",
      company: "Iowa State University",
      period: "January 2020 - December 2020",
      location: "Ames, IA, USA",
      description: [
        "Improved research efficiency and data integrity by engineering GPS tagging systems and integrating third-party APIs for digital-agriculture projects.",
        "Enhanced documentation speed by 40% by developing a custom Android application for field data entry and high-resolution image capture.",
        "Accelerated data analysis by 50% by automating SQL-based analytics and backup protocols with advanced scripting.",
        "Increased system flexibility by pioneering the design of VM products for ext4 compatibility, expanding file-system options for research.",
        "Improved crop-loss prediction accuracy by 20% by applying MATLAB for advanced satellite-imagery analysis.",
      ],
    },
    {
      title: "Graduate Research Assistant — Digital Ag",
      company: "Iowa State University",
      period: "January 2019 - December 2019",
      location: "Ames, IA, USA",
      description: [
        "Enhanced data accuracy in object detection for precision agriculture by engineering advanced vision systems across varied terrains using MATLAB and LabVIEW.",
        "Improved machinery data-logging efficiency by 30% by pioneering Linux-based enhancements to data-logger functionality.",
        "Optimized object sensing for complex field environments by developing and refining AI-driven algorithms tailored to diverse terrains.",
        "Advanced field-mapping capabilities by designing and deploying vision and mapping tools using MATLAB and LabVIEW.",
      ],
    },
    {
      title: "Advanced Manufacturing Engineering Co-Op",
      company: "GE Appliances",
      period: "August 2018 - December 2018",
      location: "Lafayette, GA, USA",
      description: [
        "Increased inventory tracking accuracy by 20% by designing and implementing a robust embedded inventory-control label system.",
        "Improved product quality assurance by fine-tuning and optimizing test sequences for new product builds.",
        "Enhanced manufacturing quality control by analyzing and improving camera testing systems using statistical analysis.",
        "Reduced testing errors by 15% by developing and executing meticulous test protocols for reliability and consistency.",
      ],
    },
    {
      title: "Senior Design Project Intern",
      company: "Heilbronn University",
      period: "February 2017 - March 2017",
      location: "Heilbronn, Germany",
      description: [
        "Developed an ISO 15118-compliant display driver for a 4th-generation car-charging station using Python, EBGuide, and C++.",
        "Led a team of 3 in backend driver development for a cross-functional, international design project.",
        "Strengthened cross-cultural communication and collaboration during a university exchange program.",
      ],
    },
  ],

  projectsInfo: [
    {
      title: "Interpretable Time-Series Forecasting Framework",
      description:
        "Doctoral framework that normalizes heterogeneous sensor streams into 2D heatmaps and fuses ResNet + Transformer architectures for robust pattern extraction. Automated data pruning cut compute by 40%+, while Grad-CAM and SHAP plus an NLP module produce per-sensor, human-readable explanations of every prediction.",
      tech: ["PyTorch", "Transformers", "Grad-CAM / SHAP", "NLP", "Time-Series"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Sound-Based Insect Detection",
      description:
        "Acoustic monitoring system that uses machine learning to identify and classify agricultural pests from their distinctive sounds, providing early warning for farmers and lifting field detection rates by 25%.",
      tech: ["Python", "TensorFlow", "Signal Processing", "IoT"],
      github: "",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Residue Project",
      description:
        "Computer-vision and machine-learning pipeline that automates assessment of crop-residue coverage in agricultural fields, enabling precision farming and more sustainable practices.",
      tech: ["Python", "TensorFlow", "OpenCV", "PyTorch", "SQL"],
      github: "https://github.com/jiztom/residue-project",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Multi-Spectral Image Analysis",
      description:
        "Analysis system for multi-spectral imagery that integrates data from multiple sensors to deliver actionable insight on crop health, soil conditions, and yield prediction.",
      tech: ["Python", "MATLAB", "Image Processing", "Deep Learning"],
      github: "https://github.com/jiztom/multi-spectral-analysis",
      showGithub: true,
      live: "",
      showLive: false,
    },
    {
      title: "Agricultural Data Pipeline",
      description:
        "Scalable data pipeline for processing and analyzing large-scale agricultural datasets, helping researchers derive meaningful patterns from complex, heterogeneous data sources.",
      tech: ["Python", "SQL", "Docker", "Kubernetes", "Data Engineering"],
      github: "https://github.com/jiztom/agri-data-pipeline",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Loyola Alumni National Summit 2025",
      description:
        "Engagement platform for Loyola Chennai's 100-year celebration in Dallas, USA. Built with React and AI integration and customized for accessibility and seamless functionality.",
      tech: ["React", "TypeScript", "Docker", "SEO"],
      github: "https://github.com/slezoric/loyola-alumini-national-summit-2025",
      showGithub: true,
      live: "#",
      showLive: false,
    },
    {
      title: "Registration Desk QR Code Generator — Zeffy Integration",
      description:
        "On-site event-registration web app that generates custom QR codes to streamline attendee networking at the Loyola Alumni Summit, built with React and AI tooling.",
      tech: ["React", "TypeScript", "QR / Zeffy API", "Docker"],
      github: "https://github.com/slezoric/loyola-alumini-label-maker",
      showGithub: true,
      live: "#",
      showLive: false,
    },
    {
      title: "This Portfolio",
      description:
        "An interactive, config-driven portfolio with live 3D background, dynamic routing, and a single source of truth for all content — designed and built from scratch.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Three.js"],
      github: "",
      showGithub: false,
      live: "https://portfolio.jiztominnova.tech/",
      showLive: true,
    },
  ],

  publicationsInfo: [
    {
      title:
        "Interpretable AI for Time-Series: Multi-Model Heatmap Fusion with Global Attention and NLP-Generated Explanations",
      journal: "IEEE Access",
      year: 2025,
      authors: "J. F. Kavalakkatt, M. J. Darr",
      doi: "",
      abstract:
        "A multi-model heatmap-fusion framework for interpretable time-series modeling. It achieves 94.1% classification accuracy and an F1 score of 0.93 on the PhysioNet ECG dataset, and reduces regression error to RMSE = 0.28 kWh (R² = 0.95) on the UCI Energy Appliance dataset by merging ResNet and Transformer outputs into a unified visualization — surpassing standalone baselines by up to 12.4%. The work introduces globally weighted input saliency and causal-fidelity metrics to resolve spatial–temporal misalignment in interpretability, and validates NLP-generated explanations (BLEU-4 0.586, ROUGE-L 0.650) that translate fused heatmaps into domain-specific narratives for healthcare and industrial monitoring.",
      type: "IEEE Journal",
      highlights: ["94.1% accuracy / 0.93 F1 (PhysioNet ECG)", "RMSE 0.28 kWh, R² 0.95 (UCI Energy)"],
    },
    {
      title:
        "Multivariate Temporal Regression at Scale: A Three-Pillar Framework Combining ML, XAI and NLP",
      conference: "IEEE International Conference on Electrical, Computer, and Energy Technologies (ICECET)",
      year: 2025,
      authors: "J. F. Kavalakkatt, M. J. Darr",
      doi: "",
      url: "https://arxiv.org/abs/2504.02151",
      abstract:
        "A framework that accelerates the discovery of actionable relationships in high-dimensional temporal data by integrating machine learning, explainable AI, and NLP to improve data quality and streamline workflows. ML-driven pruning identifies and mitigates low-quality samples, XAI-based interpretability validates critical feature interactions, and NLP provides contextual validation — reducing the time to uncover actionable insight by 40–60%. Evaluated on real-world agricultural and synthetic datasets, the framework significantly improves performance metrics (MSE, R², MAE) and computational efficiency, with hardware-agnostic scalability across platforms.",
      type: "IEEE Conference",
      highlights: ["40–60% faster insight discovery", "Hardware-agnostic scalability"],
    },
    {
      title: "Deep Learning and Pattern-based Methodology for Multivariable Sensor Data Regression",
      conference: "IEEE International Conference on Machine Learning and Applications (ICMLA)",
      year: 2022,
      authors: "J. F. Kavalakkatt, C. Kumar, J. Herrera-Gerena, K. Kumar, M. J. Darr",
      doi: "10.1109/ICMLA55696.2022.00125",
      url: "https://ieeexplore.ieee.org/document/10069730/",
      abstract:
        "A deep-learning methodology for multivariable regression based on pattern recognition that triggers fast learning over sensor data. A sensors-to-image conversion lets the approach leverage computer-vision architectures and training processes to generate regression outputs for continuous agricultural crop-yield prediction. Compared against top models from MLCAS2021, a straightforward training process achieved an MAE of 4.394, RMSE of 5.945, and R² of 0.861.",
      type: "IEEE Conference",
      highlights: ["MAE 4.394 · RMSE 5.945 · R² 0.861"],
    },
    {
      title: "Interpretable Time-Series Forecasting with Multi-Model Deep Learning and NLP-Driven XAI",
      journal: "Iowa State University — Doctoral Dissertation",
      year: 2025,
      authors: "J. F. Kavalakkatt",
      doi: "",
      abstract:
        "Doctoral thesis introducing a unified deep-learning framework with CNN–Transformer fusion, automated data pruning, and NLP-driven explainable AI using Grad-CAM and SHAP. The framework reduces RMSE by 20% and improves F1 by 3.8% on benchmark datasets while cutting model training time by over 40% for time-series forecasting and clinical diagnostics. It generates human-readable AI decision narratives for energy management and clinical diagnostics, unifying interpretable deep learning with visual and feature-based explanations to improve transparency and stakeholder trust in high-stakes applications.",
      type: "PhD Thesis",
      highlights: ["20% RMSE reduction", "40%+ less training time"],
    },
  ],

  educationInfo: [
    {
      degree: "Ph.D. in Computer Engineering",
      school: "Iowa State University",
      period: "January 2021 - December 2025",
      gpa: "3.82",
      focus: "Artificial Intelligence — Interpretable Time-Series Forecasting, Data Augmentation, Quality & Pruning",
    },
    {
      degree: "Master's in Computer Engineering",
      school: "Iowa State University",
      period: "August 2017 - December 2019",
      gpa: "3.92",
      focus: "Internet of Things — Real-time data collection & optimization",
    },
    {
      degree: "Bachelor's in Electrical Engineering",
      school: "Anna University",
      period: "August 2013 - May 2017",
      gpa: "7.6 / 10",
      focus: "Framework for ISO 15118 — European EV charging standard",
    },
  ],

  testimonialsInfo: [
    {
      quote:
        "Jiztom's expertise in AI and agriculture has been instrumental in advancing our research initiatives. His innovative approaches to complex problems consistently deliver exceptional results.",
      name: "Dr. M. J. Darr",
      title: "Professor, Iowa State University",
    },
    {
      quote:
        "Working with Jiztom on the agricultural data pipeline transformed our approach to data analysis. His technical skills and domain knowledge made a significant impact on our operations.",
      name: "Chandan Kumar",
      title: "Researcher, Oak Ridge National Laboratory",
    },
    {
      quote:
        "The sound-based insect detection system Jiztom developed represents a breakthrough in pest-management technology. His work combines technical excellence with practical application.",
      name: "Peter Hong",
      title: "Director, ISU Startup Factory, Iowa State University",
    },
  ],

  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Education", href: "#education" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Hobbies", href: "#hobbies" },
    { name: "Contact", href: "#contact" },
  ],

  styling: {
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
      hobbies: "from-white to-white",
      education: "from-blue-50 via-white to-purple-50",
      contact: "from-white to-white",
    },
  },

  features: {
    showHero: true,
    showAbout: true,
    showSkills: true,
    showExperience: true,
    showProjects: true,
    showPublications: true,
    showTestimonials: true,
    showHobbies: true,
    showEducation: true,
    showContact: true,
  },

  ui: {
    hero: {
      contactButton: "Get in Touch",
      downloadButton: "Download Résumé",
    },
    common: {
      viewProject: "View Project",
      viewCode: "View Code",
    },
  },
};

// Export individual sections for backward compatibility while migrating
export const {
  personalInfo,
  aboutInfo,
  skillsInfo,
  experienceInfo,
  projectsInfo,
  publicationsInfo,
  educationInfo,
  testimonialsInfo,
  navLinks,
  styling,
} = portfolioConfig;
