
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/container';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Slider from 'react-slick';
// import styles from './OurScents.module.css'; // Assuming styles are mostly global or in globals.css

const products = [
  {
    name: 'Jasmine Sambac Absolute & Concrete',
    description: 'Rive Koora presents Jasmine Sambac Absolute Oil—a luxurious, solvent-extracted essence from the finest Jasminum Sambac blossoms, handpicked at dusk in India (March–June) to capture their richest, most intoxicating fragrance. Using premium hexane and ethanol extraction, we preserve the flower’s heady, animalic allure—a symbol of purity and eternal love in Asian traditions. Packaged in a sleek, airtight modern aluminum tin (30ml) to ensure longevity, this oil is ideal for perfumery, aromatherapy, and bespoke formulations. Elevate your creations with the timeless scent of royalty',
    imageUrl: "/images/PRODUCT-1.png",
    imageHint: 'jasmine flower oil',
    alt: 'Jasmine Sambac Absolute Oil in elegant packaging',
    botanicalName: 'Jasminum Sambac',
    harvestSeason: 'Mar-Jun',
    origin: 'India',
  },
  {
    name: 'Jasmine Grandiflorum Absolute',
    description: '"Rive Koora introduces Jasmine Grandiflorum Absolute Oil—an exquisite, hexane-extracted essence from delicate Jasminum Grandiflorum blossoms, handpicked at dawn in India (June–August) to preserve their sweet, floral intensity. Ethanol-refined to perfection, this oil captures the vine’s iconic pink-tinged white flowers, revered in haute perfumery for their romantic, honeyed aroma. Housed in a premium airtight aluminum tin (30ml), it ensures potency for luxury fragrances, skincare, and bespoke blends. A dawn-harvested jewel of perfumery—indulge in timeless elegance."',
    imageUrl: "/images/our-2.png",
    imageHint: 'grandiflorum flower oil',
    alt: 'Vibrant Floral Absolute Liquid - Jasmine Grandiflorum',
    botanicalName: 'Jasminum Grandiflorum',
    harvestSeason: 'Jun-Aug',
    origin: 'India',
  },
  {
    name: 'Tuberose Absolute & Concrete',
    description: '"Rive Koora presents Tuberose Absolute & Concrete - luxurious extracts from Indias finest Polianthes tuberosa blossoms, hand-harvested at peak fragrance (April-June). Our hexane-extracted Tuberose Concrete (solid) captures the waxy, intense aroma of Rajanigandha, perfect for perfumery fixatives. The ethanol-refined Tuberose Absolute (liquid) offers a radiant, sweet-floral essence, ideal for high-end fragrances. Both are 100% pure, solvent-free, and sustainably sourced - the concrete in an airtight matte gold aluminum tin to preserve its richness, and the absolute in a UV-protected amber glass bottle to maintain purity. Experience the opulence of Indian tuberose, revered for centuries in royal aromatherapy."',
    imageUrl: "/images/tubb.png",
    imageHint: 'tuberose flower extract',
    alt: 'Tuberose Absolute & Concrete products',
    botanicalName: 'Polianthes Tuberosa',
    harvestSeason: 'Apr-Jun',
    origin: 'India',
  },
  {
    name: 'Red Champaca Absolute & Concrete',
    description: '"Rive Koora presents Red Champaca Absolute & Concrete – exquisite, solvent-free extracts from the rare Michelia champaca blossoms, hand-harvested in India during peak seasons (April-May & Sept-Oct). Our hexane-extracted Champaca Concrete (solid) captures the deep, honeyed richness of Champak, prized as a perfumery treasure. The ethanol-refined Champaca Absolute (liquid) delivers a luminous, floral-spicy essence, famously used in legendary fragrances like Joy by Jean Patou.',
    imageUrl:  "/images/recam.png",
    imageHint: 'champaca flower extract',
    alt: 'Red Champaca Absolute & Concrete',
    botanicalName: 'Michelia Champaca',
    harvestSeason: 'Apr-May, Sep-Oct',
    origin: 'India',
  },
  {
    name: 'Frangipani Absolute & Concrete',
    description: '"Rive Koora presents Frangipani Absolute & Concrete – sun-drenched essences of Plumeria Alba blossoms, hand-gathered from India’s April-May harvest. Our hexane-extracted Frangipani Concrete (solid) preserves the waxy, tropical richness of its petals, while the ethanol-refined Absolute (liquid) distills its iconic floral-citrus bouquet."',
    imageUrl: "/images/fra.png",
    imageHint: 'frangipani flower product',
    alt: 'Frangipani Absolute & Concrete',
    botanicalName: 'Plumeria Alba',
    harvestSeason: 'Apr-May',
    origin: 'India',
  },
  {
    name: 'Lotus Absolute & Concrete',
    description: '"Rive Koora presents Lotus Absolute & Concrete – sacred essences of Nelumbo nucifera, hand-harvested from Indias monsoon-fed waters (July-Sept). Our hexane-extracted Lotus Concrete (solid) captures the waxy, earthy depth of 1,300-year-old seeds, while the ethanol-refined Absolute (liquid) distills its ethereal floral-spiritual bouquet."',
    imageUrl: "/images/lou.png",
    imageHint: 'lotus flower extract',
    alt: 'Lotus Absolute & Concrete',
    botanicalName: 'Nelumbo Nucifera',
    harvestSeason: 'Jul-Sept',
    origin: 'India',
  },
  {
    name: 'Rose Centifolia Absolute & Concrete',
    description: '"Rive Koora presents Rose Centifolia Absolute & Concrete – capturing the legendary fragrance of Grasse in two pristine forms. Our hexane-extracted Rose Concrete (solid) preserves the waxy, honeyed depth of hand-picked Rosa centifolia petals from Indias April-June harvest, while the ethanol-refined Absolute (liquid) distills its crystalline floral sweetness."',
    imageUrl: "/images/rose.png",
    imageHint: 'rose centifolia product',
    alt: 'Rose Centifolia Absolute & Concrete',
    botanicalName: 'Rosa Centifolia',
    harvestSeason: 'Apr-Jun',
    origin: 'India',
  },
  {
    name: 'Mimosa Absolute & Concrete',
    description: '"Rive Koora presents Mimosa Absolute & Concrete – golden essences of Mimosa pudica, sustainably harvested from Indias monsoon blooms (June-Sept). Our hexane-extracted Mimosa Concrete (solid) captures the waxy, honeyed richness of its fragrant glomeruli, while the ethanol-refined Absolute (liquid) distills its vibrant floral-balsamic soul."',
    imageUrl: "/images/mimo.png",
    imageHint: 'mimosa flower extract',
    alt: 'Mimosa Absolute & Concrete',
    botanicalName: 'Mimosa Pudica',
    harvestSeason: 'Jun-Sept',
    origin: 'India',
  },
  {
    name: 'Jasmine Auriculatum Absolute & Concrete',
    description: '"Rive Koora unveils Jasmine Auriculatum Absolute & Concrete – rare essences of the elusive Jasminum auriculatum, hand-harvested from India’s March-June blooms. Our hexane-extracted Concrete (solid) preserves the waxy, gardenia-like intensity of its satin-white petals, while the ethanol-refined Absolute (liquid) distills its hypnotic floral-powdery bouquet."',
    imageUrl: "/images/jas.png",
    imageHint: 'auriculatum jasmine product',
    alt: 'Jasmine Auriculatum Absolute & Concrete',
    botanicalName: 'Jasminum Auriculatum',
    harvestSeason: 'Mar-Jun',
    origin: 'India',
  },
];


