import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, Minus, Activity } from "lucide-react";

const Trends = () => {
  const trendingTopics = [
    { name: "AI Automation", change: "+24%", trend: "up", color: "text-green-600" },
    { name: "SaaS Tools", change: "+18%", trend: "up", color: "text-green-600" },
    { name: "Food Delivery", change: "-8%", trend: "down", color: "text-red-600" },
    { name: "Remote Work", change: "+12%", trend: "up", color: "text-green-600" },
    { name: "FinTech", change: "0%", trend: "stable", color: "text-gray-600" },
    { name: "Healthcare Tech", change: "+31%", trend: "up", color: "text-green-600" }
  ];

  const marketInsights = [
    {
      title: "AI Market Size",
      value: "$1.8T",
      description: "Expected market size by 2030",
      trend: "+22.5% CAGR"
    },
    {
      title: "SaaS Growth",
      value: "85%",
      description: "Of businesses use SaaS products",
      trend: "+15% YoY"
    },
    {
      title: "Mobile Commerce",
      value: "$3.4T",
      description: "Global mobile commerce sales",
      trend: "+18.2% YoY"
    }
  ];

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4" />;
      case "down": return <TrendingDown className="h-4 w-4" />;
      default: return <Minus className="h-4 w-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Activity className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Market Trends</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead of the curve with real-time trend analysis and market insights
          </p>
        </div>

        {/* Trending Topics */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Trending Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {trendingTopics.map((topic, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold">{topic.name}</h3>
                      <div className={`flex items-center space-x-1 ${topic.color}`}>
                        {getTrendIcon(topic.trend)}
                        <span className="text-sm font-medium">{topic.change}</span>
                      </div>
                    </div>
                    <Badge variant="outline" className={topic.color}>
                      {topic.trend}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Insights */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg">{insight.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-2">{insight.value}</div>
                  <p className="text-muted-foreground text-sm mb-2">{insight.description}</p>
                  <div className="flex items-center space-x-1 text-green-600">
                    <TrendingUp className="h-4 w-4" />
                    <span className="text-sm font-medium">{insight.trend}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Trend Chart Placeholder */}
        <div>
          <h2 className="text-2xl font-semibold mb-6">Interest Over Time</h2>
          <Card className="bg-card shadow-card">
            <CardContent className="p-6">
              <div className="h-64 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Activity className="h-12 w-12 text-primary mx-auto mb-4" />
                  <p className="text-muted-foreground">Interactive trend charts coming soon</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Trends;