import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-secondary/30 h-screen flex items-center opacity-0 animate-fade-in-up">
      <div className="absolute inset-0 z-0">
        <video
          src="/images/video.mp4"
          className="w-full h-full object-cover opacity-20"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" /> */}
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
          Embrace Nature&apos;s Essence
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