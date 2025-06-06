
import { Container } from '@/components/container';
import { ProductCard } from '@/components/product-card';

const products = [
  {
    name:'Floral Concrete: The Essence of Botanical Luxury',
    description: 'Floral concrete is a rich, semi-solid aromatic extract obtained through solvent extraction of delicate flowers like rose, jasmine, and ylang-ylang. This precious material captures the complete fragrant profile of blossoms, containing concentrated essential oils, natural waxes, and plant resins. While its limited solubility in alcohol makes it less common in fine perfumery, floral concrete shines as a luxurious base for artisanal soaps, skincare, and natural cosmetics, offering unparalleled depth and longevity to formulations. The extraction process begins with fresh botanicals treated with pharmaceutical-grade solvents, then carefully evaporated to preserve the flowers true essence - resulting in a waxy, fragrant substance that embodies natures most intoxicating scents.',
    imageUrl: "images/fl-1.png",
    imageHint: 'eucalyptus leaves'
  },
  {
    name: 'Floral Absolute: The Purest Botanical Elixir',
    description: 'Floral absolute is an exquisite, highly concentrated aromatic extract—a viscous liquid or semi-solid substance composed of alcohol-soluble waxes, natural pigments, and the volatile essence of plants. Obtained through delicate solvent extraction, these precious elixirs capture the true soul of botanicals like rose, jasmine, and lavender in their most potent form. While similar to essential oils, absolutes offer unparalleled fragrance complexity and are prized in haute perfumery for their rich, multi-layered scents, as well as in aromatherapy for their profound therapeutic qualities.',
    imageUrl: "images/fl-2.png",
    imageHint: 'skincare product'
  },
  {
    name: 'Essential Oils: Nature Concentrated Aromatic Essence',
    description: 'Essential oils are highly concentrated, volatile plant extracts that capture the complete aromatic profile and therapeutic properties of botanicals through meticulous extraction methods like steam distillation or cold pressing. These potent liquids contain the true "essence" of plants—their characteristic fragrance, flavor, and bioactive compounds—which must be carefully preserved by avoiding chemical processing. To ensure safety and efficacy, pure essential oils are typically diluted with carrier oils before use in aromatherapy, perfumery, or holistic wellness applications, offering an authentic connection to natures healing intelligence.',
    imageUrl: "images/fl-3.png",
    imageHint: 'candle flame'
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="products" className="py-16 lg:py-24 bg-background" >
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Discover Our Signature Aromas</h2>
          <p className="mt-4 text-lg text-foreground/80">
          At RIVE KOORA, we blend premium botanicals with cutting-edge extraction techniques to create luxurious, nature-inspired products. Each offering in our collection is meticulously crafted from the highest quality raw materials, ensuring purity and potency. Explore our range to discover exquisite floral absolutes, fragrant concretes, and therapeutic essentials—all designed to bring nature’s brilliance to your daily rituals. Can’t find what you need? Our team is always here to guide you toward the perfect botanical solution.
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
