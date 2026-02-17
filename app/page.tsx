import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { HistorySection } from "@/components/history-section";
import { CulturalSection } from "@/components/cultural-section";
import { UnexploredSection } from "@/components/UnexploredSection";
import { GallerySection } from "@/components/gallery-section";
import { MapSection } from "@/components/map-section";
import { BlogSection } from "@/components/blog-section";
import { AboutSection } from "@/components/about-section";
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
