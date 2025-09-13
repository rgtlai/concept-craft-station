import { Button } from "@/components/ui/button";
import { PlayCircle } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative py-20 px-4">
      <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">#1</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
              The #1 Software to Spot Trends and Startup Ideas Worth Building.
            </h1>
          </div>
          
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Button variant="gradient" size="lg" className="shadow-elegant">
              Browse Ideas
            </Button>
            <Button variant="ghost" size="lg" className="flex items-center space-x-2">
              <PlayCircle className="h-5 w-5" />
              <span>Watch Demo</span>
            </Button>
          </div>
          
          <div className="bg-card rounded-lg shadow-card p-8 max-w-2xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop&crop=entropy&cs=tinysrgb" 
              alt="Platform Overview" 
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};