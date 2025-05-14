import Image from 'next/image';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Leaf } from 'lucide-react';

interface ProductCardProps {
  name: string;
  description: string;
  price: string;
  imageUrl: string;
  imageHint?: string;
}

export function ProductCard({ name, description, price, imageUrl, imageHint = "product" }: ProductCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card">
      <CardHeader className="p-0">
        <div className="aspect-w-4 aspect-h-3">
          <Image
            src={imageUrl}
            alt={name}
            width={400}
            height={300}
            className="object-cover w-full h-full"
            data-ai-hint={imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="text-xl font-semibold text-primary mb-2">{name}</CardTitle>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="p-6 pt-0 flex justify-between items-center">
        <p className="text-lg font-bold text-accent">{price}</p>
        <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
          <Leaf className="mr-2 h-4 w-4" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}
