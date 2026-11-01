import { Link } from "react-router-dom";
import content from "../data/fundContent.json";

export function Footer() {
  return (
    <footer className="mt-16 bg-brand-900 text-stone-100 sm:mt-20">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-2 sm:gap-10 sm:py-12">
        <div>
          <p className="font-serif text-xl font-semibold sm:text-2xl">{content.fundName}</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-stone-300 sm:mt-4">
            {content.tagline}
          </p>
        </div>
        <div className="sm:text-right">
          <div className="flex gap-4 text-sm sm:justify-end">
            <Link className="hover:text-stone-300 transition-colors" to="/about">About</Link>
            <Link className="hover:text-stone-300 transition-colors" to="/eligibility">Eligibility</Link>
          </div>
          <p className="mt-4 text-sm text-stone-300 sm:mt-6">In honor of Viola Minott (Miss Addie)</p>
        </div>
      </div>
    </footer>
  );
}
