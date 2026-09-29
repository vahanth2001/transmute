import AboutHero from "@/components/about/AboutHero";
import AboutIntroduction from "@/components/about/AboutIntro";
import WhoWeAre from "@/components/about/WhoWeAre";

export default function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden bg-cream">
      <AboutHero />
      <WhoWeAre />
      <AboutIntroduction />
    </main>
  );
}