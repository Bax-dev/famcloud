import { ArrowUpRight, Check } from "lucide-react";

const offerings = [
  "Cloud foundation support",
  "Migration assistance",
  "Security implementation",
  "Cost optimization",
  "Business continuity solutions",
];

const stats = [
  { value: "8", label: "service offerings" },
  { value: "50+", label: "AWS services delivered" },
  { value: "3", label: "engagement tiers" },
  { value: "4+", label: "SMB clients live" },
];

const competencies = [
  {
    title: "Generative AI",
    text: "Intelligent AI solutions that automate and optimize business operations.",
  },
  {
    title: "Managed service provider",
    text: "Reliable IT management and support for seamless operations.",
  },
  {
    title: "Small & medium business solutions",
    text: "Technology designed to help growing businesses scale successfully.",
  },
  {
    title: "Cloud operations",
    text: "Proactive cloud operations that keep your AWS secure, resilient, and cost-aware.",
  },
];

export default function Smb() {
  return (
    <section
      id="smb"
      className="border-y border-line bg-surface px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-24">
          <div>
            <p className="eyebrow mb-6">SMB solutions</p>
            <h2 className="max-w-2xl text-balance text-4xl tracking-[-0.05em] sm:text-6xl">
              Cloud built for
              <br />
              <span className="text-signal">small & medium</span> businesses.
            </h2>
            <p className="mt-8 max-w-xl leading-7 text-muted-foreground">
              Purpose-built AWS offerings designed to help SMBs migrate, secure,
              modernize, and grow on the cloud with practical delivery,
              resilient architecture, and a clear roadmap for scale.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal transition-colors hover:text-foreground"
            >
              Explore SMB cloud catalog <ArrowUpRight className="size-4" />
            </a>
          </div>
          <ul className="flex flex-col justify-center gap-4 border-t border-line pt-8 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
            {offerings.map((item) => (
              <li key={item} className="flex items-center gap-4 text-lg">
                <span className="grid size-6 shrink-0 place-items-center bg-signal text-background">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-20 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div key={label}>
              <p className="font-mono text-4xl text-signal">{value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {competencies.map(({ title, text }) => (
            <article
              key={title}
              className="border-b border-r border-line p-6 transition-colors hover:bg-background sm:p-8"
            >
              <p className="eyebrow mb-6 text-signal">Competency</p>
              <h3 className="mb-3 text-xl leading-tight tracking-tight">
                {title}
              </h3>
              <p className="text-sm leading-6 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
