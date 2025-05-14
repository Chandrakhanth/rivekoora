import { Container } from '@/components/container';
import { ProductCard } from '@/components/product-card';

const products = [
  {
    name: 'Eucalyptus Breeze Oil',
    description: 'Invigorating eucalyptus oil, perfect for clearing the mind and refreshing your space.', // Slightly shortened
    price: '$18.99',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'eucalyptus leaves'
  },
  {
    name: 'Lavender Calm Balm',
    description: 'Soothing lavender balm for ultimate relaxation and peaceful sleep.', // Slightly shortened
    price: '$22.50',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'lavender field'
  },
  {
    name: 'Sandalwood Serenity Candle',
    description: 'A calming sandalwood soy candle for a peaceful and warm ambiance.', // Slightly shortened
    price: '$25.00',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'candle flame'
  },
   {
    name: 'Lemon Myrtle Zest Spray',
    description: 'Uplifting lemon myrtle room spray to energize with a crisp, citrusy scent.', // Slightly shortened
    price: '$16.75',
    imageUrl: 'https://placehold.co/400x300.png',
    imageHint: 'lemon fruit'
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-background opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
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
