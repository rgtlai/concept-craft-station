import { HeroSection } from "@/components/HeroSection";
import { IdeaCard } from "@/components/IdeaCard";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, Bookmark, Share } from "lucide-react";

const Home = () => {
  const featuredIdea = {
    id: "restaurant-inspection-guard",
    title: "Restaurant Inspection Guard that predicts and prevents violations for small restaurants ($5M ARR)",
    description: "Every restaurant owner dreads surprise health inspections. That moment when an inspector walks in can tank your reputation and cost thousands in fines. ViolationGuard is your early warning system - walk around and upload some photos of your kitchen operations and it flags issues before they become violations.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=400&fit=crop&crop=entropy&cs=tinysrgb",
    timing: true,
    better: true,
    advantage: true,
    moreCount: 14
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Idea of the Day */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Idea of the Day
            </h2>
            
            <div className="flex items-center justify-center space-x-8 mb-8">
              <Button variant="ghost" size="sm">
                <ChevronLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span>Sep 13, 2025</span>
              </div>
              <Button variant="ghost" size="sm">
                Next Idea
                <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4 mr-2" />
                Idea Actions
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4" />
              </Button>
              <Button variant="gradient" size="sm">
                Build This Idea
              </Button>
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <IdeaCard {...featuredIdea} />
          </div>
        </div>
      </section>
      
      {/* Additional sections can be added here */}
    </div>
  );
};

export default Home;