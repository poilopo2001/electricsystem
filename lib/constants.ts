// Données complètes ELECTRIC SYSTEM Sàrl
import { Business, Branding, Service, Testimonial, FAQ, Project, Statistic, Certification, TeamMember, Partner, SEO, Financing, Subsidy } from './types';

export const BUSINESS: Business = {
  name: "ELECTRIC SYSTEM Sàrl",
  shortName: "ELECTRIC SYSTEM",
  legalForm: "Sàrl (Société à responsabilité limitée)",
  sector: "electricite-generale-etudes-techniques",
  tagline: "Ingénierie électrique & solutions technologiques",
  description: "Bureau d'études techniques et entreprise d'électricité générale au Luxembourg. Expert en dimensionnement installations électriques, études techniques Caneco et Dialux, panneaux photovoltaïques, bornes de recharge, domotique, sécurité (alarme, vidéosurveillance, contrôle d'accès), courants faibles. Services pour particuliers, entreprises, bâtiments publics et résidences. Revente d'études techniques pour promoteurs et maîtres d'ouvrage.",
  founded: 2013,
  registreCommerce: "B294234",
  tva: "LU36415556",
  capital: "30.000€",
  manager: {
    name: "M. Neslym Cherifi",
    role: "Gérant Technique",
    phone: "+352 661 22 44 09",
    phoneDisplay: "661 22 44 09"
  },
  contact: {
    phone: "+352 661 22 44 09",
    phoneDisplay: "661 22 44 09",
    email: "contact@electricsystem.lu",
    website: "www.electricsystem.lu",
    address: {
      city: "Luxembourg",
      country: "Luxembourg"
    },
    serviceRadius: "Tout le Grand-Duché de Luxembourg + zones frontalières (Belgique, France, Allemagne)"
  },
  hours: {
    weekdays: "Lundi - Vendredi: 8h00 - 18h00",
    saturday: "Samedi: 9h00 - 13h00 (sur rendez-vous)",
    sunday: "Dimanche: Fermé",
    emergency: "Dépannage urgent 24/7"
  },
  languages: ["Français", "Luxembourgeois", "Anglais", "Arabe"],
  social: {
    facebook: "https://facebook.com/electricsystem.lu",
    instagram: "https://instagram.com/electricsystem_lux",
    linkedin: "https://linkedin.com/company/electric-system-sarl"
  }
};

export const BRANDING: Branding = {
  primaryColor: "#FF8C00",
  secondaryColor: "#1a1a1a",
  accentColor: "#FFA500",
  neutralColor: "#2d2d2d",
  colorScheme: "orange-black-electric",
  fontFamily: "Montserrat, Inter, sans-serif",
  logoColors: ["Orange (#FF8C00)", "Noir (#1a1a1a)", "Blanc (#FFFFFF)"]
};

