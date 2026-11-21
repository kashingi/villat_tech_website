export interface SocialLink {
  label: string;
  platform: 'linkedin' | 'github' | 'facebook' | 'instagram' | 'x';
  url: string;
  handle: string;
}

export interface SiteConfig {
  companyName: string;
  shortName: string;
  tagline: string;
  location: {
    area: string;
    city: string;
    country: string;
    fullAddress: string;
    landmark: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    mapEmbedUrl: string;
    mapDirectionsUrl: string;
  };
  contact: {
    phoneDisplay: string;
    phoneHref: string;
    secondaryPhoneDisplay: string;
    email: string;
    academyEmail: string;
    businessHours: string[];
  };
  whatsapp: {
    /**
     * Configurable WhatsApp phone number in international format without '+' or spaces.
     * Update this single value to update every WhatsApp link across the website.
     */
    phoneNumber: string;
    defaultMessage: string;
  };
  socials: SocialLink[];
}

export const SITE_CONFIG: SiteConfig = {
  companyName: 'Villa Tech Solutions Limited',
  shortName: 'Villa Tech',
  tagline:
    'Modern networking, reliable cyber & digital operations, custom software engineering, and industry-ready technology training in Nyali, Mombasa.',
  location: {
    area: 'Nyali',
    city: 'Mombasa County',
    country: 'Kenya',
    fullAddress: 'Links Road, Nyali, Mombasa County, Kenya',
    landmark: 'Nyali Commercial District — along Links Road',
    coordinates: {
      lat: -4.0273,
      lng: 39.7136,
    },
    mapEmbedUrl:
      'https://www.google.com/maps?q=Nyali,+Mombasa,+Kenya&z=14&output=embed',
    mapDirectionsUrl:
      'https://www.google.com/maps/search/?api=1&query=Nyali+Mombasa+Kenya',
  },
  contact: {
    phoneDisplay: '+254 712 345 678',
    phoneHref: '+254712345678',
    secondaryPhoneDisplay: '+254 733 456 789',
    email: 'info@villatechsolutions.co.ke',
    academyEmail: 'academy@villatechsolutions.co.ke',
    businessHours: [
      'Monday – Friday: 8:00 AM – 6:00 PM',
      'Saturday: 9:00 AM – 4:00 PM',
      'Sunday & Public Holidays: Closed',
    ],
  },
  whatsapp: {
    phoneNumber: '254712345678',
    defaultMessage:
      'Hello Villa Tech Solutions Limited! I would like to inquire about your services.',
  },
  socials: [
    {
      label: 'LinkedIn',
      platform: 'linkedin',
      url: 'https://linkedin.com/company/villa-tech-solutions-limited',
      handle: '@villatechsolutions',
    },
    {
      label: 'GitHub',
      platform: 'github',
      url: 'https://github.com/villatechsolutions',
      handle: 'github.com/villatechsolutions',
    },
    {
      label: 'X (Twitter)',
      platform: 'x',
      url: 'https://x.com/villatechke',
      handle: '@villatechke',
    },
    {
      label: 'Instagram',
      platform: 'instagram',
      url: 'https://instagram.com/villatechsolutions',
      handle: '@villatechsolutions',
    },
    {
      label: 'Facebook',
      platform: 'facebook',
      url: 'https://facebook.com/villatechsolutions',
      handle: 'Villa Tech Solutions Limited',
    },
  ],
};

/**
 * Generates a configurable WhatsApp deep link using the central SITE_CONFIG number.
 */
export function buildWhatsAppUrl(customMessage?: string): string {
  const message = encodeURIComponent(
    customMessage ?? SITE_CONFIG.whatsapp.defaultMessage
  );
  const cleanNumber = SITE_CONFIG.whatsapp.phoneNumber.replace(/[^\d]/g, '');
  return `https://wa.me/${cleanNumber}?text=${message}`;
}
