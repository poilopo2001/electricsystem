// Types et interfaces pour ELECTRIC SYSTEM Sàrl

export interface Business {
  name: string;
  shortName: string;
  legalForm: string;
  sector: string;
  tagline: string;
  description: string;
  founded: number;
  registreCommerce: string;
  tva: string;
  capital: string;
  manager: Manager;
  contact: Contact;
  hours: Hours;
  languages: string[];
  social: Social;
}

export interface Manager {
  name: string;
  role: string;
  phone: string;
  phoneDisplay: string;
}

export interface Contact {
  phone: string;
  phoneDisplay: string;
  email: string;
  website: string;
  address: Address;
  serviceRadius: string;
}

export interface Address {
  city: string;
  country: string;
}

export interface Hours {
  weekdays: string;
  saturday: string;
  sunday: string;
  emergency: string;
}

export interface Social {
  facebook?: string;
  instagram?: string;
  linkedin?: string;
}

export interface Branding {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  neutralColor: string;
  colorScheme: string;
  fontFamily: string;
  logoColors: string[];
}

export interface Service {
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  priceRange: string;
  priceMin?: number;
  priceMax?: number;
  benefits: string[];
  technicalDetails?: Record<string, unknown>;
  packages?: Record<string, unknown>;
  process?: string[];
  guarantees?: string[];
  featured: boolean;
  icon: string;
  image: string;
  estimatedDuration?: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  location: string;
  date: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  services: string[];
  results?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  initials: string;
  location: string;
  service: string;
  rating: number;
  text: string;
  date: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: number;
  logo?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  specialties: string[];
}

export interface Statistic {
  label: string;
  value: string;
  icon: string;
  description?: string;
}

export interface Partner {
  name: string;
  category: string;
  logo?: string;
  website?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export interface SEO {
  keywords: string[];
  metaDescription: string;
  structuredData?: Record<string, unknown>;
}

export interface Financing {
  available: boolean;
  options: string[];
  deposit: string;
  balance: string;
  minAmount: string;
}

export interface Subsidy {
  name: string;
  description: string;
  amount: string;
  conditions: string;
  ourService: string;
  instead?: string;
  savings?: string;
}
