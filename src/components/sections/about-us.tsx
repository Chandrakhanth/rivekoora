// @ts-nocheck
"use client";

import Image from 'next/image';
import { Container } from '@/components/container';
import { Leaf, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import Slider from 'react-slick';
import type { CSSProperties } from 'react'; 
import { cn } from '@/lib/utils';

const NextArrow = (props: { className?: string; style?: CSSProperties; onClick?: () => void }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={cn(className, "slick-arrow slick-next !bg-primary/50 hover:!bg-primary/70 !h-10 !w-10 !flex !items-center !justify-center !rounded-full")}
      style={{ ...style, display: 'flex', right: '25px', zIndex: 1 }} // Increased right offset for visibility on full-width
      onClick={onClick}
    >
      <ChevronRightIcon className="h-6 w-6 text-primary-foreground" />
    </div>
  );
};

const PrevArrow = (props: { className?: string; style?: CSSProperties; onClick?: () => void }) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={cn(className, "slick-arrow slick-prev !bg-primary/50 hover:!bg-primary/70 !h-10 !w-10 !flex !items-center !justify-center !rounded-full")}
      style={{ ...style, display: 'flex', left: '25px', zIndex: 1 }} // Increased left offset for visibility on full-width
      onClick={onClick}
    >
      <ChevronLeftIcon className="h-6 w-6 text-primary-foreground" />
    </div>
  );
};

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
    dots: false, // Removed pagination dots
    infinite: true,
    speed: 1200, 
    autoplay: true,
    autoplaySpeed: 4000, 
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
          <div> {/* This div used to be: className="order-2 lg:order-1" */}
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
          {/* Removed the main 600x450 Image component here */}
        </div>
        
        <div className="text-center"> {/* Centering the heading */}
           <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl mb-8">Glimpses of Our World</h3>
        </div>
      </Container>
      
      {/* Slider now outside the main container for full-width effect */}
      <div className="mt-8 w-full">
        <Slider {...sliderSettings}>
          {sliderImages.map((image, index) => (
            <div key={index} className="px-2"> {/* px-2 for spacing between slides */}
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
