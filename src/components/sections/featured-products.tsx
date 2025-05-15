
import { Container } from '@/components/container';
import { ProductCard } from '@/components/product-card';

const products = [
  {
    name: 'Eucalyptus Breeze Oil',
    description: 'Experience the invigorating purity of wild Australian eucalyptus. This potent essential oil is steam-distilled to capture its signature crisp, camphoraceous aroma. Perfect for diffusing to cleanse your space, adding to a steam inhalation for respiratory support, or blending into massage oils for a refreshing touch. Helps clear the mind and promote a sense of vitality.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'eucalyptus leaves'
  },
  {
    name: 'Lavender Calm Balm',
    description: 'Indulge in tranquility with our Lavender Calm Balm. Crafted with pure Australian lavender essential oil and nourishing botanical butters, this balm melts into the skin to soothe dryness and calm the senses. Apply to pulse points before sleep or massage into tense shoulders for a moment of profound relaxation. Its gentle floral aroma promotes peace and serenity.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'skincare product'
  },
  {
    name: 'Sandalwood Serenity Candle',
    description: 'Create a sanctuary of peace with our Sandalwood Serenity Candle. Made from natural soy wax and infused with the rich, woody notes of sustainably sourced Australian sandalwood. This candle burns cleanly, releasing a warm, grounding fragrance that encourages mindfulness and calms the spirit. Ideal for meditation, yoga, or simply unwinding after a long day.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'candle flame'
  },
   {
    name: 'Lemon Myrtle Zest Spray',
    description: 'Uplift your atmosphere with the vibrant essence of Lemon Myrtle Zest Spray. This natural room and linen spray features the uniquely Australian aroma of lemon myrtle, known for its bright, citrusy, and slightly sweet fragrance. Instantly freshens any room, neutralizes odors, and boosts your mood with its cheerful and cleansing properties. A true burst of Australian sunshine.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'lemon fruit'
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-background opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Discover Our Signature Aromas</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Each product is a testament to nature's purity, crafted to elevate your wellbeing.
          </p>
        </div>
        <div className="space-y-10">
          {products.map((product) => (
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
