
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const products = [
  {
    name: 'Floral Concrete: The Essence of Botanical Luxury',
    description: 'Floral concrete is a rich, semi-solid aromatic extract obtained through solvent extraction of delicate flowers like rose, jasmine, and ylang-ylang. This precious material captures the complete fragrant profile of blossoms, containing concentrated essential oils, natural waxes, and plant resins. While its limited solubility in alcohol makes it less common in fine perfumery, floral concrete shines as a luxurious base for artisanal soaps, skincare, and natural cosmetics, offering unparalleled depth and longevity to formulations. The extraction process begins with fresh botanicals treated with pharmaceutical-grade solvents, then carefully evaporated to preserve the flowers true essence - resulting in a waxy, fragrant substance that embodies natures most intoxicating scents.',
    imageUrl: "/images/flora-1.png",
    imageHint: 'eucalyptus leaves',
    alt: 'Floral Concrete Ingredients and Texture'
  },
  {
    name: 'Floral Absolute: The Purest Botanical Elixir',
    description: 'Floral absolute is an exquisite, highly concentrated aromatic extract—a viscous liquid or semi-solid substance composed of alcohol-soluble waxes, natural pigments, and the volatile essence of plants. Obtained through delicate solvent extraction, these precious elixirs capture the true soul of botanicals like rose, jasmine, and lavender in their most potent form. While similar to essential oils, absolutes offer unparalleled fragrance complexity and are prized in haute perfumery for their rich, multi-layered scents, as well as in aromatherapy for their profound therapeutic qualities.',
    imageUrl: "/images/flora-2.png",
    imageHint: 'skincare product',
    alt: 'Vibrant Floral Absolute Liquid'
  },
  {
    name: 'Essential Oils: Nature Concentrated Aromatic Essence',
    description: 'Essential oils are highly concentrated, volatile plant extracts that capture the complete aromatic profile and therapeutic properties of botanicals through meticulous extraction methods like steam distillation or cold pressing. These potent liquids contain the true "essence" of plants—their characteristic fragrance, flavor, and bioactive compounds—which must be carefully preserved by avoiding chemical processing. To ensure safety and efficacy, pure essential oils are typically diluted with carrier oils before use in aromatherapy, perfumery, or holistic wellness applications, offering an authentic connection to natures healing intelligence.',
    imageUrl: "/images/flora-3.png",
    imageHint: 'candle flame',
    alt: 'Dropper with Pure Essential Oil'
  },
];

export default function OurScentsPage() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1200, // Speed of the fade transition
    fade: true,
    autoplay: true,
    autoplaySpeed: 5500, // Time between slides
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <section className="py-16 lg:py-24 bg-secondary/10">
          <Container>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Discover Our Extracts
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
                At RIVE KOORA, we harness the soul of nature through meticulous extraction processes. Our floral concretes, absolutes, and essential oils are the heart of authentic aromatherapy and fine perfumery, crafted with decades of expertise and a deep respect for botanical integrity. Each extract tells a story of purity, potency, and the pristine environments from which they originate.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-16 lg:py-24 our-scents-slider-section bg-background">
          <Container className="max-w-screen-lg"> {/* Adjusted container width */}
            <Slider {...sliderSettings}>
              {products.map((product, index) => (
                <div key={index} className="our-scents-slide px-0 md:px-4"> {/* No horizontal padding on smallest, add for md+ */}
                  <div className="bg-card rounded-xl shadow-2xl overflow-hidden lg:flex lg:min-h-[550px] lg:max-h-[600px]"> {/* Min/Max height for consistency */}
                    <div className="lg:w-1/2 relative h-72 lg:h-auto"> {/* Image height on mobile, auto on lg */}
                      <Image
                        src={product.imageUrl}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover"
                        data-ai-hint={product.imageHint}
                        priority={index === 0} // Prioritize loading the first image
                      />
                    </div>
                    <div className="lg:w-1/2 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{product.name}</h2>
                      <div className="text-foreground/80 leading-relaxed text-sm md:text-base overflow-y-auto max-h-[200px] md:max-h-[250px] lg:max-h-[350px] custom-scrollbar pr-2">
                        <p>{product.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </Container>
        </section>
        
        <section className="py-12 text-center bg-secondary/5">
            <Container>
                <p className="text-xl text-foreground/90 mb-6">
                    Looking for something specific or have a custom requirement?
                </p>
                <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/#contact">
                        Contact Our Specialists <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                </Button>
            </Container>
        </section>

      </main>
      <Footer />
    </div>
  );
}
