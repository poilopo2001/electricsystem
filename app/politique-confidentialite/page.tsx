// Page politique de confidentialité

import React from 'react';
import { BUSINESS } from '@/lib/constants';

export const metadata = {
  title: 'Politique de Confidentialité',
  description: 'Politique de confidentialité et protection des données ELECTRIC SYSTEM Sàrl',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container-custom section-padding">
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-lg text-dark-800 mb-8">Politique de Confidentialité</h1>

          <div className="prose prose-lg max-w-none">
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">1. Collecte des données</h2>
              <p className="text-dark-700">
                {BUSINESS.name} collecte des données personnelles uniquement dans le cadre de demandes
                de devis, de contact ou d'inscription à la newsletter. Les données collectées sont:
              </p>
              <ul className="list-disc pl-6 text-dark-700 space-y-2 my-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Code postal</li>
                <li>Informations relatives à votre projet</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">2. Utilisation des données</h2>
              <p className="text-dark-700">
                Vos données personnelles sont utilisées uniquement pour:
              </p>
              <ul className="list-disc pl-6 text-dark-700 space-y-2 my-4">
                <li>Répondre à vos demandes de devis ou de contact</li>
                <li>Vous fournir les services demandés</li>
                <li>Vous envoyer des informations relatives à nos services (si vous avez donné votre accord)</li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">3. Protection des données</h2>
              <p className="text-dark-700">
                Vos données personnelles sont conservées de manière sécurisée et ne sont jamais transmises
                à des tiers sans votre consentement explicite, sauf obligation légale.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">4. Durée de conservation</h2>
              <p className="text-dark-700">
                Vos données sont conservées pendant la durée nécessaire à la réalisation des finalités
                pour lesquelles elles ont été collectées, puis archivées conformément aux obligations légales.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">5. Vos droits</h2>
              <p className="text-dark-700">
                Conformément au RGPD, vous disposez des droits suivants:
              </p>
              <ul className="list-disc pl-6 text-dark-700 space-y-2 my-4">
                <li>Droit d'accès à vos données personnelles</li>
                <li>Droit de rectification de vos données</li>
                <li>Droit à l'effacement de vos données</li>
                <li>Droit à la limitation du traitement</li>
                <li>Droit d'opposition au traitement</li>
                <li>Droit à la portabilité de vos données</li>
              </ul>
              <p className="text-dark-700 mt-4">
                Pour exercer ces droits, contactez-nous à: {BUSINESS.contact.email}
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">6. Cookies</h2>
              <p className="text-dark-700">
                Notre site utilise des cookies techniques nécessaires au fonctionnement du site.
                Aucun cookie de traçage publicitaire n'est utilisé.
              </p>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-dark-800 mb-4">7. Contact</h2>
              <p className="text-dark-700">
                Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter:
              </p>
              <p className="text-dark-700 mt-4">
                <strong>Email:</strong> {BUSINESS.contact.email}<br />
                <strong>Téléphone:</strong> {BUSINESS.contact.phone}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
