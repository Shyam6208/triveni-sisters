import HeroSection from "@/components/sections/HeroSection";
import FeaturedServices from "@/components/sections/FeaturedServices";
import AboutPreview from "@/components/sections/AboutPreview";
import PortfolioHighlights from "@/components/sections/PortfolioHighlights";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CreativeProcess from "@/components/sections/CreativeProcess";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramGallery from "@/components/sections/InstagramGallery";
import ContactCTA from "@/components/sections/ContactCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedServices />
      <AboutPreview />
      <PortfolioHighlights />
      <WhyChooseUs />
      <CreativeProcess />
      <TestimonialsSection />
      <InstagramGallery />
      <ContactCTA />
    </>
  );
}
