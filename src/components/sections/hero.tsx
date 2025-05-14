import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-secondary/30 py-20 md:py-32 opacity-0 animate-fade-in-up">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Natural aroma products background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
          priority
          data-ai-hint="nature landscape"
        />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
      </div>
      <Container className="relative z-10 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Embrace Nature's Essence
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-foreground/90 sm:text-xl">
          Discover the pure, natural aromas of Australia. Handcrafted with love to bring tranquility and balance to your life.
        </p>
        <div className="mt-10">
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            <Link href="#products">Explore Our Scents</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
}
