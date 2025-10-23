// Page mentions légales

import React from 'react';
import { BUSINESS } from '@/lib/constants';

export const metadata = {
  title: 'Mentions Légales',
  description: 'Mentions légales ELECTRIC SYSTEM Sàrl',
};

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg text-dark-800 mb-8">Mentions Légales</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">1. Informations légales</h2>
              <p className="text-dark-700 mb-3">
                <strong>Raison sociale:</strong> {BUSINESS.name}<br />
                <strong>Forme juridique:</strong> {BUSINESS.legalForm}<br />
                <strong>Numéro RC:</strong> {BUSINESS.registreCommerce}<br />
                <strong>Numéro TVA:</strong> {BUSINESS.tva}<br />
                <strong>Capital social:</strong> {BUSINESS.capital}
              </p>
              <p className="text-dark-700">
                <strong>Siège social:</strong><br />
                {BUSINESS.contact.address.city}, {BUSINESS.contact.address.country}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">2. Contact</h2>
              <p className="text-dark-700">
                <strong>Téléphone:</strong> {BUSINESS.contact.phone}<br />
                <strong>Email:</strong> {BUSINESS.contact.email}<br />
                <strong>Site web:</strong> {BUSINESS.contact.website}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">3. Gérance</h2>
              <p className="text-dark-700">
                <strong>Gérant:</strong> {BUSINESS.manager.name}<br />
                <strong>Fonction:</strong> {BUSINESS.manager.role}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">4. Hébergement du site</h2>
              <p className="text-dark-700">
                Ce site est hébergé par un prestataire professionnel.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">5. Propriété intellectuelle</h2>
              <p className="text-dark-700">
                L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété
                exclusive de {BUSINESS.name}. Toute reproduction, même partielle, est interdite sans
                autorisation préalable écrite.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">6. Responsabilité</h2>
              <p className="text-dark-700">
                {BUSINESS.name} s'efforce d'assurer l'exactitude et la mise à jour des informations
                diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision
                ou l'exhaustivité des informations mises à disposition.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">7. Cookies</h2>
              <p className="text-dark-700">
                Ce site peut utiliser des cookies pour améliorer l'expérience utilisateur. Vous pouvez
                désactiver les cookies dans les paramètres de votre navigateur.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
