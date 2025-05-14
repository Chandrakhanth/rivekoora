// @ts-nocheck
"use client";

import React, { useState, useEffect, CSSProperties } from 'react';
import Slider from 'react-slick';
import { Container } from '@/components/container';
import { TestimonialCard, type Testimonial } from '@/components/testimonial-card';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import { Edit3, Trash2, Star } from 'lucide-react';
import { cn } from '@/lib/utils';


const initialTestimonialsData: Testimonial[] = [
  {
    id: '1',
    quote: "RIVE KOORA products have transformed my home into a sanctuary. The scents are so natural and calming. I love the Eucalyptus Breeze oil!",
    name: 'Sarah L.',
    avatarText: 'SL',
    avatarImageUrl: 'https://placehold.co/100x100.png',
    rating: 5,
    isUserAdded: false, // Initially, these are not user-added for delete demo
  },
  {
    id: '2',
    quote: "The Lavender Calm Balm is my new go-to for unwinding after a long day. Incredible quality and smells divine. Highly recommend!",
    name: 'John B.',
    avatarText: 'JB',
    rating: 5,
    isUserAdded: false,
  },
  {
    id: '3',
    quote: "I'm so impressed with the commitment to natural ingredients. You can really tell the difference. The Sandalwood candle is simply luxurious.",
    name: 'Emily K.',
    avatarText: 'EK',
    avatarImageUrl: 'https://placehold.co/100x100.png',
    rating: 4,
    isUserAdded: false,
  },
];

const ReviewForm = ({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Testimonial, 'id' | 'avatarText' | 'isUserAdded' | 'avatarImageUrl'>) => void;
  // initialData prop removed as editing is removed
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const { toast } = useToast();

  useEffect(() => {
    // Reset form when it opens for a new review
    if (isOpen) {
      setName('');
      setEmail('');
      setPhone('');
      setQuote('');
      setRating(5);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !quote || !email) {
      toast({ title: "Missing Fields", description: "Please fill in name, email, and your review.", variant: "destructive" });
      return;
    }
    onSubmit({ 
      name, 
      email, 
      phone, 
      quote, 
      rating 
    });
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[425px] bg-card">
        <DialogHeader>
          <DialogTitle>Write a Review</DialogTitle>
          <DialogDescription>
            Share your experience with our products. We'd love to hear from you!
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3 bg-background/70 focus:bg-background" placeholder="Your Name" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="col-span-3 bg-background/70 focus:bg-background" placeholder="your@email.com" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="phone" className="text-right">Phone <span className="text-xs text-muted-foreground">(Optional)</span></Label>
            <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className="col-span-3 bg-background/70 focus:bg-background" placeholder="Your Phone Number" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="rating" className="text-right">Rating</Label>
            <div className="col-span-3 flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={cn(
                    "h-6 w-6 cursor-pointer",
                    rating >= star ? 'fill-accent text-accent' : 'text-muted-foreground/50 hover:text-accent/70'
                  )}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="review" className="text-right">Review</Label>
            <Textarea id="review" value={quote} onChange={(e) => setQuote(e.target.value)} className="col-span-3 bg-background/70 focus:bg-background" placeholder="Your review..." rows={4} />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">Submit Review</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

// Dialog for confirming deletion
const ConfirmDeleteDialog = ({
  isOpen,
  onClose,
  onConfirm,
  testimonialName,
  testimonialQuote,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  testimonialName?: string;
  testimonialQuote?: string;
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md bg-card">
        <DialogHeader>
          <DialogTitle>Confirm Deletion</DialogTitle>
          <DialogDescription>
            Are you sure you want to delete this review by "{testimonialName}"? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>
        {testimonialQuote && (
          <div className="py-4">
            <p className="text-sm text-muted-foreground">Review:</p>
            <blockquote className="mt-1 text-sm italic border-l-2 pl-2">"{testimonialQuote}"</blockquote>
          </div>
        )}
        <DialogFooter className="sm:justify-end">
           <DialogClose asChild>
             <Button type="button" variant="outline">Cancel</Button>
           </DialogClose>
           <Button
            type="button"
            variant="destructive"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            <Trash2 className="mr-2 h-4 w-4" /> Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};


export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonialsData);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [testimonialToManage, setTestimonialToManage] = useState<Testimonial | null>(null);
  const [isConfirmDeleteDialogOpen, setIsConfirmDeleteDialogOpen] = useState(false);
  const { toast } = useToast();

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: testimonials.length > 2,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  const handleAddReview = (data: Omit<Testimonial, 'id' | 'avatarText' | 'isUserAdded' | 'avatarImageUrl'>) => {
    const avatarText = data.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
    const newReview: Testimonial = {
      ...data,
      id: Date.now().toString(),
      avatarText,
      avatarImageUrl: `https://placehold.co/100x100.png?text=${avatarText}`,
      isUserAdded: true, // Mark as user-added
    };
    setTestimonials(prev => [newReview, ...prev]); // Add to the beginning
    toast({ title: "Review Submitted!", description: "Thank you for your feedback!" });
  };
  
  const handleDeleteReview = (testimonialId: string) => {
    setTestimonials(prev => prev.filter(t => t.id !== testimonialId));
    toast({ title: "Review Deleted", description: "Your review has been removed.", variant: "default" });
    setTestimonialToManage(null);
    setIsConfirmDeleteDialogOpen(false);
  };

  const openDeleteConfirm = (testimonial: Testimonial) => {
    if (testimonial.isUserAdded || initialTestimonialsData.find(t => t.id === testimonial.id)) { // Allow deleting initial ones for demo
      setTestimonialToManage(testimonial);
      setIsConfirmDeleteDialogOpen(true);
    } else {
      // Optionally, inform user they can't delete this one
      // toast({ title: "Action Not Allowed", description: "This review cannot be deleted.", variant: "destructive" });
    }
  };


  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-background opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Voices of Our Community</h2>
          <p className="mt-4 text-lg text-foreground/80">
            Real experiences from our valued customers.
          </p>
        </div>
      </Container>

      {testimonials.length > 0 ? (
        <div className="testimonials-slider w-full px-4 md:px-0">
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="h-full">
                <TestimonialCard 
                  {...testimonial} 
                  onClick={() => {
                    // Only allow deleting for user-added or if it's an initial one (for demo)
                    if (testimonial.isUserAdded || initialTestimonialsData.some(t => t.id === testimonial.id)) {
                       openDeleteConfirm(testimonial);
                    }
                  }}
                  // Pass a flag if the card should be interactive (e.g., show hover effects)
                  isInteractive={testimonial.isUserAdded || initialTestimonialsData.some(t => t.id === testimonial.id)}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <Container>
          <p className="text-center text-muted-foreground">No testimonials yet. Be the first to write one!</p>
        </Container>
      )}
      
      <Container>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => {
              setIsReviewFormOpen(true);
            }}
          >
            <Edit3 className="mr-2 h-5 w-5" />
            Write a Review
          </Button>
        </div>
      </Container>

      <ReviewForm
        isOpen={isReviewFormOpen}
        onClose={() => setIsReviewFormOpen(false)}
        onSubmit={handleAddReview}
      />
      
      {testimonialToManage && (
         <ConfirmDeleteDialog
            isOpen={isConfirmDeleteDialogOpen}
            onClose={() => setIsConfirmDeleteDialogOpen(false)}
            onConfirm={() => handleDeleteReview(testimonialToManage.id)}
            testimonialName={testimonialToManage.name}
            testimonialQuote={testimonialToManage.quote}
         />
      )}

    </section>
  );
}
