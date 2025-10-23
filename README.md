# ELECTRIC SYSTEM Sàrl - Site Web Professionnel

Site web Next.js 14 complet et production-ready pour ELECTRIC SYSTEM Sàrl, bureau d'études techniques et entreprise d'électricité générale au Luxembourg.

## 🚀 Caractéristiques

### Architecture Technique
- **Next.js 14** avec App Router
- **TypeScript** en mode strict
- **Tailwind CSS 3.4** avec palette de couleurs personnalisée (Orange #FF8C00, Noir #1a1a1a)
- **Framer Motion** pour les animations fluides
- **React Hook Form + Zod** pour la validation des formulaires
- **Lucide React** pour les icônes

### Fonctionnalités Principales

#### 1. Page d'Accueil Complète
- Hero section avec animations
- Barre de statistiques (850+ projets, 12+ ans d'expérience, 98% satisfaction)
- Grille de 6 services en vedette avec cartes interactives
- Section projets avec before/after
- 6 témoignages clients avec notation 5 étoiles
- FAQ avec accordéon
- CTA final pour conversion

#### 2. Services
- **Bureau d'Études Techniques** - Caneco, Dialux, schémas
- **Panneaux Photovoltaïques** - Installation solaire PV
- **Bornes de Recharge** - Véhicules électriques (3,7-350 kW)
- **Sécurité** - Alarme, vidéosurveillance
- **Installation Électrique** - Neuf et rénovation
- **Mise en Conformité** - Normes luxembourgeoises
- **Courants Faibles** - VDI, téléphonie
- **Dépannage 24/7** - Intervention urgente

#### 3. Formulaire Multi-Étapes
Formulaire de devis gratuit en 4 étapes avec validation complète:
1. **Type de service** - Sélection visuelle avec icônes
2. **Détails projet** - Surface et budget
3. **Planning** - Délai souhaité
4. **Coordonnées** - Formulaire complet avec validation

#### 4. SEO Optimisé
- Métadonnées complètes pour chaque page
- JSON-LD schemas (LocalBusiness, Service, FAQPage, Organization)
- Sitemap.xml généré
- Robots.txt configuré
- OpenGraph tags pour réseaux sociaux
- URLs canoniques

#### 5. Design Responsive
- Mobile-first design
- Barre sticky en bas sur mobile (Appel, Email, Devis)
- Menu hamburger animé
- Grilles adaptatives (1→2→3 colonnes)
- Images optimisées avec Next Image

### Pages Créées

- `/` - Page d'accueil
- `/nos-services` - Liste complète des services
- `/[slug]` - Pages dynamiques pour chaque service (prêtes à être créées)
- `/contact` - Page de contact avec formulaire
- `/devis-gratuit` - Formulaire multi-étapes de demande de devis
- `/realisations` - Portfolio de projets
- `/mentions-legales` - Mentions légales
- `/politique-confidentialite` - Politique de confidentialité

### Composants UI

#### Layout
- `Header` - Navigation avec dropdown services, sticky on scroll
- `Footer` - 4 colonnes avec infos, services, liens, contact
- `StickyBottomBar` - Barre d'actions rapides mobile

#### UI Components
- `Button` - 5 variants (primary, accent, secondary, outline, ghost), 4 tailles
- `Input` - Avec label, erreur, helper text
- `Textarea` - Avec compteur de caractères
- `Card` - Avec hover effects
- `Accordion` - Pour FAQ avec animations

### Animations

Animations définies dans `globals.css`:
- `fadeInUp` - Apparition avec translation verticale
- `float` - Flottement continu
- `pulseGlow` - Pulsation lumineuse
- `slideInRight` - Glissement depuis la droite
- `bounceIn` - Entrée avec rebond
- `zoomIn` - Zoom en fondu
- Et plus...

## 🎨 Palette de Couleurs

### Couleurs Principales
- **Primary (Orange)**: #FF8C00 avec 9 nuances (50-900)
- **Accent (Orange clair)**: #FFA500 avec 9 nuances
- **Dark (Noir)**: #1a1a1a avec 9 nuances

### Utilisation
```tsx
bg-primary-500  // Orange principal
text-accent-600 // Orange accent foncé
border-dark-800 // Noir principal
```

## 📦 Installation

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev

# Compiler pour la production
npm run build

# Démarrer le serveur de production
npm start
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

## 📁 Structure du Projet

```
electricsystem/
├── app/                          # Pages Next.js (App Router)
│   ├── layout.tsx               # Layout racine
│   ├── page.tsx                 # Page d'accueil
│   ├── globals.css              # Styles globaux + animations
│   ├── nos-services/            # Page services
│   ├── contact/                 # Page contact
│   ├── devis-gratuit/           # Formulaire devis
│   ├── realisations/            # Portfolio projets
│   ├── mentions-legales/        # Mentions légales
│   └── politique-confidentialite/ # Politique confidentialité
├── components/
│   ├── layout/                  # Composants layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── StickyBottomBar.tsx
│   └── ui/                      # Composants UI réutilisables
│       ├── Button.tsx
│       ├── Input.tsx
│       ├── Textarea.tsx
│       ├── Card.tsx
│       └── Accordion.tsx
├── lib/
│   ├── constants.ts             # Données business (services, témoignages, etc.)
│   ├── types.ts                 # Types TypeScript
│   ├── utils.ts                 # Fonctions utilitaires
│   └── metadata.ts              # Générateurs SEO et JSON-LD
├── public/
│   ├── robots.txt               # Configuration robots
│   └── sitemap.xml              # Sitemap SEO
├── tailwind.config.ts           # Configuration Tailwind
├── tsconfig.json                # Configuration TypeScript
└── next.config.js               # Configuration Next.js
```

## 🔧 Configuration

### Variables d'Environnement

Créer un fichier `.env.local`:

```env
NEXT_PUBLIC_SITE_URL=https://www.electricsystem.lu
```

### Personnalisation

#### Modifier les Données Business
Éditer `lib/constants.ts` pour modifier:
- Informations entreprise (BUSINESS)
- Services (SERVICES)
- Témoignages (TESTIMONIALS)
- Projets (PROJECTS)
- FAQ (FAQS)
- Statistiques (STATISTICS)

#### Modifier les Couleurs
Éditer `tailwind.config.ts` section `theme.extend.colors`

## 🚀 Déploiement

### Vercel (Recommandé)

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Netlify

```bash
# Build command
npm run build

# Publish directory
.next
```

### Serveur VPS

```bash
# Build
npm run build

# Start avec PM2
pm2 start npm --name "electricsystem" -- start
```

## 📊 Performance

Build optimisé avec:
- Static Site Generation (SSG) pour toutes les pages
- Images optimisées avec Next Image
- Code splitting automatique
- CSS minifié
- JavaScript tree-shaking

## 📝 Checklist Qualité

### Technique
- ✅ Build Next.js réussi
- ✅ Zero erreurs TypeScript
- ✅ ESLint configuré
- ✅ Images optimisées
- ✅ Formulaires validés

### Design
- ✅ Responsive (mobile, tablet, desktop)
- ✅ Palette de couleurs cohérente
- ✅ Typographie hiérarchisée
- ✅ Animations fluides 60fps
- ✅ Hover states partout

### Content
- ✅ 9 services détaillés
- ✅ 8 témoignages clients
- ✅ 4 projets portfolio
- ✅ 8 questions FAQ
- ✅ Informations complètes

### SEO
- ✅ Metadata toutes pages
- ✅ JSON-LD schemas valides
- ✅ robots.txt
- ✅ sitemap.xml
- ✅ OpenGraph tags
- ✅ URLs canoniques

### Accessibilité
- ✅ Navigation clavier
- ✅ Focus indicators
- ✅ Labels formulaires
- ✅ Alt text images
- ✅ Contraste WCAG AA
- ✅ HTML sémantique

## 🔗 Liens Utiles

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [React Hook Form](https://react-hook-form.com/)
- [Lucide Icons](https://lucide.dev/)

## 📧 Support

Pour toute question ou assistance:
- Email: contact@electricsystem.lu
- Téléphone: +352 661 22 44 09

## 📄 License

Propriétaire - ELECTRIC SYSTEM Sàrl © 2025

---

**Site généré avec Next.js 14 + TypeScript + Tailwind CSS**
