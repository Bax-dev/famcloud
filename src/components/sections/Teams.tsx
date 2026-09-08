import { Code2, Headset, ShieldCheck, Users } from "lucide-react";

const teams = [
  {
    icon: Users,
    title: "Leadership team",
    text: "Visionaries driving innovation and business excellence.",
  },
  {
    icon: Code2,
    title: "Development team",
    text: "Engineers building reliable and scalable solutions.",
  },
  {
    icon: Headset,
    title: "Support team",
    text: "Dedicated professionals ensuring client success.",
  },
  {
    icon: ShieldCheck,
    title: "Security team",
    text: "Specialists safeguarding your data with industry-leading protocols.",
  },
];

const values = [
  "Client-focused approach",
  "Industry excellence",
  "Trust & security",
];

export default function Teams() {
  return (
    <section
      id="teams"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-5">Our core teams</p>
          <h2 className="max-w-2xl text-balance text-4xl tracking-[-0.05em] sm:text-6xl">
            The people
            <br />
            behind <span className="text-signal">the platform.</span>
          </h2>
        </div>
      </div>
      <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
        {teams.map(({ icon: Icon, title, text }) => (
          <article
            key={title}
            className="group border-b border-r border-line p-6 transition-colors hover:bg-surface sm:p-8"
          >
            <Icon className="mb-16 size-7 text-signal transition-transform group-hover:scale-110" />
            <h3 className="mb-3 text-xl tracking-tight">{title}</h3>
            <p className="text-sm leading-6 text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>

      <div className="mt-20 grid gap-12 border-t border-line pt-12 lg:grid-cols-[1.4fr_0.6fr]">
        <p className="text-balance text-2xl leading-relaxed tracking-[-0.02em] sm:text-3xl">
          We empower businesses with innovative cloud and software solutions
          that optimize operations, improve efficiency, and drive{" "}
          <span className="text-signal">sustainable growth.</span>
        </p>
        <ul className="flex flex-col gap-4">
          {values.map((value, index) => (
            <li key={value} className="flex items-baseline gap-4">
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg">{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
