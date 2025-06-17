
"use client";

import Image from 'next/image';
import { Container } from '@/components/container';
import { Leaf } from 'lucide-react';
import Slider from 'react-slick';
import { cn } from '@/lib/utils';

const sliderImages = [
  { src: "/images/abt-1.jpg", alt: "Serene landscape 1", hint: "landscape" },
  { src: "/images/abt-2.jpg", alt: "Natural ingredients 1", hint: "ingredients" },
  { src: "/images/abt-3.jpg", alt: "Australian flora", hint: "flora" },
  { src: "/images/abt-4.jpg", alt: "Crafting process", hint: "crafting" },
  { src: "/images/abt-5.jpg", alt: "Product display", hint: "display" },
  { src: "/images/abt-6.jpg", alt: "Serene landscape 2", hint: "landscape" },
  { src: "/images/abt-7.jpg", alt: "Natural ingredients 2", hint: "ingredients" },
  { src: "/images/abt-8.jpg", alt: "Australian fauna", hint: "fauna" },
  { src: "/images/abt-9.jpg", alt: "Workshop view", hint: "workshop" },
  { src: "/images/abt-10.jpg", alt: "Team photo", hint: "team" },
];

export function AboutUsSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500, 
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    pauseOnHover: false, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <Container>
        <div className="max-w-3xl mx-auto text-center lg:text-left mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">Our Story: Rooted in Nature</h2>
            <div className="space-y-4 text-foreground/90 text-base leading-relaxed">
              <p>
              Nestled in the pristine foothills of Yellagiri, RIVE KOORA has blossomed from humble flower trading roots into Asia's premier artisan producer of exquisite floral concretes, absolutes, and essential oils. For nearly four decades, we've cultivated direct relationships with organic farmers, combining time-honored harvesting traditions with cutting-edge extraction technologies in our state-of-the-art facility. As custodians of nature's fragrant treasures, we maintain complete traceability from soil to bottle, supplying discerning perfumeries and wellness brands across 20+ countries. More than manufacturers, we're cultivators of aromatic artistry - where each batch carries the legacy of our land, the dedication of our farming partners, and our uncompromising pursuit of purity that's earned global recognition.
              </p>
              <p>
                We are committed to using only the finest natural ingredients, sustainably sourced from local growers and pristine environments. Each product is thoughtfully crafted, free from synthetic fragrances, parabens, and harsh chemicals. 
              </p>
              <p className="flex items-start">
                <Leaf className="h-5 w-5 text-primary mr-2 mt-1 shrink-0" />
                <span>Our philosophy is simple: pure ingredients, authentic aromas, and a touch of Australian magic in every bottle.</span>
              </p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
           <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl mb-8">Glimpses of Our World</h3>
        </div>
      </Container>
      
      <div className="mt-8 w-full overflow-x-hidden">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="px-2">
              <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto aspect-[3/2]"
                  data-ai-hint={image.hint}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
