import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ProductCardProps {
  name: string;
  description: string;
  imageUrl: string;
  imageHint?: string;
}

export function ProductCard({ name, description, imageUrl, imageHint = "product" }: ProductCardProps) {
  return (
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card w-full">
      <div className="md:flex">
        <div className="md:w-1/3 lg:w-1/4 xl:w-1/5 md:shrink-0">
          <Image
            src={imageUrl}
            alt={name}
            width={300}
            height={300} // Make it square-ish for the side image
            className="object-cover w-full h-48 md:h-full"
            data-ai-hint={imageHint}
          />
        </div>
        <div className="p-6 flex flex-col justify-center md:w-2/3 lg:w-3/4 xl:w-4/5">
          <CardTitle className="text-2xl font-semibold text-primary mb-3">{name}</CardTitle>
          <p className="text-base text-foreground/80 leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
}
