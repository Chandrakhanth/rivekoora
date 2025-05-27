
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { ArrowRight, Leaf } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Slider from 'react-slick';

const products = [
  {
    name: 'Jasmine Sambac Absolute Oil',
    description: 'Rive Koora presents Jasmine Sambac Absolute Oil—a luxurious, solvent-extracted essence from the finest Jasminum Sambac blossoms, handpicked at dusk in India (March–June) to capture their richest, most intoxicating fragrance. Using premium hexane and ethanol extraction, we preserve the flower’s heady, animalic allure—a symbol of purity and eternal love in Asian traditions. Packaged in a sleek, airtight modern aluminum tin (30ml) to ensure longevity, this oil is ideal for perfumery, aromatherapy, and bespoke formulations. Elevate your creations with the timeless scent of royalty',
    imageUrl: "/images/PRODUCT-1.png",
    imageHint: 'eucalyptus leaves',
    alt: 'Floral Concrete Ingredients and Texture'
  },
  {
    name: 'Jasmine Grandiflorum Absolute',
    description: '"Rive Koora introduces Jasmine Grandiflorum Absolute Oil—an exquisite, hexane-extracted essence from delicate Jasminum Grandiflorum blossoms, handpicked at dawn in India (June–August) to preserve their sweet, floral intensity. Ethanol-refined to perfection, this oil captures the vine’s iconic pink-tinged white flowers, revered in haute perfumery for their romantic, honeyed aroma. Housed in a premium airtight aluminum tin (30ml), it ensures potency for luxury fragrances, skincare, and bespoke blends. A dawn-harvested jewel of perfumery—indulge in timeless elegance."',
    imageUrl: "/images/our-2.png",
    imageHint: 'skincare product',
    alt: 'Vibrant Floral Absolute Liquid'
  },
  {
    name: 'Tuberose Absolute & Concrete',
    description: '"Rive Koora presents Tuberose Absolute & Concrete - luxurious extracts from Indias finest Polianthes tuberosa blossoms, hand-harvested at peak fragrance (April-June). Our hexane-extracted Tuberose Concrete (solid) captures the waxy, intense aroma of Rajanigandha, perfect for perfumery fixatives. The ethanol-refined Tuberose Absolute (liquid) offers a radiant, sweet-floral essence, ideal for high-end fragrances. Both are 100% pure, solvent-free, and sustainably sourced - the concrete in an airtight matte gold aluminum tin to preserve its richness, and the absolute in a UV-protected amber glass bottle to maintain purity. Experience the opulence of Indian tuberose, revered for centuries in royal aromatherapy."',
    imageUrl: "/images/tubb.png",
    imageHint: 'candle flame',
    alt: 'Dropper with Pure Essential Oil'
  },
  {
    name: 'Red Champaca Absolute & Concrete',
    description: '"Rive Koora presents Red Champaca Absolute & Concrete – exquisite, solvent-free extracts from the rare Michelia champaca blossoms, hand-harvested in India during peak seasons (April-May & Sept-Oct). Our hexane-extracted Champaca Concrete (solid) captures the deep, honeyed richness of Champak, prized as a perfumery treasure. The ethanol-refined Champaca Absolute (liquid) delivers a luminous, floral-spicy essence, famously used in legendary fragrances like Joy by Jean Patou.',
    imageUrl:  "/images/recam.png",
    imageHint: 'incense resin',
    alt: 'Textured Aromatic Resinoids'
  },
  {
    name: 'Frangipani Absolute & Concrete',
    description: '"Rive Koora presents Frangipani Absolute & Concrete – sun-drenched essences of Plumeria Alba blossoms, hand-gathered from India’s April-May harvest. Our hexane-extracted Frangipani Concrete (solid) preserves the waxy, tropical richness of its petals, while the ethanol-refined Absolute (liquid) distills its iconic floral-citrus bouquet."',
    imageUrl: "/images/fra.png",
    imageHint: 'water spray',
    alt: 'Clear Botanical Hydrosols in bottles'
  },
  {
    name: 'Lotus Absolute & Concrete',
    description: '"Rive Koora presents Lotus Absolute & Concrete – sacred essences of Nelumbo nucifera, hand-harvested from Indias monsoon-fed waters (July-Sept). Our hexane-extracted Lotus Concrete (solid) captures the waxy, earthy depth of 1,300-year-old seeds, while the ethanol-refined Absolute (liquid) distills its ethereal floral-spiritual bouquet."',
    imageUrl: "/images/lou.png",
    imageHint: 'water spray',
    alt: 'Clear Botanical Hydrosols in bottles'
  },
  {
    name: ' Rose Centifolia Absolute & Concrete',
    description: '"Rive Koora presents Rose Centifolia Absolute & Concrete – capturing the legendary fragrance of Grasse in two pristine forms. Our hexane-extracted Rose Concrete (solid) preserves the waxy, honeyed depth of hand-picked Rosa centifolia petals from Indias April-June harvest, while the ethanol-refined Absolute (liquid) distills its crystalline floral sweetness."',
    imageUrl: "/images/rose.png",
    imageHint: 'water spray',
    alt: 'Clear Botanical Hydrosols in bottles'
  },
  {
    name: 'Mimosa Absolute & Concrete',
    description: '"Rive Koora presents Mimosa Absolute & Concrete – golden essences of Mimosa pudica, sustainably harvested from Indias monsoon blooms (June-Sept). Our hexane-extracted Mimosa Concrete (solid) captures the waxy, honeyed richness of its fragrant glomeruli, while the ethanol-refined Absolute (liquid) distills its vibrant floral-balsamic soul."',
    imageUrl: "/images/mimo.png",
    imageHint: 'water spray',
    alt: 'Clear Botanical Hydrosols in bottles'
  },
  {
    name: 'Jasmine Auriculatum Absolute & Concrete',
    description: '"Rive Koora unveils Jasmine Auriculatum Absolute & Concrete – rare essences of the elusive Jasminum auriculatum, hand-harvested from India’s March-June blooms. Our hexane-extracted Concrete (solid) preserves the waxy, gardenia-like intensity of its satin-white petals, while the ethanol-refined Absolute (liquid) distills its hypnotic floral-powdery bouquet."',
    imageUrl: "/images/jas.png",
    imageHint: 'water spray',
    alt: 'Clear Botanical Hydrosols in bottles'
  },
];