export const SERVICES: Service[] = [
  {
    name: "Bureau d'Études Techniques - Dimensionnement & Notes de Calcul",
    slug: "bureau-etudes-techniques-caneco-dialux",
    shortDescription: "Expert dimensionnement installations électriques : notes de calcul Caneco, études d'éclairage Dialux, schémas unifilaires, plans de câblage. Revente d'études pour promoteurs.",
    fullDescription: "ELECTRIC SYSTEM dispose d'un véritable bureau d'études techniques spécialisé en ingénierie électrique. Nous réalisons des études complètes et détaillées pour tous types de projets : résidences, immeubles de bureaux, bâtiments commerciaux, infrastructures publiques, parkings, sites industriels.\n\n**Nos prestations bureau d'études** :\n\n**ÉTUDES CANECO** (dimensionnement électrique) :\n- Bilan de puissance détaillé (kW, kVA, facteur de simultanéité)\n- Dimensionnement sections câbles selon IEC 60364\n- Calcul chutes de tension sur chaque circuit\n- Calculs courants de court-circuit (Icc, Ik)\n- Vérification sélectivité protections\n- Dimensionnement protections (disjoncteurs, fusibles)\n- Mise à la terre et liaisons équipotentielles\n- Note de calcul complète 50-200 pages\n\n**ÉTUDES DIALUX** (éclairage) :\n- Modélisation 3D du bâtiment\n- Implantation optimale luminaires\n- Calculs photométriques (éclairement, uniformité)\n- Conformité normes EN 12464-1\n- Rendus photoréalistes\n- Économies énergétiques\n- Choix luminaires avec références\n\n**LIVRABLES** :\n- Schémas unifilaires et multifilaires\n- Plans AutoCAD (DWG + PDF)\n- Nomenclature matériel exhaustive\n- Cahier des charges techniques\n- Dossier permis de construire\n- DCE pour consultation entreprises",
    priceRange: "€1.500 - €45.000",
    priceMin: 1500,
    priceMax: 45000,
    benefits: [
      "Expert Caneco & Dialux certifié",
      "Notes de calcul complètes conformes normes",
      "Schémas unifilaires/multifilaires professionnels",
      "Plans AutoCAD fournis (DWG + PDF)",
      "Nomenclature matériel avec références exactes",
      "Études conformes normes LU/FR/IEC",
      "Dossier permis de construire inclus",
      "Revue par ingénieur agréé",
      "Modifications incluses (2 révisions)",
      "Délais rapides (1-6 semaines selon ampleur)"
    ],
    featured: true,
    icon: "calculator",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    estimatedDuration: "1-12 semaines selon ampleur projet"
  },
  {
    name: "Installation Panneaux Photovoltaïques - Solaire PV",
    slug: "panneaux-photovoltaiques-solaire",
    shortDescription: "Installation complète panneaux solaires photovoltaïques pour particuliers et entreprises. Étude de rentabilité, dimensionnement optimal, pose et raccordement.",
    fullDescription: "Produisez votre propre électricité verte et réduisez drastiquement vos factures d'énergie avec une installation photovoltaïque professionnelle. ELECTRIC SYSTEM vous accompagne dans votre transition énergétique du début à la fin.",
    priceRange: "€6.500 - €180.000",
    priceMin: 6500,
    priceMax: 180000,
    benefits: [
      "Étude personnalisée gratuite",
      "Simulation production sur 25 ans",
      "Panneaux haute performance garantis 25 ans",
      "Onduleurs premium garantis 10-25 ans",
      "Installation par électriciens certifiés",
      "Raccordement réseau inclus",
      "Monitoring production temps réel",
      "Assistance dossier PRIMe House gratuite",
      "Garantie décennale installation",
      "SAV réactif sous 48h"
    ],
    featured: true,
    icon: "sun",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276",
    estimatedDuration: "Étude 1 semaine + installation 1-3 jours"
  },
  {
    name: "Bornes de Recharge Véhicules Électriques",
    slug: "bornes-recharge-vehicules-electriques",
    shortDescription: "Installation bornes de recharge pour voitures et bus électriques. Solutions résidentielles, copropriétés, entreprises, parkings publics. Toutes puissances 3,7-350 kW.",
    fullDescription: "Avec l'essor de la mobilité électrique, ELECTRIC SYSTEM installe des bornes de recharge adaptées à tous les besoins : maisons individuelles, copropriétés, entreprises, flottes de véhicules, parkings publics, bornes pour autobus électriques.",
    priceRange: "€1.200 - €85.000",
    priceMin: 1200,
    priceMax: 85000,
    benefits: [
      "Étude de faisabilité gratuite",
      "Toutes puissances 3,7-350 kW",
      "Marques premium (Wallbox, ABB, Alfen)",
      "Installation conforme normes",
      "Gestion charge dynamique (load balancing)",
      "App smartphone pilotage à distance",
      "Intégration photovoltaïque possible",
      "Assistance dossier aides Climabënus",
      "Garantie constructeur 3-5 ans",
      "SAV réactif sous 48h"
    ],
    featured: true,
    icon: "cable",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7",
    estimatedDuration: "1-3 jours installation"
  },
  {
    name: "Systèmes de Sécurité - Alarme & Vidéosurveillance",
    slug: "securite-alarme-videosurveillance",
    shortDescription: "Installation alarme anti-intrusion, vidéosurveillance IP, contrôle d'accès. Protection complète habitations, commerces, entreprises.",
    fullDescription: "Protégez vos biens et vos proches avec un système de sécurité professionnel. ELECTRIC SYSTEM installe des solutions complètes d'alarme, vidéosurveillance et contrôle d'accès adaptées à vos besoins.",
    priceRange: "€1.800 - €45.000",
    priceMin: 1800,
    priceMax: 45000,
    benefits: [
      "Détection périmétrique et volumétrique",
      "Caméras IP haute définition 4K",
      "Enregistrement continu 24/7",
      "Accès à distance smartphone",
      "Détection intelligente (IA)",
      "Alertes instantanées SMS/Email",
      "Liaison télésurveillance (option)",
      "Installation discrète",
      "Garantie matériel 3-5 ans",
      "Maintenance préventive annuelle"
    ],
    featured: true,
    icon: "shield",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9",
    estimatedDuration: "2-5 jours"
  },
  {
    name: "Installation Électrique Complète",
    slug: "installation-electrique-complete",
    shortDescription: "Installation électrique complète neuve : tableaux, prises, éclairage, chauffage. Pour constructions neuves, extensions, rénovations lourdes.",
    fullDescription: "ELECTRIC SYSTEM réalise l'installation électrique complète de votre projet de construction ou rénovation. De la conception à la mise en service, nous gérons tout de A à Z.",
    priceRange: "€8.000 - €250.000",
    priceMin: 8000,
    priceMax: 250000,
    benefits: [
      "Étude personnalisée gratuite",
      "Plans et schémas électriques",
      "Tableaux électriques professionnels",
      "Matériel premium (Schneider, ABB, Hager)",
      "Installation conforme normes",
      "Réception administration Luxembourg",
      "Garantie décennale",
      "Respect délais chantier",
      "Coordination corps de métier",
      "SAV réactif"
    ],
    featured: false,
    icon: "zap",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
    estimatedDuration: "2-12 semaines"
  },
  {
    name: "Mise en Conformité & Rénovation Électrique",
    slug: "mise-conformite-renovation",
    shortDescription: "Mise aux normes installations anciennes. Diagnostic complet, remplacement tableau, câblage, protection différentielle 30mA.",
    fullDescription: "Votre installation électrique est ancienne et ne répond plus aux normes de sécurité? ELECTRIC SYSTEM effectue un diagnostic complet et réalise la mise en conformité.",
    priceRange: "€2.500 - €35.000",
    priceMin: 2500,
    priceMax: 35000,
    benefits: [
      "Diagnostic gratuit complet",
      "Rapport conformité détaillé",
      "Remplacement tableau électrique",
      "Mise à la terre obligatoire",
      "Différentiel 30mA toutes lignes",
      "Repérage circuits complet",
      "Travaux propres sans destruction",
      "Certification conformité",
      "Garantie installation 10 ans",
      "Financement possible"
    ],
    featured: false,
    icon: "wrench",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    estimatedDuration: "3-10 jours"
  },
  {
    name: "Courants Faibles - VDI, Téléphonie, Réseaux",
    slug: "courants-faibles-vdi",
    shortDescription: "Installation réseaux informatiques (câblage RJ45), téléphonie IP, fibre optique, WiFi professionnel. Solutions VDI complètes.",
    fullDescription: "ELECTRIC SYSTEM installe vos infrastructures de communication : réseau informatique, téléphonie IP, fibre optique, WiFi professionnel pour habitations et entreprises.",
    priceRange: "€1.500 - €28.000",
    priceMin: 1500,
    priceMax: 28000,
    benefits: [
      "Câblage structuré RJ45 Cat 6A/7",
      "Fibre optique monomode/multimode",
      "Baies de brassage professionnelles",
      "WiFi professionnel (Ubiquiti, Cisco)",
      "Téléphonie IP (VoIP)",
      "Tests et certification câblage",
      "Documentation complète",
      "Garantie 25 ans câblage",
      "Évolutivité garantie",
      "Support technique inclus"
    ],
    featured: false,
    icon: "network",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f",
    estimatedDuration: "2-7 jours"
  },
  {
    name: "Électricité Générale - Installation & Rénovation",
    slug: "electricite-generale",
    shortDescription: "Tous travaux d'électricité : construction neuve, rénovation, mise aux normes, tableaux électriques, câblage, éclairage, prises, dépannage 24/7.",
    fullDescription: "ELECTRIC SYSTEM réalise tous vos travaux d'électricité générale pour particuliers, entreprises et bâtiments publics. De la construction neuve à la rénovation complète, nous garantissons des installations sécurisées, fiables et conformes aux normes luxembourgeoises.\n\n**NOS PRESTATIONS** :\n\n**CONSTRUCTION NEUVE** :\n- Étude et schémas électriques complets\n- Pose chemins de câbles et goulottes\n- Câblage intégral (apparent ou encastré)\n- Tableaux électriques pré-équipés ou sur-mesure\n- Réseau de prises (16A, 32A, USB)\n- Éclairage intérieur et extérieur\n- Réseau de terre et liaisons équipotentielles\n- Raccordement final et mise en service\n- Attestation de conformité\n\n**RÉNOVATION & MISE AUX NORMES** :\n- Diagnostic installation existante\n- Mise en conformité totale NF C 15-100\n- Remplacement tableau électrique vétuste\n- Ajout différentiels 30mA et disjoncteurs\n- Mise à la terre conforme\n- Remplacement câblage dangereux\n- Suppression fils volants apparents\n- Protection circuits (disjoncteurs adaptés)\n- Attestation Consuel/conformité\n\n**TABLEAUX ÉLECTRIQUES** :\n- Tableaux pré-équipés Legrand, Schneider, Hager\n- Disjoncteur de branchement (DB)\n- Différentiels 30mA type A/AC/F/B\n- Disjoncteurs divisionnaires par circuit\n- Parafoudre type 2 (protection surtensions)\n- Repérage clair et étiquetage\n- Réserve pour extension future\n\n**ÉCLAIRAGE** :\n- Conception éclairage intérieur/extérieur\n- Spots LED encastrés (plafond, escalier)\n- Rubans LED (cuisine, salon, SDB)\n- Éclairage extérieur sécurisé IP65\n- Éclairage jardin (bornes, spots)\n- Automatismes (détecteur, crépusculaire)\n- Variation d'intensité (dimmers)",
    priceRange: "€85 - €45.000",
    priceMin: 85,
    priceMax: 45000,
    benefits: [
      "Électriciens qualifiés certifiés",
      "Conformité normes 100% garantie",
      "Matériel professionnel (Legrand, Schneider)",
      "Attestation conformité délivrée",
      "Dépannage urgent 24/7",
      "Devis gratuit détaillé",
      "Garantie travaux 2 ans",
      "Assurance décennale",
      "Intervention rapide",
      "Chantier propre garanti"
    ],
    featured: true,
    icon: "bolt",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e",
    estimatedDuration: "Variable selon projet (1 jour à plusieurs semaines)"
  },
  {
    name: "Sécurité : Alarme, Vidéosurveillance, Contrôle d'Accès",
    slug: "securite-alarme-videosurveillance-controle-acces",
    shortDescription: "Systèmes sécurité complets : alarme anti-intrusion, vidéosurveillance HD/4K, contrôle d'accès (badges, biométrie), interphonie IP. Résidentiel et professionnel.",
    fullDescription: "Protégez efficacement vos biens et personnes avec nos systèmes de sécurité professionnels. ELECTRIC SYSTEM conçoit et installe des solutions adaptées à chaque besoin : maisons, commerces, bureaux, industries, bâtiments publics.\n\n**NOS SOLUTIONS DE SÉCURITÉ** :\n\n**1. ALARME ANTI-INTRUSION** :\n\n**Systèmes filaires** (construction neuve) :\n- Centrale d'alarme professionnelle\n- Détecteurs volumétriques (mouvement)\n- Détecteurs d'ouverture (portes, fenêtres)\n- Sirènes intérieures/extérieures\n- Clavier de commande\n- Badges/télécommandes\n- Transmission GSM/IP (alerte smartphone)\n- Détecteurs techniques (fumée, inondation, gaz)\n\n**Systèmes radio** (rénovation) :\n- Installation sans câblage\n- Centrale radio (Ajax, Paradox, Visonic)\n- Détecteurs sans fil longue portée\n- Batteries longue durée (3-7 ans)\n- Application smartphone complète\n- Notifications push instantanées\n- Caméras intégrées (vérification visuelle)\n\n**2. VIDÉOSURVEILLANCE** :\n\n**Caméras IP haute définition** :\n- Résolution 2MP (1080p) à 8MP (4K)\n- Vision nocturne infrarouge 20-50m\n- Détection mouvement intelligente\n- Analyse vidéo (intrusion, franchissement ligne)\n- Audio bidirectionnel\n- Zoom optique 2x-12x\n- Caméras fixes, dômes, PTZ (motorisées)\n- Étanchéité IP66/67 (extérieur)\n\n**Enregistreur NVR/DVR** :\n- Enregistrement continu ou sur détection\n- Stockage 1-4 To (30 jours à 6 mois)\n- Visionnage à distance (app smartphone)\n- Recherche rapide par date/heure/événement\n- Sauvegarde cloud (option)\n- Multi-utilisateurs avec droits\n- Conformité RGPD garantie\n\n**3. CONTRÔLE D'ACCÈS** :\n\n**Systèmes autonomes** :\n- Lecteurs de badges RFID\n- Claviers à code\n- Lecteurs biométriques (empreinte, facial)\n- Gâches électriques / ventouses électromagnétiques\n\n**Systèmes centralisés** :\n- Centrale de contrôle d'accès\n- Gestion multi-portes (1-1000+)\n- Badges programmables\n- Horaires d'accès par personne/groupe\n- Journal des passages horodaté\n- Anti-passback\n- Intégration pointeuse (RH)\n- Intégration alarme et vidéo\n\n**Technologies** :\n- RFID 125 kHz / 13,56 MHz (Mifare)\n- Biométrie (empreinte digitale, reconnaissance faciale)\n- Bluetooth / NFC (smartphone)\n- QR code temporaire (visiteurs)\n\n**4. VISIOPHONIE & INTERPHONIE IP** :\n\n**Résidentiel** :\n- Interphone vidéo 7 pouces couleur\n- Vision nocturne\n- Déverrouillage à distance\n- Enregistrement visiteurs\n- Application smartphone\n- Marques : Comelit, Legrand, 2N, Aiphone\n\n**Collectif** (immeubles) :\n- Platines d'entrée anti-vandalisme\n- Gestion multi-logements (10-500)\n- Badges résidents\n- Ouverture smartphone\n- Livraisons (codes temporaires)\n- Système 2 fils ou IP",
    priceRange: "€800 - €75.000",
    priceMin: 800,
    priceMax: 75000,
    benefits: [
      "Étude sécurité gratuite",
      "Matériel professionnel certifié",
      "Installation par techniciens agréés",
      "Paramétrage et formation",
      "Application smartphone incluse",
      "Garantie matériel 2-5 ans",
      "Garantie installation 2 ans",
      "Télésurveillance 24/7 (option)",
      "SAV réactif",
      "Évolutivité garantie"
    ],
    featured: true,
    icon: "shield",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9",
    estimatedDuration: "2-5 jours installation"
  },
  {
    name: "Réseaux Informatiques - Câblage VDI, Fibre Optique, WiFi",
    slug: "reseaux-informatiques-cablage-vdi",
    shortDescription: "Installation réseaux informatiques (câblage RJ45 Cat 6A/7), fibre optique, téléphonie IP, WiFi professionnel. Solutions VDI complètes certifiées.",
    fullDescription: "ELECTRIC SYSTEM installe vos infrastructures de communication : réseau informatique, téléphonie IP, fibre optique, WiFi professionnel pour habitations et entreprises.\n\n**NOS SOLUTIONS RÉSEAUX** :\n\n**CÂBLAGE STRUCTURÉ** :\n\n**Câblage cuivre RJ45** :\n- Cat 5e : Gigabit Ethernet (1 Gbit/s)\n- Cat 6 : 10 Gigabit jusqu'à 55m\n- Cat 6A : 10 Gigabit jusqu'à 100m (recommandé)\n- Cat 7 : Très haute performance blindé\n- Installation encastrée ou goulottes\n- Chemin de câbles professionnels\n- Étiquetage complet et documentation\n\n**Câblage fibre optique** :\n- Fibre multimode OM3/OM4 (10-40 Gbit/s)\n- Fibre monomode OS2 (100+ Gbit/s longues distances)\n- Connecteurs LC, SC duplex\n- Tiroirs optiques et jarretières\n- Tests et certification OTDR\n- Idéal : backbone immeubles, datacenters\n\n**BAIES DE BRASSAGE** :\n- Baies murales 6U-12U (petits bureaux)\n- Baies sol 19 pouces 42U (moyens/grands bureaux)\n- Panneaux de brassage 24/48 ports\n- Gestion câbles professionnelle\n- Onduleur UPS intégré\n- Ventilation et PDU\n\n**ÉQUIPEMENTS ACTIFS** :\n\n**Switchs réseau** :\n- Switchs non managés (plug&play)\n- Switchs managés (configuration avancée)\n- PoE (Power over Ethernet) pour téléphones/caméras/WiFi\n- Gigabit ou 10 Gigabit\n- Marques : Cisco, HP, Ubiquiti, Netgear\n\n**WiFi professionnel** :\n- Points d'accès WiFi 6 (802.11ax)\n- Couverture intérieure et extérieure\n- Gestion centralisée (controller)\n- Réseaux invités isolés\n- Roaming transparent\n- Marques : Ubiquiti UniFi, Cisco Meraki, Aruba\n\n**Routeurs et Firewalls** :\n- Routeurs professionnels\n- Firewalls next-gen (pare-feu)\n- VPN site-à-site\n- Protection malware et intrusions\n- Marques : Fortinet, Ubiquiti, pfSense\n\n**TÉLÉPHONIE IP (VoIP)** :\n- PABX IP (standard téléphonique)\n- Téléphones IP de bureau\n- Softphones (PC/smartphone)\n- Visioconférence\n- Numéros SDA\n- Renvois et transferts\n- Messagerie vocale\n- Enregistrement appels (option)\n\n**APPLICATIONS** :\n\n**Résidentiel** :\n- Réseau Ethernet toutes pièces\n- WiFi intégral maison\n- Câblage multimédia (TV, audio)\n- Domotique sur IP\n\n**PME/Bureaux** :\n- Postes de travail réseau\n- Téléphonie IP complète\n- WiFi pro avec roaming\n- Serveurs et NAS\n- Impression réseau\n- Caméras IP\n\n**Datacenters/Salles serveurs** :\n- Câblage haute densité structuré\n- Fibre optique backbone\n- Redondance réseau\n- Monitoring infrastructure\n\n**CERTIFICATIONS & GARANTIES** :\n- Tests et certification Fluke DSX-8000 (cuivre)\n- Tests OTDR (fibre optique)\n- Rapports de tests fournis\n- Documentation complète (schémas, étiquetage)\n- Garantie câblage 20-25 ans\n- Conformité normes ISO/IEC 11801",
    priceRange: "€1.500 - €125.000",
    priceMin: 1500,
    priceMax: 125000,
    benefits: [
      "Câblage structuré RJ45 Cat 6A/7",
      "Fibre optique monomode/multimode",
      "Baies de brassage professionnelles",
      "WiFi professionnel (Ubiquiti, Cisco)",
      "Téléphonie IP (VoIP)",
      "Tests et certification câblage",
      "Documentation complète",
      "Garantie 25 ans câblage",
      "Évolutivité garantie",
      "Support technique inclus"
    ],
    featured: false,
    icon: "network",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31",
    estimatedDuration: "2 jours à 4 semaines selon ampleur"
  },
  {
    name: "Dépannage Électrique 24/7 - Urgence",
    slug: "depannage-electrique-urgent",
    shortDescription: "Intervention rapide 24h/24, 7j/7 pour pannes électriques, courts-circuits, disjoncteurs qui sautent, coupures de courant.",
    fullDescription: "Panne électrique? Court-circuit? Disjoncteur qui saute? ELECTRIC SYSTEM intervient en urgence 24h/24, 7j/7 partout au Luxembourg.",
    priceRange: "€120 - €800",
    priceMin: 120,
    priceMax: 800,
    benefits: [
      "Intervention 24h/24, 7j/7",
      "Délai d'intervention < 2h (urgence)",
      "Diagnostic rapide et précis",
      "Réparation immédiate si possible",
      "Électriciens qualifiés expérimentés",
      "Véhicule équipé pièces courantes",
      "Devis gratuit avant intervention",
      "Paiement carte bancaire accepté",
      "Garantie intervention 6 mois",
      "Tarif transparent sans surprise"
    ],
    featured: true,
    icon: "alert-circle",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4",
    estimatedDuration: "1-4 heures"
  }
];

