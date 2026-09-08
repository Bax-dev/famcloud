import { ArrowUpRight } from "lucide-react";

const featured = [
  {
    number: "01",
    tag: "OIL & GAS TRAINING",
    client: "Rigline Academy",
    title: "Specialized technical training, streamed to 50,000+ learners",
    result: "60% reduction in video buffering",
    timeline: "14 weeks",
    color: "bg-signal",
  },
  {
    number: "02",
    tag: "DIGITAL BUSINESS BANKING",
    client: "Numera",
    title: "Instant digital banking for small businesses across the US",
    result: "Under 2 minute account onboarding",
    timeline: "5 weeks",
    color: "bg-cyan",
  },
  {
    number: "03",
    tag: "BANKING-AS-A-SERVICE",
    client: "Pipeworks",
    title: "Embedded finance APIs at millions of requests a day",
    result: "One of the most robust embedded finance platforms in the US",
    timeline: "16 weeks",
    color: "bg-lime",
  },
];

const more = [
  {
    client: "Kindra",
    tag: "AI marketing automation",
    result: "40% reduction in infrastructure costs",
    timeline: "14 weeks",
  },
  {
    client: "Vitalis Health",
    tag: "Digital health",
    result: "Highly available platform with fast, reliable access",
    timeline: "12 weeks",
  },
  {
    client: "Meridian Pay",
    tag: "Cross-border payments",
    result: "Resilient, enterprise-grade payments platform",
    timeline: "10 weeks",
  },
  {
    client: "Tilepay",
    tag: "SME payments",
    result: "High-performance payment platform with reduced fraud",
    timeline: "11 weeks",
  },
  {
    client: "Coursepath",
    tag: "Education & exam prep",
    result: "Scales seamlessly for thousands of concurrent users",
    timeline: "6–8 weeks",
  },
  {
    client: "Scholarbox",
    tag: "Digital learning",
    result: "Handles traffic surges without performance loss",
    timeline: "12–14 weeks",
  },
  {
    client: "Clausewise",
    tag: "Contract intelligence",
    result: "~90% reduction in contract processing time",
    timeline: "10–12 weeks",
  },
  {
    client: "Azura Pay",
    tag: "Conversational AI payments",
    result: "Improved transfer experience through automation",
    timeline: "10–14 weeks",
  },
  {
    client: "Vendly",
    tag: "Social commerce automation",
    result: "24/7 automated customer engagement",
    timeline: "8–12 weeks",
  },
];

export default function Work() {
  return (
    <section id="work" className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32">
      <div className="mb-16 flex items-end justify-between">
        <div>
          <p className="eyebrow mb-5">Success stories</p>
          <h2 className="text-4xl tracking-[-0.05em] sm:text-6xl">
            Proof, not promises.
          </h2>
          <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
            How we have transformed businesses across multiple industries using
            AWS cloud solutions.
          </p>
        </div>
        <a
          href="#contact"
          className="hidden items-center gap-2 font-mono text-xs uppercase tracking-widest text-signal md:flex"
        >
          View all work <ArrowUpRight className="size-4" />
        </a>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {featured.map((item) => (
          <a
            href="#contact"
            key={item.number}
            className="group relative min-h-[420px] overflow-hidden border border-line bg-surface p-7 transition-transform hover:-translate-y-1"
          >
            <div
              className={`absolute right-0 top-0 size-28 ${item.color} opacity-90 transition-transform duration-500 group-hover:scale-[3] group-hover:opacity-20`}
            />
            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {item.number}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <div>
                <p className="mb-5 font-mono text-[10px] tracking-[0.18em] text-muted-foreground">
                  {item.tag}
                </p>
                <p className="mb-2 font-mono text-xs uppercase tracking-[0.14em] text-signal">
                  {item.client}
                </p>
                <h3 className="max-w-xs text-3xl leading-tight tracking-[-0.04em]">
                  {item.title}
                </h3>
                <div className="mt-10 flex items-baseline justify-between gap-4 border-t border-line pt-4">
                  <p className="font-mono text-xs text-signal">{item.result}</p>
                  <p className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                    {item.timeline}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-4 grid border-l border-t border-line md:grid-cols-2 lg:grid-cols-3">
        {more.map((item) => (
          <a
            href="#contact"
            key={item.client}
            className="group flex flex-col border-b border-r border-line p-6 transition-colors hover:bg-surface"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl tracking-tight">{item.client}</h3>
                <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {item.tag}
                </p>
              </div>
              <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <p className="mt-8 grow text-sm leading-6 text-muted-foreground">
              {item.result}
            </p>
            <p className="mt-5 border-t border-line pt-4 font-mono text-[10px] uppercase tracking-[0.14em] text-signal">
              {item.timeline}
            </p>
          </a>
        ))}
      </div>
    </section>
  );
}
