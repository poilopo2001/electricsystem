// Footer complet avec informations entreprise, liens, contact

import React from 'react';
import Link from 'next/link';
import { BUSINESS, SERVICES } from '@/lib/constants';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
  ExternalLink
} from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark-800 text-white">
      {/* Section principale */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Colonne 1: À propos */}
          <div>
            <div className="mb-6">
              <img
                src="/logo (2).png"
                alt={BUSINESS.name}
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-dark-300 text-sm leading-relaxed mb-4">
              {BUSINESS.description.substring(0, 200)}...
            </p>
            <div className="flex items-center gap-3">
              {BUSINESS.social.facebook && (
                <a
                  href={BUSINESS.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-700 p-2.5 rounded-lg hover:bg-primary-500 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
              )}
              {BUSINESS.social.instagram && (
                <a
                  href={BUSINESS.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-700 p-2.5 rounded-lg hover:bg-primary-500 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              )}
              {BUSINESS.social.linkedin && (
                <a
                  href={BUSINESS.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-dark-700 p-2.5 rounded-lg hover:bg-primary-500 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          {/* Colonne 2: Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/${service.slug}`}
                    className="text-dark-300 hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:scale-150 transition-transform"></span>
                    {service.name.length > 40 ? service.name.substring(0, 40) + '...' : service.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/nos-services"
                  className="text-primary-500 hover:text-primary-400 transition-colors text-sm font-semibold flex items-center gap-1"
                >
                  Voir tous les services
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3: Liens rapides */}
          <div>
            <h3 className="font-bold text-lg mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-dark-300 hover:text-primary-500 transition-colors text-sm"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/nos-services"
                  className="text-dark-300 hover:text-primary-500 transition-colors text-sm"
                >
                  Nos Services
                </Link>
              </li>
              <li>
                <Link
                  href="/realisations"
                  className="text-dark-300 hover:text-primary-500 transition-colors text-sm"
                >
                  Réalisations
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-dark-300 hover:text-primary-500 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/devis-gratuit"
                  className="text-dark-300 hover:text-primary-500 transition-colors text-sm"
                >
                  Devis Gratuit
                </Link>
              </li>
              <li>
                <Link
                  href="/mentions-legales"
                  className="text-dark-300 hover:text-primary-500 transition-colors text-sm"
                >
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link
                  href="/politique-confidentialite"
                  className="text-dark-300 hover:text-primary-500 transition-colors text-sm"
                >
                  Politique de Confidentialité
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${BUSINESS.contact.phone}`}
                  className="flex items-start gap-3 text-dark-300 hover:text-primary-500 transition-colors group"
                >
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-medium text-white">Téléphone</div>
                    <div className="text-sm">{BUSINESS.contact.phoneDisplay}</div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BUSINESS.contact.email}`}
                  className="flex items-start gap-3 text-dark-300 hover:text-primary-500 transition-colors group"
                >
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="text-sm font-medium text-white">Email</div>
                    <div className="text-sm break-all">{BUSINESS.contact.email}</div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-dark-300">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-white">Localisation</div>
                  <div className="text-sm">{BUSINESS.contact.address.city}, {BUSINESS.contact.address.country}</div>
                </div>
              </li>
              <li className="flex items-start gap-3 text-dark-300">
                <Clock className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm font-medium text-white">Horaires</div>
                  <div className="text-sm">{BUSINESS.hours.weekdays}</div>
                  <div className="text-sm mt-1">{BUSINESS.hours.saturday}</div>
                  <div className="text-primary-500 text-sm font-semibold mt-2">
                    {BUSINESS.hours.emergency}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Barre du bas */}
      <div className="border-t border-dark-700">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-dark-400">
            <div className="text-center md:text-left">
              <p>
                © {currentYear} {BUSINESS.name}. Tous droits réservés.
              </p>
              <p className="mt-1">
                RC: {BUSINESS.registreCommerce} | TVA: {BUSINESS.tva}
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="/mentions-legales"
                className="hover:text-primary-500 transition-colors"
              >
                Mentions Légales
              </Link>
              <span>•</span>
              <Link
                href="/politique-confidentialite"
                className="hover:text-primary-500 transition-colors"
              >
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
