// Page listant tous les services

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import { SERVICES } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nos Services - Électricité, Bureau d\'Études, Photovoltaïque',
  description: 'Découvrez tous nos services professionnels: bureau d\'études techniques Caneco/Dialux, installations électriques, panneaux photovoltaïques, bornes recharge, domotique KNX, sécurité.',
  keywords: ['services électricité Luxembourg', 'bureau études électrique', 'installation photovoltaïque', 'borne recharge', 'domotique'],
  path: '/nos-services',
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Nos Services Professionnels</h1>
            <p className="body-lg opacity-95">
              Solutions complètes en ingénierie électrique, énergies renouvelables et technologies
              du bâtiment. Du bureau d'études aux installations clé en main.
            </p>
          </div>
        </div>
      </section>

      {/* Grille de services */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Card key={service.slug} hover>
                {/* Image */}
                <div className="relative h-56 -m-8 mb-6 overflow-hidden rounded-t-2xl">
                  <Image
                    src={service.image}
                    alt={service.name}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent"></div>

                  {/* Badge featured */}
                  {service.featured && (
                    <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Populaire
                    </div>
                  )}

                  {/* Badge prix */}
                  <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm text-dark-800 px-3 py-1.5 rounded-lg text-sm font-bold shadow-lg">
                    {service.priceRange.split(' - ')[0]}+
                  </div>
                </div>

                {/* Contenu */}
                <h2 className="text-xl font-bold text-dark-800 mb-3 line-clamp-2">
                  {service.name}
                </h2>
                <p className="text-dark-600 text-sm mb-4 line-clamp-3">
                  {service.shortDescription}
                </p>

                {/* Avantages */}
                <ul className="space-y-2 mb-6">
                  {service.benefits.slice(0, 3).map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                      <span className="text-dark-700 line-clamp-1">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Durée */}
                {service.estimatedDuration && (
                  <div className="text-xs text-dark-500 mb-4 flex items-center gap-1">
                    <span className="font-semibold">Délai:</span> {service.estimatedDuration}
                  </div>
                )}

                {/* Boutons */}
                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg border-2 border-dark-300 text-dark-700 hover:bg-dark-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-300"
                  >
                    Détails
                  </Link>
                  <Link
                    href="/devis-gratuit"
                    className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-primary text-white hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    Devis
                  </Link>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-primary-50 rounded-2xl p-10">
            <h2 className="text-2xl font-bold text-dark-800 mb-4">
              Besoin d'un Service Personnalisé?
            </h2>
            <p className="text-dark-600 mb-6 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet spécifique. Nous proposons également
              des solutions sur-mesure adaptées à vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-primary text-white hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Nous Contacter
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/devis-gratuit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Demander un Devis
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
