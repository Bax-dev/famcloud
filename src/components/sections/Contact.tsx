import { ArrowUpRight, Mail } from "lucide-react";

const details = [
  {
    icon: Mail,
    label: "Email",
    value: "support@famclouds.com",
    href: "mailto:support@famclouds.com",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-line bg-surface px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <p className="eyebrow mb-6">Start a conversation</p>
          <h2 className="max-w-2xl text-balance text-5xl tracking-[-0.06em] sm:text-7xl">
            Let&rsquo;s build
            <br />
            <span className="text-signal">something together.</span>
          </h2>
          <p className="mt-8 max-w-md text-muted-foreground">
            Have questions or want to work with us? Reach out directly and a
            member of the Famcloud team will get back to you.
          </p>
          <a
            href="mailto:support@famclouds.com"
            className="mt-10 inline-flex items-center gap-3 bg-signal px-5 py-4 font-mono text-xs font-bold uppercase tracking-widest text-background transition-colors hover:bg-foreground"
          >
            Email us <ArrowUpRight className="size-4" />
          </a>
        </div>
        <ul className="flex flex-col gap-px border-t border-line lg:mt-2">
          {details.map(({ icon: Icon, label, value, href }) => (
            <li key={label} className="border-b border-line py-5">
              <div className="flex items-start gap-4">
                <Icon className="mt-0.5 size-5 shrink-0 text-signal" />
                <div>
                  <p className="eyebrow text-muted-foreground">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      className="mt-1.5 block transition-colors hover:text-signal"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1.5 max-w-xs leading-6">{value}</p>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
