import ResponsiveHeroBanner from "@/components/ui/responsive-hero-banner";

export default function Hero() {
  return (
    <ResponsiveHeroBanner
      navLinks={[
        { label: "Services", href: "#offerings" },
        { label: "AWS", href: "#aws" },
        { label: "Case studies", href: "#work" },
        { label: "About", href: "#about" },
        { label: "FAQ", href: "#faq" },
      ]}
      title="Cloud that"
      titleLine2={
        <>
          <span className="text-signal">moves you</span> forward.
        </>
      }
      description="Famcloud helps ambitious teams turn AWS into a real advantage: faster decisions, stronger systems, and room to build what is next."
      primaryButtonText="Start a conversation"
      primaryButtonHref="#contact"
      secondaryButtonText="See our work"
      secondaryButtonHref="#work"
      ctaButtonText="Start a conversation"
      ctaButtonHref="#contact"
    />
  );
}
