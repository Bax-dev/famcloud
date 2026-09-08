import React, { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, Menu, Play, X } from "lucide-react";

interface NavLink {
  label: string;
  href: string;
  isActive?: boolean;
}

interface ResponsiveHeroBannerProps {
  brandName?: string;
  brandHref?: string;
  brandLogoUrl?: string;
  backgroundImageUrl?: string;
  navLinks?: NavLink[];
  ctaButtonText?: string;
  ctaButtonHref?: string;
  title?: React.ReactNode;
  titleLine2?: React.ReactNode;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
}

/** Tracks the user's motion preference so JS-driven effects can opt out too. */
function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return reduced;
}

/** Reveals a line of copy one word at a time. */
function StaggeredWords({
  text,
  start = 0,
  step = 0.055,
}: {
  text: string;
  start?: number;
  step?: number;
}) {
  return (
    <>
      {text.split(" ").map((word, index) => (
        <span
          key={`${word}-${index}`}
          className="hero-word"
          style={{ animationDelay: `${start + index * step}s` }}
        >
          {word}
          {index < text.split(" ").length - 1 ? " " : ""}
        </span>
      ))}
    </>
  );
}

/** A link that leans toward the cursor while it is hovered. */
function MagneticLink({
  href,
  className,
  strength = 7,
  disabled = false,
  children,
}: {
  href: string;
  className?: string;
  strength?: number;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  const handleMove = (event: React.PointerEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (disabled || !el || event.pointerType !== "mouse") return;
    const rect = el.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `translate3d(${x * strength * 2}px, ${y * strength}px, 0)`;
  };

  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <a
      ref={ref}
      href={href}
      className={`magnetic ${className ?? ""}`}
      onPointerMove={handleMove}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </a>
  );
}

