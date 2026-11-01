import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { SectionHeader } from "../components/SectionHeader";
import content from "../data/fundContent.json";

export function Administrators() {
  const categories = ["Executive Committee", "Advisory Board"];

  return (
    <main className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:pt-16">
      <SectionHeader eyebrow="Our people" title="Fund administrators">
        The fund is guided by community members who bring care, accountability, and practical
        experience to every decision.
      </SectionHeader>

      {categories.map((category) => (
        <section className="mt-12 sm:mt-14" key={category}>
          <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">{category}</h2>
          <div className="mt-5 grid gap-5 sm:mt-6 sm:grid-cols-2 lg:grid-cols-3">
            {content.administrators
              .filter((person) => person.category === category)
              .map((person) => {
                const [role, responsibility] = person.role.split(" & ");
                return (
                  <article
                    className="rounded-xl bg-white p-6 text-center shadow-sm ring-1 ring-stone-200 sm:p-7"
                    key={person.name}
                  >
                    <ImagePlaceholder
                      className="mx-auto h-20 w-20 aspect-square rounded-full sm:h-24 sm:w-24"
                      caption={`Administrator – ${person.name}`}
                    />
                    <h3 className="mt-4 font-serif text-xl text-brand-900 sm:mt-5 sm:text-2xl">
                      {person.name}
                    </h3>
                    <p className="mt-1 text-sm text-stone-600 sm:text-base">{role}</p>
                    {responsibility && (
                      <span className="mt-3 inline-block rounded-full bg-brand-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-brand-700">
                        {responsibility}
                      </span>
                    )}
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </main>
  );
}