export const FEATURED_SERVICES = SERVICES.filter(s => s.featured);

export const STATISTICS: Statistic[] = [
  {
    label: "Projets Réalisés",
    value: "850+",
    icon: "check-circle-2",
    description: "Installations électriques et études techniques"
  },
  {
    label: "Années d'Expérience",
    value: "12+",
    icon: "award",
    description: "Depuis 2013 au Luxembourg"
  },
  {
    label: "Taux de Satisfaction",
    value: "98%",
    icon: "star",
    description: "Clients satisfaits et recommandent"
  },
  {
    label: "Délai Intervention",
    value: "< 2h",
    icon: "clock",
    description: "Dépannages urgents 24/7"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Marc Dubois",
    initials: "MD",
    location: "Luxembourg-Ville",
    service: "Bureau d'études - Résidence 60 logements",
    rating: 5,
    text: "Excellente qualité d'étude pour notre résidence. Notes de calcul Caneco impeccables, plans très détaillés, nomenclature précise. Nous avons gagné un temps précieux. Je recommande vivement pour tous projets d'envergure.",
    date: "2024-09"
  },
  {
    id: "2",
    name: "Sophie Martin",
    initials: "SM",
    location: "Esch-sur-Alzette",
    service: "Installation photovoltaïque 8 kWc",
    rating: 5,
    text: "Installation de panneaux solaires impeccable! Équipe professionnelle, travail soigné, respect des délais. Notre production dépasse même les prévisions. Facture électrique divisée par 3. Excellent investissement!",
    date: "2024-08"
  },
  {
    id: "3",
    name: "Jean-Pierre Muller",
    initials: "JPM",
    location: "Differdange",
    service: "Borne de recharge 22 kW",
    rating: 5,
    text: "Installation borne Wallbox parfaite. L'électricien a pris le temps d'expliquer le fonctionnement, l'app est très pratique. Je recharge ma Tesla en 3h. Prix très compétitif par rapport à d'autres devis. Merci!",
    date: "2024-07"
  },
  {
    id: "4",
    name: "Claire Schneider",
    initials: "CS",
    location: "Luxembourg-Kirchberg",
    service: "Système de sécurité complet maison 250m²",
    rating: 5,
    text: "Système de sécurité parfait pour notre maison! Alarme efficace, caméras haute définition, contrôle depuis le smartphone. Installation propre et professionnelle. Nous nous sentons en sécurité. Équipe ELECTRIC SYSTEM au top!",
    date: "2024-06"
  },
  {
    id: "5",
    name: "Thomas Weber",
    initials: "TW",
    location: "Bertrange",
    service: "Alarme + vidéosurveillance",
    rating: 5,
    text: "Système de sécurité complet installé en 3 jours. Caméras 4K très nettes, détection intelligente efficace, alertes instantanées. Je pars en vacances l'esprit tranquille. Installation discrète et professionnelle.",
    date: "2024-05"
  },
  {
    id: "6",
    name: "Patricia Hoffmann",
    initials: "PH",
    location: "Strassen",
    service: "Rénovation électrique complète",
    rating: 5,
    text: "Mise en conformité de notre maison ancienne. Diagnostic précis, travaux propres sans trop de casse, nouveau tableau Schneider très pro. Enfin aux normes! Prix honnête, délais respectés. Très satisfaits.",
    date: "2024-04"
  },
  {
    id: "7",
    name: "Laurent Becker",
    initials: "LB",
    location: "Dudelange",
    service: "Installation électrique maison neuve",
    rating: 5,
    text: "ELECTRIC SYSTEM a réalisé toute l'électricité de notre maison neuve. Plans détaillés, matériel de qualité, finitions impeccables. Coordination parfaite avec les autres corps de métier. Je recommande les yeux fermés!",
    date: "2024-03"
  },
  {
    id: "8",
    name: "Nathalie Goerens",
    initials: "NG",
    location: "Mamer",
    service: "Dépannage urgent dimanche",
    rating: 5,
    text: "Panne électrique totale dimanche soir. Intervention en 1h30! Électricien compétent, problème résolu rapidement (disjoncteur défectueux). Tarif correct pour un dimanche. Service client exceptionnel!",
    date: "2024-02"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Résidence SOLARIS - 80 appartements",
    category: "Bureau d'études + Installation complète",
    location: "Luxembourg-Gasperich",
    date: "2024-06",
    description: "Étude technique complète (Caneco/Dialux) et installation électrique BT pour résidence haut standing 80 appartements + commerces + parkings. Installation photovoltaïque 120 kWc + 30 bornes de recharge.",
    beforeImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5",
    afterImage: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
    services: ["Bureau d'études Caneco/Dialux", "Installation BT complète", "Photovoltaïque 120 kWc", "30 bornes recharge", "Sécurité parties communes"],
    results: ["Étude 8 semaines livrée", "Installation 16 semaines", "Conformité 100% premier coup", "Client très satisfait"]
  },
  {
    id: "2",
    title: "Maison passive ECOGREEN",
    category: "Installation photovoltaïque + Sécurité",
    location: "Bridel",
    date: "2024-05",
    description: "Installation complète pour maison passive BBC: panneaux photovoltaïques 12 kWc avec batteries, borne recharge 22 kW, système de sécurité complet, VMC double flux.",
    beforeImage: "https://images.unsplash.com/photo-1518780664697-55e3ad937233",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    services: ["Photovoltaïque 12 kWc + batteries", "Borne recharge intelligente", "Alarme & vidéosurveillance", "Gestion énergie optimale"],
    results: ["Autoconsommation 85%", "Facture électrique -€120/mois", "Maison 100% autonome été", "ROI prévu 8 ans"]
  },
  {
    id: "3",
    title: "Immeuble bureaux TECH CENTER",
    category: "Bureau d'études électriques",
    location: "Luxembourg-Kirchberg",
    date: "2024-04",
    description: "Étude technique complète MT/BT pour immeuble bureaux 6 étages, 4500m². Poste MT/BT, distribution BT, éclairage bureaux, VDI, contrôle d'accès, GTB.",
    beforeImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    afterImage: "https://images.unsplash.com/photo-1497366216548-37526070297c",
    services: ["Étude MT/BT complète", "Étude éclairage Dialux", "Schémas unifilaires/multifilaires", "Plans AutoCAD", "Nomenclature matériel"],
    results: ["320 pages documentation", "Budget précis ±3%", "Permis obtenu rapidement", "Promoteur très satisfait"]
  },
  {
    id: "4",
    title: "Centre commercial SHOPPING PARK",
    category: "Sécurité & Alarme",
    location: "Foetz",
    date: "2024-03",
    description: "Système de sécurité complet: 45 caméras 4K, alarme anti-intrusion périmétrique, contrôle d'accès 12 portes, détection incendie, supervision centralisée.",
    beforeImage: "https://images.unsplash.com/photo-1555636222-cae831e670b3",
    afterImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    services: ["45 caméras IP 4K", "Alarme périmétrique", "Contrôle accès", "Supervision 24/7"],
    results: ["Installation 1 semaine", "Détection IA performante", "0 incident depuis installation", "Centre 100% sécurisé"]
  }
];

