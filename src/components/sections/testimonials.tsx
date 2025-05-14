import { Container } from '@/components/container';
import { TestimonialCard } from '@/components/testimonial-card';
import { Button } from '@/components/ui/button';
import { Edit3 } from 'lucide-react';

const testimonials = [
  {
    quote: "RIVE KOORA products have transformed my home into a sanctuary. The scents are so natural and calming. I love the Eucalyptus Breeze oil!",
    name: 'Sarah L.',
    avatarText: 'SL',
    avatarImageUrl: 'https://placehold.co/100x100.png',
    rating: 5,
  },
  {
    quote: "The Lavender Calm Balm is my new go-to for unwinding after a long day. Incredible quality and smells divine. Highly recommend!",
    name: 'John B.',
    avatarText: 'JB',
    rating: 5,
  },
  {
    quote: "I'm so impressed with the commitment to natural ingredients. You can really tell the difference. The Sandalwood candle is simply luxurious.",
    name: 'Emily K.',
    avatarText: 'EK',
    avatarImageUrl: 'https://placehold.co/100x100.png',
    rating: 4,
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Real experiences from our valued community.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} {...testimonial} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Edit3 className="mr-2 h-5 w-5" />
            Write a Review
          </Button>
        </div>
      </Container>
    </section>
  );
}
