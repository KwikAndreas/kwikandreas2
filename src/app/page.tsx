import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturedProjectsSection } from "@/components/sections/FeatureProjectsSection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
   <main>
      <HeroSection />
      
      <FeaturedProjectsSection />
      
      <CtaSection />
    </main>
  );
}