const essentialOilsList = [
  {
    name: "Pure Lavender Essential Oil",
    description: "Calming and relaxing, our steam-distilled Lavender Essential Oil from high-altitude French lavender offers a sweet, floral, and herbaceous aroma. Ideal for promoting sleep, soothing skin irritations, and creating a peaceful ambiance. Versatile and gentle, it's a cornerstone of any aromatherapy toolkit, cherished for its wide range of benefits and lovely scent.",
    imageUrl: "/images/fl-3.png",
    imageHint: "lavender flower",
    alt: "Bottle of Lavender Essential Oil with lavender sprigs"
  },
  {
    name: "Refreshing Peppermint Essential Oil",
    description: "Invigorating and cooling, this Peppermint Essential Oil boasts a strong, minty, and fresh scent. Excellent for boosting focus, relieving headaches, and soothing muscle discomfort. Its stimulating aroma can also help clear nasal passages and uplift the senses, making it a popular choice for diffusers and topical applications.",
    imageUrl: "/images/fl-1.png",
    imageHint: "peppermint leaves",
    alt: "Bottle of Peppermint Essential Oil with peppermint leaves"
  },
  {
    name: "Uplifting Lemon Essential Oil",
    description: "Bright and zesty, our cold-pressed Lemon Essential Oil is a burst of sunshine. Known for its cleansing properties and mood-enhancing aroma, it's perfect for diffusing to purify the air or adding to natural cleaning solutions. Its cheerful scent can invigorate the mind and promote a positive atmosphere.",
    imageUrl: "/images/fl-2.png",
    imageHint: "lemon fruit",
    alt: "Bottle of Lemon Essential Oil with lemon slices"
  },
  {
    name: "Earthy Tea Tree Essential Oil",
    description: "Renowned for its powerful purifying properties, Tea Tree Essential Oil offers a fresh, medicinal, and camphoraceous aroma. A versatile oil for skincare, it helps cleanse and soothe blemishes, and can be used in household cleaners. Its robust scent is also valued for its grounding and clarifying effects on the mind.",
    imageUrl: "/images/breezeoil.jpg",
    imageHint: "tea tree",
    alt: "Bottle of Tea Tree Essential Oil with tea tree leaves"
  }
];


