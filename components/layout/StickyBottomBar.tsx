// Barre sticky en bas pour mobile avec actions rapides

'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, FileText } from 'lucide-react';
import { BUSINESS } from '@/lib/constants';

const StickyBottomBar: React.FC = () => {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t-2 border-dark-100 shadow-2xl">
      <div className="grid grid-cols-3 gap-1 p-2">
        {/* Bouton Appeler */}
        <a
          href={`tel:${BUSINESS.contact.phone}`}
          className="flex flex-col items-center justify-center gap-1 py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors active:scale-95"
        >
          <Phone className="h-5 w-5" />
          <span className="text-xs font-semibold">Appeler</span>
        </a>

        {/* Bouton Email */}
        <a
          href={`mailto:${BUSINESS.contact.email}`}
          className="flex flex-col items-center justify-center gap-1 py-3 rounded-lg bg-dark-800 text-white hover:bg-dark-700 transition-colors active:scale-95"
        >
          <Mail className="h-5 w-5" />
          <span className="text-xs font-semibold">Email</span>
        </a>

        {/* Bouton Devis */}
        <Link
          href="/devis-gratuit"
          className="flex flex-col items-center justify-center gap-1 py-3 rounded-lg bg-accent-500 text-white hover:bg-accent-600 transition-colors active:scale-95"
        >
          <FileText className="h-5 w-5" />
          <span className="text-xs font-semibold">Devis</span>
        </Link>
      </div>
    </div>
  );
};

export default StickyBottomBar;