export default function OurScentsPage() {
  const mainSliderSettings = {
    dots: true, // Dots can be true if you want pagination for the main slider
    arrows: false,
    infinite: true,
    speed: 400,
    fade: false, 
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="flex flex-col min-h-screen bg-background our-scents-page font-sans">
      <Header />
      <main className="flex-grow">
        <section className="py-16 lg:py-24 bg-secondary/10">
          <Container>
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Discover Our Extracts
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
              Rive Koora specializes in crafting premium floral extracts using only the freshest, highest-quality flowers and cutting-edge extraction technologies. Browse our curated inventory below, and if you don’t find what you’re looking for, contact us—our team will gladly source or customize the perfect product for your needs.
              </p>
            </div>
          </Container>
        </section>

        <section className="py-12 lg:py-16 bg-background relative our-scents-slider-section">
          <Container className="max-w-screen-lg">
            <Slider {...mainSliderSettings}>
              {products.map((product, index) => (
                <div key={index} className="our-scents-slide px-0 md:px-4">
                  <div className="bg-card rounded-xl shadow-2xl overflow-hidden lg:flex lg:min-h-[600px] lg:max-h-[650px]">
                    <div className="lg:w-1/2 relative h-80 lg:h-auto group overflow-hidden">
                      <Image
                        src={product.imageUrl}
                        alt={product.alt}
                        fill
                        sizes="(max-width: 1023px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
                        data-ai-hint={product.imageHint}
                      />
                    </div>
                    <div className="lg:w-1/2 p-8 md:p-8 lg:p-12 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{product.name}</h2>
                      <div className="text-foreground/80 leading-relaxed text-sm md:text-base overflow-y-auto max-h-[300px] md:max-h-[350px] lg:max-h-[450px] custom-scrollbar pr-2">
                        <p>{product.description}</p>
                      </div>
                      {/* Botanical info can be added here if desired for all products, similar to how essential oils had it */}
                      {/* Example:
                      <div className="mt-4 space-y-1 text-xs text-foreground/70">
                        <p><span className="font-semibold">Botanical Name:</span> {product.botanicalName}</p>
                        <p><span className="font-semibold">Origin:</span> {product.origin}</p>
                        <p><span className="font-semibold">Harvest:</span> {product.harvestSeason}</p>
                      </div>
                      */}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
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
