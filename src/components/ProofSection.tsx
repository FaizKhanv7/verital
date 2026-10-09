'use client';

import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';

const StarIcon = () => (
  <svg className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const FiveStars = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
  </div>
);

const CUSTOMERS = [
  {
    name: 'SD Wealth',
    type: 'Wealth Management',
    review: '"Verital completely transformed our online presence. Our clients now find us instantly on Google, and the AI callback feature means we never miss a lead. Absolutely seamless experience from start to finish."',
    reviewer: '— Sarah D., Founder',
    tags: ['Built Website', 'Setup AI Callback'],
    initials: 'SD',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    name: 'Soorya Foundation for Performing Arts',
    type: 'Arts & Culture Nonprofit',
    review: '"We had zero digital presence before Verital. Now we have a beautiful website that truly represents our mission, and registration for our classes has doubled. The team made everything effortless."',
    reviewer: '— Priya M., Executive Director',
    tags: ['Built Website'],
    initials: 'SF',
    color: 'from-rose-500 to-pink-600',
  },
];

export default function ProofSection() {
  const quoteRef = useRef<HTMLDivElement>(null);
  const isQuoteInView = useInView(quoteRef, { once: true, margin: "-10% 0px" });

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
              The waitlist is real
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-8"
        >
          {CUSTOMERS.map((customer, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-7 border border-gray-100 flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-5">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${customer.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {customer.initials}
                </div>
                <div>
                  <h3 className="font-bold text-[#111827] leading-snug">{customer.name}</h3>
                  <p className="text-xs text-gray-400 mt-0.5">{customer.type}</p>
                </div>
              </div>

              {/* Stars */}
              <FiveStars />

              {/* Review */}
              <p className="text-sm text-gray-600 leading-relaxed mt-3 flex-grow italic">
                {customer.review}
              </p>
              <p className="text-xs text-gray-400 mt-2 font-medium">{customer.reviewer}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-5">
                {customer.tags.map((tag, t) => (
                  <span
                    key={t}
                    className="bg-[#F97316]/10 text-[#F97316] text-xs font-semibold px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-sm text-gray-400 italic text-center max-w-2xl mx-auto mb-24">
          These are real businesses we've worked with. We respect their privacy — no logos shared without permission.
        </p>

        <div className="relative py-12" ref={quoteRef}>
          <p className="text-2xl md:text-3xl font-medium max-w-4xl mx-auto text-center leading-relaxed text-gray-400">
            "91% of small businesses using AI report{' '}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#FB923C]"
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: isQuoteInView ? '100% 100%' : '0% 100%' }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{ backgroundRepeat: 'no-repeat', display: 'inline-block' }}
            >
              revenue growth
            </motion.span>
            . Every business we bring online is one that{' '}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#FB923C]"
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: isQuoteInView ? '100% 100%' : '0% 100%' }}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ backgroundRepeat: 'no-repeat', display: 'inline-block' }}
            >
              survives
            </motion.span>
            ,{' '}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#FB923C]"
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: isQuoteInView ? '100% 100%' : '0% 100%' }}
              transition={{ duration: 1, delay: 1.2 }}
              style={{ backgroundRepeat: 'no-repeat', display: 'inline-block' }}
            >
              hires
            </motion.span>
            , and{' '}
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-[#F97316] to-[#FB923C]"
              initial={{ backgroundSize: '0% 100%' }}
              animate={{ backgroundSize: isQuoteInView ? '100% 100%' : '0% 100%' }}
              transition={{ duration: 1.2, delay: 1.6 }}
              style={{ backgroundRepeat: 'no-repeat', display: 'inline-block' }}
            >
              serves its neighborhood
            </motion.span>
            {' '}for another generation."
          </p>
        </div>
      </div>
    </section>
  );
}
