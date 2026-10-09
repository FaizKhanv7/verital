'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  description: string;
  verital: string | boolean;
  others: string | boolean;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Setup & Integration',
    description: 'Getting your tools connected to your existing business workflows',
    verital: 'Plug-and-play in 48 hours, we handle the heavy lifting',
    others: 'Weeks of DIY configurations & technical setup',
  },
  {
    feature: 'Ease of Use',
    description: 'How simple it is for you and your staff to operate daily',
    verital: 'Intuitive & automated. No tech skills required',
    others: 'Clunky dashboards with steep learning curves',
  },
  {
    feature: 'Ongoing Support & Partnership',
    description: 'What happens after your website or automation goes live',
    verital: 'Dedicated partner: we stick with you every step of the way',
    others: 'Sell and disappear',
  },
  {
    feature: 'Built for Local Small Business',
    description: 'Designed specifically for the realities of small community teams',
    verital: 'Custom-tailored for Georgia small businesses',
    others: 'Generic one-size-fits-all enterprise templates',
  },
  {
    feature: 'Continuous Optimization',
    description: 'Keeping your website, reviews, and callbacks up to date',
    verital: 'Proactive updates & hands-on maintenance included',
    others: 'Pay extra hourly fees for every tiny revision',
  },
];

export default function ComparisonSection() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-white relative overflow-hidden border-t border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <span className="text-[#F97316] text-xs sm:text-sm font-semibold tracking-wider uppercase mb-3 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
              What Sets Us Apart
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] tracking-tight leading-tight mb-6">
              Not just another software vendor.<br className="hidden sm:inline" />
              <span className="text-[#F97316]">A dedicated digital partner.</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          {/* Comparison Table Container */}
          <div className="overflow-x-auto rounded-3xl border border-gray-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.04)] bg-white">
            <table className="w-full text-left border-collapse min-w-[620px]">
              <thead>
                <tr className="border-b border-gray-200/80 bg-gray-50/70">
                  <th className="py-5 px-6 sm:px-8 text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wider w-[36%]">
                    Feature
                  </th>
                  <th className="py-5 px-6 sm:px-8 text-sm sm:text-base font-bold text-[#111827] w-[34%] bg-orange-500/[0.04] border-x border-orange-200/60">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#F97316]" />
                      <span>Verital</span>
                    </div>
                  </th>
                  <th className="py-5 px-6 sm:px-8 text-xs sm:text-sm font-semibold text-gray-400 uppercase tracking-wider w-[30%]">
                    Other Software Companies
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-gray-50/50 transition-colors"
                  >
                    {/* Feature description column */}
                    <td className="py-5 px-6 sm:px-8">
                      <div className="font-semibold text-gray-900 text-sm sm:text-base">
                        {row.feature}
                      </div>
                      <div className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        {row.description}
                      </div>
                    </td>

                    {/* Verital column (highlighted) */}
                    <td className="py-5 px-6 sm:px-8 bg-orange-500/[0.03] border-x border-orange-200/60">
                      <div className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 stroke-[2.5]" />
                        </div>
                        <span className="text-sm font-medium text-gray-900 leading-snug">
                          {row.verital}
                        </span>
                      </div>
                    </td>

                    {/* Other companies column */}
                    <td className="py-5 px-6 sm:px-8">
                      <div className="flex items-start gap-2.5 text-gray-400">
                        <div className="w-5 h-5 rounded-full bg-gray-100 text-gray-400 flex items-center justify-center shrink-0 mt-0.5">
                          <X className="w-3.5 h-3.5 stroke-[2]" />
                        </div>
                        <span className="text-sm text-gray-500 leading-snug">
                          {row.others}
                        </span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom callout note */}
          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-500">
              Need custom automations or specialized integrations?{' '}
              <a
                href="mailto:helloverital@gmail.com"
                className="text-[#F97316] font-semibold underline underline-offset-4 hover:text-[#EA580C] transition-colors"
              >
                Reach out to us directly
              </a>
              .
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
