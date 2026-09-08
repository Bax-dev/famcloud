const clients = [
  "Rigline Academy",
  "Numera",
  "Kindra",
  "Vitalis Health",
  "Meridian Pay",
  "Tilepay",
  "Pipeworks",
  "Coursepath",
  "Scholarbox",
  "Clausewise",
  "Azura Pay",
  "Vendly",
];

export default function Clients() {
  return (
    <section id="clients" className="overflow-hidden py-24 lg:py-32">
      <div className="mx-auto mb-14 max-w-7xl px-6 lg:px-10">
        <p className="eyebrow mb-5">Clients</p>
        <h2 className="max-w-2xl text-balance text-4xl tracking-[-0.05em] sm:text-6xl">
          Trusted by industry leaders.
        </h2>
        <p className="mt-6 max-w-md text-sm leading-6 text-muted-foreground">
          We are proud to work with innovative companies that trust our
          expertise.
        </p>
      </div>
      {/* Two identical tracks scroll as one loop, so the marquee never shows a seam. */}
      <div className="relative flex border-y border-line py-8 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        {[0, 1].map((track) => (
          <ul
            key={track}
            aria-hidden={track === 1}
            className="animate-marquee flex shrink-0 items-center gap-14 pr-14"
          >
            {clients.map((client) => (
              <li
                key={client}
                className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-signal"
              >
                {client}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}
