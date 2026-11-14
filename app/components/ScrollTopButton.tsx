"use client";

import { ArrowUp } from "lucide-react";

export default function ScrollTopButton() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="w-10 h-10 bg-[var(--color-bronze)] rounded-lg flex items-center justify-center hover:bg-[var(--color-bronze-light)] transition-colors"
      aria-label="Scroll to top"
    >
      <ArrowUp className="w-5 h-5 text-[var(--color-forest)]" />
    </button>
  );
}
