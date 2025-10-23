// Page d'accueil avec sections complètes

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BUSINESS, FEATURED_SERVICES, STATISTICS, TESTIMONIALS, FAQS, PROJECTS } from '@/lib/constants';
import {
  Phone,
  Mail,
  ArrowRight,
  CheckCircle2,
  Award,
  Star,
  Clock,
  Zap,
  Sun,
  Battery,
  Home,
  Shield,
  Calculator,
  ChevronDown,
  Quote,
  HelpCircle
} from 'lucide-react';
import Card from '@/components/ui/Card';
import Accordion from '@/components/ui/Accordion';

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Bureau d'Études Techniques */}
      <section className="relative min-h-screen flex items-center justify-center bg-dark-900 overflow-hidden">
        {/* Image de fond - Plans techniques */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Bureau d'études techniques - Plans et calculs électriques"
            fill
            className="object-cover opacity-25"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/90 via-dark-900/80 to-dark-900"></div>
        </div>

        {/* Grille technique en arrière-plan */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(255,138,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,138,0,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        {/* Plan électrique subtil côté gauche */}
        <div className="absolute left-0 top-0 bottom-0 w-1/2 opacity-15 hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
            alt="Plan électrique technique"
            fill
            className="object-cover object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-dark-900/50 to-dark-900"></div>
        </div>

        {/* Formes décoratives avec thème technique */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>

        {/* Contenu */}
        <div className="container-custom relative z-10 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Colonne gauche - Texte principal */}
            <div>
              {/* Badge premium */}
              <div className="inline-flex items-center gap-2 bg-gradient-primary backdrop-blur-sm rounded-full px-6 py-3 mb-8 animate-bounceIn shadow-glow-orange">
                <Calculator className="h-5 w-5 text-white" />
                <span className="text-white font-bold">Bureau d'Études Techniques Certifié</span>
              </div>

              {/* Titre principal focalisé sur le cœur business */}
              <h1 className="heading-xl text-white mb-6 animate-fadeInUp">
                <span className="block text-5xl md:text-6xl lg:text-7xl font-black">Dimensionnement</span>
                <span className="block text-gradient text-4xl md:text-5xl lg:text-6xl font-black mt-2">& Notes de Calcul</span>
                <span className="block text-2xl md:text-3xl font-semibold text-dark-200 mt-4">Ingénierie Électrique Professionnelle</span>
              </h1>

              {/* Sous-titre technique */}
              <p className="text-xl text-dark-100 mb-8 leading-relaxed animate-fadeInUp" style={{animationDelay: '0.2s'}}>
                Études complètes <strong className="text-primary-400">CANECO</strong> et <strong className="text-primary-400">DIALUX</strong> conformes aux normes IEC 60364.
                Plans AutoCAD, schémas unifilaires, calculs de court-circuit, sélectivité des protections.
              </p>

              {/* Points d'expertise technique */}
              <div className="grid sm:grid-cols-2 gap-4 mb-10 animate-fadeInUp" style={{animationDelay: '0.4s'}}>
                <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-primary-500/20 hover:border-primary-500/50 transition-all">
                  <Zap className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">Bilan de Puissance</div>
                    <div className="text-xs text-dark-300">kW, kVA, facteur simultanéité</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-primary-500/20 hover:border-primary-500/50 transition-all">
                  <Calculator className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">Dimensionnement Câbles</div>
                    <div className="text-xs text-dark-300">Sections selon IEC 60364</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-primary-500/20 hover:border-primary-500/50 transition-all">
                  <Shield className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">Court-Circuit & Sélectivité</div>
                    <div className="text-xs text-dark-300">Icc, Ik, protection optimale</div>
                  </div>
                </div>
                <div className="flex items-start gap-3 bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-primary-500/20 hover:border-primary-500/50 transition-all">
                  <Sun className="h-6 w-6 text-primary-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white text-sm">Études Éclairage DIALUX</div>
                    <div className="text-xs text-dark-300">Modélisation 3D, photométrie</div>
                  </div>
                </div>
              </div>

              {/* Boutons CTA */}
              <div className="flex flex-col sm:flex-row items-start gap-4 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                <Link
                  href="/bureau-etudes-techniques-caneco-dialux"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg bg-gradient-primary text-white hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 shadow-lg"
                >
                  Voir Nos Études Techniques
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={`tel:${BUSINESS.contact.phone}`}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-lg border-2 border-primary-500/50 text-white hover:bg-primary-500/10 hover:border-primary-500 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                >
                  <Phone className="h-5 w-5" />
                  {BUSINESS.contact.phoneDisplay}
                </a>
              </div>
            </div>

            {/* Colonne droite - Visual Card avec specs techniques et image 3D */}
            <div className="hidden lg:block animate-fadeInUp" style={{animationDelay: '0.3s'}}>
              <div className="space-y-6">
                {/* Image 3D de projet en haut */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1581092160562-40aa08e78837"
                      alt="Projet 3D - Bureau d'études techniques"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent"></div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-primary-500 p-2 rounded-lg">
                        <Calculator className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-white font-bold text-lg">Modélisation 3D DIALUX</span>
                    </div>
                    <p className="text-white/80 text-sm">Visualisation photoréaliste de vos projets</p>
                  </div>
                </div>

                {/* Card specs techniques */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="bg-gradient-primary p-3 rounded-xl shadow-lg">
                      <Award className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <div className="text-white font-bold text-xl">Notes de Calcul Complètes</div>
                      <div className="text-primary-400 text-sm">50-200 pages • Conformes normes LU/FR/IEC</div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-dark-800/50 rounded-lg p-4 border border-primary-500/30">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-white font-semibold">Livrables Inclus:</span>
                        <CheckCircle2 className="h-5 w-5 text-primary-500" />
                      </div>
                      <ul className="space-y-2 text-sm text-dark-200">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                          Schémas unifilaires & multifilaires
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                          Plans AutoCAD (DWG + PDF)
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                          Nomenclature matériel exhaustive
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                          Dossier permis de construire
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                          DCE pour consultation entreprises
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gradient-to-br from-primary-500/20 to-primary-600/10 rounded-lg p-4 text-center border border-primary-500/30 hover:border-primary-500/60 transition-colors">
                        <div className="text-3xl font-black text-white mb-1">850+</div>
                        <div className="text-xs text-dark-200">Études Réalisées</div>
                      </div>
                      <div className="bg-gradient-to-br from-accent-500/20 to-accent-600/10 rounded-lg p-4 text-center border border-accent-500/30 hover:border-accent-500/60 transition-colors">
                        <div className="text-3xl font-black text-white mb-1">12 ans</div>
                        <div className="text-xs text-dark-200">D'Expérience</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Indicateur de scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/60" />
        </div>
      </section>

      {/* Statistiques */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {STATISTICS.map((stat, index) => {
              const Icon = stat.icon === 'check-circle-2' ? CheckCircle2 :
                           stat.icon === 'award' ? Award :
                           stat.icon === 'star' ? Star : Clock;

              return (
                <div
                  key={index}
                  className="text-center group hover:scale-105 transition-transform duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-50 rounded-2xl mb-4 group-hover:bg-primary-500 group-hover:shadow-glow-orange transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary-500 group-hover:text-white transition-colors" />
                  </div>
                  <div className="text-4xl font-bold text-dark-800 mb-2 count-up">{stat.value}</div>
                  <div className="font-semibold text-dark-800 mb-1">{stat.label}</div>
                  {stat.description && (
                    <div className="text-sm text-dark-500">{stat.description}</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services en vedette */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Nos Expertises
            </div>
            <h2 className="heading-lg text-dark-800 mb-4">
              Services Professionnels
            </h2>
            <p className="body-md text-dark-600 max-w-2xl mx-auto">
              Solutions complètes en électricité, ingénierie et énergies renouvelables pour tous vos projets
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {FEATURED_SERVICES.slice(0, 6).map((service, index) => {
              const getIcon = () => {
                if (service.icon === 'calculator') return Calculator;
                if (service.icon === 'sun') return Sun;
                if (service.icon === 'cable') return Battery;
                if (service.icon === 'home') return Home;
                if (service.icon === 'shield') return Shield;
                return Zap;
              };
              const Icon = getIcon();

              return (
                <Card key={service.slug} hover className="group">
                  {/* Image */}
                  <div className="relative h-48 -m-8 mb-6 overflow-hidden rounded-t-2xl">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent"></div>

                    {/* Badge prix */}
                    <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1.5 rounded-full text-sm font-bold shadow-lg">
                      {service.priceRange.split(' - ')[0]}+
                    </div>

                    {/* Icône */}
                    <div className="absolute bottom-4 left-4 bg-white p-3 rounded-xl shadow-lg">
                      <Icon className="h-6 w-6 text-primary-500" />
                    </div>
                  </div>

                  {/* Contenu */}
                  <h3 className="text-xl font-bold text-dark-800 mb-3 line-clamp-2">
                    {service.name}
                  </h3>
                  <p className="text-dark-600 text-sm mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>

                  {/* Avantages */}
                  <ul className="space-y-2 mb-6">
                    {service.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                        <span className="text-dark-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Boutons */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href={`/${service.slug}`}
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg border-2 border-dark-300 text-dark-700 hover:bg-dark-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-300"
                    >
                      En savoir plus
                    </Link>
                    <Link
                      href="/devis-gratuit"
                      className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-primary text-white hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                    >
                      Devis
                    </Link>
                  </div>
                </Card>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/nos-services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-primary text-white hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Découvrir Tous Nos Services
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Projets Réalisations - Before/After */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-block bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Portfolio
            </div>
            <h2 className="heading-lg text-dark-800 mb-4">
              Nos Réalisations
            </h2>
            <p className="body-md text-dark-600 max-w-2xl mx-auto">
              Découvrez quelques-uns de nos projets réalisés avec succès au Luxembourg
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {PROJECTS.slice(0, 4).map((project) => (
              <Card key={project.id} hover padding="none">
                <div className="grid grid-cols-2">
                  {/* Avant */}
                  <div className="relative h-64 overflow-hidden rounded-tl-2xl">
                    <Image
                      src={project.beforeImage}
                      alt={`${project.title} - Avant`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-dark-800/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Avant
                    </div>
                  </div>

                  {/* Après */}
                  <div className="relative h-64 overflow-hidden rounded-tr-2xl">
                    <Image
                      src={project.afterImage}
                      alt={`${project.title} - Après`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-3 right-3 bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Après
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-lg font-bold text-dark-800">{project.title}</h3>
                    <span className="text-xs bg-primary-100 text-primary-600 px-2 py-1 rounded whitespace-nowrap">
                      {project.date}
                    </span>
                  </div>
                  <p className="text-sm text-dark-600 mb-3">{project.category}</p>
                  <p className="text-sm text-dark-700 mb-4 line-clamp-2">{project.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {project.services.slice(0, 3).map((service, i) => (
                      <span key={i} className="text-xs bg-dark-100 text-dark-700 px-2 py-1 rounded">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/realisations"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg bg-gradient-primary text-white hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Voir Toutes Nos Réalisations
            </Link>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="section-padding bg-gradient-primary text-white relative overflow-hidden">
        {/* Formes décoratives */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              Témoignages
            </div>
            <h2 className="heading-lg mb-4">
              Ce Que Disent Nos Clients
            </h2>
            <div className="flex items-center justify-center gap-6 mt-6">
              <div className="text-center">
                <div className="flex items-center gap-1 justify-center mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-sm opacity-90">Note moyenne</div>
              </div>
              <div className="h-16 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">127+</div>
                <div className="text-sm opacity-90">Avis clients</div>
              </div>
              <div className="h-16 w-px bg-white/30"></div>
              <div className="text-center">
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-90">Recommandations</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.slice(0, 6).map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20"
              >
                {/* Note */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Citation */}
                <Quote className="h-8 w-8 text-white/40 mb-3" />
                <p className="text-white/95 italic mb-6 leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Auteur */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center font-bold text-white">
                    {testimonial.initials}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-80">{testimonial.location}</div>
                    <div className="text-xs opacity-70">{testimonial.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <HelpCircle className="h-4 w-4" />
                Questions Fréquentes
              </div>
              <h2 className="heading-lg text-dark-800 mb-4">
                FAQ - Foire Aux Questions
              </h2>
              <p className="body-md text-dark-600">
                Trouvez rapidement les réponses à vos questions les plus courantes
              </p>
            </div>

            <Accordion items={FAQS.slice(0, 6)} />

            <div className="text-center mt-10">
              <p className="text-dark-600 mb-4">Vous avez d'autres questions?</p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-primary-500 text-primary-500 hover:bg-primary-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Contactez-nous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-dark-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-lg mb-6">
              Prêt à Démarrer Votre Projet?
            </h2>
            <p className="body-lg mb-10 text-dark-100">
              Contactez-nous dès aujourd'hui pour un devis gratuit et personnalisé.
              Notre équipe d'experts est à votre écoute pour répondre à tous vos besoins.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10">
              <Link
                href="/devis-gratuit"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-semibold rounded-lg bg-gradient-primary text-white hover:shadow-glow-orange transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
              >
                Demander un Devis Gratuit
                <ArrowRight className="h-6 w-6" />
              </Link>
              <a
                href={`tel:${BUSINESS.contact.phone}`}
                className="inline-flex items-center justify-center gap-2 px-10 py-5 text-xl font-semibold rounded-lg border-2 border-white/40 text-white hover:bg-white/10 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
              >
                <Phone className="h-6 w-6" />
                {BUSINESS.contact.phoneDisplay}
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-white/20">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0" />
                <span>Réponse sous 24h</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0" />
                <span>Devis gratuit sans engagement</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-primary-500 flex-shrink-0" />
                <span>Garantie décennale</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
