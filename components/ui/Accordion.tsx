// Composant Accordion pour FAQ

'use client';

import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultOpenId, className }) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggleItem = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {items.map((item) => {
        const isOpen = openId === item.id;

        return (
          <div
            key={item.id}
            className="bg-white rounded-xl border-2 border-dark-100 overflow-hidden transition-all duration-300 hover:border-primary-500"
          >
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left transition-colors hover:bg-dark-50"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${item.id}`}
            >
              <span className="font-semibold text-lg text-dark-800">{item.question}</span>
              <ChevronDown
                className={cn(
                  'h-6 w-6 text-primary-500 flex-shrink-0 transition-transform duration-300',
                  isOpen && 'rotate-180'
                )}
              />
            </button>

            <div
              id={`accordion-content-${item.id}`}
              className={cn(
                'overflow-hidden transition-all duration-300',
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              )}
              aria-hidden={!isOpen}
            >
              <div className="px-6 pb-5 pt-2">
                <p className="text-dark-600 leading-relaxed">{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
