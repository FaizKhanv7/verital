'use client';

import React, { useEffect, useRef } from "react";

const SPINS = 3;
const DUR = 1400;
const STAGGER = 90;
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

interface SpinningCounterProps {
  target: number;
  suffix?: string;
  decimals?: number;
  animate?: boolean;
}

export function SpinningCounter({ target = 100, suffix = "", decimals = 0, animate = true }: SpinningCounterProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const filterIdRef = useRef<string>(`reel-blur-${Math.random().toString(36).slice(2, 9)}`);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.innerHTML = "";

    const targetStr = target.toFixed(decimals);

    // Compute cell height dynamically from font-size / container
    // We create a test span to measure exact cell height in px
    const measureSpan = document.createElement("span");
    measureSpan.className = "t-reel-digit inline-block";
    measureSpan.textContent = "0";
    measureSpan.style.visibility = "hidden";
    measureSpan.style.position = "absolute";
    container.appendChild(measureSpan);
    const cellHeight = measureSpan.offsetHeight || 30;
    container.removeChild(measureSpan);

    container.style.setProperty("--reel-cell", `${cellHeight}px`);

    const strips: Array<{ strip: HTMLElement; blurNode: SVGFEGaussianBlurElement | null; digit: number }> = [];

    // Create an inline SVG filter definition for vertical-only motion blur if animation is enabled
    let svgDefs: SVGSVGElement | null = null;
    if (animate) {
      svgDefs = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svgDefs.setAttribute("width", "0");
      svgDefs.setAttribute("height", "0");
      svgDefs.style.position = "absolute";
      svgDefs.style.pointerEvents = "none";
      container.appendChild(svgDefs);
    }

    [...targetStr].forEach((ch, colIdx) => {
      if (ch < "0" || ch > "9") {
        const sep = document.createElement("span");
        sep.className = "t-reel-sep flex items-center justify-center text-white font-sans text-[clamp(18px,2.2vw,26px)] tracking-[-0.025em]";
        sep.textContent = ch;
        container.appendChild(sep);
        return;
      }

      const digit = parseInt(ch, 10);
      const col = document.createElement("span");
      col.className = "t-reel-col";

      let blurNode: SVGFEGaussianBlurElement | null = null;
      let filterId = "";
      if (animate && svgDefs) {
        filterId = `${filterIdRef.current}-col-${colIdx}`;
        const filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
        filter.setAttribute("id", filterId);
        filter.setAttribute("x", "0");
        filter.setAttribute("y", "-50%");
        filter.setAttribute("width", "100%");
        filter.setAttribute("height", "200%");

        blurNode = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
        blurNode.setAttribute("stdDeviation", "0 0");
        filter.appendChild(blurNode);
        svgDefs.appendChild(filter);
      }

      const strip = document.createElement("span");
      strip.className = "t-reel-strip text-white font-sans text-[clamp(18px,2.2vw,26px)] tracking-[-0.025em]";
      if (filterId) {
        strip.style.filter = `url(#${filterId})`;
      }

      // Generate (SPINS + 1) * 10 digits
      const totalCells = (SPINS + 1) * 10 + 1;
      for (let k = 0; k < totalCells; k++) {
        const cell = document.createElement("span");
        cell.className = "t-reel-digit";
        cell.textContent = String(k % 10);
        strip.appendChild(cell);
      }

      col.appendChild(strip);
      container.appendChild(col);
      strips.push({ strip, blurNode, digit });
    });

    if (!animate) {
      strips.forEach(({ strip, digit }) => {
        strip.style.transition = "none";
        strip.style.transform = `translateY(-${digit * cellHeight}px)`;
      });
      return;
    }

    // Set initial position at 0
    strips.forEach(({ strip }) => {
      strip.style.transition = "none";
      strip.style.transform = "translateY(0px)";
    });

    // Start spin animation after brief delay
    const startTimer = setTimeout(() => {
      strips.forEach(({ strip, blurNode, digit }, i) => {
        const delay = i * STAGGER;
        const finalY = (SPINS * 10 + digit) * cellHeight;

        strip.style.transition = `transform ${DUR}ms ${EASE} ${delay}ms`;
        strip.style.transform = `translateY(-${finalY}px)`;

        if (blurNode) {
          // Set initial vertical blur
          setTimeout(() => {
            if (blurNode) blurNode.setAttribute("stdDeviation", "0 3");
          }, delay);

          // Decay blur toward end of reel landing
          setTimeout(() => {
            if (blurNode) blurNode.setAttribute("stdDeviation", "0 0");
          }, delay + DUR * 0.7);
        }
      });
    }, 120);

    return () => {
      clearTimeout(startTimer);
    };
  }, [target, decimals, animate]);

  return (
    <div className="flex items-center gap-1">
      <div ref={containerRef} className="t-reel" aria-label={String(target)} />
      <span className="text-white font-sans text-[clamp(18px,2.2vw,26px)] tracking-[-0.025em]">
        {suffix}
      </span>
    </div>
  );
}
