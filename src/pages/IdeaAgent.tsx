import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Bot, Sparkles, Target, TrendingUp, Lightbulb } from "lucide-react";

const IdeaAgent = () => {
  const [prompt, setPrompt] = useState("");
  const [industry, setIndustry] = useState("");
  const [budget, setBudget] = useState("");

  const suggestions = [
    {
      title: "AI-Powered Restaurant Compliance",
      description: "Computer vision system that helps restaurants stay compliant with health regulations",
      confidence: 92,
      market: "$2.4B",
      timing: "Perfect"
    },
    {
      title: "Micro-Landlord Accounting SaaS", 
      description: "Simple accounting software specifically designed for small-scale landlords",
      confidence: 89,
      market: "$850M",
      timing: "Good"
    },
    {
      title: "Automated Resale Platform",
      description: "AI agent that automatically lists and sells your unused items across platforms",
      confidence: 85,
      market: "$1.2B", 
      timing: "Good"
    }
  ];

  const features = [
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "AI-Powered Analysis",
      description: "Advanced algorithms analyze market trends, competition, and opportunities"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "Market Validation",
      description: "Real-time data validation ensures your ideas have market potential"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Trend Integration",
      description: "Incorporates latest market trends and emerging technologies"
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Creative Ideation",
      description: "Generates unique combinations and innovative approaches"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Bot className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Idea Agent</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            AI-powered idea generation tailored to your interests, skills, and market opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Input Form */}
          <Card className="bg-card shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Generate Ideas</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">What interests you?</label>
                <Textarea
                  placeholder="Describe your interests, skills, or problems you want to solve..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="min-h-[100px]"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Industry Preference</label>
                <Input
                  placeholder="e.g., SaaS, E-commerce, Healthcare"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Budget Range</label>
                <Input
                  placeholder="e.g., $0-10K, $10K-50K, $50K+"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                />
              </div>
              
              <Button variant="gradient" className="w-full" size="lg">
                Generate Ideas
              </Button>
            </CardContent>
          </Card>

          {/* Features */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">How it works</h2>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-card rounded-lg shadow-card">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Generated Ideas */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">AI Generated Suggestions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((suggestion, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      {suggestion.confidence}% Match
                    </Badge>
                    <Badge variant="secondary">
                      {suggestion.timing} Timing
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{suggestion.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {suggestion.description}
                  </p>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Market Size:</span>
                    <span className="font-semibold text-primary">{suggestion.market}</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Explore Idea
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaAgent;