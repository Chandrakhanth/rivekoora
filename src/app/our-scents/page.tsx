
'use client';

import Image from 'next/image';
import Link from 'next/link';
import Slider from 'react-slick';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
  {
    name: 'Aromatic Resinoids: Earth\'s Ancient Perfumes',
    description: 'Resinoids are solvent extracts of natural resinous materials like frankincense, myrrh, and benzoin. These thick, often sticky substances capture the deep, tenacious, and complex base notes that have been used in perfumery and incense for millennia. They provide grounding, warmth, and fixative qualities to fragrance blends, embodying ancient traditions and profound aromatic depth.',
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: 'incense resin',
    alt: 'Textured Aromatic Resinoids'
  },
  {
    name: 'Botanical Hydrosols: Gentle Floral Waters',
    description: 'Hydrosols, also known as floral waters, are the gentle, aromatic waters co-produced during the steam distillation of plant materials for essential oils. They contain water-soluble fragrant compounds and trace amounts of essential oils, offering a softer, more subtle scent profile. Perfect for delicate facial toners, linen sprays, and light body mists, hydrosols provide refreshing hydration and mild therapeutic benefits.',
    imageUrl: "https://placehold.co/800x600.png",
    imageHint: 'water spray',
    alt: 'Clear Botanical Hydrosols in bottles'
  }
];

const essentialOilsList = [
  {
    name: "Pure Lavender Essential Oil",
    description: "Calming and relaxing, our steam-distilled Lavender Essential Oil from high-altitude French lavender offers a sweet, floral, and herbaceous aroma. Ideal for promoting sleep, soothing skin irritations, and creating a peaceful ambiance. Versatile and gentle, it's a cornerstone of any aromatherapy toolkit, cherished for its wide range of benefits and lovely scent.",
    imageUrl: "https://placehold.co/500x500.png",
    imageHint: "lavender flower",
    alt: "Bottle of Lavender Essential Oil with lavender sprigs"
  },
  {
    name: "Refreshing Peppermint Essential Oil",
    description: "Invigorating and cooling, this Peppermint Essential Oil boasts a strong, minty, and fresh scent. Excellent for boosting focus, relieving headaches, and soothing muscle discomfort. Its stimulating aroma can also help clear nasal passages and uplift the senses, making it a popular choice for diffusers and topical applications.",
    imageUrl: "https://placehold.co/500x500.png",
    imageHint: "peppermint leaves",
    alt: "Bottle of Peppermint Essential Oil with peppermint leaves"
  },
  {
    name: "Uplifting Lemon Essential Oil",
    description: "Bright and zesty, our cold-pressed Lemon Essential Oil is a burst of sunshine. Known for its cleansing properties and mood-enhancing aroma, it's perfect for diffusing to purify the air or adding to natural cleaning solutions. Its cheerful scent can invigorate the mind and promote a positive atmosphere.",
    imageUrl: "https://placehold.co/500x500.png",
    imageHint: "lemon fruit",
    alt: "Bottle of Lemon Essential Oil with lemon slices"
  },
  {
    name: "Earthy Tea Tree Essential Oil",
    description: "Renowned for its powerful purifying properties, Tea Tree Essential Oil offers a fresh, medicinal, and camphoraceous aroma. A versatile oil for skincare, it helps cleanse and soothe blemishes, and can be used in household cleaners. Its robust scent is also valued for its grounding and clarifying effects on the mind.",
    imageUrl: "https://placehold.co/500x500.png",
    imageHint: "tea tree",
    alt: "Bottle of Tea Tree Essential Oil with tea tree leaves"
  }
];


export default function OurScentsPage() {
  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500, // Speed of the fade transition (slower)
    fade: true,
    autoplay: true,
    autoplaySpeed: 7000, // Time between slides (slower)
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true, // Pause on hover
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
          <Container className="max-w-screen-lg">
            <Slider {...sliderSettings}>
              {products.map((product, index) => (
                <div key={index} className="our-scents-slide px-0 md:px-4">
                  <div className="bg-card rounded-xl shadow-2xl overflow-hidden lg:flex lg:min-h-[550px] lg:max-h-[600px]">
                    <div className="lg:w-1/2 relative h-72 lg:h-auto">
                      <Image
                        src={product.imageUrl}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover"
                        data-ai-hint={product.imageHint}
                        priority={index === 0}
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
        
        <section className="py-16 lg:py-24 bg-secondary/5">
          <Container>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl">
                Our Essential Oils Collection
              </h2>
              <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
                Explore our range of pure, potent essential oils, steam-distilled or cold-pressed to capture the true essence of nature's finest botanicals.
              </p>
            </div>

            <div className="space-y-16">
              {essentialOilsList.map((oil, index) => (
                <Card 
                  key={oil.name} 
                  className={`overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex flex-col md:flex-row bg-card`}
                >
                  <div className="md:w-1/3 lg:w-2/5 relative h-64 md:h-auto">
                    <Image
                      src={oil.imageUrl}
                      alt={oil.alt}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 1023px) 33vw, 40vw"
                      className="object-cover"
                      data-ai-hint={oil.imageHint}
                    />
                  </div>
                  <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col justify-center md:w-2/3 lg:w-3/5">
                    <h3 className="text-2xl font-semibold text-primary mb-3">{oil.name}</h3>
                    <p className="text-base text-foreground/80 leading-relaxed mb-4">{oil.description}</p>
                    <Button variant="outline" size="sm" className="mt-auto self-start border-primary text-primary hover:bg-primary/10">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12 text-center bg-background border-t border-border/30">
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

