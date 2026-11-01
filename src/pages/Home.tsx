import { ArrowRight, HeartHandshake, GraduationCap, Users } from "lucide-react";
import { Link } from "react-router-dom";
import nannyImg from "../assets/nanny.png";
import { SectionHeader } from "../components/SectionHeader";
import content from "../data/fundContent.json";

export function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-5 pb-14 pt-14 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-16">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[.16em] text-brand-700 sm:text-sm">
              Moore Town · Portland, Jamaica
            </p>
            <h1 className="font-serif text-4xl font-semibold leading-[1.06] tracking-tight text-brand-900 sm:text-5xl lg:text-6xl">
              Education rooted in community.
            </h1>
            <p className="mt-5 text-lg leading-8 text-stone-600 sm:mt-6 sm:text-xl">
              {content.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">
              <Link
                className="inline-flex items-center gap-2 rounded bg-brand-800 px-5 py-3 text-sm font-semibold text-white hover:bg-brand-900 sm:text-base"
                to="/eligibility"
              >
                View Eligibility <ArrowRight size={18} />
              </Link>
              <Link
                className="rounded border border-brand-800 px-5 py-3 text-sm font-semibold text-brand-800 hover:bg-brand-50 sm:text-base"
                to="/about"
              >
                Read Our Story
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-xl border border-stone-200 bg-stone-100 shadow-md">
            <img
              src={nannyImg}
              alt="The Moore Town Maroon Cultural Centre"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 sm:grid-cols-2">
          <article className="rounded-xl bg-brand-50 p-6 sm:p-8">
            <GraduationCap className="text-brand-700" />
            <h2 className="mt-5 font-serif text-2xl text-brand-900 sm:text-3xl">Our vision</h2>
            <p className="mt-4 leading-7 text-stone-600">{content.vision}</p>
          </article>
          <article className="rounded-xl bg-stone-100 p-6 sm:p-8">
            <HeartHandshake className="text-brand-700" />
            <h2 className="mt-5 font-serif text-2xl text-brand-900 sm:text-3xl">Our mission</h2>
            <p className="mt-4 leading-7 text-stone-600">{content.mission}</p>
          </article>
        </div>
      </section>

      {/* Principles preview */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
        <SectionHeader eyebrow="Our foundation" title="Guided by shared principles">
          Support is more than a payment—it is a lasting relationship between learners and their community.
        </SectionHeader>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {content.keyPrinciples.slice(0, 3).map((p, i) => (
            <article
              className="rounded-lg border border-stone-200 bg-white p-6"
              key={p.title}
            >
              <Users className="h-5 text-brand-700" />
              <p className="mt-6 text-sm font-bold text-brand-700">0{i + 1}</p>
              <h3 className="mt-2 font-serif text-xl text-brand-900 sm:text-2xl">{p.title}</h3>
              <p className="mt-3 leading-6 text-stone-600">{p.description}</p>
            </article>
          ))}
        </div>
        <Link
          className="mt-8 inline-flex items-center gap-2 font-semibold text-brand-700 hover:text-brand-900"
          to="/principles"
        >
          Explore all principles <ArrowRight size={17} />
        </Link>
      </section>
    </>
  );
}
