import { Testimonial } from '../models/site.models';

export const COMPANY_STATS = [
  { value: '4', label: 'Specialized Tech Departments' },
  { value: '120+', label: 'Systems, Sites & Networks Delivered' },
  { value: '99.9%', label: 'Target Network & App Reliability' },
  { value: '100%', label: 'Hands-On Academy Project Focus' },
];

export const CORE_VALUES = [
  {
    title: 'Engineering Excellence',
    description:
      'Whether wiring a 30-point Wi-Fi network or architecting a Spring Boot and Angular platform, we build with clean standards and long-term maintainability.',
    icon: 'verified',
  },
  {
    title: 'Reliability & Security',
    description:
      'Businesses rely on uptime and privacy. We prioritize secure configurations, honest diagnostics, and dependable post-delivery support.',
    icon: 'shield',
  },
  {
    title: 'Client-First Partnership',
    description:
      'We listen carefully to your operational goals, communicate transparently in plain language, and deliver practical solutions tailored to your budget.',
    icon: 'handshake',
  },
  {
    title: 'Practical Innovation',
    description:
      'We adopt proven modern technologies — from Tailwind & Angular to Wi-Fi 6 and cloud CI/CD — that produce measurable value rather than buzzwords.',
    icon: 'lightbulb',
  },
  {
    title: 'Integrity & Confidentiality',
    description:
      'From KRA and e-government operations to enterprise software data, every client record and business system is handled with strict discretion.',
    icon: 'lock',
  },
  {
    title: 'Community Empowerment',
    description:
      'Through Villa Tech Academy, we equip Mombasa and Kenyan youth and professionals with real-world software engineering and career skills.',
    icon: 'diversity_3',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'All-in-One Technology Partner',
    description:
      'Unite your office networking, CCTV security, daily digital operations, and custom software under one accountable local technology team.',
    icon: 'hub',
  },
  {
    title: 'Rooted in Nyali, Built to Global Standards',
    description:
      'Accessible on-site support across Nyali, Mombasa County, and the wider Coast region backed by international software engineering practices.',
    icon: 'location_on',
  },
  {
    title: 'Modern Stack & Clean Execution',
    description:
      'We work with current enterprise stacks — Angular, TypeScript, Java, Spring Boot, MySQL, Wi-Fi 6, and IP surveillance — avoiding outdated shortcuts.',
    icon: 'rocket_launch',
  },
  {
    title: 'Practitioner-Led Academy Training',
    description:
      'Students at Villa Tech Academy learn directly from active engineers building real corporate websites, APIs, and business systems.',
    icon: 'workspace_premium',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'Villa Tech Solutions redesigned our entire hotel Wi-Fi infrastructure in Nyali and installed 24 IP cameras with zero disruption to guests. Connectivity complaints dropped to zero overnight.',
    author: 'Rashid Mwangi',
    role: 'Operations Director',
    organization: 'Coral Palm Boutique Hotel, Nyali',
    department: 'Networking & CCTV',
    initials: 'RM',
  },
  {
    id: 't2',
    quote:
      'Their software engineering team built our logistics dashboard in Angular and Spring Boot on schedule. Our clearing clerks now process client invoicing twice as fast with complete accuracy.',
    author: 'Grace Wanjiku',
    role: 'Managing Partner',
    organization: 'Pwani Freight & Clearing Ltd',
    department: 'Software Engineering',
    initials: 'GW',
  },
  {
    id: 't3',
    quote:
      'Completing the Full-Stack Web Development track at Villa Tech Academy — plus their ATS CV and LinkedIn optimization — helped me land my first junior software developer role within six weeks.',
    author: 'Brian Ochieng',
    role: 'Junior Full-Stack Developer',
    organization: 'Villa Tech Academy Alumnus',
    department: 'Villa Tech Academy',
    initials: 'BO',
  },
  {
    id: 't4',
    quote:
      'Whenever we need urgent tender binding, company profile design, or KRA and eCitizen compliance support, the Operations team in Nyali handles everything accurately and on time.',
    author: 'Amina Hassan',
    role: 'Founder',
    organization: 'Coastline Interior Supplies',
    department: 'Operations & Branding',
    initials: 'AH',
  },
];
