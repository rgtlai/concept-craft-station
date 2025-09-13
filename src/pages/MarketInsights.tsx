import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BarChart3, PieChart, TrendingUp, Target, DollarSign, Users } from "lucide-react";

const MarketInsights = () => {
  const insights = [
    {
      title: "Restaurant Tech Market",
      size: "$24.3B",
      growth: "+12.4%",
      description: "Growing demand for compliance and automation tools",
      opportunities: 157,
      icon: <Target className="h-6 w-6" />
    },
    {
      title: "Property Management Software",
      size: "$2.9B",
      growth: "+8.7%", 
      description: "Small landlords underserved by existing solutions",
      opportunities: 89,
      icon: <DollarSign className="h-6 w-6" />
    },
    {
      title: "AI Agent Platforms",
      size: "$15.7B",
      growth: "+34.2%",
      description: "Automation of manual tasks across industries",
      opportunities: 234,
      icon: <Users className="h-6 w-6" />
    }
  ];

  const competitorAnalysis = [
    {
      name: "ServeScape",
      market: "Restaurant Tech",
      strength: "Brand Recognition",
      weakness: "High Pricing",
      opportunity: "SMB Market"
    },
    {
      name: "PropertyHub",
      market: "Property Management", 
      strength: "Feature Rich",
      weakness: "Complex UX",
      opportunity: "Simple Tools"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <BarChart3 className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Market Insights</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Deep market analysis to validate your startup ideas with data-driven insights
          </p>
        </div>

        {/* Market Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Market Opportunities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {insights.map((insight, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {insight.icon}
                    </div>
                    <Badge variant="outline" className="text-green-600 border-green-200">
                      {insight.growth}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">{insight.size}</div>
                  <p className="text-muted-foreground text-sm mb-4">{insight.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {insight.opportunities} opportunities found
                    </span>
                    <Button variant="outline" size="sm">
                      Explore
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Competitor Analysis */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Competitive Landscape</h2>
          <Card className="bg-card shadow-card">
            <CardContent className="p-6">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-4 font-semibold">Competitor</th>
                      <th className="text-left p-4 font-semibold">Market</th>
                      <th className="text-left p-4 font-semibold">Strength</th>
                      <th className="text-left p-4 font-semibold">Weakness</th>
                      <th className="text-left p-4 font-semibold">Opportunity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {competitorAnalysis.map((competitor, index) => (
                      <tr key={index} className="border-b hover:bg-muted/50">
                        <td className="p-4 font-medium">{competitor.name}</td>
                        <td className="p-4">
                          <Badge variant="outline">{competitor.market}</Badge>
                        </td>
                        <td className="p-4 text-green-600">{competitor.strength}</td>
                        <td className="p-4 text-red-600">{competitor.weakness}</td>
                        <td className="p-4 text-primary">{competitor.opportunity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Market Analysis Tools */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Analysis Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <PieChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Market Sizing</h3>
                <p className="text-sm text-muted-foreground">Calculate TAM, SAM, SOM</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Growth Analysis</h3>
                <p className="text-sm text-muted-foreground">Market growth trends</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Competitor Map</h3>
                <p className="text-sm text-muted-foreground">Positioning analysis</p>
              </CardContent>
            </Card>
            
            <Card className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Customer Insights</h3>
                <p className="text-sm text-muted-foreground">User behavior data</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketInsights;