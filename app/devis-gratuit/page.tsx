// Page devis gratuit avec formulaire multi-étapes

'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { BUSINESS, SERVICES } from '@/lib/constants';
import { ChevronRight, ChevronLeft, CheckCircle2, Calculator, Sun, Battery, Home, Shield, Zap } from 'lucide-react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import Textarea from '@/components/ui/Textarea';
import Card from '@/components/ui/Card';

// Schéma de validation
const quoteSchema = z.object({
  serviceType: z.string().min(1, 'Sélectionnez un type de service'),
  surface: z.string().optional(),
  budget: z.string().min(1, 'Sélectionnez votre budget'),
  timing: z.string().min(1, 'Sélectionnez la date souhaitée'),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(9, 'Numéro de téléphone invalide'),
  postalCode: z.string().regex(/^[0-9]{4}$/, 'Code postal luxembourgeois invalide (4 chiffres)'),
  message: z.string().optional(),
  privacy: z.boolean().refine(val => val === true, 'Vous devez accepter la politique de confidentialité'),
});

type QuoteFormData = z.infer<typeof quoteSchema>;

export default function DevisGratuitPage() {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema),
  });

  const serviceType = watch('serviceType');
  const budget = watch('budget');
  const timing = watch('timing');

  const onSubmit = async (data: QuoteFormData) => {
    console.log('Form submitted:', data);
    // Simuler l'envoi
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitted(true);
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  const serviceTypes = [
    { id: 'bureau-etudes', label: 'Bureau d\'Études', icon: Calculator, desc: 'Caneco, Dialux, schémas' },
    { id: 'photovoltaique', label: 'Photovoltaïque', icon: Sun, desc: 'Panneaux solaires' },
    { id: 'borne-recharge', label: 'Borne Recharge', icon: Battery, desc: 'Véhicule électrique' },
    { id: 'domotique', label: 'Domotique KNX', icon: Home, desc: 'Maison intelligente' },
    { id: 'securite', label: 'Sécurité', icon: Shield, desc: 'Alarme, vidéo' },
    { id: 'installation', label: 'Installation Électrique', icon: Zap, desc: 'Neuf ou rénovation' },
  ];

  const budgetRanges = [
    { id: 'small', label: '< 5.000€', value: 'Moins de 5.000€' },
    { id: 'medium', label: '5.000€ - 15.000€', value: '5.000€ - 15.000€' },
    { id: 'large', label: '15.000€ - 50.000€', value: '15.000€ - 50.000€' },
    { id: 'xlarge', label: '> 50.000€', value: 'Plus de 50.000€' },
  ];

  const timingOptions = [
    { id: 'urgent', label: 'Dès que possible', value: 'Urgent' },
    { id: 'week', label: 'Cette semaine', value: 'Cette semaine' },
    { id: 'month', label: 'Ce mois-ci', value: 'Ce mois-ci' },
    { id: 'later', label: 'Dans les 3 mois', value: 'Dans les 3 mois' },
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center py-20">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500 rounded-full mb-6">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-3xl font-bold text-dark-800 mb-4">
              Demande de Devis Envoyée!
            </h1>
            <p className="text-lg text-dark-600 mb-8">
              Merci pour votre demande. Notre équipe vous contactera dans les 24h pour discuter
              de votre projet et vous fournir un devis personnalisé gratuit.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="primary" size="lg" onClick={() => window.location.href = '/'}>
                Retour à l'Accueil
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`tel:${BUSINESS.contact.phone}`}>Appeler Maintenant</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-dark-50">
      {/* Hero */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-lg mb-4">Demande de Devis Gratuit</h1>
            <p className="body-md opacity-95">
              Remplissez notre formulaire en 4 étapes pour recevoir un devis personnalisé et gratuit
            </p>
          </div>
        </div>
      </section>

      {/* Indicateur d'étapes */}
      <div className="bg-white border-b border-dark-100">
        <div className="container-custom py-6">
          <div className="flex items-center justify-center gap-4 max-w-2xl mx-auto">
            {[1, 2, 3, 4].map((s) => (
              <React.Fragment key={s}>
                <div className="flex flex-col items-center gap-2">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-bold transition-all ${
                      s === step
                        ? 'bg-primary-500 text-white scale-110'
                        : s < step
                        ? 'bg-green-500 text-white'
                        : 'bg-dark-200 text-dark-500'
                    }`}
                  >
                    {s < step ? <CheckCircle2 className="h-5 w-5" /> : s}
                  </div>
                  <span className="text-xs font-medium text-dark-600 hidden sm:block">
                    {s === 1 && 'Service'}
                    {s === 2 && 'Détails'}
                    {s === 3 && 'Planning'}
                    {s === 4 && 'Contact'}
                  </span>
                </div>
                {s < 4 && (
                  <div
                    className={`flex-1 h-1 rounded-full max-w-[80px] ${
                      s < step ? 'bg-green-500' : 'bg-dark-200'
                    }`}
                  ></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Formulaire */}
      <section className="section-padding">
        <div className="container-custom">
          <Card className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* Étape 1: Type de service */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-dark-800 mb-2">
                      Quel service vous intéresse?
                    </h2>
                    <p className="text-dark-600">Sélectionnez le type de projet</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {serviceTypes.map((service) => {
                      const Icon = service.icon;
                      return (
                        <label
                          key={service.id}
                          className={`relative cursor-pointer border-2 rounded-xl p-6 transition-all hover:border-primary-500 hover:shadow-lg ${
                            serviceType === service.id
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-dark-200'
                          }`}
                        >
                          <input
                            type="radio"
                            value={service.id}
                            {...register('serviceType')}
                            className="sr-only"
                          />
                          <div className="text-center">
                            <Icon
                              className={`h-10 w-10 mx-auto mb-3 ${
                                serviceType === service.id ? 'text-primary-500' : 'text-dark-400'
                              }`}
                            />
                            <div className="font-semibold text-dark-800 mb-1">{service.label}</div>
                            <div className="text-xs text-dark-500">{service.desc}</div>
                          </div>
                          {serviceType === service.id && (
                            <div className="absolute top-2 right-2 bg-primary-500 rounded-full p-1">
                              <CheckCircle2 className="h-4 w-4 text-white" />
                            </div>
                          )}
                        </label>
                      );
                    })}
                  </div>

                  {errors.serviceType && (
                    <p className="text-red-600 text-sm">{errors.serviceType.message}</p>
                  )}
                </div>
              )}

              {/* Étape 2: Détails projet */}
              {step === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-dark-800 mb-2">
                      Détails de votre projet
                    </h2>
                    <p className="text-dark-600">Informations complémentaires</p>
                  </div>

                  <Input
                    label="Surface concernée (optionnel)"
                    {...register('surface')}
                    type="text"
                    placeholder="ex: 150m²"
                    helperText="Pour une maison, appartement, bureau, etc."
                    fullWidth
                  />

                  <div>
                    <label className="block text-sm font-medium text-dark-800 mb-3">
                      Budget estimé <span className="text-primary-500">*</span>
                    </label>
                    <div className="grid grid-cols-2 gap-4">
                      {budgetRanges.map((range) => (
                        <label
                          key={range.id}
                          className={`cursor-pointer border-2 rounded-xl p-4 transition-all hover:border-primary-500 ${
                            budget === range.value
                              ? 'border-primary-500 bg-primary-50'
                              : 'border-dark-200'
                          }`}
                        >
                          <input
                            type="radio"
                            value={range.value}
                            {...register('budget')}
                            className="sr-only"
                          />
                          <div className="flex items-center justify-between">
                            <span className="font-semibold text-dark-800">{range.label}</span>
                            {budget === range.value && (
                              <CheckCircle2 className="h-5 w-5 text-primary-500" />
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.budget && (
                      <p className="text-red-600 text-sm mt-2">{errors.budget.message}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Étape 3: Planning */}
              {step === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-dark-800 mb-2">
                      Quand souhaitez-vous démarrer?
                    </h2>
                    <p className="text-dark-600">Délai souhaité pour le projet</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {timingOptions.map((option) => (
                      <label
                        key={option.id}
                        className={`cursor-pointer border-2 rounded-xl p-6 transition-all hover:border-primary-500 ${
                          timing === option.value
                            ? 'border-primary-500 bg-primary-50'
                            : 'border-dark-200'
                        }`}
                      >
                        <input
                          type="radio"
                          value={option.value}
                          {...register('timing')}
                          className="sr-only"
                        />
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-dark-800">{option.label}</span>
                          {timing === option.value && (
                            <CheckCircle2 className="h-5 w-5 text-primary-500" />
                          )}
                        </div>
                      </label>
                    ))}
                  </div>

                  {errors.timing && (
                    <p className="text-red-600 text-sm">{errors.timing.message}</p>
                  )}
                </div>
              )}

              {/* Étape 4: Coordonnées */}
              {step === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-dark-800 mb-2">
                      Vos coordonnées
                    </h2>
                    <p className="text-dark-600">Pour recevoir votre devis personnalisé</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Prénom"
                      {...register('firstName')}
                      type="text"
                      placeholder="Jean"
                      error={errors.firstName?.message}
                      required
                      fullWidth
                    />
                    <Input
                      label="Nom"
                      {...register('lastName')}
                      type="text"
                      placeholder="Dupont"
                      error={errors.lastName?.message}
                      required
                      fullWidth
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input
                      label="Email"
                      {...register('email')}
                      type="email"
                      placeholder="jean.dupont@example.com"
                      error={errors.email?.message}
                      required
                      fullWidth
                    />
                    <Input
                      label="Téléphone"
                      {...register('phone')}
                      type="tel"
                      placeholder="621 123 456"
                      error={errors.phone?.message}
                      required
                      fullWidth
                    />
                  </div>

                  <Input
                    label="Code Postal"
                    {...register('postalCode')}
                    type="text"
                    placeholder="1234"
                    error={errors.postalCode?.message}
                    helperText="Code postal luxembourgeois (4 chiffres)"
                    required
                    fullWidth
                  />

                  <Textarea
                    label="Message (optionnel)"
                    {...register('message')}
                    placeholder="Décrivez votre projet plus en détail..."
                    rows={4}
                    maxLength={500}
                    showCharCount
                    fullWidth
                  />

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="privacy"
                      {...register('privacy')}
                      className="mt-1 h-4 w-4 rounded border-dark-300 text-primary-500 focus:ring-primary-500"
                    />
                    <label htmlFor="privacy" className="text-sm text-dark-600">
                      J'accepte que mes données soient utilisées pour me recontacter concernant ma
                      demande de devis. <span className="text-primary-500">*</span>
                    </label>
                  </div>
                  {errors.privacy && (
                    <p className="text-red-600 text-sm">{errors.privacy.message}</p>
                  )}
                </div>
              )}

              {/* Boutons de navigation */}
              <div className="flex items-center justify-between mt-10 pt-6 border-t border-dark-100">
                {step > 1 ? (
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    icon={ChevronLeft}
                    onClick={prevStep}
                  >
                    Précédent
                  </Button>
                ) : (
                  <div></div>
                )}

                {step < 4 ? (
                  <Button
                    type="button"
                    variant="primary"
                    size="lg"
                    icon={ChevronRight}
                    iconPosition="right"
                    onClick={nextStep}
                  >
                    Suivant
                  </Button>
                ) : (
                  <Button type="submit" variant="primary" size="lg">
                    Envoyer la Demande
                  </Button>
                )}
              </div>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
