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
    isUserAdded: false,
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
  initialData,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Omit<Testimonial, 'id' | 'avatarText' | 'isUserAdded' | 'avatarImageUrl'> & { id?: string }) => void;
  initialData?: Testimonial | null;
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [quote, setQuote] = useState('');
  const [rating, setRating] = useState(5);
  const { toast } = useToast();

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setQuote(initialData.quote);
      setRating(initialData.rating);
      // Email and phone are not typically part of testimonial display, so not pre-filled for edit
      setEmail(''); 
      setPhone('');
    } else {
      setName('');
      setEmail('');
      setPhone('');
      setQuote('');
      setRating(5);
    }
  }, [initialData, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !quote || !email) {
      toast({ title: "Missing Fields", description: "Please fill in name, email, and your review.", variant: "destructive" });
      return;
    }
    onSubmit({ 
      id: initialData?.id, 
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
          <DialogTitle>{initialData ? 'Edit Your Review' : 'Write a Review'}</DialogTitle>
          <DialogDescription>
            {initialData ? 'Update your experience with us.' : 'Share your experience with our products. We\'d love to hear from you!'}
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
            <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground">{initialData ? 'Save Changes' : 'Submit Review'}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};


export function TestimonialsSection() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonialsData);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [editingTestimonial, setEditingTestimonial] = useState<Testimonial | null>(null);
  const { toast } = useToast();

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: testimonials.length > 2, // loop if enough items
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

  const handleAddOrUpdateReview = (data: Omit<Testimonial, 'id' | 'avatarText' | 'isUserAdded' | 'avatarImageUrl'> & { id?: string }) => {
    const avatarText = data.name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
    if (data.id) { // Editing existing
      setTestimonials(prev => prev.map(t => t.id === data.id ? { ...t, ...data, avatarText, isUserAdded: true } : t));
      toast({ title: "Review Updated", description: "Your review has been successfully updated." });
    } else { // Adding new
      const newReview: Testimonial = {
        ...data,
        id: Date.now().toString(),
        avatarText,
        avatarImageUrl: `https://placehold.co/100x100.png?text=${avatarText}`, // Placeholder with initials
        isUserAdded: true,
      };
      setTestimonials(prev => [...prev, newReview]);
      toast({ title: "Review Submitted!", description: "Thank you for your feedback!" });
    }
    setEditingTestimonial(null);
  };

  const handleEditReview = (testimonial: Testimonial) => {
    if (!testimonial.isUserAdded && !initialTestimonialsData.find(t => t.id === testimonial.id)?.isUserAdded) {
        // For this prototype, allow editing of initial data as well or mark them editable
        // In a real app, you'd likely only allow editing of user-submitted reviews linked to their account
    }
    setEditingTestimonial(testimonial);
    setIsReviewFormOpen(true);
  };
  
  const handleDeleteReview = (testimonialId: string) => {
    // For prototype, allow deleting any if editable. 
    // In real app, check ownership.
    setTestimonials(prev => prev.filter(t => t.id !== testimonialId));
    toast({ title: "Review Deleted", description: "Your review has been removed.", variant: "destructive" });
    setEditingTestimonial(null); 
    setIsReviewFormOpen(false); // Close form if it was open for this review
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
        <div className="testimonials-slider w-full px-4 md:px-0"> {/* Added padding for smaller screens, removed for md+ for Container effect */}
          <Slider {...sliderSettings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="h-full">
                <TestimonialCard 
                  {...testimonial} 
                  onClick={() => {
                    // Only allow editing/deleting for user-added or specifically marked editable ones
                    // For this demo, we'll allow editing of any for simplicity if `isUserAdded` is true or if it's an initial one
                    // This logic can be refined based on actual requirements (e.g. if initial ones can be edited by admins)
                    setEditingTestimonial(testimonial);
                    setIsReviewFormOpen(true);
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No testimonials yet. Be the first to write one!</p>
      )}
      
      <Container>
        <div className="mt-12 text-center">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => {
              setEditingTestimonial(null); // Ensure it's a new review
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
        onClose={() => {
          setIsReviewFormOpen(false);
          setEditingTestimonial(null);
        }}
        onSubmit={handleAddOrUpdateReview}
        initialData={editingTestimonial}
      />
      
      {/* Dialog for confirming delete, if needed, or handling edit/delete in one form */}
      {editingTestimonial && isReviewFormOpen && (
         <Dialog open={!!editingTestimonial && isReviewFormOpen && !!editingTestimonial.id} onOpenChange={(open) => {
            if (!open) {
              setEditingTestimonial(null);
              setIsReviewFormOpen(false);
            }
         }}>
            <DialogContent className="sm:max-w-md bg-card">
                 <DialogHeader>
                    <DialogTitle>Manage Your Review</DialogTitle>
                 </DialogHeader>
                 <div className="py-4">
                    <p className="text-sm text-muted-foreground mb-4">You are about to manage the review by "{editingTestimonial.name}".</p>
                    <p className="mb-2 text-sm"><em>"{editingTestimonial.quote}"</em></p>
                 </div>
                 <DialogFooter className="sm:justify-between">
                    <Button
                        type="button"
                        variant="destructive"
                        onClick={() => handleDeleteReview(editingTestimonial.id)}
                        className="sm:mr-auto"
                    >
                        <Trash2 className="mr-2 h-4 w-4" /> Delete
                    </Button>
                    <div>
                        <DialogClose asChild>
                            <Button type="button" variant="outline" className="mr-2">Cancel</Button>
                        </DialogClose>
                        {/* The main form handles "Save Changes" */}
                    </div>
                 </DialogFooter>
            </DialogContent>
         </Dialog>
      )}

    </section>
  );
}
