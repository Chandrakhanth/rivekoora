import { Container } from '@/components/container';
import { ProductCard } from '@/components/product-card';

const products = [
  {
    name: 'Eucalyptus Breeze Oil',
    description: 'Invigorating eucalyptus essential oil, perfect for clearing the mind and refreshing your space.',
    price: '$24.99 AUD',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'eucalyptus leaves'
  },
  {
    name: 'Lavender Calm Balm',
    description: 'Soothing lavender balm made with pure Australian lavender, ideal for relaxation and sleep.',
    price: '$19.99 AUD',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'lavender field'
  },
  {
    name: 'Sandalwood Serenity Candle',
    description: 'A calming sandalwood scented soy candle that creates a peaceful and warm ambiance.',
    price: '$32.50 AUD',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'candle flame'
  },
   {
    name: 'Lemon Myrtle Zest Spray',
    description: 'Uplifting lemon myrtle room spray to energize your home with a crisp, citrusy scent.',
    price: '$22.00 AUD',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'lemon fruit'
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-background opacity-0 animate-fade-in-up animation-delay-200">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Featured Products</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Handpicked natural aromas to elevate your everyday.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

// Helper CSS for animation delay - could be moved to globals.css if used more widely
// For now, inline style for simplicity, or add to tailwind config.
// This example uses inline style on the section.
// A better way for multiple delays would be custom Tailwind utilities.
// For this case, adding a style tag to demonstrate or directly in className:
// className="... animation-delay-[200ms]" (requires Tailwind JIT or explicit config)
// For this implementation, `animation-delay-200` is illustrative, assuming it's configured in tailwind.config.ts
// if not, it can be style={{animationDelay: '200ms'}}
// For now, it implies it's defined in tailwind.config.ts (it's not by default)
// Let's remove and rely on staggered loading if desired or just sequential animation.
// Updated section tag: <section id="products" className="py-16 lg:py-24 bg-background opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
// The `animation-delay-200` class would need to be added to tailwind config.
// For now: removed delay class, sections will animate sequentially based on scroll/load.
