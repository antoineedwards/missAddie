import { ImagePlaceholder } from "../components/ImagePlaceholder";
import { SectionHeader } from "../components/SectionHeader";
import content from "../data/fundContent.json";

export function About() {
  const groups = [
    ["Academic support", content.coverage.academic],
    ["Mentorship support", content.coverage.mentorship],
  ] as const;

  return (
    <main className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:pt-16">
      <SectionHeader eyebrow="About the fund" title="A legacy of encouragement and care">
        The Miss Addie Education Fund honors Viola Minott—known lovingly as Miss Addie—and her
        devotion to the people of Moore Town.
      </SectionHeader>

      {/* Portrait + story */}
      <section className="mt-12 grid gap-10 sm:mt-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-16">
        {/* On mobile: image is narrower and centered */}
        <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:mx-0 lg:max-w-none">
          <ImagePlaceholder aspectRatio="aspect-[4/5]" caption="Miss Addie Memorial Portrait" />
        </div>
        <div className="space-y-5 text-base leading-8 text-stone-600 sm:text-lg">
          <p>
            Miss Addie's kindness, encouragement, and belief in young people helped shape the
            spirit of this fund. Her legacy lives on through practical support and personal guidance
            that help learners keep moving forward.
          </p>
          <p>
            Launched on {content.launchInfo.date} at the {content.launchInfo.occasion}, the fund
            is part of {content.launchInfo.initiative}.
          </p>
        </div>
      </section>

      {/* Coverage cards */}
      <section className="mt-16 sm:mt-20">
        <SectionHeader eyebrow="What support looks like" title="Learning with a community behind you" />
        <div className="mt-8 grid gap-5 sm:gap-6 md:grid-cols-2">
          {groups.map(([title, entries]) => (
            <article
              key={title}
              className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-stone-200 sm:p-8"
            >
              <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">{title}</h2>
              <ul className="mt-5 space-y-3 text-stone-600">
                {entries.map((entry) => (
                  <li className="flex gap-3" key={entry}>
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-500" />
                    {entry}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
