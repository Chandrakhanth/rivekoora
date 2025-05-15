"use client";

import Image from 'next/image';
import { Container } from '@/components/container';
import { Leaf } from 'lucide-react';
import Slider from 'react-slick';
import { cn } from '@/lib/utils';

const sliderImages = [
  { src: "https://placehold.co/600x400.png", alt: "Serene landscape 1", hint: "landscape" },
  { src: "https://placehold.co/600x400.png", alt: "Natural ingredients 1", hint: "ingredients" },
  { src: "https://placehold.co/600x400.png", alt: "Australian flora", hint: "flora" },
  { src: "https://placehold.co/600x400.png", alt: "Crafting process", hint: "crafting" },
  { src: "https://placehold.co/600x400.png", alt: "Product display", hint: "display" },
  { src: "https://placehold.co/600x400.png", alt: "Serene landscape 2", hint: "landscape" },
  { src: "https://placehold.co/600x400.png", alt: "Natural ingredients 2", hint: "ingredients" },
  { src: "https://placehold.co/600x400.png", alt: "Australian fauna", hint: "fauna" },
  { src: "https://placehold.co/600x400.png", alt: "Workshop view", hint: "workshop" },
  { src: "https://placehold.co/600x400.png", alt: "Team photo", hint: "team" },
];

export function AboutUsSection() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 800, 
    autoplay: true,
    autoplaySpeed: 3000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, 
    pauseOnHover: true,
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
                RIVE KOORA was born from a deep love for Australia's unique botanical heritage and a passion for holistic wellbeing. We believe in the power of nature to soothe, heal, and inspire. Our journey began with a simple mission: to capture the essence of the Australian landscape in its purest form and share it with the world.
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
