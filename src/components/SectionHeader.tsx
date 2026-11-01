import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  centered?: boolean;
}

export function SectionHeader({ eyebrow, title, children, centered = false }: Props) {
  return (
    <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-700 sm:text-sm">
          {eyebrow}
        </p>
      )}
      <h1 className="font-serif text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {children && (
        <div className="mt-4 text-base leading-8 text-stone-600 sm:mt-5 sm:text-lg">
          {children}
        </div>
      )}
    </div>
  );
}
