import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

/**
 * Floating return-to-top control. Stays hidden until the reader is past the
 * hero, so it never competes with the hero's own calls to action.
 */
export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scrollToTop = () => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
      className={`group fixed bottom-6 right-6 z-50 grid size-11 place-items-center rounded-full bg-background/80 text-muted-foreground ring-1 ring-line backdrop-blur transition duration-300 hover:bg-signal hover:text-background hover:ring-signal active:scale-90 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0"
      }`}
    >
      <ArrowUp className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5" />
    </button>
  );
}
