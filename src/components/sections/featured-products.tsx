
import { Container } from '@/components/container';
import { ProductCard } from '@/components/product-card';

const products = [
  {
    name: 'Eucalyptus Breeze Oil',
    description: 'Experience the invigorating purity of wild Australian eucalyptus. This potent essential oil is steam-distilled to capture its signature crisp, camphoraceous aroma. Perfect for diffusing to cleanse your space, adding to a steam inhalation for respiratory support, or blending into massage oils for a refreshing touch. Helps clear the mind and promote a sense of vitality.',
    imageUrl: 'https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22Breeze%20oil.png%22%2C%22type%22%3A%22image%2Fpng%22%2C%22signedurl_expire%22%3A%222028-05-13T13%3A02%3A17.358Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F6816b622f23248b0%2FBreeze%2520oil.png%3FExpires%3D1841835737%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DNW5pMO0JC5NTqGfNqxxc1VyrQsxJWDn0~OX7A9EwgCL9LA-BldNb0yO5Kp8DYvGsJe8UKG27h9rUcBPq-UbydQbsXNB4repcYQjBvKp5aoBdH53KTbJuqcD3lmdrN385QLR3WNu1g6lmnkdB5ggFp-9F1y0uPVqZnfMDqu6jB6LrtpuPXnjuxE~5Q8wfclsenimwc4fdgepYVtCUXnu1fV4TIlT5X-na2XhrLOEagv3pePCpyg1lxPntZ2ipmTnwBLbDqII046~5Wew7uS1xp8qIj-nBQNC3Kd3pc0uHbfaKGHD87PnVzVQfYcOhDyrZYx7ahTRHfGXVvNeerkByRw__%22%7D',
    imageHint: 'eucalyptus leaves'
  },
  {
    name: 'Lavender Calm Balm',
    description: 'Indulge in tranquility with our Lavender Calm Balm. Crafted with pure Australian lavender essential oil and nourishing botanical butters, this balm melts into the skin to soothe dryness and calm the senses. Apply to pulse points before sleep or massage into tense shoulders for a moment of profound relaxation. Its gentle floral aroma promotes peace and serenity.',
    imageUrl: 'https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22SKIN.png%22%2C%22type%22%3A%22image%2Fpng%22%2C%22signedurl_expire%22%3A%222028-05-14T12%3A13%3A54.437Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F6816b622f23248b0%2FSKIN.png%3FExpires%3D1841922434%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DcK-9v8vV0YfU0E5uB2H5L9r7j7~Vv5V4Q4rKxJ8~H~e6F1i7d0b7v~5j1jY9c5sWz6M6r6B1w3P4Y5S7w0n8c9h6U1f4u2n7n6Q3d4f5H1s7m2j5j1v4m2l1k4j8Y3b6V5~5K6Q7J8H1G3F4D5S6A7X8Z0C2V3B4N5M6L7K8J9H1G2F3D4S5A6X7Z8C9V0B1N2M3L4K5J6H7G8F9D0S1A2X3Z4C5V6B7N8M9L0K1J2H3G4F5D6S7A8X9Z0C1V2B3N4M5L6K7J8H9G0F1D2S3A4X5Z6C7V8B9N0M1L2K3J4H5G6F7D8S9A0X1Z2C3V4B5N6M7L8K9J0H1G2F3D4S5A6X7Z8C9V0B1N2M3L4K5J6H7G8F9D0S1A2X3Z4C5V6B7N8M9L0K1J2H3G4F5D6S7A8X9Z0C1V2B3N4M5L6K7J8H9G0F1D2S3A4X5Z6C7V8B9N0M1L2K3J4H5G6F7D8S9A0XZc%22%7D',
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
