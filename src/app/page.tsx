
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { HeroSection } from '@/components/sections/hero';
import { FeaturedProductsSection } from '@/components/sections/featured-products';
import { AboutUsSection } from '@/components/sections/about-us';
import { ContactSection } from '@/components/sections/contact';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturedProductsSection />
        <div className="container mx-auto py-8 px-4 text-center">
          <p className="text-lg text-gray-700">Explore our curated selection of high-quality products, handpicked to meet your needs and exceed your expectations.</p>
        </div>
        <AboutUsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
