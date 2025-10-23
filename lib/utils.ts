// Fonctions utilitaires

import { type ClassValue, clsx } from "clsx";

/**
 * Combine les classes CSS avec gestion des conflits Tailwind
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Formate un numéro de téléphone luxembourgeois
 */
export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4');
}

/**
 * Formate un prix en euros
 */
export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-LU', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

/**
 * Formate une date en français
 */
export function formatDate(date: string): string {
  return new Intl.DateTimeFormat('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date));
}

/**
 * Génère des initiales à partir d'un nom complet
 */
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

/**
 * Tronque un texte à une longueur maximale
 */
export function truncate(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Génère un slug à partir d'un texte
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

/**
 * Valide un email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valide un numéro de téléphone luxembourgeois
 */
export function isValidLuxembourgPhone(phone: string): boolean {
  const cleanPhone = phone.replace(/\s+/g, '');
  const phoneRegex = /^(\+352|00352)?[0-9]{9}$/;
  return phoneRegex.test(cleanPhone);
}

/**
 * Valide un code postal luxembourgeois
 */
export function isValidLuxembourgPostalCode(postalCode: string): boolean {
  const postalCodeRegex = /^[0-9]{4}$/;
  return postalCodeRegex.test(postalCode);
}

/**
 * Scroll fluide vers un élément
 */
export function scrollToElement(elementId: string, offset: number = 80): void {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
}

/**
 * Détecte si l'utilisateur préfère les animations réduites
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Génère une couleur aléatoire pour les avatars
 */
export function getAvatarColor(name: string): string {
  const colors = [
    'bg-primary-500',
    'bg-accent-500',
    'bg-blue-500',
    'bg-green-500',
    'bg-purple-500',
    'bg-pink-500',
  ];

  const index = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return colors[index % colors.length];
}

/**
 * Calcule le temps de lecture d'un texte (mots par minute)
 */
export function calculateReadingTime(text: string, wpm: number = 200): string {
  const words = text.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wpm);
  return `${minutes} min de lecture`;
}

/**
 * Détermine si un lien est externe
 */
export function isExternalLink(url: string): boolean {
  return url.startsWith('http://') || url.startsWith('https://');
}

/**
 * Attend un délai (pour animations)
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Génère un ID unique
 */
export function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
