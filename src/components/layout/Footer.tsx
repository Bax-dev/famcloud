import { Cloud, Mail } from "lucide-react";

/** lucide-react v1 dropped brand marks, so the social glyphs are inline paths. */
const socials = [
  {
    label: "Facebook",
    href: "#",
    path: "M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5Z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 21h4V9H3v12ZM9 9h3.8v1.71h.05c.53-.95 1.83-1.96 3.77-1.96C20.6 8.75 22 11 22 14.5V21h-4v-5.9c0-1.5-.03-3.44-2.1-3.44-2.1 0-2.42 1.63-2.42 3.33V21H9V9Z",
  },
  {
    label: "TikTok",
    href: "#",
    path: "M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.59 2.59 0 1 1 .77-5.06V9.7a5.67 5.67 0 0 0-.77-.05A5.66 5.66 0 1 0 15.54 15.3V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.27 4.27 0 0 1-3.24-1.48Z",
  },
  {
    label: "Instagram",
    href: "#",
    path: "M12 2c-2.72 0-3.06.01-4.12.06-1.07.05-1.79.22-2.43.47a4.9 4.9 0 0 0-1.77 1.15A4.9 4.9 0 0 0 2.53 5.45c-.25.64-.42 1.36-.47 2.43C2.01 8.94 2 9.28 2 12s.01 3.06.06 4.12c.05 1.07.22 1.79.47 2.43a4.9 4.9 0 0 0 1.15 1.77 4.9 4.9 0 0 0 1.77 1.15c.64.25 1.36.42 2.43.47C8.94 21.99 9.28 22 12 22s3.06-.01 4.12-.06c1.07-.05 1.79-.22 2.43-.47a5.1 5.1 0 0 0 2.92-2.92c.25-.64.42-1.36.47-2.43.05-1.06.06-1.4.06-4.12s-.01-3.06-.06-4.12c-.05-1.07-.22-1.79-.47-2.43a4.9 4.9 0 0 0-1.15-1.77 4.9 4.9 0 0 0-1.77-1.15c-.64-.25-1.36-.42-2.43-.47C15.06 2.01 14.72 2 12 2Zm0 1.8c2.67 0 2.99.01 4.04.06.97.05 1.5.21 1.86.35.47.18.8.4 1.15.75.35.35.57.68.75 1.15.14.36.3.89.35 1.86.05 1.05.06 1.37.06 4.04s-.01 2.99-.06 4.04c-.05.97-.21 1.5-.35 1.86-.18.47-.4.8-.75 1.15-.35.35-.68.57-1.15.75-.36.14-.89.3-1.86.35-1.05.05-1.37.06-4.04.06s-2.99-.01-4.04-.06c-.97-.05-1.5-.21-1.86-.35a3.1 3.1 0 0 1-1.15-.75 3.1 3.1 0 0 1-.75-1.15c-.14-.36-.3-.89-.35-1.86-.05-1.05-.06-1.37-.06-4.04s.01-2.99.06-4.04c.05-.97.21-1.5.35-1.86.18-.47.4-.8.75-1.15.35-.35.68-.57 1.15-.75.36-.14.89-.3 1.86-.35 1.05-.05 1.37-.06 4.04-.06Zm0 3.06a5.14 5.14 0 1 0 0 10.28 5.14 5.14 0 0 0 0-10.28Zm0 8.48a3.34 3.34 0 1 1 0-6.68 3.34 3.34 0 0 1 0 6.68Zm6.54-8.68a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z",
  },
];

const columns = [
  {
    heading: "Services",
    links: [
      { label: "Home", href: "#top" },
      { label: "Custom software development", href: "#offerings" },
      { label: "Managed IT services", href: "#smb" },
      { label: "Security solutions", href: "#aws" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About us", href: "#about" },
      { label: "Clients", href: "#clients" },
      { label: "Case studies", href: "#work" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "AWS solutions", href: "#aws" },
      { label: "Our teams", href: "#teams" },
      { label: "FAQ", href: "#faq" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-background px-6 py-16 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1.8fr]">
          <div>
            <a
              href="#top"
              className="group inline-flex"
              aria-label="FamCloud home"
            >
              <img
                src="/famcloud-logo.png"
                alt="FamCloud"
                width={610}
                height={339}
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-6 text-muted-foreground">
              We are a team of passionate experts delivering world-class cloud
              computing and software engineering services tailored for modern
              businesses.
            </p>
            <a
              href="mailto:support@famclouds.com"
              className="mt-6 inline-flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-signal"
            >
              <Mail className="size-4 shrink-0 text-signal" />
              support@famclouds.com
            </a>
            <div className="mt-8 flex gap-3">
              {socials.map(({ label, href, path }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid size-9 place-items-center border border-line text-muted-foreground transition-colors hover:border-signal hover:text-signal"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="size-4"
                  >
                    <path d={path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {columns.map(({ heading, links }) => (
              <div key={heading}>
                <p className="eyebrow mb-5">{heading}</p>
                <ul className="flex flex-col gap-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-sm text-muted-foreground transition-colors hover:text-signal"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>Famcloud. Copyright &copy; 2026</p>
          <p>Built for what is next.</p>
        </div>
      </div>
    </footer>
  );
}
