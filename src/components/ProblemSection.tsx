'use client';

import React from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '@/components/SectionReveal';
import PhoneModal from '@/components/PhoneModal';

export default function ProblemSection() {
  return (
    <section id="problem" className="relative py-24 md:py-32 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Problem & Solution Framing */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left pr-0 lg:pr-6">
            <SectionReveal delay={0}>
              <span className="text-[#F97316] font-semibold tracking-wider text-xs md:text-sm uppercase mb-4 inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#F97316]"></span>
                The Solution In Action
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#111827] leading-[1.15] mb-6 tracking-tight">
                The digital revolution skipped Georgia. <br className="hidden sm:inline" />
                <span className="text-[#F97316]">We're changing that.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 font-normal">
                <strong className="text-gray-900 font-semibold">36.2 million small businesses power America</strong> but the digital revolution never showed up for the smallest ones. Barely 6% of businesses with 1–4 employees use AI. 27% don't even have a website.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 border-t border-gray-200/80">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#F97316] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Instant AI Callback</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Captures missed calls via SMS within seconds.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-orange-100 text-[#F97316] flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    ✓
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900">Zero Owner Effort</h4>
                    <p className="text-xs text-gray-500 mt-0.5">Runs completely in the background on autopilot.</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right Column: Smaller Scale Phone Modal Aligned Right */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <SectionReveal delay={0.2}>
              <PhoneModal scale={0.85} />
            </SectionReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
