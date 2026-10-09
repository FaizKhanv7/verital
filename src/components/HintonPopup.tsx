'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';

export default function HintonPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show popup shortly after page load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-6 right-6 z-[120] max-w-sm sm:max-w-md w-[calc(100vw-3rem)] pointer-events-auto"
        >
          <div className="relative bg-[#18181b]/95 backdrop-blur-md text-white border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] rounded-2xl p-4 pr-10">
            {/* Close button */}
            <button
              onClick={() => setIsVisible(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close notification"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Badge & Text */}
            <div className="flex items-start gap-3">
              <span className="flex h-2.5 w-2.5 rounded-full bg-[#F97316] shrink-0 mt-1.5 animate-pulse" />
              <div className="text-sm leading-relaxed text-gray-200">
                <span className="font-semibold text-white">Here for Hinton?</span>{' '}
                Visit the{' '}
                <a
                  href="https://hintonyea.netlify.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FB923C] font-medium underline underline-offset-2 hover:text-[#FED7AA] transition-colors inline-flex items-center gap-0.5"
                >
                  <span>revamped Hinton site</span>
                  <ExternalLink className="w-3 h-3 inline-block" />
                </a>{' '}
                or watch the{' '}
                <a
                  href="https://youtu.be/SxBesUp7L5g"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FB923C] font-medium underline underline-offset-2 hover:text-[#FED7AA] transition-colors inline-flex items-center gap-0.5"
                >
                  <span>pitch video</span>
                  <ExternalLink className="w-3 h-3 inline-block" />
                </a>
                .
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
