"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Container } from '@/components/container';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

export function ContactSection() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("message", values.message);
    formData.append("access_key", "4069e7a7-6da9-4e3a-8992-95205ad1b35c");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    const data = await res.json();

    if (data.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll be in touch soon.",
        variant: "default",
      });
      form.reset();
    } else {
      toast({
        title: "Error",
        description: data.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-16 lg:py-24 bg-secondary/10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-lg text-foreground/80">
            We'd love to hear from you. Send us a message or find our details below.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">Contact Form</h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} className="bg-background/70 focus:bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your@email.com" {...field} className="bg-background/70 focus:bg-background" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us how we can help..."
                          rows={5}
                          {...field}
                          className="bg-background/70 focus:bg-background"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                  Send Message
                </Button>
              </form>
            </Form>
          </div>
          <div className="space-y-8">
             <h3 className="text-2xl font-semibold text-primary mb-6">Our Contact Details</h3>
             <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm">
                <Mail className="h-8 w-8 text-accent mt-1"/>
                <div className="flex flex-col space-y-2">
                    <div>
                        <h4 className="font-semibold text-primary">Contact Us</h4>
                        <a href="mailto:contactus@rivekoora.com" className="text-foreground/80 hover:text-primary">contactus@rivekoora.com</a>

                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">Sales</h4>
                        <a href="mailto:sales@rivekoora.com" className="text-foreground/80 hover:text-primary">sales@rivekoora.com</a>

                    </div>
                    <div>
                        <h4 className="font-semibold text-primary">Founder</h4>
                        <a href="mailto:poojaprem@rivekoora.com" className="text-foreground/80 hover:text-primary">poojaprem@rivekoora.com</a>

                    </div>
                    <p className="text-sm text-muted-foreground pt-2">We reply within 24 hours</p>
                </div>
             </div>



             <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm">
                <Phone className="h-8 w-8 text-accent mt-1"/>
                <div>
                    <h4 className="font-semibold text-primary">Call Us</h4>
                    <a href="tel:+61400000000" className="text-foreground/80 hover:text-primary">(+61)433794037</a>
                    <p className="text-sm text-muted-foreground">Mon - Fri, 9am - 5pm AEST</p>
                </div>
             </div>
             <div className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-sm">
                <MapPin className="h-8 w-8 text-accent mt-1"/>
                <div>
                    <h4 className="font-semibold text-primary">Visit Us (By Appointment)</h4>
                    <p className="text-foreground/80">COMING SOON......</p>
                    <p className="text-sm text-muted-foreground">Online store open 24/7</p>
                </div>
             </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
