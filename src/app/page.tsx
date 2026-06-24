import HeroSection from "@/components/sections/HeroSection";
import FeaturedCreativeWorks from "@/components/sections/FeaturedCreativeWorks";
import CreativeCategories from "@/components/sections/CreativeCategories";
import FeaturedServices from "@/components/sections/FeaturedServices";
import AboutPreview from "@/components/sections/AboutPreview";
import FeaturedGalleries from "@/components/sections/FeaturedGalleries";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import CreativeProcess from "@/components/sections/CreativeProcess";
import CelebrationArtistry from "@/components/sections/CelebrationArtistry";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import InstagramFeed from "@/components/sections/InstagramFeed";
import ContactCTA from "@/components/sections/ContactCTA";
import { getPortfolioItems } from "@/lib/portfolioUtils";

export default function HomePage() {
  const portfolioItems = getPortfolioItems();

  return (
    <>
      <HeroSection />
      <FeaturedCreativeWorks />
      <CreativeCategories />
      <FeaturedServices />
      <AboutPreview />
      <FeaturedGalleries items={portfolioItems} />
      <WhyChooseUs />
      <CreativeProcess />
      <CelebrationArtistry />
      <TestimonialsSection />
      <InstagramFeed items={portfolioItems} />
      <ContactCTA />
    </>
  );
}
