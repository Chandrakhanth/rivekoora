import React from 'react';
import Image from 'next/image';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Container } from '@/components/container'; // Make sure this is a default export or adjust the import
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Import the Button component

const essentialOils = [
 {
    name: 'DAVANA OIL (Artemisia Pallens)',
 description: '"Distinctive fruity-floral aroma with woody undertonesHigh volatility for superior scent diffusionExcellent fixative properties in perfume formulations"',
 image: '/images/oil-1.png', // Replace with actual image paths
    alt: 'Lavender Essential Oil',
    botanicalName: 'Artemisia Pallens',
    origin: 'INDIA',
  },
 {
    name: 'Lemongrass Essential Oil',
 description: '"Therapeutic Properties:✓ Antibacterial | ✓ Antioxidant | ✓ Anti-inflammatory✓ Analgesic | ✓ Antifungal | ✓ Insect Repellent"',
 image: '/images/oil-2.png', // Replace with actual image paths
    alt: 'Peppermint Essential Oil',
    botanicalName: 'Cymbopogon flexuosus / C. citratus / C. pendulus',
    origin: 'INDIA',
  },
 {
    name: 'Palmrosa Essential Oil',
 description: '"Excellent natural alternative to rose-based ingredients Acts as a natural preservative in formulations GRAS status for food applications"',
 image: '/images/oil-3.png', // Replace with actual image paths
    alt: 'Tea Tree Essential Oil',
    botanicalName: 'Cymbopogon martinii var. motia',
    origin: 'INDIA',
  },
 {
    name: 'Ginger Grass Essential Oil ‘Sofiya’',
 description: 'Natural deodorant|Antimicrobial activity|Skin-conditioning agent|Fragrance fixative',
 image: '/images/oil-4.png', // Replace with actual image paths
    alt: 'Eucalyptus Essential Oil',
    botanicalName: 'Cymbopogon martinii var. sofia',
    origin: 'INDIA',
  },
 {
    name: 'Curry Leaf Essential Oil ',
 description: '"Natural flavor enhancer in culinary productsTraditional Ayurvedic formulationsFunctional fragrance in personal care"',
 image: '/images/oil-5.png', // Replace with actual image paths
    alt: 'Lemon Essential Oil',
    botanicalName: 'Murraya koenigii',
    origin: 'INDIA',
  },
 {
    name: 'Tea Tree Essential Oil',
 description: '"Acne & skin blemish treatmentScalp care for dandruff controlNatural wound disinfectantAromatherapy for respiratory relief"',
 image: '/images/oil-6.png', // Replace with actual image paths
    alt: 'Frankincense Essential Oil',
    botanicalName: 'Melaleuca alternifolia',
    origin: 'INDIA',
  },
  {
    name: 'Geranium Essential Oil',
    description: '"Dermatological Care: Eczema, acne, wound healing Womens Health: Menopausal support, breast engorgementCirculatory System: Edema reduction, bruise treatment Respiratory Relief: Tonsillitis, sore throat"',
    image: '/images/oil-7.png', // Replace with actual image paths
    alt: 'Rosemary Essential Oil',
    botanicalName: 'Pelargonium graveolens',
    origin: 'INDIA',
  },
  {
    name: 'Basil Essential Oil (Sweet Basil)',
    description: '"Natural flavoring for baked goods & confectionery Condiment enhancement in sauces & dressings Sausage & processed meat seasoning Alcoholic beverage flavoring"',
    image: '/images/oil-8.png', // Replace with actual image paths
    alt: 'Orange Essential Oil',
    botanicalName: 'Ocimum basilicum L',
    origin: 'INDIA',
  },
  {
    name: 'Vetiver Essential Oil',
    description: '"Base note for luxury fragrances Natural fixative for scent longevity Aromatic modifier in floral compositions Key ingredient in masculine/cologne blends"',
    image: '/images/oil-9.png', // Replace with actual image paths
    alt: 'Chamomile Essential Oil',
    botanicalName: 'Vetiveria zizanioides (Linn) Nash',
    origin: 'INDIA',
  },
 {
    name: 'Citronella Essential Oil',
 description: '"Natural insect repellent formulations Perfumery (fresh top notes)Aromatherapy blends Household cleaning products"',
 image: '/images/oil-10.png', // Replace with actual image paths
    alt: 'Jasmine Essential Oil',
    botanicalName: 'Cymbopogon nardus Rendle',
    origin: 'INDIA',
  },
  {
    name: 'Cardamom Essential Oil',
 description: '"Flavor Industry: Gourmet food flavoring| Beverage enhancement| Bakery & confectionery /Medicinal Uses: Digestive aid formulations|Respiratory therapeutics|Antimicrobial applications"',
 image: '/images/oil-11.png', // Replace with actual image paths
    alt: 'Sandalwood Essential Oil',
    botanicalName: 'Elettaria cardamomum (L.) Maton',
    origin: 'INDIA',
  },
  {
    name: 'Ginger Essential Oil',
 description: '"Therapeutic Benefits|• Warming agent in aromatherapy• Circulatory stimulant• Digestive support"',
 image: '/images/oil-12.png', // Replace with actual image paths
    alt: 'Bergamot Essential Oil',
    botanicalName: 'Zingiber officinale Roscoe',
    origin: 'INDIA',
  },
];

const EssentialOilsPage: React.FC = () => {
  return (
    <>

    <div className="flex flex-col min-h-screen bg-background essential-oils-page font-sans">
      <Header />
      <main className="flex-grow">
        <section className="py-16 lg:py-24 bg-secondary/10">
          <Container>
            <div className="text-center mb-12 p-4"> {/* Added padding for better mobile spacing */}
              <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl">
                Our Essential Oil Collection
              </h1>
               <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-foreground/80 sm:text-xl">
               Discover our pure and potent essential oils, sourced and extracted with the highest quality standards. Explore our collection below.
               </p>
            </div>
          </Container>
        </section>

        <section className="py-12 lg:py-16 bg-background">
          <Container className="max-w-screen-lg">
            <div className="flex flex-col gap-20"> {/* Increased gap for better separation */}
              {essentialOils.map((oil, index) => (
                <div key={oil.name} className={`flex flex-col lg:flex-row items-center text-center lg:text-left gap-10 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} bg-card rounded-xl shadow-md overflow-hidden p-6`}> {/* Added background, shadow, padding, and rounded corners */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-1/2 lg:h-auto overflow-hidden flex-shrink-0">
                    <Image
                      src={oil.image}
                      alt={oil.alt}
                      width={500} // Adjusted width for larger images
                      height={500} // Adjusted height for larger images
                      objectFit="cover"
                      className="rounded-lg mx-auto"
                    />
                  </div>

                  <div className="flex flex-col justify-center flex-grow">
                    <h2 className="text-2xl font-semibold mb-2">{oil.name}</h2>
                    <p className="text-gray-700 mb-4">{oil.description}</p>
                    <div className="text-sm text-gray-600 space-y-1">
                      {oil.botanicalName && <p><strong>Botanical Name:</strong> {oil.botanicalName}</p>}
                      {oil.origin && <p><strong>Origin:</strong> {oil.origin}</p>}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section className="py-12 text-center bg-background border-t border-border/30">
          <Container>
            <p className="text-xl text-foreground/90 mb-6">
                Looking for something specific or have a custom requirement?
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/#contact">Contact Our Specialists</Link>
            </Button>
          </Container>
        </section>

      </main> {/* Closed the main tag */}
      <Footer />
    </div>
    </>
  );
}
export default EssentialOilsPage;
