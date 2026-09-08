import Footer from "@/components/layout/Footer";
import About from "@/components/sections/About";
import Approach from "@/components/sections/Approach";
import AwsSolutions from "@/components/sections/AwsSolutions";
import Clients from "@/components/sections/Clients";
import Contact from "@/components/sections/Contact";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import Offerings from "@/components/sections/Offerings";
import Services from "@/components/sections/Services";
import Smb from "@/components/sections/Smb";
import Teams from "@/components/sections/Teams";
import Work from "@/components/sections/Work";
import BackToTop from "@/components/ui/back-to-top";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Hero />
      <Services />
      <About />
      <Offerings />
      <AwsSolutions />
      <Clients />
      <Work />
      <Smb />
      <Approach />
      <Teams />
      <Faq />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
