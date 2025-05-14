import { Container } from '@/components/container';
import { Sprout } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <Container className="py-8 text-center">
        <div className="flex justify-center items-center mb-4">
          <Sprout className="h-6 w-6 text-primary mr-2" />
          <p className="text-sm text-muted-foreground">
            AromaOz &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
        <p className="text-xs text-muted-foreground/80">
          Crafted with care in Australia.
        </p>
      </Container>
    </footer>
  );
}
