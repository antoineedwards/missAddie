import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const links = [
  ["/about", "About Us"],
  ["/principles", "Key Principles"],
  ["/administrators", "Fund Administrators"],
  ["/eligibility", "Eligibility & Apply"],
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-semibold transition-colors ${
      isActive ? "text-brand-700" : "text-stone-600 hover:text-brand-800"
    }`;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-stone-200 bg-stone-50/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          {/* Logo */}
          <Link
            to="/"
            className="font-serif text-lg font-bold leading-tight text-brand-900 sm:text-xl"
          >
            Miss Addie<br />Education Fund
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-6 lg:flex">
            {links.map(([to, label]) => (
              <NavLink className={navClass} to={to} key={to}>
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Hamburger button */}
          <button
            id="nav-toggle"
            aria-label="Toggle navigation"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-brand-900 transition-colors hover:bg-stone-100 active:bg-stone-200 lg:hidden"
          >
            <span
              className="transition-all duration-200"
              style={{ display: "flex", alignItems: "center" }}
            >
              {open ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile menu overlay backdrop */}
      <div
        className={`fixed inset-0 z-30 bg-black/30 backdrop-blur-[2px] transition-opacity duration-300 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu panel */}
      <nav
        id="mobile-menu"
        aria-label="Mobile navigation"
        className={`fixed left-0 right-0 top-[65px] z-40 border-b border-stone-200 bg-stone-50 shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          open
            ? "translate-y-0 opacity-100"
            : "-translate-y-2 opacity-0 pointer-events-none"
        }`}
      >
        <ul className="divide-y divide-stone-100 px-5 py-2">
          {links.map(([to, label]) => (
            <li key={to}>
              <NavLink
                to={to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block py-4 text-base font-semibold transition-colors ${
                    isActive ? "text-brand-700" : "text-stone-700 hover:text-brand-800"
                  }`
                }
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
