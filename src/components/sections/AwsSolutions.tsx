const solutions = [
  {
    title: "Amazon Redshift",
    text: "High-performance cloud data warehousing and analytics.",
    tags: ["Fast query", "Massive scale", "BI tools"],
  },
  {
    title: "AWS CloudFormation",
    text: "Infrastructure automation and deployment management.",
    tags: ["Templates", "Multi-env", "Compliance"],
  },
  {
    title: "Database migration",
    text: "Seamless database migration with minimal downtime.",
    tags: ["Real-time sync", "Schema convert"],
  },
  {
    title: "AWS Kinesis",
    text: "Real-time data streaming and analytics platform.",
    tags: ["Streaming", "Real-time", "SQL"],
  },
  {
    title: "AWS WAF",
    text: "Web application protection and cloud security services.",
    tags: ["DDoS mitigation", "Threat protect"],
  },
  {
    title: "Cloud readiness",
    text: "Strategic cloud adoption consulting and implementation.",
    tags: ["Assessment", "Roadmap"],
  },
  {
    title: "Cost optimization",
    text: "Reduce cloud spending while maintaining performance.",
    tags: ["Usage analysis", "Automation"],
  },
  {
    title: "DataFlow accelerator",
    text: "Serverless ETL and data integration powered by AWS Glue.",
    tags: ["ETL", "CloudWatch", "Security"],
  },
  {
    title: "Modernization",
    text: "Transform outdated systems into scalable cloud-native solutions.",
    tags: ["Cloud-native", "Automation"],
  },
];

export default function AwsSolutions() {
  return (
    <section
      id="aws"
      className="border-y border-line bg-surface px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-5">AWS solutions</p>
            <h2 className="max-w-2xl text-balance text-4xl tracking-[-0.05em] sm:text-6xl">
              The full power
              <br />
              of <span className="text-signal">Amazon AWS.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-muted-foreground">
            A comprehensive range of AWS solutions helping organizations
            leverage the full power of cloud computing.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map(({ title, text, tags }, index) => (
            <article
              key={title}
              className="group flex flex-col border border-line bg-background p-6 transition-transform hover:-translate-y-1 hover:border-signal sm:p-7"
            >
              <span className="font-mono text-xs text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-6 text-2xl leading-tight tracking-[-0.03em]">
                {title}
              </h3>
              <p className="mt-3 grow text-sm leading-6 text-muted-foreground">
                {text}
              </p>
              <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-5">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground transition-colors group-hover:border-signal/40 group-hover:text-signal"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