export const FAQS: FAQ[] = [
  {
    id: "1",
    question: "Que comprend une étude électrique complète avec notes de calcul Caneco ?",
    answer: "Une étude électrique professionnelle avec Caneco comprend :\n\n**Calculs techniques** :\n- Bilan de puissance détaillé (kW, kVA, cos φ, facteur simultanéité)\n- Dimensionnement sections de câbles selon IEC 60364 (mm²)\n- Calcul chutes de tension (ΔU% sur chaque circuit)\n- Calculs courants de court-circuit (Icc, Ik)\n- Vérification sélectivité et coordination des protections\n- Dimensionnement protections (disjoncteurs, fusibles)\n- Calculs mise à la terre et liaisons équipotentielles\n\n**Livrables** :\n- Note de calcul Caneco complète (50-200 pages selon projet)\n- Schémas unifilaires (tableau général + tableaux divisionnaires)\n- Schémas multifilaires détaillés\n- Plans de câblage AutoCAD (cheminements, sections)\n- Plans d'implantation équipements (tableaux, luminaires, prises)\n- Nomenclature matériel exhaustive avec références exactes\n- Cahier des charges techniques\n- Dossier permis de construire si applicable\n- DCE (Dossier Consultation Entreprises) si revente d'étude\n\nÉtudes conformes NF C 15-100, IEC 60364 et règlement Grand-Ducal Luxembourg. Idéal pour promoteurs, architectes, bureaux d'ingénierie.",
    category: "Bureau d'études"
  },
  {
    id: "2",
    question: "Combien coûte une installation photovoltaïque au Luxembourg en 2024 ?",
    answer: "Prix installation photovoltaïque résidentielle Luxembourg :\n\n**Tarifs au kWc** : 1.400-2.200€/kWc selon puissance et qualité\n\n**Exemples concrets** :\n- **3 kWc** (8-10 panneaux) : 6.500-8.500€ → Production 2.700-3.300 kWh/an\n- **6 kWc** (16-18 panneaux) : 11.000-14.000€ → Production 5.400-6.600 kWh/an\n- **10 kWc** (24-28 panneaux) : 17.000-22.000€ → Production 9.000-11.000 kWh/an\n\n**Aides Luxembourg 2024** :\n- **PRIMe House** : jusqu'à 4.500€ selon puissance\n- **TVA réduite 3%** (au lieu de 17%) si couplée à rénovation\n- **Tarif rachat surplus** : garanti 15 ans\n\n**Rentabilité** :\n- Économie facture : 50-80% (autoconsommation)\n- Retour sur investissement : 7-12 ans\n- Durée de vie système : 30+ ans\n- Garantie panneaux : 25 ans (80% performance)\n\n**Entreprises** : installations 30-250+ kWc sur devis (tarif dégressif). Nous gérons l'intégralité : étude, installation, raccordement, dossiers aides, mise en service.",
    category: "Photovoltaïque"
  },
  {
    id: "3",
    question: "Quelle borne de recharge choisir pour ma voiture électrique ?",
    answer: "Le choix de la borne dépend de votre installation électrique et besoins :\n\n**RÉSIDENTIEL** :\n\n**Prise renforcée Green'Up 3,2 kW** (économique)\n- Prix : 300-600€ installée\n- Charge lente : 8-12h pour recharge complète\n- Idéal : usage occasionnel, petite batterie (<40 kWh)\n\n**Wallbox 7,4 kW monophasé** (standard)\n- Prix : 1.200-1.800€ installée\n- Charge normale : 4-6h\n- Idéal : usage quotidien, installation monophasée standard\n\n**Wallbox 11 kW triphasé** (recommandé)\n- Prix : 1.400-2.200€ installée\n- Charge accélérée : 2-4h\n- Idéal : installation triphasée disponible\n- Marques recommandées : Wallbox Pulsar Plus, Alfen Eve, Schneider EVlink\n\n**Wallbox 22 kW triphasé** (rapide)\n- Prix : 1.600-2.500€ installée\n- Charge rapide : 1-2h\n- Idéal : grosse batterie (>70 kWh), usage intensif\n- Nécessite : triphasé 32A disponible\n\n**Fonctions smart recommandées** :\n- App smartphone (pilotage à distance)\n- Gestion charge dynamique (load balancing)\n- Optimisation solaire (si panneaux PV)\n- RFID (contrôle d'accès)\n\n**Aides** : Climabënus jusqu'à 600€ pour installation résidentielle. Nous vous conseillons la solution optimale selon votre installation électrique.",
    category: "Bornes recharge"
  },
  {
    id: "5",
    question: "Combien coûte un système de vidéosurveillance pour mon entreprise ?",
    answer: "Prix système vidéosurveillance professionnel selon besoins :\n\n**PETIT COMMERCE** (4-8 caméras)\n- **Budget** : 1.800-4.500€\n- **Inclus** : 4-8 caméras IP 4MP, NVR 8 canaux 2 To, installation, app smartphone\n- **Idéal** : magasin, bureau, petit entrepôt\n\n**MOYEN COMMERCE** (8-16 caméras)\n- **Budget** : 4.000-9.000€\n- **Inclus** : 8-16 caméras 4K intérieur/extérieur, NVR 16 canaux 4 To, analytics (détection), app, écran monitoring\n- **Idéal** : supermarché, garage, PME\n\n**GRANDE ENTREPRISE** (16-32+ caméras)\n- **Budget** : 9.000-25.000€+\n- **Inclus** : 16-32+ caméras 4K-8MP avec analytics IA, caméras PTZ motorisées, NVR pro 32+ canaux 8-20 To, intégration alarme/accès, mur vidéo, télésurveillance 24/7\n- **Idéal** : site industriel, multi-sites, zones sensibles\n\n**Options avancées** :\n- **Lecture plaques (LPR)** : +800-1.500€/caméra\n- **Analytics IA** : détection intrusion, abandon objet, comptage (inclus caméras modernes)\n- **Télésurveillance 24/7** : 50-200€/mois selon nombre caméras\n- **Stockage cloud** : 20-100€/mois selon volumétrie\n\n**Conformité RGPD garantie** : affichage, registre, durée conservation. Nous dimensionnons le système selon vos besoins réels et budget.",
    category: "Sécurité"
  },
  {
    id: "6",
    question: "Combien coûte un câblage réseau informatique pour mes bureaux ?",
    answer: "Prix câblage réseau professionnel selon taille bureaux :\n\n**PETIT BUREAU** (5-20 postes)\n- **Prix** : 2.000-5.000€\n- **Inclus** : Câblage Cat 6A 10-20 prises RJ45, baie murale 6U, panneau brassage 24 ports, switch Gigabit PoE 24 ports, 1-2 points accès WiFi 6, tests et certification\n\n**BUREAU MOYEN** (20-100 postes)\n- **Prix** : 8.000-25.000€\n- **Inclus** : Câblage Cat 6A 50-100 prises, baie 42U, switchs managés empilables, 5-10 AP WiFi 6, PABX IP + téléphones, routeur/firewall, documentation complète\n\n**GRAND BUREAU** (100+ postes, multi-étages)\n- **Prix** : 30.000-125.000€+\n- **Inclus** : Câblage Cat 6A + fibre optique backbone, multiples baies par étage, switchs cœur 10G, WiFi 6 haute densité avec controller, salle serveurs dédiée, redondance, monitoring réseau\n\n**Prix au point RJ45** :\n- Cat 6 : 80-120€/point (câble + prise + brassage)\n- Cat 6A : 100-150€/point (recommandé 10G)\n- Cat 7 : 120-180€/point (très haute performance)\n\n**Garantie** : Câblage certifié Fluke = **garantie 20-25 ans** (fabricant + installateur)\n\n**Options** :\n- Fibre optique backbone : +50-80€/ml\n- WiFi 6 : 250-600€/point d'accès\n- PABX IP : 1.500-5.000€ selon postes\n\nTous nos câblages sont testés et certifiés avec rapports officiels Fluke Networks.",
    category: "Réseaux VDI"
  },
  {
    id: "7",
    question: "Proposez-vous un service de maintenance pour les installations électriques ?",
    answer: "Oui, nous proposons des **contrats de maintenance préventive** adaptés à chaque besoin :\n\n**MAINTENANCE INSTALLATIONS ÉLECTRIQUES** :\n- Vérification périodique tableaux électriques\n- Contrôle serrage connexions\n- Tests différentiels et disjoncteurs\n- Vérification mise à la terre\n- Mesures thermographiques (points chauds)\n- Rapport annuel avec recommandations\n- **Prix** : 250-800€/an selon complexité\n\n**MAINTENANCE PHOTOVOLTAÏQUE** :\n- Vérification production (monitoring)\n- Nettoyage panneaux (option)\n- Contrôle onduleurs et protections\n- Tests électriques DC/AC\n- Resserrage connexions\n- **Prix** : 150-400€/an\n\n**MAINTENANCE SÉCURITÉ** :\n- Tests alarmes et détecteurs\n- Vérification caméras et enregistrement\n- Maintenance contrôle d'accès\n- Tests SSI (détection incendie)\n- **Prix** : 400-1.500€/an selon installation\n\n**AVANTAGES CONTRAT** :\n- Interventions prioritaires\n- Tarifs réduits dépannages (-20%)\n- Support technique téléphonique illimité\n- Planning interventions personnalisé\n- Prolongation garanties équipements\n\nNous adaptons le contrat à vos besoins et budget. Devis maintenance gratuit sur demande.",
    category: "Maintenance"
  },
  {
    id: "8",
    question: "Proposez-vous des solutions de financement pour les grands projets ?",
    answer: "Oui, plusieurs **solutions de financement** disponibles :\n\n**PAIEMENT ÉCHELONNÉ** (>3.000€) :\n- **2 fois sans frais**\n- **3 fois sans frais**\n- **4 fois sans frais**\n- Acompte 30% à la commande\n- Solde échelonné sur 2-4 mois\n\n**FINANCEMENT BANCAIRE** (>10.000€) :\n- **Crédit travaux** 12 à 120 mois\n- Partenariats banques luxembourgeoises\n- Taux attractifs selon profil\n- Montage dossier gratuit\n- Simulation rapide\n\n**LEASING PROFESSIONNEL** (entreprises) :\n- Location avec option d'achat (LOA)\n- Crédit-bail\n- Préservation trésorerie\n- Déductibilité fiscale\n- Idéal : photovoltaïque, bornes recharge, infrastructures\n\n**AIDES & SUBVENTIONS** :\n- **PRIMe House** photovoltaïque : jusqu'à 4.500€\n- **Climabënus** bornes recharge : jusqu'à 600€\n- **TVA réduite 3%** (au lieu 17%) pour rénovations énergétiques\n- **Aides entreprises** (Fit 4 Sustainability, etc.)\n\n→ Nous vous assistons gratuitement pour :\n- Constitution dossiers aides\n- Optimisation financement\n- Calcul rentabilité (photovoltaïque)\n- Simulation économies énergétiques\n\n**EXEMPLE CONCRET** :\nInstallation photovoltaïque 10 kWc : 20.000€\n- Prime PRIMe House : -4.000€\n- TVA réduite 3% : -2.800€ économie\n- **Coût net : 13.200€**\n- Financement 4x sans frais : 3.300€/trimestre\n- Économie électricité : 1.500€/an\n→ Retour investissement : **9 ans** / Durée vie : **30+ ans**\n\nNous étudions la meilleure solution selon votre situation. Devis et simulation gratuits.",
    category: "Financement"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Entreprise Agréée Luxembourg",
    issuer: "Ministère de l'Économie",
    year: 2013
  },
  {
    name: "Membre Chambre des Métiers",
    issuer: "Chambre des Métiers Luxembourg",
    year: 2013
  },
  {
    name: "Assurance RC Professionnelle & Décennale",
    issuer: "Compagnie d'assurance",
    year: 2013
  },
  {
    name: "Habilitations Électriques BR/BC/B2V",
    issuer: "Organisme formation Luxembourg",
    year: 2013
  },
  {
    name: "Ingénieur Agréé (notes de calcul)",
    issuer: "Ordre des Ingénieurs",
    year: 2013
  },
  {
    name: "Expert Logiciels Caneco & Dialux",
    issuer: "Alpi Software & DIAL GmbH",
    year: 2014
  },
  {
    name: "Installateur Photovoltaïque Certifié",
    issuer: "QualiPV",
    year: 2016
  },
  {
    name: "Installateur Bornes Recharge IRVE",
    issuer: "Qualifelec",
    year: 2018
  },
  {
    name: "Certifications Constructeurs",
    issuer: "Wallbox, Loxone, Ajax, etc.",
    year: 2018
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Neslym Cherifi",
    role: "Gérant & Ingénieur Électricien",
    bio: "12 ans d'expérience en ingénierie électrique. Expert Caneco/Dialux et installations BT/MT. Diplômé ingénieur électrotechnique.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
    specialties: ["Bureau d'études", "Caneco", "Dialux", "Gestion projets"]
  },
  {
    name: "Ahmed El Mansouri",
    role: "Chef de Chantier Électricien",
    bio: "10 ans d'expérience terrain. Spécialiste installations industrielles et tertiaires. Formation continue photovoltaïque et systèmes de sécurité.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
    specialties: ["Installations BT", "Photovoltaïque", "Coordination chantiers", "Mise en service"]
  },
  {
    name: "Karim Benali",
    role: "Électricien Sécurité & Courants Faibles",
    bio: "8 ans d'expérience. Expert systèmes de sécurité, installations VDI et réseaux. Certifié installateur alarme et vidéosurveillance.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    specialties: ["Sécurité & Alarme", "VDI/Réseaux", "Vidéosurveillance", "Bornes recharge"]
  },
  {
    name: "Said Tahiri",
    role: "Électricien Confirmé",
    bio: "7 ans d'expérience. Polyvalent installations neuves et rénovations. Habilitations BT et travaux sous tension.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    specialties: ["Installation électrique", "Mise en conformité", "Dépannage", "Rénovation"]
  }
];

