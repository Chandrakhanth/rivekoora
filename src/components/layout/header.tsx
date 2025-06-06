"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Our Scents', href: '/our-scents' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileScentsOpen, setIsMobileScentsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md border-b border-border/30"
          : "bg-transparent backdrop-blur-md border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => {
            if (item.label === "Our Scents") {
              return (
                <DropdownMenu key={item.label}>
                  <div className="relative group">
                    <DropdownMenuTrigger
                      className={cn(
                        "text-sm font-medium transition-colors flex items-center space-x-1",
                        isScrolled ? "text-foreground/90" : "text-black hover:text-primary"
                      )}
                    >
                      <span>{item.label}</span>
                      <ChevronDown className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem asChild>
                        <Link href="/our-scents">Our Scent Collection</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem asChild>
                        <Link href="/essential-oils">Our Essential Oil Collection</Link>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </div>
                </DropdownMenu>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium hover:text-primary transition-colors",
                  isScrolled ? "text-foreground/90" : "text-black hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn(
                  isScrolled ? "text-foreground/90" : "text-black hover:text-primary"
                )}
              >
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col space-y-6">
                <div className="flex justify-between items-center">
                  <Logo />
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetClose>
                </div>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => {
                    if (item.label === "Our Scents") {
                      return (
                        <div key={item.label}>
                          <button
                            onClick={() => setIsMobileScentsOpen(!isMobileScentsOpen)}
                            className="text-lg font-medium text-foreground hover:text-primary flex items-center justify-between w-full py-2"
                          >
                            <span>Our Scents</span>
                            <ChevronDown
                              className={cn(
                                "h-5 w-5 transition-transform",
                                isMobileScentsOpen && "rotate-180"
                              )}
                            />
                          </button>
                          {isMobileScentsOpen && (
                            <div className="pl-4 space-y-2">
                              <SheetClose asChild>
                                <Link
                                  href="/our-scents"
                                  className="block text-foreground hover:text-primary"
                                >
                                  Our Scent Collection
                                </Link>
                              </SheetClose>
                              <SheetClose asChild>
                                <Link
                                  href="/essential-oils"
                                  className="block text-foreground hover:text-primary"
                                >
                                  Our Essential Oil Collection
                                </Link>
                              </SheetClose>
                            </div>
                          )}
                        </div>
                      );
                    }

                    return (
                      <SheetClose key={item.label} asChild>
                        <Link
                          href={item.href}
                          className="text-lg font-medium text-foreground hover:text-primary transition-colors py-2"
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    );
                  })}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
