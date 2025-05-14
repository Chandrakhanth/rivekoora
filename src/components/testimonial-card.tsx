import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  avatarText: string;
  avatarImageUrl?: string;
  rating: number;
  isUserAdded?: boolean; 
  // email and phone are collected but not displayed
}

interface TestimonialCardProps extends Testimonial {
  className?: string;
}

export function TestimonialCard({ 
  quote, 
  name, 
  avatarText, 
  avatarImageUrl, 
  rating, 
  className 
}: TestimonialCardProps) {

  return (
    <Card 
      className={cn(
        "bg-card shadow-lg h-full flex flex-col", 
        className
      )}
      aria-label={`Testimonial by ${name}`}
    >
      <CardContent className="p-6 flex-grow flex flex-col items-center text-center">
        <Avatar className="w-16 h-16 mb-4 border-2 border-primary">
          {avatarImageUrl && <AvatarImage src={avatarImageUrl} alt={name} data-ai-hint="person portrait" />}
          <AvatarFallback className="bg-primary/20 text-primary font-semibold">{avatarText}</AvatarFallback>
        </Avatar>
        <div className="flex mb-3">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`h-5 w-5 ${i < rating ? 'fill-accent text-accent' : 'text-muted-foreground/50'}`}
            />
          ))}
        </div>
        <blockquote className="text-foreground/80 italic leading-relaxed mb-4 text-sm">
          "{quote}"
        </blockquote>
        <p className="font-semibold text-primary mt-auto text-base">{name}</p>
      </CardContent>
    </Card>
  );
}