export const PARTNERS: Partner[] = [
  { name: "Schneider Electric", category: "Matériel électrique" },
  { name: "ABB", category: "Appareillage BT/MT" },
  { name: "Hager", category: "Tableaux électriques" },
  { name: "Legrand", category: "Appareillage" },
  { name: "SunPower", category: "Panneaux photovoltaïques" },
  { name: "Huawei", category: "Onduleurs solaires" },
  { name: "Wallbox", category: "Bornes de recharge" },
  { name: "Dialux", category: "Logiciel éclairage" },
  { name: "Alpi Caneco", category: "Logiciel dimensionnement" }
];

export const SEO_DATA: SEO = {
  keywords: [
    "électricien luxembourg",
    "bureau études électriques luxembourg",
    "caneco luxembourg",
    "dialux luxembourg",
    "panneaux photovoltaïques luxembourg",
    "installation solaire luxembourg",
    "borne recharge luxembourg",
    "alarme luxembourg",
    "vidéosurveillance luxembourg",
    "installation électrique luxembourg",
    "mise en conformité électrique",
    "dépannage électrique luxembourg",
    "électricité générale luxembourg",
    "ingénierie électrique luxembourg",
    "vdi luxembourg",
    "câblage réseau luxembourg",
    "sécurité luxembourg"
  ],
  metaDescription: "ELECTRIC SYSTEM Sàrl - Bureau d'études techniques et électricité générale au Luxembourg. Expert Caneco/Dialux, photovoltaïque, bornes recharge, sécurité. Devis gratuit ☎ 661 22 44 09"
};

