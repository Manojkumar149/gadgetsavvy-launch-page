import React, { useState } from 'react';
import { Target, Smartphone, Search, Check, Twitter, Instagram, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";

const Index = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error("Please enter your email address");
      return;
    }
    
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      toast.success("Thank you! We'll notify you when we launch.");
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Gradient overlay with tech pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5 pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          {/* Logo Placeholder - removed actual logo */}
          <div className="flex justify-center mb-6">
            <div className="h-28 w-28 bg-electricBlue rounded-lg flex items-center justify-center text-white text-2xl font-bold">
              GS
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoalDark mb-4 tracking-tight">
            GadgetSavvy<span className="text-electricBlue">.in</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-semibold text-charcoal mb-6">
            Smart Picks. Best Deals. Every Budget.
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            GadgetSavvy.in helps Indian users find the best gadgets within their price range
            — like "Best phones under ₹20,000" or "Top earbuds under ₹2,000." We simplify smart 
            tech buying through curated recommendations, real-time deals, and expert picks.
          </p>
          
          {/* Email Form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Your email address"
                className="flex-grow"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="bg-electricBlue hover:bg-electricBlueDark transition-colors"
              >
                {isSubmitting ? "Submitting..." : "Get Notified on Launch"}
              </Button>
            </form>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoalDark">How It Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<Target className="h-8 w-8 text-electricBlue" />}
              title="Budget-Based Recommendations"
              description="Find the perfect gadget that fits your specific budget without overspending"
            />
            
            <FeatureCard 
              icon={<Smartphone className="h-8 w-8 text-electricBlue" />}
              title="Curated Gadget Picks"
              description="Expert-selected products based on performance, reliability, and value"
            />
            
            <FeatureCard 
              icon={<Search className="h-8 w-8 text-electricBlue" />}
              title="Real-Time Deal Tracking"
              description="Never miss a price drop or special offer on your desired tech products"
            />
            
            <FeatureCard 
              icon={<Check className="h-8 w-8 text-electricBlue" />}
              title="Honest, No-Fluff Advice"
              description="Straight-to-the-point reviews without unnecessary tech jargon"
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoalDark">Why GadgetSavvy.in?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 max-w-4xl mx-auto">
            <BenefitItem text="Saves hours of research" />
            <BenefitItem text="Always up to date with best offers" />
            <BenefitItem text="Tailored to Indian buyers" />
            <BenefitItem text="Clean, ad-free suggestions" />
          </div>
        </div>
      </section>
      
      {/* Testimonials Placeholder Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-charcoalDark">What Our Users Say</h2>
          <p className="text-lg text-gray-600 mb-8">Coming soon! Watch this space for testimonials from our early adopters.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-50">
            {/* Placeholder testimonials */}
            <Card>
              <CardContent className="pt-6">
                <p className="italic text-gray-600">★★★★★</p>
                <p className="mt-4">"Testimonial placeholder"</p>
                <p className="font-semibold mt-4">Future User</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <p className="italic text-gray-600">★★★★★</p>
                <p className="mt-4">"Testimonial placeholder"</p>
                <p className="font-semibold mt-4">Future User</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <p className="italic text-gray-600">★★★★★</p>
                <p className="mt-4">"Testimonial placeholder"</p>
                <p className="font-semibold mt-4">Future User</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Social Links & Contact */}
      <section className="py-12 bg-tech-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          
          <div className="flex justify-center gap-8">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Twitter className="h-8 w-8" />
              <span className="sr-only">Twitter</span>
            </a>
            
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="h-8 w-8" />
              <span className="sr-only">Instagram</span>
            </a>
            
            <a href="mailto:contact@gadgetsavvy.in" className="hover:opacity-80 transition-opacity">
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-charcoalDark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4">Made with ❤️ by Gadget enthusiasts in India</p>
            <div>
              <a href="#" className="text-sm text-electricBlue hover:underline">Privacy Policy</a>
              <span className="mx-2">•</span>
              <a href="#" className="text-sm text-electricBlue hover:underline">Terms of Service</a>
            </div>
            <p className="text-xs text-gray-500 mt-4">© 2025 GadgetSavvy.in. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Helper components
const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm">
    <div className="mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-charcoalDark">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const BenefitItem = ({ text }: { text: string }) => (
  <div className="flex items-center">
    <div className="flex-shrink-0">
      <div className="h-8 w-8 rounded-full bg-electricBlue flex items-center justify-center">
        <Check className="h-5 w-5 text-white" />
      </div>
    </div>
    <p className="ml-4 text-lg text-gray-700">{text}</p>
  </div>
);

export default Index;