export default function OurScentsPage() {
  const extractsSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    fade: false, 
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const essentialOilsSliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 900,
    autoplay: true,
    autoplaySpeed: 4500,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-background our-scents-page">
      <Header />
      <main className="flex-grow">
        <section className="py-16 lg:py-24 bg-secondary/10">
          <Container>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Discover Our Extracts
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
              "Rive Koora specializes in crafting premium floral extracts using only the freshest, highest-quality flowers and cutting-edge extraction technologies. Browse our curated inventory below, and if you don’t find what you’re looking for, contact us—our team will gladly source or customize the perfect product for your needs."
              </p>
            </div>
          </Container>
        </section>

        <section className="py-20 lg:py-24 bg-background relative our-scents-slider-section">
          <Container className="max-w-screen-lg">
            <Slider {...extractsSliderSettings}>
              {products.map((product, index) => (
                <div key={index} className="our-scents-slide px-0 md:px-4">
                  <div className="bg-card rounded-xl shadow-2xl overflow-hidden lg:flex lg:min-h-[600px] lg:max-h-[650px]"> {/* Increased height */}
                    <div className="lg:w-1/2 relative h-80 lg:h-auto"> {/* Adjusted initial height for mobile */}
                      <Image
                        src={product.imageUrl}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover"
                        data-ai-hint={product.imageHint}
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 md:p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{product.name}</h2>
                      <div className="text-foreground/80 leading-relaxed text-sm md:text-base overflow-y-auto max-h-[250px] md:max-h-[300px] lg:max-h-[400px] custom-scrollbar pr-2"> {/* Increased max-h for description */}
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
              Rive Koora crafts exquisite botanical extracts using only the finest raw materials and advanced extraction technologies. Explore our premium collection below, and don't hesitate to reach out if you need something special - our experts will gladly source or create custom solutions for your unique requirements.
              </p>
            </div>

            <div className="essential-oil-slider"> {/* New slider for essential oils */}
              <Slider {...essentialOilsSliderSettings}>
                {essentialOilsList.map((oil, index) => (
                  <div key={oil.name} className="px-2 md:px-4 h-full"> {/* Added h-full for consistent slide height */}
                    <Card className="overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300 flex flex-col md:flex-row bg-card h-full">
                      {/* Image Div - order will be controlled by flex direction based on index */}
                      <div className={`md:w-2/5 relative h-64 md:h-auto ${index % 2 !== 0 ? 'md:order-last' : ''}`}>
                        <Image
                          src={oil.imageUrl}
                          alt={oil.alt}
                          fill
                          sizes="(max-width: 767px) 100vw, 40vw"
                          className="object-cover"
                          data-ai-hint={oil.imageHint}
                        />
                      </div>
                      {/* Content Div */}
                      <CardContent className="p-6 md:p-8 lg:p-10 flex flex-col justify-center md:w-3/5 overflow-y-auto max-h-[300px] md:max-h-none custom-scrollbar pr-2">
                        <h3 className="text-2xl font-semibold text-primary mb-3">{oil.name}</h3>
                        <p className="text-base text-foreground/80 leading-relaxed mb-4 flex-grow">{oil.description}</p>
                        {/* Learn More button removed */}
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </Slider>
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

