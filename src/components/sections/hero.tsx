import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Container } from '@/components/container';

export function HeroSection() {
  return (
    <section 
      id="hero" 
      className="relative bg-transparent h-screen flex items-center animate-fade-in-up"
    >
      <div className="absolute inset-0 z-0">
        <video
          // Ensure your video file is at public/VDO-1.mp4
          src="/VDO-1.mp4" 
          className="w-full h-full object-cover opacity-100"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Background video of natural scenery"
        />
       
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
        RIVE KOORA <br/>Mastery in Botanical Extracts  <br />
                <span className="text-white">Embrace Nature&apos;s Essence</span>
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg leading-8 text-black font-semibold sm:text-xl">
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
