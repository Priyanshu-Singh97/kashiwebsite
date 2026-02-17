import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/HeroSection";
import { HistorySection } from "@/components/HistorySection";
import { CulturalSection } from "@/components/CulturalSection";
import { UnexploredSection } from "@/components/UnexploredSection";
import { GallerySection } from "@/components/GallerySection";
import { MapSection } from "@/components/MapSection";
import { BlogSection } from "@/components/BlogSection";
import { AboutSection } from "@/components/AboutSection";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <HistorySection />
        <CulturalSection />
        <UnexploredSection />
        <GallerySection />
        <MapSection />
        <BlogSection />
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
