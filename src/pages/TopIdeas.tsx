import { IdeaCard } from "@/components/IdeaCard";
import { Trophy, TrendingUp, Flame } from "lucide-react";

const TopIdeas = () => {
  const topIdeas = [
    {
      id: "landlord-accounting",
      title: "Accounting Software for Small Landlords ($10M ARR, niche down, win big)",
      description: "You bought a rental property thinking it would be passive income, but now you're a part-time accountant, maintenance coordinator, and therapist for tenants who think a clogged toilet constitutes an emergency.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      timing: true,
      better: true,
      ranking: 1
    },
    {
      id: "auto-seller-app",
      title: "App That Automatically Sells Your Used Stuff Online",
      description: "Selling used stuff is a massive time sink. Taking photos, researching prices, posting on multiple platforms, managing inquiries - it's exhausting. Home Sale Helper automates the entire process.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      advantage: true,
      ranking: 2
    },
    {
      id: "restaurant-inspection-guard",
      title: "Restaurant Inspection Guard that predicts and prevents violations for small restaurants ($5M ARR)",
      description: "Every restaurant owner dreads surprise health inspections. That moment when an inspector walks in can tank your reputation and cost thousands in fines. ViolationGuard is your early warning system.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop&crop=entropy&cs=tinysrgb",
      timing: true,
      better: true,
      advantage: true,
      ranking: 3
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Trophy className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Ideas Leaderboard</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The most popular ideas based on votes, saves, and overall engagement—updated all the time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {topIdeas.map((idea) => (
            <IdeaCard key={idea.id} {...idea} />
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Rising Fast</h3>
            <p className="text-muted-foreground">Ideas gaining momentum in the community</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <Flame className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Hot This Week</h3>
            <p className="text-muted-foreground">Most discussed ideas in the past 7 days</p>
          </div>
          <div className="text-center p-6 bg-card rounded-lg shadow-card">
            <Trophy className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">All-Time Favorites</h3>
            <p className="text-muted-foreground">The most loved ideas of all time</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopIdeas;