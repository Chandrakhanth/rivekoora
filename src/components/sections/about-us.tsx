import Image from 'next/image';
import { Container } from '@/components/container';
import { Leaf } from 'lucide-react';

export function AboutUsSection() {
  return (
    <section id="about" className="py-16 lg:py-24 bg-secondary/10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl mb-6">Our Story: Rooted in Nature</h2>
            <div className="space-y-4 text-foreground/90 text-base leading-relaxed">
              <p>
                AromaOz was born from a deep love for Australia's unique botanical heritage and a passion for holistic wellbeing. We believe in the power of nature to soothe, heal, and inspire. Our journey began with a simple mission: to capture the essence of the Australian landscape in its purest form and share it with the world.
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
          <div className="order-1 lg:order-2 rounded-lg overflow-hidden shadow-xl">
            <Image
              src="https://placehold.co/600x450.png"
              alt="Natural ingredients and serene landscape"
              width={600}
              height={450}
              className="object-cover w-full h-full"
              data-ai-hint="natural ingredients"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
