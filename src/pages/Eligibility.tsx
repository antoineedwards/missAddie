import { Check, FileText, MessageCircle, SearchCheck, Signature } from "lucide-react";
import { SectionHeader } from "../components/SectionHeader";

const eligibility = [
  "Resident of Moore Town or the upper Rio Grande Valley",
  "Enrolled in secondary school, vocational training, college or university",
  "Undertaking accredited short-course skills training",
];

const requirements = [
  "Written statement of need, including how you will pay it forward",
  "Household context self-declaration",
  "One community reference letter from a teacher, faith leader, youth worker, or community elder",
  "Mentorship commitment agreement",
];

const steps = [
  [FileText, "Submission of statement & context"],
  [SearchCheck, "Administrator review & verification"],
  [MessageCircle, "Conversation / interview"],
  [Signature, "Formal acceptance & learner agreement"],
] as const;

export function Eligibility() {
  return (
    <main className="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:pt-16">
      <SectionHeader eyebrow="Support for learners" title="Eligibility & steps to apply">
        We welcome applications from young people pursuing education and skills training with a
        commitment to contribute to their community.
      </SectionHeader>

      {/* Eligibility + requirements */}
      <section className="mt-12 grid gap-5 sm:mt-14 sm:gap-6 lg:grid-cols-2">
        <article className="rounded-xl bg-brand-50 p-6 sm:p-8">
          <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">Eligibility</h2>
          <ul className="mt-6 space-y-4">
            {eligibility.map((item) => (
              <li className="flex gap-3 leading-6 text-stone-700" key={item}>
                <Check className="mt-0.5 shrink-0 text-brand-700" size={19} />
                {item}
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl bg-white p-6 ring-1 ring-stone-200 sm:p-8">
          <h2 className="font-serif text-2xl text-brand-900 sm:text-3xl">What to submit</h2>
          <ul className="mt-6 space-y-4">
            {requirements.map((item) => (
              <li className="flex gap-3 leading-6 text-stone-700" key={item}>
                <Check className="mt-0.5 shrink-0 text-brand-700" size={19} />
                {item}
              </li>
            ))}
          </ul>
        </article>
      </section>

      {/* Steps */}
      <section className="mt-16 sm:mt-20">
        <SectionHeader eyebrow="Our process" title="Four steps, with clear communication" />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-4">
          {steps.map(([Icon, text], i) => (
            <li className="rounded-xl border border-stone-200 bg-white p-6" key={text}>
              <span className="font-serif text-2xl text-brand-700">0{i + 1}</span>
              <Icon className="mt-8 text-brand-700" />
              <p className="mt-4 font-semibold leading-6 text-brand-900">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Learner agreement */}
      <section className="mt-16 rounded-xl bg-brand-900 p-6 text-white sm:mt-20 sm:p-8">
        <h2 className="font-serif text-2xl text-white sm:text-3xl">
          Learner agreement & continuation
        </h2>
        <p className="mt-4 max-w-3xl leading-7 text-stone-200">
          Accepted learners commit to active participation, honest communication, and mentorship.
          Support continues while agreed responsibilities are met; the fund may pause or end support
          where the agreement is not upheld, following a fair review and conversation.
        </p>
      </section>
    </main>
  );
}
