import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
const links = [["/about", "About Us"], ["/principles", "Key Principles"], ["/administrators", "Fund Administrators"], ["/eligibility", "Eligibility & Apply"]] as const;
export function Navbar() {
  const [open, setOpen] = useState(false);
  const navClass = ({ isActive }: {isActive:boolean}) => `text-sm font-semibold ${isActive ? "text-brand-700" : "text-stone-600 hover:text-brand-800"}`;
  return <header className="border-b border-stone-200 bg-stone-50/95"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
    <Link to="/" className="max-w-[14rem] font-serif text-xl font-bold leading-tight text-brand-900">Miss Addie<br />Education Fund</Link>
    <nav className="hidden items-center gap-6 lg:flex">{links.map(([to, label]) => <NavLink className={navClass} to={to} key={to}>{label}</NavLink>)}</nav>
    <button aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen(!open)} className="rounded p-2 text-brand-900 lg:hidden">{open ? <X /> : <Menu />}</button>
  </div>{open && <nav className="border-t border-stone-200 px-5 py-4 lg:hidden">{links.map(([to, label]) => <NavLink onClick={() => setOpen(false)} className={`${navClass} block py-3`} to={to} key={to}>{label}</NavLink>)}</nav>}</header>;
}
