import {
  Boxes,
  Cloud,
  Code2,
  GraduationCap,
  Layers,
  Server,
} from "lucide-react";

const offerings = [
  {
    icon: Server,
    title: "Infrastructure as a Service",
    abbr: "IaaS",
    items: [
      "Auto-scaling compute resources",
      "Customer relationship management",
      "Collaborative productivity tools",
      "AI-powered analytics",
      "Enterprise resource planning",
    ],
  },
  {
    icon: Layers,
    title: "Platform as a Service",
    abbr: "PaaS",
    items: [
      "Containerized hosting",
      "Managed databases",
      "Serverless compute functions",
      "Continuous integration pipelines",
      "Application performance monitoring",
    ],
  },
  {
    icon: Boxes,
    title: "Software as a Service",
    abbr: "SaaS",
    items: ["BI dashboards", "CRM systems", "AI-powered analytics"],
  },
  {
    icon: Cloud,
    title: "Cloud computing services",
    abbr: "Cloud",
    items: [
      "Database as a Service",
      "Cloud storage & backup",
      "Cloud security & DevOps",
    ],
  },
  {
    icon: Code2,
    title: "Software engineering services",
    abbr: "Build",
    items: [
      "Website & mobile app development",
      "Custom software",
      "API & systems integration",
    ],
  },
  {
    icon: GraduationCap,
    title: "IT & cloud training",
    abbr: "Learn",
    items: ["AWS learning programs", "DevOps training", "Enterprise workshops"],
  },
];

export default function Offerings() {
  return (
    <section
      id="offerings"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="eyebrow mb-5">What we offer</p>
          <h2 className="max-w-2xl text-balance text-4xl tracking-[-0.05em] sm:text-6xl">
            Tailored services
            <br />
            for <span className="text-signal">your business.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-6 text-muted-foreground">
          Cloud delivery models and software solutions designed to meet
          organizations of all sizes and industries.
        </p>
      </div>
      <div className="grid border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
        {offerings.map(({ icon: Icon, title, abbr, items }) => (
          <article
            key={title}
            className="group border-b border-r border-line p-6 transition-colors hover:bg-surface sm:p-8"
          >
            <div className="mb-8 flex items-center justify-between">
              <Icon className="size-7 text-signal transition-transform group-hover:scale-110" />
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {abbr}
              </span>
            </div>
            <h3 className="mb-5 text-xl leading-tight tracking-tight">
              {title}
            </h3>
            <ul className="flex flex-col gap-2.5 border-t border-line pt-5">
              {items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span className="mt-2.5 size-1 shrink-0 bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
