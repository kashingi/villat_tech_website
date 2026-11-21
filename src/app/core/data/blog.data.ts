import { BlogCategory, BlogPost } from '../models/site.models';

export const BLOG_CATEGORIES: BlogCategory[] = [
  'All',
  'Technology',
  'Web Development',
  'Career Tips',
  'SEO & Insights',
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'building-resilient-office-wifi-and-cctv-in-coastal-mombasa',
    title: 'Designing Reliable Office Wi-Fi & CCTV Networks for Coastal Businesses in Mombasa',
    category: 'Technology',
    excerpt:
      'Why consumer routers fail in busy Nyali offices and hotels — and how structured cabling, VLAN segmentation, and weather-sealed IP cameras eliminate costly downtime.',
    author: {
      name: 'Villa Tech Infrastructure Team',
      role: 'Networking & Security Engineers',
    },
    date: 'October 28, 2026',
    readTime: '6 min read',
    image: 'images/network-installation.png',
    tags: ['Networking', 'Wi-Fi 6', 'CCTV', 'Mombasa Business'],
    featured: true,
    sections: [
      {
        heading: 'The Hidden Cost of Unplanned Network Architecture',
        paragraphs: [
          'Across growing businesses in Nyali and Mombasa CBD, connectivity is no longer a nice-to-have — it powers point-of-sale terminals, cloud ERP platforms, VoIP phones, and security cameras. Yet many offices still rely on a single ISP-supplied router tucked behind a reception desk.',
          'Concrete walls, multi-floor layouts, and coastal humidity rapidly expose the limits of consumer hardware, causing dropped video calls, sluggish cloud sync, and frustrating guest Wi-Fi experiences.',
        ],
      },
      {
        heading: 'Three Pillars of Enterprise-Grade Reliability',
        paragraphs: [
          'When our Networking Department surveys a commercial building, hotel, or residential estate, we focus on three foundational upgrades that pay for themselves in uptime:',
        ],
        bullets: [
          'Ceiling-mounted enterprise access points fed by structured Cat6A cabling rather than weak wireless repeaters.',
          'VLAN segmentation that cleanly separates guest Wi-Fi, staff workstations, accounting systems, and CCTV traffic.',
          'IP67 weather-resistant CCTV enclosures and surge-protected PoE switches built to endure Mombasa’s coastal air and power fluctuations.',
        ],
      },
      {
        heading: 'Planning for Growth & Preventive Maintenance',
        paragraphs: [
          'A well-documented patch panel and labeled cabling rack turns hours of guesswork into five-minute troubleshooting. Pairing installation with scheduled quarterly health checks ensures firmware stays patched, NVR hard drives remain healthy, and your team stays online without interruption.',
        ],
      },
    ],
  },
  {
    slug: 'getting-started-with-angular-standalone-components-and-tailwind',
    title: 'Modern Frontend Architecture: Angular Standalone Components with Tailwind CSS',
    category: 'Web Development',
    excerpt:
      'A practical guide from Villa Tech Academy on structuring clean, fast, maintainable Angular web applications using standalone components, signals, and Tailwind utility styling.',
    author: {
      name: 'Villa Tech Academy Faculty',
      role: 'Senior Full-Stack Instructors',
    },
    date: 'October 14, 2026',
    readTime: '8 min read',
    image: 'images/academy-coding.jpg',
    tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Frontend Tutorial'],
    featured: true,
    sections: [
      {
        heading: 'Why Modern Angular Feels Lighter Than Ever',
        paragraphs: [
          'Angular has evolved dramatically into a streamlined, high-performance framework. Standalone components remove legacy NgModule boilerplate, while Angular Signals bring predictable, fine-grained reactivity without unnecessary complexity.',
          'Combined with TypeScript’s strict type safety and Angular Router’s lazy-loaded feature views, teams can scale from a sharp corporate site to a full enterprise ERP smoothly.',
        ],
      },
      {
        heading: 'Pairing Tailwind CSS with Angular Material',
        paragraphs: [
          'In our Frontend and Full-Stack Web Development tracks at Villa Tech Academy, students learn why Tailwind CSS and Angular Material complement each other so effectively:',
        ],
        bullets: [
          'Use Tailwind CSS for bespoke responsive grids, typography hierarchy, spacing rhythms, and custom brand visuals.',
          'Use Angular Material where accessible behavioral primitives shine — dialogs, snackbars, expansion panels, and keyboard-friendly overlays.',
          'Organize reusable UI primitives into a shared directory while keeping feature pages cleanly separated by route.',
        ],
      },
      {
        heading: 'Start Building Production Habits Early',
        paragraphs: [
          'Writing clean components is only half the journey. Pair every project with Git feature branches, clear interfaces, responsive testing across mobile breakpoints, and automated CI/CD builds so your portfolio reflects real-world engineering standards.',
        ],
      },
    ],
  },
  {
    slug: 'how-to-craft-an-ats-friendly-cv-and-standout-linkedin-profile',
    title: 'How to Craft an ATS-Friendly CV & LinkedIn Profile That Gets Tech Interviews',
    category: 'Career Tips',
    excerpt:
      'Actionable career branding strategies used by our Career Services team to help Kenyan graduates and professionals pass automated resume filters and win recruiter callbacks.',
    author: {
      name: 'Career & Branding Desk',
      role: 'Villa Tech Academy',
    },
    date: 'September 30, 2026',
    readTime: '5 min read',
    image: 'images/operations-hub.jpg',
    tags: ['ATS CV', 'LinkedIn', 'Career Growth', 'Job Search Kenya'],
    featured: false,
    sections: [
      {
        heading: 'Why Great Candidates Get Filtered Out Before a Human Reads Their CV',
        paragraphs: [
          'Many talented developers, accountants, and operations professionals submit visually cluttered CVs packed with multi-column graphics, text inside images, or vague duty lists. Applicant Tracking Systems (ATS) often scramble these layouts or miss critical role keywords.',
          'A clean, single-column hierarchy with clear section headings, role-aligned keywords, and measurable impact bullets consistently outperforms overly decorative templates.',
        ],
      },
      {
        heading: 'The 4-Point Recruiter Readiness Checklist',
        paragraphs: [
          'Before submitting your next application in Kenya or for remote international roles, verify these four essentials:',
        ],
        bullets: [
          'Lead every bullet with strong action verbs and quantifiable outcomes (speed improved, revenue supported, systems deployed).',
          'Mirror genuine skills from the job description — e.g., Angular, TypeScript, Spring Boot, MySQL, REST APIs, or KRA compliance.',
          'Align your LinkedIn headline, About section, and Featured projects directly with your CV so recruiters see a cohesive story.',
          'Pair your CV with a concise, customized cover letter addressing the employer’s specific goals.',
        ],
      },
    ],
  },
  {
    slug: 'local-seo-playbook-for-mombasa-and-kenyan-businesses',
    title: 'The 2026 Local SEO Playbook for Growing Businesses in Mombasa & Kenya',
    category: 'SEO & Insights',
    excerpt:
      'Practical technical SEO, Core Web Vitals, and local search fundamentals that help hotels, clinics, SMEs, and service firms rank above competitors on Google.',
    author: {
      name: 'Villa Tech Software Team',
      role: 'Web & SEO Specialists',
    },
    date: 'September 16, 2026',
    readTime: '7 min read',
    image: 'images/coastal-web.jpg',
    tags: ['SEO', 'Digital Strategy', 'Web Performance', 'Business Growth'],
    featured: false,
    sections: [
      {
        heading: 'Local Intent Drives High-Value Conversions',
        paragraphs: [
          'When a hotel director searches for "Wi-Fi installation in Nyali" or a business owner searches for "custom web development Mombasa", they are ready to engage a trustworthy partner immediately. Showing up in the top organic results and Google Maps pack turns search traffic directly into inquiries.',
        ],
      },
      {
        heading: 'Technical & Content Foundations That Win Rankings',
        paragraphs: [
          'Modern SEO rewards websites that genuinely serve users quickly and clearly:',
        ],
        bullets: [
          'Mobile-first speed: optimize images, ship lean bundles, and keep mobile navigation effortless on Kenyan cellular networks.',
          'Clear location signals: consistent Nyali/Mombasa address metadata, Google Business Profile updates, and dedicated service pages.',
          'Helpful, structured content: answer real customer questions with clear H1/H2 hierarchy and fast WhatsApp or form conversion paths.',
        ],
      },
      {
        heading: 'Measuring What Matters',
        paragraphs: [
          'Rankings alone are vanity unless they drive calls, WhatsApp messages, and quote requests. Combine monthly SEO health monitoring with conversion tracking so every content and engineering improvement builds compounding business value.',
        ],
      },
    ],
  },
  {
    slug: 'spring-boot-rest-apis-and-jwt-security-explained',
    title: 'Securing Full-Stack Apps: Spring Boot REST APIs & JWT Authentication Explained',
    category: 'Web Development',
    excerpt:
      'Understand stateless JWT authentication, role-based authorization, and clean frontend/backend integration between Angular and Java Spring Boot.',
    author: {
      name: 'Villa Tech Academy Faculty',
      role: 'Backend Engineering Mentors',
    },
    date: 'August 29, 2026',
    readTime: '7 min read',
    image: 'images/software-project.jpg',
    tags: ['Java', 'Spring Boot', 'JWT', 'Backend Development'],
    featured: false,
    sections: [
      {
        heading: 'Why Enterprises Standardize on Java & Spring Boot',
        paragraphs: [
          'Across banking, logistics, e-commerce, and institutional portals in East Africa, Java and Spring Boot remain a gold standard for backend stability, strong typing, rich security tooling, and predictable performance under load.',
        ],
      },
      {
        heading: 'How Stateless JWT Authentication Works',
        paragraphs: [
          'In modern decoupled architectures where an Angular frontend communicates with a Spring Boot REST API, JSON Web Tokens (JWT) offer clean, scalable session security:',
        ],
        bullets: [
          'The user authenticates via credentials validated against hashed passwords stored safely in MySQL.',
          'Spring Security issues a signed token containing user claims and role authorities.',
          'Subsequent API requests include the token in the Authorization header, verified by a dedicated security filter before reaching controller endpoints.',
        ],
      },
    ],
  },
];
