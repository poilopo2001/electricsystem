// Page réalisations/projets

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { PROJECTS } from '@/lib/constants';
import { generatePageMetadata } from '@/lib/metadata';
import { MapPin, Calendar, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';

export const metadata: Metadata = generatePageMetadata({
  title: 'Nos Réalisations - Projets Électriques au Luxembourg',
  description: 'Découvrez nos projets réalisés: installations électriques, panneaux photovoltaïques, domotique, bureaux d\'études. Portfolio complet de nos réalisations au Luxembourg.',
  keywords: ['réalisations électricité Luxembourg', 'projets photovoltaïque', 'portfolio électricien'],
  path: '/realisations',
});

export default function RealisationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Nos Réalisations</h1>
            <p className="body-lg opacity-95">
              Découvrez quelques-uns de nos projets réalisés avec succès au Luxembourg.
              De l'ingénierie aux installations complètes.
            </p>
          </div>
        </div>
      </section>

      {/* Grille de projets */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {PROJECTS.map((project) => (
              <Card key={project.id} hover padding="none">
                {/* Images avant/après */}
                <div className="grid grid-cols-2">
                  <div className="relative h-72 overflow-hidden rounded-tl-2xl">
                    <Image
                      src={project.beforeImage}
                      alt={`${project.title} - Avant`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-dark-800/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                      Avant
                    </div>
                  </div>

                  <div className="relative h-72 overflow-hidden rounded-tr-2xl">
                    <Image
                      src={project.afterImage}
                      alt={`${project.title} - Après`}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/60 to-transparent"></div>
                    <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                      Après
                    </div>
                  </div>
                </div>

                {/* Contenu */}
                <div className="p-8">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-dark-800">{project.title}</h2>
                    <span className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm font-semibold whitespace-nowrap">
                      {project.date}
                    </span>
                  </div>

                  <p className="text-lg font-semibold text-primary-500 mb-3">
                    {project.category}
                  </p>

                  <div className="flex items-center gap-6 text-sm text-dark-600 mb-4">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{project.date}</span>
                    </div>
                  </div>

                  <p className="text-dark-700 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Services */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-dark-800 mb-3">Services fournis:</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, i) => (
                        <span
                          key={i}
                          className="bg-primary-50 text-primary-700 border border-primary-200 px-3 py-1 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Résultats */}
                  {project.results && project.results.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-dark-800 mb-3">Résultats:</h3>
                      <ul className="space-y-2">
                        {project.results.map((result, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-dark-700">
                            <span className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 flex-shrink-0"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center bg-primary-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-dark-800 mb-4">
              Votre Projet Sera le Prochain?
            </h2>
            <p className="text-lg text-dark-600 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour discuter de votre projet et obtenir un devis gratuit personnalisé
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/devis-gratuit"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-primary text-white hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Demander un Devis
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Nous Contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
