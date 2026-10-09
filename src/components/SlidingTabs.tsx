'use client';

import { useEffect, useRef, useState } from "react";

// Auto-injected styles
const __TRANSITION_STYLES = `
:root {
  --tabs-dur: 250ms;
  --tabs-ease: cubic-bezier(0.22, 1, 0.36, 1);
  --tabs-text-muted: rgba(46, 46, 46, 0.5);
  --tabs-text-active: #2e2e2e;
  --tabs-bar-bg: #ffffff;
  --tabs-pill-bg: #f3f4f6;
}

.t-tabs {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  padding: 3px;
  border-radius: 48px;
  background: var(--tabs-bar-bg);
}
.t-tab {
  position: relative;
  appearance: none;
  border: 0;
  background: transparent;
  height: 30px;
  padding: 4px 12px;
  color: var(--tabs-text-muted);
  cursor: pointer;
  border-radius: 48px;
  z-index: 1;
  transition: color var(--tabs-dur) var(--tabs-ease);
  font-size: clamp(13px, 1.4vw, 15px);
  font-weight: 500;
  letter-spacing: -0.01em;
}
.t-tab:not([aria-selected="true"]):hover,
.t-tab[aria-selected="true"] {
  color: var(--tabs-text-active);
}

.t-tabs-pill {
  position: absolute;
  top: 3px;
  left: 0;
  height: 30px;
  width: 0;
  background: var(--tabs-pill-bg);
  border-radius: 48px;
  transform: translateX(0);
  transition:
    transform var(--tabs-dur) var(--tabs-ease),
    width     var(--tabs-dur) var(--tabs-ease);
  will-change: transform, width;
  z-index: 0;
  pointer-events: none;
}

@media (prefers-reduced-motion: reduce) {
  .t-tabs-pill, .t-tab { transition: none !important; }
}
`;

if (typeof document !== "undefined" && !document.getElementById("transitions-p16")) {
  const __style = document.createElement("style");
  __style.id = "transitions-p16";
  __style.textContent = __TRANSITION_STYLES;
  document.head.appendChild(__style);
}

interface SlidingTabsProps {
  tabs: string[];
  onTabChange?: (index: number) => void;
}

export function SlidingTabs({ tabs, onTabChange }: SlidingTabsProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLSpanElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [active, setActive] = useState(0);

  const moveTo = (idx: number, animate: boolean) => {
    const tab = tabRefs.current[idx];
    const pill = pillRef.current;
    if (!tab || !pill) return;
    const left = tab.offsetLeft;
    const width = tab.offsetWidth;
    if (!animate) {
      const prev = pill.style.transition;
      pill.style.transition = "none";
      pill.style.transform = `translateX(${left}px)`;
      pill.style.width = `${width}px`;
      void pill.offsetWidth;
      pill.style.transition = prev;
    } else {
      pill.style.transform = `translateX(${left}px)`;
      pill.style.width = `${width}px`;
    }
  };

  useEffect(() => {
    const id = window.requestAnimationFrame(() => moveTo(active, false));
    const onResize = () => moveTo(active, false);
    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(id);
      window.removeEventListener("resize", onResize);
    };
  }, [active]);

  const handleTabClick = (index: number) => {
    setActive(index);
    moveTo(index, true);
    if (onTabChange) {
      onTabChange(index);
    }
  };

  return (
    <div ref={rootRef} className="t-tabs" role="tablist">
      <span ref={pillRef} className="t-tabs-pill" aria-hidden="true" />
      {tabs.map((label, i) => (
        <button
          key={label}
          ref={(el) => { tabRefs.current[i] = el; }}
          type="button"
          className="t-tab"
          role="tab"
          aria-selected={i === active}
          onClick={() => handleTabClick(i)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
