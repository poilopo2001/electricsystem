// Page de service dynamique PREMIUM pour afficher les détails de chaque service

import React from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { SERVICES, BUSINESS } from '@/lib/constants';
import { generateServiceMetadata, generateServiceSchema } from '@/lib/metadata';
import {
  CheckCircle2,
  Clock,
  Euro,
  Phone,
  Mail,
  ArrowRight,
  Shield,
  Award,
  Zap,
  Home,
  ChevronRight,
  Star,
  TrendingUp,
  Users,
  Target,
  Circle,
  Check
} from 'lucide-react';

interface ServicePageProps {
  params: {
    slug: string;
  };
}

// Génération des métadonnées SEO pour chaque service
export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) return {};
  return generateServiceMetadata(service);
}

// Génération statique de toutes les pages de services
export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES.find(s => s.slug === params.slug);

  if (!service) {
    notFound();
  }

  // Schema JSON-LD pour SEO
  const serviceSchema = generateServiceSchema(service);

  // Extraire et parser les sections du fullDescription de manière intelligente
  const descriptionSections = service.fullDescription.split('\n\n');

  // Fonction pour parser une section et détecter les titres/sous-titres
  const parseSection = (section: string) => {
    const lines = section.split('\n');
    const hasTitle = lines[0].includes(':') && !lines[0].startsWith('-');

    if (hasTitle) {
      return {
        title: lines[0].replace(/\*\*/g, ''),
        content: lines.slice(1).join('\n')
      };
    }

    return {
      title: null,
      content: section
    };
  };

  return (
    <>
      {/* Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Fil d'Ariane */}
      <div className="bg-dark-50 py-4 border-b border-dark-100">
        <div className="container-custom">
          <div className="flex items-center gap-2 text-sm text-dark-600">
            <Link href="/" className="hover:text-primary-500 transition-colors">
              Accueil
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/nos-services" className="hover:text-primary-500 transition-colors">
              Nos Services
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-dark-800 font-medium line-clamp-1">{service.name}</span>
          </div>
        </div>
      </div>

      {/* Hero Section du Service */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e')] opacity-5 bg-cover bg-center" />

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Icône */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 animate-float shadow-glow-orange">
              {service.icon === 'calculator' && <span className="text-4xl">📊</span>}
              {service.icon === 'sun' && <span className="text-4xl">☀️</span>}
              {service.icon === 'cable' && <span className="text-4xl">🔌</span>}
              {service.icon === 'home' && <Home className="h-10 w-10 text-white" />}
              {service.icon === 'shield' && <Shield className="h-10 w-10 text-white" />}
              {service.icon === 'network' && <span className="text-4xl">🌐</span>}
              {service.icon === 'bolt' && <Zap className="h-10 w-10 text-white" />}
              {service.icon === 'alert-circle' && <span className="text-4xl">🚨</span>}
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {service.name}
            </h1>

            <p className="text-xl md:text-2xl text-dark-200 mb-8 max-w-3xl mx-auto">
              {service.shortDescription}
            </p>

            {/* Prix et durée */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                <Euro className="h-5 w-5 text-primary-500" />
                <span className="font-semibold">{service.priceRange}</span>
              </div>
              {service.estimatedDuration && (
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
                  <Clock className="h-5 w-5 text-primary-500" />
                  <span className="font-semibold">{service.estimatedDuration}</span>
                </div>
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/devis-gratuit"
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 px-8 py-4 text-lg bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Demander un Devis Gratuit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href={`tel:${BUSINESS.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 px-8 py-4 text-lg bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <Phone className="mr-2 h-5 w-5" />
                Appeler Maintenant
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Statistiques Clés */}
      <section className="py-12 bg-gradient-primary text-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">850+</div>
              <div className="text-sm text-white/80">Projets Réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">127+</div>
              <div className="text-sm text-white/80">Clients Satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">12 ans</div>
              <div className="text-sm text-white/80">D'Expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-white/80">Conformité Normes</div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction + Avantages en grille */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description principale - 2 colonnes */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Star className="h-4 w-4" />
                  Service Premium
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-6">
                  Excellence et Expertise
                </h2>
                <div className="prose prose-lg max-w-none text-dark-600 leading-relaxed space-y-4">
                  {descriptionSections.slice(0, 3).map((section, idx) => (
                    <p key={idx} className="text-lg">
                      {section.replace(/\*\*(.*?)\*\*/g, '$1')}
                    </p>
                  ))}
                </div>
              </div>

              {/* Image illustrative */}
              <div className="rounded-2xl overflow-hidden shadow-2xl mb-8">
                <img
                  src={service.image}
                  alt={service.name}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            </div>

            {/* Sidebar Avantages - 1 colonne */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white p-8 rounded-2xl shadow-2xl sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-2xl">Avantages Clés</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {service.benefits.slice(0, 8).map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="bg-white/20 p-1.5 rounded-lg group-hover:bg-white/30 transition-colors">
                        <Check className="h-4 w-4 flex-shrink-0" />
                      </div>
                      <span className="text-sm leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-3">
                  <Link
                    href="/devis-gratuit"
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 w-full px-6 py-3 bg-white text-primary-500 hover:bg-dark-50 border-0 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    Obtenir un Devis Gratuit
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                  <a
                    href={`tel:${BUSINESS.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 w-full px-6 py-3 border-2 border-white/40 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    {BUSINESS.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Description Détaillée PREMIUM avec sections visuelles */}
      <section className="py-20 bg-gradient-to-b from-dark-50 via-white to-dark-50">
        <div className="container-custom">
          <div className="max-w-7xl mx-auto">
            {/* Header de section */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Star className="h-4 w-4" />
                Service Premium
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-dark-800 mb-6">
                Description Complète du Service
              </h2>
              <p className="text-xl text-dark-600 max-w-3xl mx-auto">
                Découvrez en détail notre expertise, nos méthodes et ce qui fait de nous votre partenaire idéal
              </p>
            </div>

            {/* Contenu principal avec image d'illustration */}
            <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
              {/* Texte principal */}
              <div className="space-y-8">
                {descriptionSections.slice(0, 1).map((section, idx) => {
                  const parsed = parseSection(section);
                  return (
                    <div key={idx} className="bg-white rounded-2xl p-8 shadow-lg border border-dark-100 hover:shadow-2xl transition-shadow duration-300">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-primary p-3 rounded-xl flex-shrink-0">
                          <CheckCircle2 className="h-6 w-6 text-white" />
                        </div>
                        <div className="flex-1">
                          {parsed.title && (
                            <h3 className="text-xl font-bold text-dark-800 mb-4">{parsed.title}</h3>
                          )}
                          <div
                            className="text-base text-dark-700 leading-relaxed prose prose-lg max-w-none"
                            dangerouslySetInnerHTML={{
                              __html: parsed.content
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-600 font-bold">$1</strong>')
                                .replace(/\n/g, '<br/>')
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Image d'illustration principale */}
              <div className="sticky top-24">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <img
                    src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&h=600&fit=crop"
                    alt="Expertise technique"
                    className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-primary-500 p-2 rounded-lg">
                        <Award className="h-6 w-6" />
                      </div>
                      <span className="text-xl font-bold">Qualité Certifiée</span>
                    </div>
                    <p className="text-white/90 text-sm">
                      Nos ingénieurs certifiés garantissent des études conformes aux normes internationales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Grille de prestations avec icônes et titres */}
            {descriptionSections.length > 1 && (
              <div className="space-y-6 mb-16">
                {descriptionSections.slice(1, 4).map((section, idx) => {
                  const parsed = parseSection(section);
                  const icons = [
                    { Icon: Zap, color: 'from-yellow-500 to-orange-500', bg: 'bg-yellow-50' },
                    { Icon: Shield, color: 'from-blue-500 to-cyan-500', bg: 'bg-blue-50' },
                    { Icon: TrendingUp, color: 'from-green-500 to-emerald-500', bg: 'bg-green-50' }
                  ];
                  const { Icon, color, bg } = icons[idx % 3];

                  return (
                    <div key={idx} className={`group ${bg} rounded-2xl p-8 border border-dark-100 hover:shadow-2xl hover:border-primary-200 transition-all duration-300`}>
                      <div className="flex items-start gap-6">
                        <div className={`bg-gradient-to-br ${color} p-4 rounded-xl inline-flex flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                          <Icon className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex-1">
                          {parsed.title && (
                            <h3 className="text-2xl font-bold text-dark-800 mb-4">{parsed.title}</h3>
                          )}
                          <div
                            className="text-base text-dark-700 leading-relaxed space-y-2"
                            dangerouslySetInnerHTML={{
                              __html: parsed.content
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-600 font-semibold">$1</strong>')
                                .replace(/^- (.+)$/gm, '<div class="flex items-start gap-3 mb-2"><span class="text-primary-500 text-lg flex-shrink-0 mt-1">•</span><span>$1</span></div>')
                                .replace(/\n\n/g, '<br/><br/>')
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Section détails techniques avec fond sombre */}
            {descriptionSections.length > 4 && (
              <div className="bg-gradient-to-br from-dark-800 via-dark-900 to-black text-white rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-12">
                    <div className="bg-gradient-primary p-3 rounded-xl">
                      <Target className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-3xl md:text-4xl font-bold">Prestations Détaillées</h3>
                  </div>

                  <div className="space-y-8">
                    {descriptionSections.slice(4).map((section, idx) => {
                      const parsed = parseSection(section);
                      return (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
                          {parsed.title && (
                            <h4 className="text-2xl font-bold text-primary-400 mb-6 flex items-center gap-3">
                              <span className="bg-primary-500/20 p-2 rounded-lg">
                                <CheckCircle2 className="h-6 w-6 text-primary-400" />
                              </span>
                              {parsed.title}
                            </h4>
                          )}
                          <div
                            className="text-white/90 leading-relaxed space-y-3"
                            dangerouslySetInnerHTML={{
                              __html: parsed.content
                                .replace(/\*\*(.*?)\*\*/g, '<strong class="text-primary-400 font-bold">$1</strong>')
                                .replace(/^- (.+)$/gm, '<div class="flex items-start gap-3 mb-3 ml-4"><span class="text-primary-500 text-xl flex-shrink-0 mt-0.5">•</span><span class="text-base">$1</span></div>')
                                .replace(/\n\n/g, '<div class="my-4"></div>')
                            }}
                          />
                        </div>
                      );
                    })}
                  </div>

                  {/* Image de support technique */}
                  <div className="mt-12 grid md:grid-cols-3 gap-4">
                    <div className="rounded-xl overflow-hidden h-48 shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
                        alt="Études techniques"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden h-48 shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
                        alt="Calculs professionnels"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="rounded-xl overflow-hidden h-48 shadow-2xl">
                      <img
                        src="https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop"
                        alt="Plans et schémas"
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Final */}
            <div className="mt-16 text-center">
              <div className="inline-flex flex-col md:flex-row items-center gap-4">
                <Link
                  href="/devis-gratuit"
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 px-8 py-4 text-lg bg-gradient-primary text-white hover:shadow-glow-orange focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  Demander un Devis Détaillé
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`tel:${BUSINESS.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 px-8 py-4 text-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Phone className="h-5 w-5" />
                  Appelez-nous: {BUSINESS.contact.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Processus avec Timeline visuelle */}
      {service.process && service.process.length > 0 && (
        <section className="py-16 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-500 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Target className="h-4 w-4" />
                Méthodologie Éprouvée
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
                Notre Processus Professionnel
              </h2>
              <p className="text-xl text-dark-600 max-w-2xl mx-auto">
                Un accompagnement structuré et transparent de A à Z
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Ligne verticale de connexion */}
                <div className="absolute left-5 top-8 bottom-8 w-0.5 bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 hidden md:block" />

                <div className="space-y-6">
                  {service.process.map((step, index) => (
                    <div
                      key={index}
                      className="relative flex items-start gap-6 bg-white border-2 border-dark-100 p-6 rounded-xl hover:border-primary-300 hover:shadow-xl transition-all duration-300 group"
                    >
                      {/* Numéro avec gradient */}
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-primary text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform relative z-10">
                        {index + 1}
                      </div>

                      {/* Contenu de l'étape */}
                      <div className="flex-1 pt-2">
                        <p className="text-dark-800 leading-relaxed text-lg group-hover:text-primary-600 transition-colors">
                          {step.replace(/^\d+\.\s*/, '')}
                        </p>
                      </div>

                      {/* Icône de progression */}
                      <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Circle className="h-6 w-6 text-primary-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Garanties avec icônes */}
      {service.guarantees && service.guarantees.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-dark-800 to-dark-900 text-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-500 rounded-2xl mb-6 animate-float">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Nos Garanties & Engagements
              </h2>
              <p className="text-xl text-dark-200 max-w-2xl mx-auto">
                Votre tranquillité d'esprit est notre priorité absolue
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
              {service.guarantees.map((guarantee, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl hover:bg-white/15 hover:border-primary-400 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary-500 p-2 rounded-lg group-hover:scale-110 transition-transform">
                      <CheckCircle2 className="h-6 w-6 text-white" />
                    </div>
                    <span className="text-white text-lg leading-relaxed flex-1">{guarantee}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pourquoi Nous Choisir */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
                Pourquoi Choisir ELECTRIC SYSTEM ?
              </h2>
              <p className="text-xl text-dark-600">
                L'expertise au service de votre projet
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Award className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">Expertise Reconnue</h3>
                <p className="text-dark-600">
                  12 ans d'expérience et 850+ projets réalisés avec succès
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">Équipe Qualifiée</h3>
                <p className="text-dark-600">
                  Électriciens certifiés et techniciens spécialisés à votre service
                </p>
              </div>

              <div className="text-center group">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-primary rounded-2xl mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-dark-800 mb-3">Satisfaction Client</h3>
                <p className="text-dark-600">
                  127+ clients satisfaits nous font confiance au Luxembourg
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Principal avec fond image */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e')] opacity-10 bg-cover bg-center" />

        <div className="container-custom relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Prêt à Démarrer Votre Projet ?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Contactez-nous dès maintenant pour un devis gratuit, détaillé et personnalisé
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <Link
              href="/devis-gratuit"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 px-8 py-4 text-lg bg-white text-primary-500 hover:bg-dark-50 border-0 shadow-xl hover:shadow-2xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Star className="mr-2 h-5 w-5" />
              Devis Gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href={`tel:${BUSINESS.contact.phone}`}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Phone className="mr-2 h-5 w-5" />
              {BUSINESS.contact.phoneDisplay}
            </a>
            <a
              href={`mailto:${BUSINESS.contact.email}`}
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 px-8 py-4 text-lg border-2 border-white text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            >
              <Mail className="mr-2 h-5 w-5" />
              Email
            </a>
          </div>

          <div className="flex items-center justify-center gap-8 text-sm text-white/80">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-300" />
              Réponse sous 24h
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-300" />
              Devis détaillé gratuit
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary-300" />
              Sans engagement
            </div>
          </div>
        </div>
      </section>

      {/* Services Connexes avec style amélioré */}
      <section className="py-16 bg-gradient-to-b from-white to-dark-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-dark-800 mb-4">
              Découvrez Nos Autres Services
            </h2>
            <p className="text-xl text-dark-600">
              Des solutions complètes pour tous vos besoins électriques
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {SERVICES.filter(s => s.slug !== service.slug && s.featured)
              .slice(0, 3)
              .map((relatedService) => (
                <Link
                  key={relatedService.slug}
                  href={`/${relatedService.slug}`}
                  className="group bg-white border-2 border-dark-100 rounded-2xl overflow-hidden hover:border-primary-500 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={relatedService.image}
                      alt={relatedService.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="inline-flex items-center gap-1 bg-primary-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold">
                        <Star className="h-3 w-3" />
                        Service Premium
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary-500 text-sm font-semibold mb-2">
                      <Euro className="h-4 w-4" />
                      {relatedService.priceRange.split(' - ')[0]}
                    </div>
                    <h3 className="font-bold text-xl text-dark-800 mb-3 group-hover:text-primary-500 transition-colors line-clamp-2">
                      {relatedService.name}
                    </h3>
                    <p className="text-dark-600 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {relatedService.shortDescription}
                    </p>
                    <div className="flex items-center text-primary-500 font-semibold group-hover:gap-3 transition-all">
                      En savoir plus
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          <div className="text-center">
            <Link
              href="/nos-services"
              className="inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all duration-300 px-8 py-4 text-lg bg-primary-500 text-white hover:bg-primary-600 shadow-lg hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Voir Tous Nos Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
