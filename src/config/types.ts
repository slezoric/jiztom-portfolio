
export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  description: string;
  email: string;
  linkedin: string;
  github: string;
  resumeUrl: string;
  profileImage: string;
}

export interface AboutInfo {
  paragraphs: string[];
  skills: string[];
}

export interface Skill {
  name: string;
  level: number | string;
}

export interface SkillsInfo {
  technicalSkills: Skill[];
  languages: Skill[];
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  showGithub: boolean;
  live?: string;
  showLive: boolean;
}

export interface Publication {
  title: string;
  journal?: string;
  conference?: string;
  year: number;
  authors: string;
  doi?: string;
  abstract: string;
  type: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  gpa: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  title: string;
}

export interface NavLink {
  name: string;
  href: string;
}

export interface Styling {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  gradients: {
    hero: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    publications: string;
    testimonials: string;
    hobbies: string;
    education: string;
    contact: string;
  };
}

export interface Features {
  showHero: boolean;
  showAbout: boolean;
  showSkills: boolean;
  showExperience: boolean;
  showProjects: boolean;
  showPublications: boolean;
  showTestimonials: boolean;
  showHobbies: boolean;
  showEducation: boolean;
  showContact: boolean;
}

export interface UIConfig {
  hero: {
    contactButton: string;
    downloadButton: string;
  };
  common: {
    viewProject: string;
    viewCode: string;
  };
}

export interface PortfolioConfig {
  personalInfo: PersonalInfo;
  aboutInfo: AboutInfo;
  skillsInfo: SkillsInfo;
  experienceInfo: Experience[];
  projectsInfo: Project[];
  publicationsInfo: Publication[];
  educationInfo: Education[];
  testimonialsInfo: Testimonial[];
  navLinks: NavLink[];
  styling: Styling;
  features: Features;
  ui: UIConfig;
}
