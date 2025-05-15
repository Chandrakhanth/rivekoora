
import { Container } from '@/components/container';
import { ProductCard } from '@/components/product-card';

const products = [
  {
    name: 'Eucalyptus Breeze Oil',
    description: 'Experience the invigorating purity of wild Australian eucalyptus. This potent essential oil is steam-distilled to capture its signature crisp, camphoraceous aroma. Perfect for diffusing to cleanse your space, adding to a steam inhalation for respiratory support, or blending into massage oils for a refreshing touch. Helps clear the mind and promote a sense of vitality. Its sharp, clean scent profile is both uplifting and purifying, reminiscent of a walk through a sun-drenched eucalyptus forest. Ideal for those seeking a natural way to enhance focus and breathe easier.',
    imageUrl: "/breezeoil.jpg",
    imageHint: 'eucalyptus leaves'
  },
  {
    name: 'Lavender Calm Balm',
    description: 'Indulge in tranquility with our Lavender Calm Balm. Crafted with pure Australian lavender essential oil and nourishing botanical butters like shea and cocoa, this balm melts into the skin to soothe dryness and calm the senses. Apply to pulse points before sleep, massage into tense shoulders, or use on dry patches for intensive moisture. Its gentle, herbaceous floral aroma promotes peace, eases tension, and prepares you for restful sleep. A true pocket companion for moments of stress or when you need to unwind.',
    imageUrl: 'https://images.unsplash.com/photo-1598601496698-01cef73515c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80',
    imageHint: 'skincare product'
  },
  {
    name: 'Sandalwood Serenity Candle',
    description: 'Create a sanctuary of peace with our Sandalwood Serenity Candle. Made from natural soy wax and infused with the rich, woody, and slightly sweet notes of sustainably sourced Australian sandalwood. This candle burns cleanly for hours, releasing a warm, grounding fragrance that encourages mindfulness, calms the spirit, and enhances meditation. Its sophisticated aroma is perfect for setting a relaxing ambiance in any room, helping to quiet the mind and foster a sense of inner balance. The subtle crackle of the wooden wick adds to the serene experience.',
    imageUrl: 'https://placehold.co/300x300.png',
    imageHint: 'candle flame'
  },
   {
    name: 'Lemon Myrtle Zest Spray',
    description: 'Uplift your atmosphere with the vibrant essence of Lemon Myrtle Zest Spray. This natural room and linen spray features the uniquely Australian aroma of lemon myrtle, renowned for its bright, intensely citrusy, and slightly sweet fragrance that is often described as "more lemony than lemon." Instantly freshens any room, neutralizes odors, and boosts your mood with its cheerful and cleansing properties. A true burst of Australian sunshine, perfect for kitchens, bathrooms, or any space needing a refreshing lift.',
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
