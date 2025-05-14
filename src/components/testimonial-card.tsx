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
  isUserAdded?: boolean; // To identify user-added reviews
  // email and phone are collected but not displayed
}

interface TestimonialCardProps extends Testimonial {
  onClick?: () => void;
  className?: string;
}

export function TestimonialCard({ 
  quote, 
  name, 
  avatarText, 
  avatarImageUrl, 
  rating, 
  isUserAdded,
  onClick,
  className 
}: TestimonialCardProps) {
  const canInteract = isUserAdded || onClick; // Enable interaction if it's user-added or an onClick handler is provided

  return (
    <Card 
      className={cn(
        "bg-card shadow-lg h-full flex flex-col", 
        canInteract ? "cursor-pointer hover:shadow-xl transition-shadow" : "",
        className
      )}
      onClick={onClick}
      tabIndex={canInteract ? 0 : -1} // Make it focusable if clickable
      onKeyDown={(e) => {
        if (canInteract && (e.key === 'Enter' || e.key === ' ')) {
          onClick?.();
        }
      }}
      role={canInteract ? "button" : undefined}
      aria-pressed={canInteract ? "false" : undefined} // Consider 'true' if a modal opens, depends on exact interaction
      aria-label={canInteract ? `Edit or delete review by ${name}` : `Testimonial by ${name}`}
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
