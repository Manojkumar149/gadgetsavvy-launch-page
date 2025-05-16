
import React, { useState } from 'react';
import { Target, Smartphone, Search, Check, Twitter, Instagram, Mail, Clock, DollarSign, ShoppingBag, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { Progress } from "@/components/ui/progress";

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

  // Calculate days until launch (example date: June 30, 2025)
  const calculateDaysUntilLaunch = () => {
    const launchDate = new Date(2025, 5, 30); // June 30, 2025
    const today = new Date();
    const differenceInTime = launchDate.getTime() - today.getTime();
    const differenceInDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));
    return differenceInDays > 0 ? differenceInDays : 0;
  };

  const daysUntilLaunch = calculateDaysUntilLaunch();
  const launchProgress = 100 - Math.min(Math.round((daysUntilLaunch / 180) * 100), 100); // Assuming 180 days total countdown

  return (
    <div className="min-h-screen bg-gray-50 font-poppins">
      {/* Gradient overlay with tech pattern */}
      <div className="absolute inset-0 bg-tech-pattern opacity-5 pointer-events-none"></div>
      
      {/* Hero Section */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-charcoalDark mb-4 tracking-tight">
            GadgetSavvy<span className="text-electricBlue">.in</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl font-semibold text-charcoal mb-6">
            Smart Picks. Best Deals. Every Budget.
          </h2>
          
          <div className="flex flex-col md:flex-row items-center justify-center mb-10">
            <div className="w-full md:w-1/2 p-4">
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto mb-6 leading-relaxed text-left md:text-right">
                GadgetSavvy.in helps Indian users find the best gadgets within their price range
                — like "Best phones under ₹20,000" or "Top earbuds under ₹2,000." We simplify smart 
                tech buying through curated recommendations, real-time deals, and expert picks.
              </p>
              
              <div className="flex items-center justify-center md:justify-end space-x-2 mb-6">
                <span className="inline-flex items-center bg-green-50 text-green-600 text-sm px-3 py-1 rounded-full">
                  <Check className="w-4 h-4 mr-1" /> Budget-friendly
                </span>
                <span className="inline-flex items-center bg-blue-50 text-blue-600 text-sm px-3 py-1 rounded-full">
                  <Check className="w-4 h-4 mr-1" /> Unbiased
                </span>
              </div>
            </div>
            
            <div className="w-full md:w-1/2 p-4">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto transform hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-4 text-center">Get Notified on Launch</h3>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
                    className="bg-electricBlue hover:bg-electricBlueDark transition-colors w-full"
                  >
                    {isSubmitting ? "Submitting..." : "Get Early Access"}
                  </Button>
                </form>
                <p className="text-xs text-gray-500 mt-2 text-center">We respect your privacy. No spam, ever.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Launch Countdown Section */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-6 text-charcoalDark">Launching Soon</h2>
          
          <div className="bg-gray-50 rounded-lg p-6 shadow-sm mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-600">Development Progress</span>
              <span className="text-sm font-semibold">{launchProgress}%</span>
            </div>
            <Progress value={launchProgress} className="h-3" />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-3xl font-bold text-electricBlue">{daysUntilLaunch}</div>
                <div className="text-sm text-gray-600">Days until launch</div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-3xl font-bold text-electricBlue">10+</div>
                <div className="text-sm text-gray-600">Categories</div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-3xl font-bold text-electricBlue">100+</div>
                <div className="text-sm text-gray-600">Product reviews</div>
              </div>
              
              <div className="bg-white p-4 rounded shadow-sm">
                <div className="text-3xl font-bold text-electricBlue">5+</div>
                <div className="text-sm text-gray-600">Price ranges</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-charcoalDark">How It Works</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">We've simplified the tech buying process so you can find the perfect gadgets without hours of research.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={<DollarSign className="h-8 w-8 text-electricBlue" />}
              title="Budget-Based Recommendations"
              description="Find the perfect gadget that fits your specific budget without overspending"
            />
            
            <FeatureCard 
              icon={<ShoppingBag className="h-8 w-8 text-electricBlue" />}
              title="Curated Gadget Picks"
              description="Expert-selected products based on performance, reliability, and value"
            />
            
            <FeatureCard 
              icon={<Clock className="h-8 w-8 text-electricBlue" />}
              title="Real-Time Deal Tracking"
              description="Never miss a price drop or special offer on your desired tech products"
            />
            
            <FeatureCard 
              icon={<Info className="h-8 w-8 text-electricBlue" />}
              title="Honest, No-Fluff Advice"
              description="Straight-to-the-point reviews without unnecessary tech jargon"
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-6 text-charcoalDark">Why GadgetSavvy.in?</h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">Our platform is designed with Indian consumers in mind, focusing on what matters most.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-16 max-w-4xl mx-auto">
            <BenefitItem text="Saves hours of research" />
            <BenefitItem text="Always up to date with best offers" />
            <BenefitItem text="Tailored to Indian buyers" />
            <BenefitItem text="Clean, ad-free suggestions" />
          </div>
          
          <div className="mt-16 bg-gray-50 rounded-lg p-8 max-w-3xl mx-auto shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-center">What You'll Get</h3>
            
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </span>
                <span>Personalized gadget recommendations based on your budget</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </span>
                <span>Price drop alerts for products you're interested in</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </span>
                <span>Comparisons that focus on what actually matters to real users</span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                  <Check className="h-4 w-4 text-green-600" />
                </span>
                <span>Regular updates on the latest tech trends and releases in India</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-charcoalDark">What Our Users Say</h2>
          <p className="text-lg text-gray-600 mb-8">Coming soon! Watch this space for testimonials from our early adopters.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 opacity-70">
            <TestimonialCard
              stars={5}
              quote="Can't wait to see the final product! The concept sounds exactly what I need."
              author="Future User"
            />
            
            <TestimonialCard
              stars={5}
              quote="As someone who struggles with tech decisions, this sounds perfect!"
              author="Future User"
            />
            
            <TestimonialCard
              stars={5}
              quote="Looking forward to budget-friendly recommendations that actually work."
              author="Future User"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoalDark">Frequently Asked Questions</h2>
          
          <div className="space-y-8">
            <FAQItem 
              question="When will GadgetSavvy.in launch?" 
              answer="We're planning to launch by mid-2025. Sign up with your email to be notified as soon as we go live!" 
            />
            
            <FAQItem 
              question="Is GadgetSavvy.in free to use?" 
              answer="Yes! Our platform will be completely free for all users. We may offer premium features in the future, but our core recommendations will always be free." 
            />
            
            <FAQItem 
              question="How do you choose which products to recommend?" 
              answer="Our team of tech experts evaluates products based on performance, reliability, user reviews, and value for money. We focus especially on the needs of Indian consumers." 
            />
            
            <FAQItem 
              question="Will you cover all types of gadgets?" 
              answer="We'll start with the most popular categories like smartphones, laptops, audio devices, and smart home products, then expand based on user feedback." 
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-tech-gradient text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to make smarter tech decisions?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">Join our waiting list today and be the first to experience GadgetSavvy.in when we launch.</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row max-w-md mx-auto gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              className="flex-grow bg-white/20 placeholder:text-white/70 border-white/30 text-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="bg-white text-electricBlue hover:bg-gray-100 transition-colors"
            >
              {isSubmitting ? "Submitting..." : "Get Notified"}
            </Button>
          </form>
        </div>
      </section>
      
      {/* Social Links & Contact */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold mb-8">Connect With Us</h2>
          
          <div className="flex justify-center gap-8">
            <a href="#" className="hover:opacity-80 transition-opacity group">
              <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all">
                <Twitter className="h-8 w-8 text-electricBlue" />
              </div>
              <span className="sr-only">Twitter</span>
            </a>
            
            <a href="#" className="hover:opacity-80 transition-opacity group">
              <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all">
                <Instagram className="h-8 w-8 text-electricBlue" />
              </div>
              <span className="sr-only">Instagram</span>
            </a>
            
            <a href="mailto:contact@gadgetsavvy.in" className="hover:opacity-80 transition-opacity group">
              <div className="bg-white p-3 rounded-full shadow-sm group-hover:shadow-md transition-all">
                <Mail className="h-8 w-8 text-electricBlue" />
              </div>
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="py-8 bg-charcoalDark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">GadgetSavvy<span className="text-electricBlue">.in</span></h2>
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
  <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-4 p-3 bg-blue-50 rounded-full">
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

const TestimonialCard = ({ stars, quote, author }: { stars: number, quote: string, author: string }) => (
  <Card className="hover:shadow-md transition-shadow">
    <CardContent className="pt-6">
      <div className="flex justify-center text-yellow-400 mb-2">
        {Array(stars).fill(0).map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="mt-4 italic text-gray-700">"{quote}"</p>
      <p className="font-semibold mt-4 text-charcoal">{author}</p>
    </CardContent>
  </Card>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="border-b border-gray-200 pb-6">
    <h3 className="text-xl font-semibold mb-2 text-charcoalDark">{question}</h3>
    <p className="text-gray-600">{answer}</p>
  </div>
);

export default Index;