// Données de financement
export const FINANCING: Financing = {
  available: true,
  options: [
    "Paiement comptant (escompte 2%)",
    "Paiement 2 fois sans frais (>3.000€)",
    "Paiement 3 fois sans frais (>5.000€)",
    "Paiement 4 fois sans frais (>8.000€)",
    "Crédit travaux bancaire 12-120 mois (>10.000€)",
    "Leasing professionnel (entreprises)"
  ],
  deposit: "30% à la signature",
  balance: "Solde à la livraison ou échelonné",
  minAmount: "€3.000 pour paiement échelonné"
};

// Aides et subventions
export const SUBSIDIES = {
  primeHouse: {
    name: "PRIMe House (photovoltaïque)",
    description: "Aide installation panneaux solaires résidentielle",
    amount: "Jusqu'à 4.500€ selon puissance",
    conditions: "Résidence principale, installateur certifié",
    ourService: "Constitution dossier gratuite"
  } as Subsidy,
  climabenus: {
    name: "Climabënus (borne recharge)",
    description: "Aide installation borne recharge VE résidentielle",
    amount: "Jusqu'à 600€",
    conditions: "Résidence principale",
    ourService: "Assistance dossier gratuite"
  } as Subsidy,
  reducedVAT: {
    name: "TVA réduite 3%",
    description: "TVA réduite rénovations énergétiques",
    instead: "17% TVA standard",
    savings: "Économie 14% sur TTC",
    amount: "Variable selon montant travaux",
    conditions: "Rénovation logement >10 ans, travaux éligibles",
    ourService: "Information et assistance"
  } as Subsidy
};
