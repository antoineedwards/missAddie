import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { SectionHeader } from "../components/SectionHeader";
import content from "../data/fundContent.json";

export function Principles() {
  return (
    <main className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:pt-16">
      <SectionHeader eyebrow="Our commitments" title="Principles that shape every decision">
        These are the values we return to as we support learners and steward community contributions.
      </SectionHeader>

      <ImagePlaceholder
        className="mt-10 sm:mt-12"
        aspectRatio="aspect-[16/7]"
        caption="Moore Town Community Gathering"
      />

      <div className="mt-10 divide-y divide-stone-200 sm:mt-12">
        {content.keyPrinciples.map((principle, index) => (
          <article
            className="flex flex-col gap-3 py-8 sm:grid sm:grid-cols-[6rem_1fr] sm:gap-4 sm:py-9"
            key={principle.title}
          >
            {/* Number */}
            <span className="font-serif text-3xl text-brand-700 sm:text-4xl">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">{principle.title}</h2>
              <p className="mt-3 max-w-2xl leading-7 text-stone-600">{principle.description}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
