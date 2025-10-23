// Page de contact avec formulaire et informations

'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
import { BUSINESS } from '@/lib/constants';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Card from '@/components/ui/Card';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Réinitialiser après 5 secondes
    setTimeout(() => {
      setIsSubmitted(false);
      (e.target as HTMLFormElement).reset();
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-primary text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="heading-xl mb-6">Contactez-Nous</h1>
            <p className="body-lg opacity-95">
              Notre équipe est à votre écoute pour répondre à toutes vos questions et vous
              accompagner dans vos projets électriques.
            </p>
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Informations de contact */}
            <div className="lg:col-span-1 space-y-6">
              <Card>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <Phone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-800 mb-2">Téléphone</h3>
                    <a
                      href={`tel:${BUSINESS.contact.phone}`}
                      className="text-primary-500 hover:text-primary-600 font-semibold"
                    >
                      {BUSINESS.contact.phoneDisplay}
                    </a>
                    <p className="text-sm text-dark-600 mt-1">
                      {BUSINESS.hours.emergency}
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <Mail className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-800 mb-2">Email</h3>
                    <a
                      href={`mailto:${BUSINESS.contact.email}`}
                      className="text-primary-500 hover:text-primary-600 break-all"
                    >
                      {BUSINESS.contact.email}
                    </a>
                    <p className="text-sm text-dark-600 mt-1">
                      Réponse sous 24h
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-800 mb-2">Localisation</h3>
                    <p className="text-dark-700">
                      {BUSINESS.contact.address.city}<br />
                      {BUSINESS.contact.address.country}
                    </p>
                    <p className="text-sm text-dark-600 mt-2">
                      {BUSINESS.contact.serviceRadius}
                    </p>
                  </div>
                </div>
              </Card>

              <Card>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-100 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-dark-800 mb-2">Horaires</h3>
                    <div className="space-y-1 text-sm text-dark-700">
                      <p>{BUSINESS.hours.weekdays}</p>
                      <p>{BUSINESS.hours.saturday}</p>
                      <p>{BUSINESS.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>

            {/* Formulaire de contact */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-dark-800 mb-6">
                  Envoyez-nous un Message
                </h2>

                {isSubmitted ? (
                  <div className="bg-green-50 border-2 border-green-500 rounded-xl p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                      <Send className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-green-800 mb-2">
                      Message Envoyé!
                    </h3>
                    <p className="text-green-700">
                      Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Prénom"
                        name="firstName"
                        type="text"
                        placeholder="Jean"
                        required
                        fullWidth
                      />
                      <Input
                        label="Nom"
                        name="lastName"
                        type="text"
                        placeholder="Dupont"
                        required
                        fullWidth
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Input
                        label="Email"
                        name="email"
                        type="email"
                        placeholder="jean.dupont@example.com"
                        required
                        fullWidth
                      />
                      <Input
                        label="Téléphone"
                        name="phone"
                        type="tel"
                        placeholder="621 123 456"
                        required
                        fullWidth
                      />
                    </div>

                    <Input
                      label="Sujet"
                      name="subject"
                      type="text"
                      placeholder="Installation photovoltaïque"
                      required
                      fullWidth
                    />

                    <Textarea
                      label="Message"
                      name="message"
                      placeholder="Décrivez votre projet ou votre demande..."
                      rows={6}
                      required
                      fullWidth
                      maxLength={1000}
                      showCharCount
                    />

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        required
                        className="mt-1 h-4 w-4 rounded border-dark-300 text-primary-500 focus:ring-primary-500"
                      />
                      <label htmlFor="privacy" className="text-sm text-dark-600">
                        J'accepte que mes données soient utilisées pour me recontacter
                        concernant ma demande. Voir notre{' '}
                        <a href="/politique-confidentialite" className="text-primary-500 hover:underline">
                          politique de confidentialité
                        </a>
                        .
                      </label>
                    </div>

                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      icon={Send}
                      iconPosition="right"
                      loading={isSubmitting}
                      fullWidth
                    >
                      Envoyer le Message
                    </Button>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
