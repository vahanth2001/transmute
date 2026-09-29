import CollaborationSection from "@/components/about/AboutCob";
import AboutContinuity from "@/components/about/AboutContiuity";
import AboutClosingCTA from "@/components/about/AboutCTA";
import AboutEngineering from "@/components/about/AboutEngineering";
import AboutHero from "@/components/about/AboutHero";
import AboutIntroduction from "@/components/about/AboutIntro";
import AboutPrinciples from "@/components/about/AboutPrinciples";
import WhoWeAre from "@/components/about/WhoWeAre";

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden bg-cream">
      <AboutHero />
      <WhoWeAre />
      <AboutIntroduction />
      <AboutEngineering />
      <AboutContinuity />
      <AboutPrinciples />
      <CollaborationSection />
      <AboutClosingCTA />
    </main>
  );
}