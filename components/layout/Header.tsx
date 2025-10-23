// Header avec navigation, menu mobile et barre d'info

'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { BUSINESS, FEATURED_SERVICES } from '@/lib/constants';
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';
import Button from '@/components/ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Détection du scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu mobile lors du changement de page
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsServicesOpen(false);
  }, [pathname]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  // Nettoyer le timeout lors du démontage
  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, [closeTimeout]);

  // Gestion du hover avec délai
  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setIsServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // Délai de 300ms avant fermeture
    setCloseTimeout(timeout);
  };

  const navigationLinks = [
    { href: '/', label: 'Accueil' },
    { href: '/nos-services', label: 'Services', hasDropdown: true },
    { href: '/realisations', label: 'Réalisations' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Barre d'information supérieure */}
      <div className="bg-dark-800 text-white py-2 hidden lg:block">
        <div className="container-custom">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-6">
              <a
                href={`tel:${BUSINESS.contact.phone}`}
                className="flex items-center gap-2 hover:text-primary-500 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>{BUSINESS.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${BUSINESS.contact.email}`}
                className="flex items-center gap-2 hover:text-primary-500 transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>{BUSINESS.contact.email}</span>
              </a>
              <div className="flex items-center gap-2 text-dark-300">
                <Clock className="h-4 w-4" />
                <span>{BUSINESS.hours.weekdays}</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-dark-300">Suivez-nous:</span>
              <div className="flex items-center gap-3">
                {BUSINESS.social.facebook && (
                  <a
                    href={BUSINESS.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                )}
                {BUSINESS.social.instagram && (
                  <a
                    href={BUSINESS.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                )}
                {BUSINESS.social.linkedin && (
                  <a
                    href={BUSINESS.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-500 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Header principal */}
      <header
        className={cn(
          'sticky top-0 z-50 bg-white transition-all duration-300',
          isScrolled ? 'shadow-lg' : 'shadow-md'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img
                src="/logo (2).png"
                alt={BUSINESS.name}
                className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigationLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'font-semibold transition-colors relative py-2 flex items-center gap-1',
                      isActive(link.href)
                        ? 'text-primary-500'
                        : 'text-dark-800 hover:text-primary-500'
                    )}
                    onMouseEnter={link.hasDropdown ? handleMouseEnter : undefined}
                  >
                    <span>{link.label}</span>
                    {link.hasDropdown && (
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-300',
                          isServicesOpen && 'rotate-180'
                        )}
                      />
                    )}
                    {isActive(link.href) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500" />
                    )}
                  </Link>
                </div>
              ))}
            </nav>

            {/* Mega Menu Services (positionné en dehors de la nav) */}
            {isServicesOpen && (
              <div
                className="fixed left-0 right-0 top-20 z-40 flex justify-center"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="w-[900px] max-w-[90vw] bg-white rounded-2xl shadow-2xl border border-dark-100 animate-fadeIn">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-dark-100">
                      <div>
                        <h3 className="font-bold text-xl text-dark-800">Nos Services</h3>
                        <p className="text-sm text-dark-500 mt-1">
                          Solutions complètes en électricité et ingénierie
                        </p>
                      </div>
                      <Link
                        href="/nos-services"
                        className="text-sm font-semibold text-primary-500 hover:text-primary-600 flex items-center gap-1 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors"
                      >
                        Voir tout
                        <ChevronDown className="h-4 w-4 -rotate-90" />
                      </Link>
                    </div>

                    {/* Grille des services */}
                    <div className="grid grid-cols-3 gap-4">
                      {FEATURED_SERVICES.slice(0, 9).map((service) => (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}`}
                          className="group p-4 rounded-xl hover:bg-primary-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-primary-200"
                        >
                          <div className="flex items-start gap-3">
                            <div className="bg-gradient-primary p-2 rounded-lg group-hover:scale-110 transition-transform">
                              <div className="w-5 h-5 text-white flex items-center justify-center text-xs font-bold">
                                {service.icon === 'calculator' && '📊'}
                                {service.icon === 'sun' && '☀️'}
                                {service.icon === 'zap' && '⚡'}
                                {service.icon === 'shield' && '🛡️'}
                                {service.icon === 'home' && '🏠'}
                                {service.icon === 'wrench' && '🔧'}
                                {service.icon === 'plug' && '🔌'}
                                {service.icon === 'phone' && '📞'}
                                {!['calculator', 'sun', 'zap', 'shield', 'home', 'wrench', 'plug', 'phone'].includes(service.icon || '') && '✓'}
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-dark-800 text-sm mb-1 group-hover:text-primary-500 transition-colors line-clamp-2">
                                {service.name}
                              </div>
                              <div className="text-xs text-dark-500 line-clamp-2">
                                {service.shortDescription}
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>

                    {/* Footer du mega menu */}
                    <div className="mt-6 pt-4 border-t border-dark-100 flex items-center justify-between">
                      <div className="text-xs text-dark-500">
                        <span className="font-semibold text-dark-800">850+ projets réalisés</span> • Devis gratuit sous 24h
                      </div>
                      <Link
                        href="/devis-gratuit"
                        className="text-sm font-semibold bg-gradient-primary text-white px-4 py-2 rounded-lg hover:shadow-glow-orange transition-all"
                      >
                        Demander un devis
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button variant="primary" size="sm" asChild>
                <Link href="/devis-gratuit">Devis Gratuit</Link>
              </Button>
            </div>

            {/* Bouton menu mobile */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-dark-100 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6 text-dark-800" />
              ) : (
                <Menu className="h-6 w-6 text-dark-800" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menu Mobile */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden bg-white transform transition-transform duration-300',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
        style={{ top: isScrolled ? '80px' : '96px' }}
      >
        <div className="h-full overflow-y-auto">
          <nav className="container-custom py-8">
            <div className="space-y-2">
              {navigationLinks.map((link) => (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-3 rounded-lg font-semibold text-lg transition-colors',
                      isActive(link.href)
                        ? 'bg-primary-50 text-primary-500'
                        : 'text-dark-800 hover:bg-dark-50'
                    )}
                  >
                    {link.label}
                  </Link>

                  {/* Services en mobile */}
                  {link.hasDropdown && (
                    <div className="ml-4 mt-2 space-y-1">
                      {FEATURED_SERVICES.slice(0, 6).map((service) => (
                        <Link
                          key={service.slug}
                          href={`/${service.slug}`}
                          className="block px-4 py-2 text-sm text-dark-600 hover:text-primary-500 hover:bg-primary-50 rounded-lg transition-colors"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-3">
              <Button variant="outline" size="lg" fullWidth asChild>
                <Link href="/contact">Contact</Link>
              </Button>
              <Button variant="primary" size="lg" fullWidth asChild>
                <Link href="/devis-gratuit">Devis Gratuit</Link>
              </Button>
            </div>

            {/* Contact mobile */}
            <div className="mt-8 pt-8 border-t border-dark-100 space-y-4">
              <a
                href={`tel:${BUSINESS.contact.phone}`}
                className="flex items-center gap-3 text-dark-800 hover:text-primary-500 transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span className="font-medium">{BUSINESS.contact.phoneDisplay}</span>
              </a>
              <a
                href={`mailto:${BUSINESS.contact.email}`}
                className="flex items-center gap-3 text-dark-800 hover:text-primary-500 transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>{BUSINESS.contact.email}</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
