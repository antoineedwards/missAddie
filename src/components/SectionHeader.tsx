import type { ReactNode } from "react";
interface Props { eyebrow?: string; title: string; children?: ReactNode; centered?: boolean }

export function SectionHeader({ eyebrow, title, children, centered = false }: Props) {
  return <div className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
    {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-brand-700">{eyebrow}</p>}
    <h1 className="font-serif text-4xl font-semibold tracking-tight text-brand-900 sm:text-5xl">{title}</h1>
    {children && <div className="mt-5 text-lg leading-8 text-stone-600">{children}</div>}
  </div>;
}
