import { useState } from 'react';

interface FAQItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export function FAQItem({ question, answer, defaultOpen = false }: FAQItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-black/6">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full cursor-pointer items-center justify-between gap-6 py-6 text-left"
        aria-expanded={open}
      >
        <span className="text-[15px] font-medium tracking-[-0.02em] text-[var(--color-ink)]">
          {question}
        </span>
        <span
          className={`shrink-0 text-xl text-black/30 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}
          aria-hidden="true"
        >
          +
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <p className="overflow-hidden pb-6 pr-8 text-[15px] leading-[1.7] text-black/50">
          {answer}
        </p>
      </div>
    </div>
  );
}
