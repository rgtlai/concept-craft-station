import { useState } from "react";
import { IdeaCard } from "@/components/IdeaCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, User, Sparkles } from "lucide-react";

const Database = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const ideas = [
    {
      id: "restaurant-inspection-guard",
      title: "Restaurant Inspection Guard that predicts and prevents violations for small restaurants ($5M ARR)",
      description: "Every restaurant owner dreads surprise health inspections. That moment when an inspector walks in can tank your reputation and cost thousands in fines. ViolationGuard is your early warning system - walk around and upload some photos of your kitchen operations and it flags issues before they become violations.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      timing: true,
      better: true,
      advantage: true,
      moreCount: 14
    },
    {
      id: "landlord-accounting",
      title: "Accounting Software for Small Landlords ($10M ARR, niche down, win big)",
      description: "You bought a rental property thinking it would be passive income, but now you're a part-time accountant, maintenance coordinator, and therapist for tenants who think a clogged toilet constitutes an emergency.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      timing: true,
      better: true,
      moreCount: 8
    },
    {
      id: "auto-seller-app",
      title: "App That Automatically Sells Your Used Stuff Online",
      description: "Selling used stuff is a massive time sink. Taking photos, researching prices, posting on multiple platforms, managing inquiries - it's exhausting. Home Sale Helper automates the entire process.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      advantage: true,
      moreCount: 6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">The Idea Database</h1>
          <p className="text-xl text-muted-foreground">See opportunities with clarity</p>
        </div>
        
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search ideas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>Greg's Pick</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Sparkles className="h-4 w-4" />
                <span>AI Suggest</span>
              </Button>
              <Button variant="outline" className="flex items-center space-x-2">
                <Filter className="h-4 w-4" />
                <span>All Filters</span>
              </Button>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">SaaS</Badge>
            <Badge variant="secondary">B2B</Badge>
            <Badge variant="secondary">AI/ML</Badge>
            <Badge variant="secondary">Mobile App</Badge>
            <Badge variant="secondary">E-commerce</Badge>
            <Badge variant="secondary">FinTech</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} {...idea} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg">
            Load More Ideas
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Database;