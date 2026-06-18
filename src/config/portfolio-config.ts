
import { PortfolioConfig } from './types';

// Portfolio Configuration File
// Edit this file to update your portfolio content

export const portfolioConfig: PortfolioConfig = {
  personalInfo: {
    name: "Dr. Jiztom Kavalakkatt Francis",
    shortName: "Dr. Jiztom",
    title: "PhD Computer Engineer | AI/ML · Data Science · Embedded Systems",
    description: "From terabyte-scale ML pipelines to safety-critical embedded firmware and real-time DSP.",
    email: "kfjiztom@gmail.com",
    linkedin: "https://linkedin.com/in/jiztom",
    github: "https://github.com/jiztom",
    resumeUrl: "/resume.pdf",
    profileImage: "jiztom.jpeg",
    location: "West Des Moines, IA · Open to remote & relocation",
    availability: "Open to AI/ML, Data Science & Embedded Systems roles",
    highlights: [
      { label: "PhD", value: "Computer Engineering" },
      { label: "Range", value: "Sensor → Firmware → Model" },
      { label: "Publications", value: "3× IEEE (ICMLA · ICECET · Access)" },
    ],
  },

  aboutInfo: {
    lead: "PhD Computer Engineer working across the full stack of intelligent systems — from the sensor and the firmware that reads it, to the data pipeline that cleans it, to the model that learns from it.",
    highlights: [
      {
        icon: "Cpu",
        title: "Hardware-to-model range",
        description: "C/C++ firmware and CAN/J1939 drivers on field equipment through to PyTorch CNN/Transformer pipelines — one engineer across the whole stack.",
      },
      {
        icon: "BrainCircuit",
        title: "AI / ML & computer vision",
        description: "Sensor-to-image regression and open-world detection — 18–22% accuracy and precision gains in production research.",
      },
      {
        icon: "Database",
        title: "Data at terabyte scale",
        description: "Chunked ETL, SQL data loaders, and parallel I/O that cut preprocessing ~30% on multi-terabyte datasets.",
      },
      {
        icon: "Activity",
        title: "Real-time & safety-critical",
        description: "Lock-free C++ audio DSP at sub-millisecond latency, plus ISO 26262 / IEC 61508 functional-safety discipline.",
      },
    ],
    paragraphs: [
      "Three IEEE publications, a 22% gain in field-segmentation precision, and ~30% faster preprocessing on terabyte-scale datasets — my work pairs research depth with production discipline: lock-free concurrency, test-driven development, and HIL-style validation. I'm targeting roles in AI engineering, data science, and custom embedded systems where that hardware-to-model range is an advantage.",
    ],
    skills: ["AI / ML", "Data Science", "Embedded Systems", "Computer Vision", "Real-Time DSP", "C/C++"],
  },

  skillsInfo: {
    categories: [
      {
        name: "AI / ML & Computer Vision",
        skills: ["Python", "PyTorch", "TensorFlow", "Machine Learning", "CNNs / Transformers", "OpenCV", "Computer Vision", "LLMs", "Edge Inference", "Sensor Fusion"],
      },
      {
        name: "Data Engineering & MLOps",
        skills: ["SQL", "ETL", "Data Pipelines", "QuestDB", "Grafana", "Docker", "REST APIs", "Azure", "DevOps", "MATLAB"],
      },
      {
        name: "Embedded & Firmware",
        skills: ["C / C++", "Real-Time Systems", "FreeRTOS", "ARM Cortex-M", "ESP32", "RISC-V", "AVR", "CAN / J1939", "UART / SPI / I2C", "ADC/DAC · GPIO · PWM", "BLE", "Linux / Unix", "Assembly"],
      },
      {
        name: "Hardware, Sensors & Test",
        skills: ["LiDAR", "Radar", "Stereo Vision", "GPS / GNSS", "IMU", "Oscilloscopes", "Logic Analyzers", "CAN-Bus Analyzers", "JTAG / SWD", "Segger J-Link", "Wireshark", "Root-Cause Analysis"],
      },
      {
        name: "Quality, Safety & Tooling",
        skills: ["Test-Driven Development", "GoogleTest", "DOE Methodology", "Functional Safety", "ISO 26262", "IEC 61508", "ISO 15118", "Git", "CMake / Make", "GCC / GDB"],
      },
    ],
    languages: [
      { name: "English", level: "Native" },
      { name: "Malayalam", level: "Native" },
      { name: "Hindi", level: "Fluent" },
      { name: "Tamil", level: "Native" },
      { name: "French", level: "Professional" },
      { name: "German", level: "Professional" },
    ],
  },

  experienceInfo: [
    {
      title: "Lead Developer, Real-Time DSP / C++",
      company: "Make Believe Studio",
      period: "December 2025 - Present",
      description: [
        "Ship production C++ audio plugins (JUCE) under hard real-time constraints — lock-free audio threads, sub-millisecond latency, and deterministic execution across major DAWs.",
        "Apply the same concurrency, threading, and timing discipline required for safety-critical embedded firmware directly to the audio signal path.",
        "Drive Test-Driven Development with GoogleTest across the build pipeline to lock in code quality and accelerate debugging."
      ],
    },
    {
      title: "Chief Technology Officer",
      company: "LumenWorks LLC",
      period: "September 2025 - Present",
      description: [
        "Architect and deliver custom web solutions for small businesses via a subscription model, implementing advanced SEO strategies to maximize digital presence.",
        "Lead end-to-end R&D initiatives for bespoke hardware and software projects, managing the full lifecycle from rapid prototyping to production deployment.",
        "Design and integrate custom applied AI tools and plugins to automate workflows and enhance business application capabilities."
      ],
    },
    {
      title: "PhD Research — Embedded ML & Machine Vision",
      company: "Iowa State University",
      period: "January 2021 - May 2025",
      description: [
        "Built CNN/Transformer pipelines in PyTorch for sensor-to-image regression on CAN- and LiDAR-derived telemetry, improving field-segmentation precision by 22% and open-world detection accuracy by 18%.",
        "Cut preprocessing time ~30% on terabyte-scale datasets via scalable SQL Server data loaders, chunked ETL, and parallel I/O workers — raising GPU training throughput.",
        "Published a novel pattern-based methodology for multivariate temporal regression across three peer-reviewed IEEE venues.",
        "Raised insect-detection rates 25% with 1D-CNN classifiers on spectrogram features for early-warning pest monitoring.",
        "Profiled memory bottlenecks and tuned DataLoader concurrency to streamline training workflows across a multi-investigator lab."
      ],
    },
    {
      title: "Graduate Research Engineer — Digital Agriculture (DigitalAg Lab)",
      company: "Iowa State University",
      period: "January 2019 - December 2024",
      description: [
        "Owned firmware, perception integration, and test infrastructure for field-deployed agricultural heavy equipment (tractors, combines, sprayers).",
        "Designed and deployed a custom GPS + CAN field tagger end-to-end — schematic, transceiver selection, GNSS-over-UART integration, C firmware, and on-vehicle validation — broadcasting time-synchronized georeferenced events onto the equipment CAN network.",
        "Wrote C/C++ peripheral drivers (UART, SPI, I2C, ADC, GPIO, CAN) under deterministic schedulers; shipped Linux firmware that raised field-acquisition efficiency ~30% via optimized I/O scheduling and interrupt-driven reads.",
        "Built CAN / J1939 extraction systems that decoded vehicle-bus and ECU telemetry into clean, structured datasets for downstream analytics and ML pipelines.",
        "Developed automated calibration routines for perception sensors and analog chains (LiDAR, radar, stereo/mono cameras, GPS/GNSS, ADC front ends), handling time synchronization and fusion for in-field testing.",
        "Built HIL-style validation rigs and triaged field issues via root-cause analysis on oscilloscopes, logic analyzers, and CAN-bus analyzers during board bring-up."
      ],
    },
    {
      title: "Data & Embedded Systems Intern",
      company: "3M",
      period: "May 2023 - August 2023",
      description: [
        "Built a real-time sensor-visualization platform (Python + SQL) ingesting streaming telemetry from embedded sensor nodes, surfacing operational insights for production engineers.",
        "Improved airflow-sensor test efficiency 15% with a DOE-driven (Minitab) methodology that eliminated redundant cycles at the hardware/software boundary.",
        "Defined test-system architecture alongside cross-functional EE / ME / firmware engineers."
      ],
    },
    {
      title: "Engineer Designer II / Engineer I",
      company: "Iowa State University",
      period: "January 2020 - December 2020",
      description: [
        "Engineered an offline-first Android app for field documentation, improving capture efficiency 40% through structured metadata and seamless external-system sync.",
        "Built CI/CD workflows (Python + Bash) for SQL analytics and backup automation, cutting data-processing time 50% on multi-terabyte datasets in Azure.",
        "Standardized reproducible compute environments with ext4-backed VM appliances across operating systems.",
        "Applied MATLAB to satellite-imagery analysis via NDVI/EVI vegetation-index thresholding, improving crop-loss prediction accuracy 20%."
      ],
    },
    {
      title: "Advanced Manufacturing Engineering Co-Op",
      company: "GE Appliances",
      period: "August 2018 - December 2018",
      description: [
        "Designed and deployed an embedded inventory-control system (barcode scanners over UART, MCU-driven label triggering, SQL reconciliation), improving tracking accuracy 20%.",
        "Reduced testing errors 15% by optimizing automated test sequences and camera-based vision-test rigs across the appliance production line."
      ],
    },
    {
      title: "Embedded Firmware Engineer (Senior Design)",
      company: "Hochschule Heilbronn — Germany",
      period: "February 2017 - March 2017",
      description: [
        "Delivered ISO 15118-compliant display-driver firmware for a 4th-generation EV charging station (C++ / EBGuide HMI).",
        "Led a 3-engineer team through driver development, hardware integration, CAN communication, and on-station debugging."
      ],
    },
  ],

  projectsInfo: [
    {
      title: "ExplainCast — Faithful AI Forecast Explanations",
      description: "A GenAI system that turns a time-series forecast into a plain-English explanation a stakeholder can trust — and then scores how faithful that explanation is. Pipeline: gradient-boosted forecast → SHAP attribution → retrieval (glossary grounding + semantic RAG) → Claude tool-calling narrative constrained to the model's real drivers → faithfulness eval (attribution coverage + hallucinated-driver detection). FastAPI + web UI, Dockerized, runs on real UCI energy data. Try the live demo — pick an instance and watch the forecast, signed drivers, and faithfulness score update.",
      tech: ["Python", "Claude (tool-calling)", "RAG", "SHAP", "FastAPI", "Docker"],
      github: "https://github.com/slezoric/explaincast",
      showGithub: true,
      live: "https://explaincast.jiztominnova.tech/",
      showLive: true,
    },
    {
      title: "GPS + CAN Field Tagger",
      description: "Designed and deployed a custom on-vehicle hardware module end-to-end — schematic, transceiver selection, GNSS-over-UART integration, and C firmware — that broadcasts time-synchronized, georeferenced events onto an agricultural equipment CAN network for downstream data fusion.",
      tech: ["C", "Embedded Firmware", "CAN / J1939", "GNSS / UART", "PCB Design"],
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Real-Time Audio DSP Plugins",
      description: "Production C++ audio plugins built on the JUCE framework, running on lock-free audio threads with sub-millisecond latency across major DAWs. Validated with a Test-Driven Development pipeline (GoogleTest) for deterministic, real-time-safe behavior.",
      tech: ["C++", "JUCE", "Real-Time DSP", "GoogleTest", "Lock-Free"],
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "CAN / J1939 Telemetry Extraction",
      description: "Built an extraction and decoding pipeline that turns raw vehicle-bus and ECU traffic into clean, structured datasets — bridging embedded telemetry with downstream analytics and ML training pipelines.",
      tech: ["C++", "CAN / J1939", "Python", "ETL"],
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Sensor-to-Image Regression Framework",
      description: "A deep-learning methodology that converts multivariate sensor streams into images, unlocking computer-vision architectures for continuous agricultural yield regression. Benchmarked against MLCAS2021 leaders, achieving MAE 4.39 / RMSE 5.95 / R² 0.861.",
      tech: ["Python", "PyTorch", "Computer Vision", "Transformers", "Regression"],
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Residue Project",
      description: "Developed an advanced computer vision and machine learning pipeline to automate the assessment of crop residue coverage in agricultural fields, enabling precision farming and sustainable practices.",
      tech: ["Python", "TensorFlow", "OpenCV", "PyTorch", "SQL"],
      github: "https://github.com/jiztom/residue-project",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Multi-spectral Image Analysis",
      description: "Created a comprehensive analysis system for multi-spectral imagery in agriculture, integrating data from various sensors to provide actionable insights on crop health, soil conditions, and yield prediction.",
      tech: ["Python", "MATLAB", "Image Processing", "Deep Learning"],
      github: "https://github.com/jiztom/multi-spectral-analysis",
      showGithub: true,
      live: "",
      showLive: false,
    },
    {
      title: "Sound-Based Insect Detection",
      description: "Pioneered an innovative acoustic monitoring system that uses machine learning to identify and classify agricultural pests based on their distinctive sounds, providing early warning for farmers.",
      tech: ["Python", "TensorFlow", "Signal Processing", "IoT"],
      // github: "https://github.com/jiztom/acoustic-pest-detection",
      showGithub: true,
      live: "",
      showLive: false,
    },
    {
      title: "Agricultural Data Pipeline",
      description: "Engineered a scalable data pipeline for processing and analyzing large-scale agricultural datasets, enabling researchers to derive meaningful patterns and insights from complex, heterogeneous data sources.",
      tech: ["Python", "SQL", "Docker", "Kubernetes", "Data Engineering"],
      github: "https://github.com/jiztom/agri-data-pipeline",
      showGithub: false,
      live: "",
      showLive: false,
    },
    {
      title: "Loyola Alumni National Summit 2025 website",
      description: "Developed a dedicated website to facilitate alumni engagement for Loyola Chennai's 100-year celebration in Dallas, USA. Built using React & AI integration, the platform was customized to meet user needs, ensuring seamless accessibility and functionality. ",
      tech: ["Php", "React AI", "Docker", "typescript"],
      github: "https://github.com/slezoric/loyola-alumini-national-summit-2025",
      showGithub: true,
      live: "https://loyola-alumini-national-summit-2025.lovable.app/",
      showLive: true,
    },
    {
      title: "Registration Desk QR Code generator - Zeffy integration",
      description: "Designed and developed a WebApp for on-site event registration, generating custom QR codes to streamline networking among attendees at the Loyola Alumni Summit. Built using React & AI, the platform enhanced connectivity and engagement for registered members.",
      tech: ["Php", "React AI", "Docker", "typescript"],
      github: "https://github.com/slezoric/loyola-alumini-label-maker",
      showGithub: true,
      live: "https://loyola-alumini-label-maker.lovable.app/",
      showLive: true,
    },
    {
      title: "Jiztom's Portfolio",
      description: "Designed and developed a interactive portfolio with updated and working data with live interactions.",
      tech: ["Php", "React AI", "Docker", "typescript"],
      github: "https://github.com/slezoric/loyola-alumini-label-maker",
      showGithub: false,
      live: "https://portfolio.jiztominnova.tech/",
      showLive: true,
    },
  ],

  publicationsInfo: [
    {
      title: "Multivariate Temporal Regression at Scale: A Three-Pillar Framework Combining ML, XAI and NLP",
      journal: "IEEE - International Conference on Electrical, Computer, and Energy Technologies",
      year: 2025,
      authors: "J.F Kavalakkatt, M.J Darr",
      doi: "",
      abstract: "This paper introduces a novel framework that accelerates the discovery of actionable relationships in high-dimensional temporal data by integrating machine learning (ML), explainable AI (XAI), and natural language processing (NLP) to enhance data quality and streamline workflows. Traditional methods often fail to recognize complex temporal relationships, leading to noisy, redundant, or biased datasets. Our approach combines ML-driven pruning to identify and mitigate low-quality samples, XAI-based interpretability to validate critical feature interactions, and NLP for future contextual validation, reducing the time required to uncover actionable insights by 40–60% . Evaluated on real-world agricultural and synthetic datasets, the framework significantly improves performance metrics (e.g., MSE, $R^2$, MAE) and computational efficiency, with hardware-agnostic scalability across diverse platforms. While long-term real-world impacts (e.g., cost savings, sustainability gains) are pending, this methodology provides an immediate pathway to accelerate data-centric AI in dynamic domains like agriculture and energy, enabling faster iteration cycles for domain experts.",
      type: "IEEE Conference",
    },
    {
      title: "Efficient Data Pipelines for Agricultural Machine Vision Systems",
      conference: "IEEE - International Conference on Machine Learning and Application",
      year: 2023,
      authors: "J.F Kavalakkatt,C. Kumar,J. Herrera-Gerena, K. Kumar, M.J Darr",
      doi: "10.1109/ICMLA55696.2022.00125",
      abstract: "We propose a deep learning methodology for multivariable regression based on pattern recognition that triggers fast learning over sensor data. We used a conversion of sensors-to-image, which enables us to take advantage of Computer Vision architectures and training processes. In addition to this data preparation methodology, we explore using state-of-the-art architectures to generate regression outputs to predict agricultural crop continuous yield information. Finally, we compare with some top models reported in MLCAS2021. We found that using a straightforward training process, we were able to accomplish an MAE of 4.394, RMSE of 5.945, and R2 of 0.861.",
      type: "IEEE conference",
    },
  ],

  educationInfo: [
    {
      degree: "Ph.D. in Computer Engineering",
      school: "Iowa State University",
      period: "January 2021 - December 2025",
      gpa: "3.82",
    },
    {
      degree: "M.S. in Computer Engineering",
      school: "Iowa State University",
      period: "August 2017 - December 2019",
      gpa: "3.92",
    },
    {
      degree: "B.S. in Electrical Engineering",
      school: "Anna University, India",
      period: "2013 - 2017",
      gpa: "7.6",
    },
  ],

  testimonialsInfo: [
    {
      quote: "Jiztom's expertise in AI and agriculture has been instrumental in advancing our research initiatives. His innovative approaches to complex problems consistently deliver exceptional results.",
      name: "Dr. M J Darr",
      title: "Professor, Iowa State University"
    },
    {
      quote: "Working with Jiztom on the agricultural data pipeline project transformed our approach to data analysis. His technical skills and domain knowledge made a significant impact on our operations.",
      name: "Chandan Kumar",
      title: "Research Assistant, Oak Ridge National Lab (Iowa State University)"
    },
    {
      quote: "The sound-based insect detection system developed by Jiztom represents a breakthrough in pest management technology. His work combines technical excellence with practical agricultural applications.",
      name: "Peter Hong",
      title: "Director, ISU Startup Factory, Iowa State University"
    },
  ],

  navLinks: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Publications", href: "#publications" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Hobbies", href: "#hobbies" },
    { name: "Education", href: "#education" },
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
      contactButton: "Contact Me",
      downloadButton: "Download CV",
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
