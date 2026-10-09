'use client';

import React from 'react';
import { motion, type Variants } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import { ExternalLink, Star } from 'lucide-react';

const FiveStars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
  </div>
);

const CUSTOMERS = [
  {
    name: 'SD Wealth',
    type: 'Wealth Management',
    review: '"Verital completely transformed our online presence. Our clients now find us instantly on Google, and the AI callback feature means we never miss a lead. Absolutely seamless experience from start to finish."',
    reviewer: '— Suresh Karamshetty, CEO',
    hasStars: true,
    tags: ['Built Website', 'Setup AI Callback'],
    initials: 'SD',
    color: 'from-blue-600 to-indigo-600',
    websiteUrl: 'https://sdwealth.vercel.app/',
  },
  {
    name: 'Soorya Foundation for Performing Arts',
    type: 'Arts & Culture Nonprofit',
    review: '"We had zero digital presence before Verital. Now we have a beautiful website that truly represents our mission, and registration for our classes has doubled. The team made everything effortless."',
    reviewer: '— Mohan, Founder',
    hasStars: true,
    tags: ['Built Website'],
    initials: 'SF',
    color: 'from-rose-500 to-pink-600',
    websiteUrl: '#',
  },
  {
    name: 'Hinton',
    type: 'Comeptition Host',
    review: 'No review available',
    reviewer: null,
    hasStars: false,
    tags: ['Revamped Website for Free'],
    initials: 'H',
    color: 'from-emerald-500 to-teal-600',
    websiteUrl: 'https://hintonyea.netlify.app/',
  },
];

export default function ProofSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 }
    }
  };

  return (
    <section id="impact" className="py-24 bg-gradient-to-b from-[#FAFAFA] to-[#FFF7ED]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <SectionReveal>
          <div className="text-center mb-16">
            <span className="inline-block text-[#F97316] text-sm font-semibold tracking-wider mb-4 uppercase">
              Real Traction
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#111827]">
              Real businesses. Real neighborhoods.<br/>Ready to go digital.
            </h2>
          </div>
        </SectionReveal>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10% 0px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-8"
        >
          {CUSTOMERS.map((customer, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-100 flex flex-col h-full justify-between"
            >
              <div>
                {/* Header with avatar, business details, and Visit Website link */}
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${customer.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                      {customer.initials}
                    </div>
                    <div>
                      <h3 className="font-bold text-[#111827] text-base leading-snug">{customer.name}</h3>
                      <p className="text-xs text-gray-400 mt-0.5">{customer.type}</p>
                    </div>
                  </div>

                  {/* Visit Website Link with upward diagonal arrow */}
                  <a
                    href={customer.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#F97316] hover:text-[#EA580C] hover:underline transition-colors shrink-0 pt-0.5"
                  >
                    <span>Visit website</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* Stars rating or No review available label */}
                <div className="mb-3">
                  {customer.hasStars ? (
                    <FiveStars />
                  ) : (
                    <span className="inline-block text-xs font-medium text-gray-400 uppercase tracking-wider bg-gray-100 px-2.5 py-0.5 rounded-md">
                      No review available
                    </span>
                  )}
                </div>

                {/* Review Quote / Text */}
                {customer.hasStars ? (
                  <>
                    <p className="text-sm text-gray-600 leading-relaxed italic">
                      {customer.review}
                    </p>
                    {customer.reviewer && (
                      <p className="text-xs text-gray-400 mt-2 font-medium">{customer.reviewer}</p>
                    )}
                  </>
                ) : (
                  <p className="text-sm text-gray-400 italic">
                    Review pending publication.
                  </p>
                )}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-4 border-t border-gray-100">
                {customer.tags.map((tag, t) => (
                  <span
                    key={t}
                    className="bg-[#F97316]/10 text-[#F97316] text-xs font-semibold px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-sm text-gray-400 italic text-center max-w-2xl mx-auto">
          These are real businesses we've worked with. We respect their privacy — no logos shared without permission.
        </p>
      </div>
    </section>
  );
}
