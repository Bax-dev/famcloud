/** Orbiting cloud mark that fills the left rail of the About section. */
function CloudDiagram() {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Abstract diagram of a cloud platform orbited by connected services"
      className="w-full max-w-sm text-line lg:max-w-none"
    >
      <defs>
        <pattern
          id="about-grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M40 0H0v40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          />
        </pattern>
        <radialGradient id="about-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.28" />
          <stop offset="100%" stopColor="var(--signal)" stopOpacity="0" />
        </radialGradient>
        <mask id="about-grid-mask">
          <rect width="400" height="400" fill="url(#about-glow)" />
        </mask>
      </defs>

      <rect width="400" height="400" fill="url(#about-grid)" opacity="0.5" />
      <rect
        width="400"
        height="400"
        fill="url(#about-grid)"
        stroke="none"
        mask="url(#about-grid-mask)"
        opacity="0.9"
      />
      <circle cx="200" cy="200" r="190" fill="url(#about-glow)" />

      {/* Orbits: three tilted rings, each carrying a service node. */}
      <g className="origin-center animate-spin [animation-duration:48s]">
        <g stroke="currentColor" fill="none">
          <ellipse cx="200" cy="200" rx="168" ry="66" />
          <ellipse
            cx="200"
            cy="200"
            rx="168"
            ry="66"
            transform="rotate(60 200 200)"
          />
          <ellipse
            cx="200"
            cy="200"
            rx="168"
            ry="66"
            transform="rotate(-60 200 200)"
          />
        </g>
        <g fill="var(--signal)">
          <circle cx="368" cy="200" r="6" />
          <circle cx="116" cy="54" r="6" className="fill-cyan" />
          <circle cx="116" cy="346" r="6" className="fill-lime" />
        </g>
      </g>

      {/* Core: the platform itself. */}
      <g className="animate-float-slow">
        <circle
          cx="200"
          cy="200"
          r="74"
          fill="var(--surface)"
          stroke="currentColor"
        />
        <circle
          cx="200"
          cy="200"
          r="74"
          fill="none"
          stroke="var(--signal)"
          strokeOpacity="0.45"
          strokeDasharray="4 10"
        />
        <path
          d="M168 218a20 20 0 0 1 3.4-39.7 30 30 0 0 1 57.1 8.3A17 17 0 0 1 231 218Z"
          fill="none"
          stroke="var(--signal)"
          strokeWidth="4"
          strokeLinejoin="round"
        />
      </g>

      {/* Uptime ticks around the core. */}
      <g stroke="currentColor" strokeWidth="2">
        <path d="M200 96v-22M200 304v22M96 200H74M304 200h22" />
      </g>
    </svg>
  );
}

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-32"
    >
      <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div className="flex flex-col gap-12">
          <p className="eyebrow">About Famcloud</p>
          <CloudDiagram />
        </div>
        <div>
          <h2 className="max-w-4xl text-balance text-4xl leading-tight tracking-[-0.05em] sm:text-6xl">
            We are the calm, capable team in your corner when the cloud gets
            complicated.
          </h2>
          <div className="mt-12 grid gap-10 border-t border-line pt-8 sm:grid-cols-3">
            <div>
              <p className="font-mono text-4xl text-signal">12+</p>
              <p className="mt-2 text-sm text-muted-foreground">
                years building on AWS
              </p>
            </div>
            <div>
              <p className="font-mono text-4xl text-signal">38</p>
              <p className="mt-2 text-sm text-muted-foreground">
                teams made more resilient
              </p>
            </div>
            <div>
              <p className="font-mono text-4xl text-signal">24/7</p>
              <p className="mt-2 text-sm text-muted-foreground">
                care when it counts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
