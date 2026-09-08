import {
  ArrowUpRight,
  Cloud,
  Database,
  Network,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud foundations",
    text: "Secure, scalable AWS environments engineered for the way your teams work.",
  },
  {
    icon: Database,
    title: "Data & AI",
    text: "Turn data into useful intelligence with modern analytics and responsible AI.",
  },
  {
    icon: Network,
    title: "Modern applications",
    text: "Build, migrate, and optimize products that move at the speed of your market.",
  },
  {
    icon: ShieldCheck,
    title: "Security & resilience",
    text: "Reduce risk with identity-first architecture, governance, and observability.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="border-t border-line bg-surface px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">What we do</p>
            <h2 className="max-w-2xl text-balance text-4xl tracking-[-0.05em] sm:text-6xl">
              The infrastructure
              <br />
              behind <span className="text-signal">better work.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            From first workload to full operating model, we make cloud
            complexity feel simple.
          </p>
        </div>
        <div className="grid border-l border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, text }) => (
            <a
              href="#contact"
              key={title}
              className="group border-b border-r border-line p-6 transition-colors hover:bg-background sm:p-8"
            >
              <Icon className="mb-20 size-7 text-signal transition-transform group-hover:scale-110" />
              <h3 className="mb-3 text-xl tracking-tight">{title}</h3>
              <p className="text-sm leading-6 text-muted-foreground">{text}</p>
              <ArrowUpRight className="mt-8 size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
