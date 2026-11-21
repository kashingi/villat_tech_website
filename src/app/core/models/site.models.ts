export type DepartmentId =
  | 'networking'
  | 'operations'
  | 'software'
  | 'academy';

export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
  icon: string;
  featured?: boolean;
}

export interface Department {
  id: DepartmentId;
  name: string;
  shortName: string;
  eyebrow: string;
  tagline: string;
  description: string;
  icon: string;
  image: string;
  accentClass: string;
  badgeClass: string;
  services: ServiceItem[];
  ctaLabel: string;
  ctaRoute: string;
}

export interface CourseProgram {
  id: string;
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Career Track';
  duration: string;
  format: string;
  summary: string;
  description: string;
  technologies: string[];
  topics: string[];
  outcomes: string[];
  icon: string;
  featured?: boolean;
}

export interface CareerService {
  id: string;
  title: string;
  summary: string;
  highlights: string[];
  turnaround: string;
  icon: string;
}

export type PortfolioCategory =
  | 'All'
  | 'Websites'
  | 'Web Applications'
  | 'E-Commerce'
  | 'Networking'
  | 'CCTV';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<PortfolioCategory, 'All'>;
  client: string;
  location: string;
  year: string;
  summary: string;
  description: string;
  image: string;
  technologies: string[];
  highlights: string[];
  liveUrl?: string;
  featured?: boolean;
}

export type BlogCategory =
  | 'All'
  | 'Technology'
  | 'Web Development'
  | 'Career Tips'
  | 'SEO & Insights';

export interface BlogPost {
  slug: string;
  title: string;
  category: Exclude<BlogCategory, 'All'>;
  excerpt: string;
  author: {
    name: string;
    role: string;
  };
  date: string;
  readTime: string;
  image: string;
  tags: string[];
  featured?: boolean;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  department: string;
  initials: string;
}
