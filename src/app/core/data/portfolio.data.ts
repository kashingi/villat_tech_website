import { PortfolioCategory, PortfolioProject } from '../models/site.models';

export const PORTFOLIO_CATEGORIES: PortfolioCategory[] = [
  'All',
  'Websites',
  'Web Applications',
  'E-Commerce',
  'Networking',
  'CCTV',
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'bahari-estates-portal',
    title: 'Bahari Coastal Residences Platform',
    category: 'Websites',
    client: 'Bahari Properties Group',
    location: 'Nyali, Mombasa',
    year: '2026',
    summary:
      'High-converting luxury coastal real estate website featuring interactive property search, neighborhood guides, and WhatsApp viewing bookings.',
    description:
      'Designed and developed a fast, SEO-engineered corporate property showcase tailored for Nyali and Diani coastal real estate buyers. Features instant filtering by location and unit type, high-resolution gallery views, and lead capture directly linked to the sales desk.',
    image: 'images/coastal-web.jpg',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'SEO', 'Google Maps'],
    highlights: [
      'Sub-1.5s page load times on 4G coastal mobile networks',
      '64% increase in qualified viewing inquiries within 90 days',
      'Structured schema markup for top Mombasa real estate search rankings',
    ],
    liveUrl: 'https://villatechsolutions.co.ke/demos/bahari-residences',
    featured: true,
  },
  {
    id: 'pwani-erp-suite',
    title: 'Pwani Logistics & Fleet Management App',
    category: 'Web Applications',
    client: 'Pwani Freight & Clearing Ltd',
    location: 'Mombasa CBD & Port Reitz',
    year: '2026',
    summary:
      'Full-stack shipment tracking, automated invoicing, and multi-branch operations dashboard built for coastal clearing and forwarding teams.',
    description:
      'Replaced fragmented spreadsheets with a unified role-based Angular and Spring Boot web application. Operations managers monitor container milestones, dispatch trucks, generate client statements, and export KRA-ready billing summaries in real time.',
    image: 'images/software-project.jpg',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT Auth', 'REST APIs'],
    highlights: [
      'Real-time consignment tracking across 4 branch desks',
      'Automated invoice & dispatch note generation saving 18 hours weekly',
      'Role-based permissions with complete audit trail logging',
    ],
    liveUrl: 'https://villatechsolutions.co.ke/demos/pwani-logistics',
    featured: true,
  },
  {
    id: 'swahili-artisan-market',
    title: 'Coastline Living E-Commerce Store',
    category: 'E-Commerce',
    client: 'Coastline Home & Decor',
    location: 'Nyali & Nairobi',
    year: '2025',
    summary:
      'Modern online retail platform with smart category filtering, live inventory sync, delivery zone pricing, and M-Pesa checkout UX.',
    description:
      'Built a sleek omnichannel e-commerce system uniting showroom stock in Nyali with nationwide online delivery. Customers enjoy effortless mobile browsing, curated collections, real-time stock checks, and automated order status updates.',
    image: 'images/software-project.jpg',
    technologies: ['Angular', 'Tailwind CSS', 'Spring Boot', 'M-Pesa Ready', 'MySQL'],
    highlights: [
      'Mobile-first checkout built for Kenyan shoppers',
      'Automated stock deduction across showroom and online orders',
      '42% higher repeat purchase rate via customer order tracking',
    ],
    liveUrl: 'https://villatechsolutions.co.ke/demos/coastline-living',
    featured: true,
  },
  {
    id: 'nyali-hotel-wifi',
    title: 'Enterprise Resort Wi-Fi & Fiber Backbone',
    category: 'Networking',
    client: 'Coral Palm Boutique Hotel',
    location: 'Nyali Beach, Mombasa',
    year: '2026',
    summary:
      'Property-wide high-density Wi-Fi 6 deployment, segmented guest/staff VLANs, and dual-ISP failover covering 72 rooms and conference halls.',
    description:
      'Engineered a resilient hospitality network spanning 4 floors, poolside lounges, and conference suites. Included structured Cat6A cabling, rack modernization, captive guest portal branding, and zero-drop roaming across 28 enterprise access points.',
    image: 'images/network-installation.png',
    technologies: ['Wi-Fi 6', 'MikroTik', 'UniFi', 'VLAN Segmentation', 'Fiber Backbone'],
    highlights: [
      '99.95% measured uptime with automatic dual-ISP failover',
      'Isolated corporate POS, CCTV & guest network VLANs',
      'Supports 350+ simultaneous conference and guest devices smoothly',
    ],
    featured: true,
  },
  {
    id: 'mombasa-warehouse-cctv',
    title: '32-Channel IP CCTV & Perimeter Security',
    category: 'CCTV',
    client: 'Kipevu Cold Storage & Logistics',
    location: 'Changamwe, Mombasa',
    year: '2025',
    summary:
      'High-definition 4K perimeter and loading-bay IP surveillance system with color night vision, 60-day NVR retention, and mobile director viewing.',
    description:
      'Designed and installed a weather-sealed IP camera architecture engineered to withstand coastal humidity and salt air. Provides crisp license plate visibility at entry gates, motion alerts, and encrypted smartphone monitoring for management.',
    image: 'images/networking-cctv.jpg',
    technologies: ['4K IP Cameras', 'PoE Switches', 'NVR Storage', 'Remote Mobile View', 'UPS Backup'],
    highlights: [
      'Marine-grade weatherproof IP67 housings suited for coastal Mombasa',
      '60-day continuous high-definition recording with surge & UPS protection',
      'Dedicated preventative quarterly maintenance SLA',
    ],
    featured: false,
  },
  {
    id: 'nyali-medical-website',
    title: 'Nyali Care Diagnostics Corporate Site',
    category: 'Websites',
    client: 'Nyali Care Medical Centre',
    location: 'Links Road, Nyali',
    year: '2025',
    summary:
      'Clean, accessible healthcare website featuring department directories, lab service guides, insurance panel lookup, and instant appointment requests.',
    description:
      'Crafted a trustworthy, calming digital presence for a multi-specialty Nyali clinic. Patients quickly locate specialist hours, verify accepted insurance covers including SHA, and message reception via WhatsApp with one tap.',
    image: 'images/coastal-web.jpg',
    technologies: ['Angular', 'Angular Material', 'Tailwind CSS', 'Local SEO'],
    highlights: [
      'WCAG-conscious typography and clear mobile navigation',
      'Ranked #1 locally for key Nyali diagnostic clinic queries',
      'Reduced phone switchboard congestion through online booking forms',
    ],
    liveUrl: 'https://villatechsolutions.co.ke/demos/nyali-care',
    featured: false,
  },
  {
    id: 'school-campus-network',
    title: 'Campus Structured LAN & Computer Lab Setup',
    category: 'Networking',
    client: 'Tudor Crest Academy',
    location: 'Mombasa County',
    year: '2025',
    summary:
      'Complete 45-seat computer lab networking, managed gigabit switching, content filtering, and faculty Wi-Fi across three academic blocks.',
    description:
      'Delivered neat, labeled trunking and patch-panel infrastructure connecting administration offices and student coding labs, paired with safe web filtering and bandwidth prioritization for e-learning exams.',
    image: 'images/academy-coding.jpg',
    technologies: ['Cat6A Cabling', 'Managed Switches', 'Content Filtering', 'Rack Management'],
    highlights: [
      'Clean cable management with full port labeling & testing reports',
      'Safe DNS filtering protecting student browsing sessions',
      'Zero downtime during national digital examination periods',
    ],
    featured: false,
  },
  {
    id: 'nyali-apartments-cctv',
    title: 'Smart Residential Estate CCTV & Intercom Link',
    category: 'CCTV',
    client: 'Palm View Apartments',
    location: 'Nyali, Mombasa',
    year: '2026',
    summary:
      'Integrated 16-camera HD surveillance covering basement parking, elevators, rooftops, and gatehouse monitoring station.',
    description:
      'Upgraded a residential apartment complex from legacy analog cameras to crisp digital IP surveillance with central guardhouse live-wall displays, night-time perimeter alerts, and remote management access for property caretakers.',
    image: 'images/operations-hub.jpg',
    technologies: ['IP Surveillance', 'Guardhouse Monitor Wall', 'Night Vision', 'PoE Cabling'],
    highlights: [
      'Eliminated blind spots across parking bays and entry corridors',
      'Low-light full-color night capture for gate security verification',
      'Completed in 3 days with minimal disruption to residents',
    ],
    featured: false,
  },
];
