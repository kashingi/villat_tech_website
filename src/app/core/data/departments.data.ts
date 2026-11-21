import { Department } from '../models/site.models';

export const DEPARTMENTS: Department[] = [
  {
    id: 'networking',
    name: 'Networking & Infrastructure',
    shortName: 'Networking',
    eyebrow: 'Department 01',
    tagline: 'Enterprise connectivity, structured cabling, and smart surveillance.',
    description:
      'We engineer dependable wireless and wired networks alongside high-definition CCTV security systems for corporate offices, hospitality venues, estates, schools, and homes across Nyali and Mombasa County.',
    icon: 'router',
    image: 'images/network-installation.png',
    accentClass: 'from-navy-950 to-navy-900',
    badgeClass: 'bg-navy-950/5 text-navy-950 border-navy-950/15',
    ctaLabel: 'Request Site Survey',
    ctaRoute: '/contact',
    services: [
      {
        id: 'wifi-installation',
        title: 'Wi-Fi Installation & Configuration',
        summary:
          'Seamless, dead-zone-free enterprise and residential wireless coverage tuned for speed, roaming, and guest access control.',
        deliverables: [
          'RF heatmapping & access point placement',
          'Multi-SSID corporate, staff & captive guest portals',
          'Mesh & ceiling-mounted UniFi / MikroTik / Cisco deployments',
          'Bandwidth shaping and wireless security hardening',
        ],
        icon: 'wifi',
        featured: true,
      },
      {
        id: 'network-setup',
        title: 'Network Setup & Troubleshooting',
        summary:
          'End-to-end LAN/WAN architecture, structured cabling, switch & router configuration, and rapid fault diagnostics.',
        deliverables: [
          'Structured Cat6/Cat6A & fiber optic cabling',
          'Server rack neatening, patch panels & VLAN segmentation',
          'Firewall policies, VPNs & dual-ISP failover setup',
          'Latency diagnostics, packet-loss resolution & preventive audits',
        ],
        icon: 'hub',
        featured: true,
      },
      {
        id: 'cctv-installation',
        title: 'CCTV Installation & Maintenance',
        summary:
          'Crystal-clear IP and HD surveillance systems with mobile remote viewing, night vision, and ongoing maintenance contracts.',
        deliverables: [
          'IP & HD indoor/outdoor weatherproof camera installation',
          'NVR/DVR setup with long-retention storage sizing',
          'Secure iOS, Android & desktop remote live monitoring',
          'Preventive servicing, lens alignment & fault replacement',
        ],
        icon: 'videocam',
        featured: true,
      },
    ],
  },
  {
    id: 'operations',
    name: 'Operations & Digital Services',
    shortName: 'Operations',
    eyebrow: 'Department 02',
    tagline: 'Fast, accurate cyber, government portal, and document operations.',
    description:
      'Our Nyali digital operations desk delivers dependable, confidential assistance for everyday business documentation, high-speed printing, KRA compliance, and essential Kenyan e-government platforms.',
    icon: 'print',
    image: 'images/operations-hub.jpg',
    accentClass: 'from-navy-950 to-navy-900',
    badgeClass: 'bg-navy-950/5 text-navy-950 border-navy-950/15',
    ctaLabel: 'Visit Our Nyali Desk',
    ctaRoute: '/contact',
    services: [
      {
        id: 'cyber-services',
        title: 'Cyber Services',
        summary:
          'High-speed workstations, secure online applications, email assistance, and guided digital transactions with strict privacy.',
        deliverables: [
          'High-speed fiber internet workstation access',
          'Online job, passport, visa & university portal applications',
          'Digital file conversion, compression & secure sharing',
          'Assisted online account setup & troubleshooting',
        ],
        icon: 'language',
        featured: true,
      },
      {
        id: 'printing-scanning',
        title: 'Printing, Scanning & Photocopying',
        summary:
          'Crisp monochrome and full-color document production, bulk copying, high-resolution scanning, and professional binding.',
        deliverables: [
          'High-volume monochrome & color laser printing',
          'Multi-page duplex photocopying & collation',
          'High-DPI PDF scanning & OCR document digitization',
          'Lamination, spiral/thermal binding & tender packaging',
        ],
        icon: 'local_printshop',
      },
      {
        id: 'document-preparation',
        title: 'Document Preparation',
        summary:
          'Cleanly formatted corporate proposals, business letters, tenders, reports, forms, and executive presentations.',
        deliverables: [
          'Professional Word, PDF & PowerPoint formatting',
          'Tender document compilation & compliance checklists',
          'Data entry, spreadsheet templates & proofreading',
          'Official letters, agreements & company forms',
        ],
        icon: 'description',
      },
      {
        id: 'kra-services',
        title: 'KRA Services',
        summary:
          'Accurate, timely Kenya Revenue Authority iTax support for individuals, SMEs, and corporate entities.',
        deliverables: [
          'New KRA PIN registration & PIN retrieval',
          'Individual, nil, VAT & MRI tax return filing',
          'Tax Compliance Certificate (TCC) applications',
          'iTax profile updates, email changes & obligation assistance',
        ],
        icon: 'account_balance',
        featured: true,
      },
      {
        id: 'digital-gov-services',
        title: 'Digital & e-Government Services (HELB, SHA, NSSF, eCitizen)',
        summary:
          'Guided, error-free processing across Kenya’s essential public digital portals and statutory compliance platforms.',
        deliverables: [
          'HELB loan applications, compliance & clearance certificates',
          'SHA registration, dependant updates & status verification',
          'NSSF registration, member statements & employer guidance',
          'eCitizen services: Good Conduct, NTSA TIMS, Business Name & Civil Registry',
        ],
        icon: 'verified_user',
      },
    ],
  },
  {
    id: 'software',
    name: 'Software Engineering',
    shortName: 'Software Engineering',
    eyebrow: 'Department 03',
    tagline: 'Scalable websites, web apps, e-commerce, and custom enterprise systems.',
    description:
      'We design and build fast, resilient, conversion-focused digital products engineered with modern frameworks like Angular, TypeScript, Spring Boot, and cloud-ready architectures.',
    icon: 'code',
    image: 'images/academy-coding.jpg',
    accentClass: 'from-navy-950 to-navy-900',
    badgeClass: 'bg-navy-950/5 text-navy-950 border-navy-950/15',
    ctaLabel: 'Start a Software Project',
    ctaRoute: '/contact',
    services: [
      {
        id: 'website-development',
        title: 'Website Development',
        summary:
          'High-impact corporate websites, institutional portals, and landing pages engineered for speed, accessibility, and conversion.',
        deliverables: [
          'Bespoke responsive UI/UX design for mobile, tablet & desktop',
          'Modern Angular, TypeScript & Tailwind CSS frontends',
          'Fast Core Web Vitals & clean semantic architecture',
          'WhatsApp, inquiry forms & analytics integration',
        ],
        icon: 'web',
        featured: true,
      },
      {
        id: 'web-application-development',
        title: 'Web Application Development',
        summary:
          'Interactive, data-driven single-page and full-stack web applications built to streamline complex operational workflows.',
        deliverables: [
          'Role-based dashboards, portals & real-time reporting',
          'RESTful API architecture with Spring Boot & PostgreSQL/MySQL',
          'Secure authentication, JWT authorization & audit logging',
          'Automated testing & CI/CD deployment pipelines',
        ],
        icon: 'apps',
        featured: true,
      },
      {
        id: 'ecommerce-systems',
        title: 'E-Commerce Systems',
        summary:
          'Conversion-optimized online stores with inventory management, order tracking, and local M-Pesa & card payment readiness.',
        deliverables: [
          'Product catalog, filtering, cart & streamlined checkout flows',
          'M-Pesa STK Push, Visa/Mastercard & invoice checkout readiness',
          'Stock alerts, order fulfillment & delivery zone tracking',
          'Customer accounts, promos & sales analytics',
        ],
        icon: 'shopping_bag',
        featured: true,
      },
      {
        id: 'business-management-systems',
        title: 'Business Management Systems',
        summary:
          'Tailored ERP, POS, property management, school, clinic, and inventory systems aligned to your exact business rules.',
        deliverables: [
          'Point of Sale (POS), billing & automated receipting',
          'Property/rental management & tenant invoicing platforms',
          'HR, attendance, payroll & multi-branch inventory tracking',
          'Exportable financial & operational management reports',
        ],
        icon: 'dashboard',
      },
      {
        id: 'custom-software',
        title: 'Custom Software Solutions',
        summary:
          'Purpose-built software engineered from the ground up when off-the-shelf tools cannot match your competitive workflow.',
        deliverables: [
          'Requirements discovery, system architecture & prototyping',
          'Legacy system modernization & third-party API integrations',
          'Automated workflow engines & notification pipelines',
          'Comprehensive documentation & staff handover training',
        ],
        icon: 'terminal',
      },
      {
        id: 'seo-services',
        title: 'Search Engine Optimization (SEO)',
        summary:
          'Technical, on-page, and local Mombasa/Kenya SEO strategies that put your brand in front of high-intent searchers.',
        deliverables: [
          'Technical SEO audits, schema markup & Core Web Vitals tuning',
          'Local SEO & Google Business Profile optimization',
          'Keyword architecture, metadata & content strategy',
          'Monthly search visibility & conversion reporting',
        ],
        icon: 'trending_up',
      },
      {
        id: 'website-maintenance',
        title: 'Website Maintenance & Modern Tech Services',
        summary:
          'Proactive security updates, uptime monitoring, performance optimization, backups, and technical advisory.',
        deliverables: [
          'Scheduled dependency updates, SSL & security hardening',
          'Automated off-site backups & rapid disaster recovery',
          'Content refreshes, feature enhancements & speed tuning',
          'Domain, business email & cloud hosting management',
        ],
        icon: 'build_circle',
      },
    ],
  },
  {
    id: 'academy',
    name: 'Knowledge Department (Villa Tech Academy)',
    shortName: 'Villa Tech Academy',
    eyebrow: 'Department 04',
    tagline: 'Practical software engineering training & career acceleration.',
    description:
      'Villa Tech Academy bridges the gap between theory and real-world engineering through project-based coding tracks in Angular, TypeScript, Java, and Spring Boot — paired with executive personal branding & career services.',
    icon: 'school',
    image: 'images/villa-tech-academy.png',
    accentClass: 'from-navy-950 to-navy-900',
    badgeClass: 'bg-navy-950/5 text-navy-950 border-navy-950/15',
    ctaLabel: 'Explore Villa Tech Academy',
    ctaRoute: '/academy',
    services: [
      {
        id: 'web-dev-training',
        title: 'Web & Full-Stack Engineering Tracks',
        summary:
          'Hands-on training from Web Foundations to Frontend (Angular), Backend (Java & Spring Boot), and Full-Stack deployment.',
        deliverables: [
          'Introduction to Web Development',
          'Frontend Web Development with TypeScript & Angular',
          'Backend Web Development with Java, SQL & Spring Boot',
          'Full-Stack Web Development with CI/CD & Cloud Deployment',
        ],
        icon: 'laptop_mac',
        featured: true,
      },
      {
        id: 'personal-branding',
        title: 'Personal Branding & Career Services',
        summary:
          'Stand out in competitive local and global markets with ATS-ready resumes, optimized LinkedIn profiles, and company profiles.',
        deliverables: [
          'ATS-friendly CV writing & portfolio reviews',
          'Targeted job application & cover letter preparation',
          'LinkedIn profile optimization for recruiters',
          'Corporate company profile design & copywriting',
        ],
        icon: 'badge',
        featured: true,
      },
    ],
  },
];