const ResponsiveHeroBanner: React.FC<ResponsiveHeroBannerProps> = ({
  brandName = "FamCloud",
  brandHref = "#top",
  brandLogoUrl = "/famcloud-logo.png",
  backgroundImageUrl = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=80",
  navLinks = [
    { label: "Services", href: "#services" },
    { label: "Our work", href: "#work" },
    { label: "Approach", href: "#approach" },
    { label: "About", href: "#about" },
  ],
  ctaButtonText = "Start a conversation",
  ctaButtonHref = "#contact",
  title = "Cloud that",
  titleLine2 = "moves you forward.",
  description = "Famcloud helps ambitious teams turn AWS into a real advantage: faster decisions, stronger systems, and room to build what is next.",
  primaryButtonText = "Start a conversation",
  primaryButtonHref = "#contact",
  secondaryButtonText = "See our work",
  secondaryButtonHref = "#work",
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const reducedMotion = usePrefersReducedMotion();
  const stageRef = useRef<HTMLElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ px: 0, py: 0, mx: 50, my: 40 });

  const closeMobileMenu = () => setMobileMenuOpen(false);

  // Pointer position drives the parallax layers and the cursor spotlight via CSS
  // custom properties, so moving the mouse never triggers a React re-render.
  const handlePointerMove = useCallback(
    (event: React.PointerEvent<HTMLElement>) => {
      const el = stageRef.current;
      if (reducedMotion || !el || event.pointerType !== "mouse") return;

      const rect = el.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      pointerRef.current = {
        px: x * 2 - 1,
        py: y * 2 - 1,
        mx: x * 100,
        my: y * 100,
      };

      if (frameRef.current !== null) return;
      frameRef.current = requestAnimationFrame(() => {
        frameRef.current = null;
        const { px, py, mx, my } = pointerRef.current;
        el.style.setProperty("--px", px.toFixed(3));
        el.style.setProperty("--py", py.toFixed(3));
        el.style.setProperty("--mx", `${mx.toFixed(2)}%`);
        el.style.setProperty("--my", `${my.toFixed(2)}%`);
        el.style.setProperty("--glow", "1");
      });
    },
    [reducedMotion],
  );

  const handlePointerLeave = useCallback(() => {
    const el = stageRef.current;
    if (!el) return;
    el.style.setProperty("--px", "0");
    el.style.setProperty("--py", "0");
    el.style.setProperty("--glow", "0");
  }, []);

  useEffect(
    () => () => {
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
    },
    [],
  );

  const titleWordCount =
    typeof title === "string" ? title.trim().split(/\s+/).length : 1;
  const line2Delay = 0.15 + titleWordCount * 0.055;

  return (
    <section
      ref={stageRef}
      id="top"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      className="hero-stage relative isolate min-h-[78vh] w-full overflow-hidden bg-background"
    >
      <div
        className="hero-parallax absolute inset-0 -z-10"
        style={{
          transform:
            "translate3d(calc(var(--px) * -16px), calc(var(--py) * -16px), 0)",
        }}
      >
        <img
          src={backgroundImageUrl}
          alt=""
          aria-hidden="true"
          className="animate-hero-zoom size-full scale-110 object-cover"
        />
      </div>
      {/* Brand tint: keeps the photo readable and blends it into the next section */}
      <div className="pointer-events-none absolute inset-0 bg-background/75" />
      <div className="hero-grid animate-grid-drift pointer-events-none absolute inset-0 opacity-40" />
      <div className="hero-spotlight pointer-events-none absolute inset-0" />
      <div
        className="animate-float-slow pointer-events-none absolute right-[-14%] top-24 size-[440px] rounded-full border border-signal/20 shadow-[0_0_140px_rgba(255,153,0,0.09)]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-line" />

      <header className="relative z-10 xl:top-4">
        <div className="mx-6">
          <div className="flex items-center justify-between pt-4">
            <a
              href={brandHref}
              onClick={closeMobileMenu}
              className="group flex items-center"
              aria-label={`${brandName} home`}
            >
              <img
                src={brandLogoUrl}
                alt={brandName}
                width={610}
                height={339}
                className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 md:h-12"
              />
            </a>

            <nav
              className="hidden items-center gap-2 md:flex"
              aria-label="Main navigation"
            >
              <div className="flex items-center gap-1 rounded-full bg-foreground/5 px-1 py-1 ring-1 ring-line backdrop-blur">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    aria-current={link.isActive ? "page" : undefined}
                    className={`group relative rounded-full px-3 py-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] transition-colors hover:text-signal ${
                      link.isActive ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 scale-75 rounded-full bg-foreground/10 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100"
                    />
                    <span className="relative">{link.label}</span>
                  </a>
                ))}
                <a
                  href={ctaButtonHref}
                  className="group ml-1 inline-flex items-center gap-2 rounded-full bg-signal px-3.5 py-2 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-background transition-colors hover:bg-signal/90"
                >
                  {ctaButtonText}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:rotate-45" />
                </a>
              </div>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex size-10 items-center justify-center rounded-full bg-foreground/10 text-foreground ring-1 ring-line backdrop-blur transition-transform duration-300 active:scale-90 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav
              className="animate-menu-in mt-3 flex flex-col gap-1 rounded-2xl bg-background/90 p-2 ring-1 ring-line backdrop-blur md:hidden"
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="rounded-xl px-3 py-2.5 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:bg-foreground/5 hover:text-signal"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={ctaButtonHref}
                onClick={closeMobileMenu}
                className="mt-1 inline-flex items-center justify-between rounded-xl bg-signal px-3 py-2.5 font-mono text-[0.68rem] font-bold uppercase tracking-[0.14em] text-background"
              >
                {ctaButtonText}
                <ArrowUpRight className="size-4" />
              </a>
            </nav>
          )}
        </div>
      </header>

      <div
        className="hero-parallax relative z-10"
        style={{
          transform:
            "translate3d(calc(var(--px) * 7px), calc(var(--py) * 7px), 0)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 sm:pt-20 md:pt-24 lg:pt-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-medium leading-[0.95] tracking-[-0.05em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
              {typeof title === "string" ? (
                <StaggeredWords text={title} start={0.15} />
              ) : (
                <span className="hero-word" style={{ animationDelay: "0.15s" }}>
                  {title}
                </span>
              )}
              <br className="hidden sm:block" />{" "}
              <span
                className="hero-word"
                style={{ animationDelay: `${line2Delay}s` }}
              >
                {titleLine2}
              </span>
            </h1>

            <p className="animate-fade-slide-in-3 mx-auto mt-6 max-w-2xl text-pretty text-base leading-7 text-muted-foreground sm:text-lg">
              {description}
            </p>

            <div className="animate-fade-slide-in-4 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
              <MagneticLink
                href={primaryButtonHref}
                disabled={reducedMotion}
                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-foreground/10 px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-foreground ring-1 ring-line backdrop-blur hover:text-background"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-0 origin-left scale-x-0 bg-signal transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                />
                <span className="relative">{primaryButtonText}</span>
                <ArrowRight className="relative size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </MagneticLink>
              <MagneticLink
                href={secondaryButtonHref}
                disabled={reducedMotion}
                strength={5}
                className="group inline-flex items-center gap-2 rounded-full bg-transparent px-5 py-3 font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground transition-colors hover:text-signal"
              >
                {secondaryButtonText}
                <span className="grid size-6 place-items-center rounded-full ring-1 ring-line transition duration-300 group-hover:scale-110 group-hover:ring-signal">
                  <Play className="size-3" />
                </span>
              </MagneticLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveHeroBanner;
