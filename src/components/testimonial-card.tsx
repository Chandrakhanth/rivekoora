import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  avatarText: string;
  avatarImageUrl?: string;
  rating: number;
}

export function TestimonialCard({ quote, name, avatarText, avatarImageUrl, rating }: TestimonialCardProps) {
  return (
    <Card className="bg-card shadow-lg h-full flex flex-col">
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
        <blockquote className="text-foreground/80 italic leading-relaxed mb-4">
          "{quote}"
        </blockquote>
        <p className="font-semibold text-primary mt-auto">{name}</p>
      </CardContent>
    </Card>
  );
}
// Note: mt-auto_REMOVE_THIS_LINE_IF_IT_CAUSES_ISSUES on the name paragraph is to push it to the bottom if card heights vary.
// It might be better to ensure all cards in a row have the same height via grid styling if this causes problems.
// For now, simple `mt-auto` will attempt this. It was `mt-auto` before, changed to ensure the build passes.
// Corrected: it should be within a flex container to work effectively.
// The structure is: CardContent is flex-grow and flex-col. The name should be last.
// The parent CardContent is already flex flex-col, so mt-auto on the name should work.
