import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Hammer, CheckCircle, Circle, Clock, Users, DollarSign } from "lucide-react";

const IdeaBuilder = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [ideaTitle, setIdeaTitle] = useState("");
  const [problemStatement, setProblemStatement] = useState("");

  const steps = [
    { id: 1, title: "Problem Definition", completed: true },
    { id: 2, title: "Solution Design", completed: false },
    { id: 3, title: "Market Analysis", completed: false },
    { id: 4, title: "Business Model", completed: false },
    { id: 5, title: "Launch Plan", completed: false }
  ];

  const templates = [
    {
      title: "SaaS Startup",
      description: "Build a subscription-based software solution",
      features: ["User Management", "Payment Integration", "Analytics Dashboard"],
      timeline: "3-6 months"
    },
    {
      title: "Mobile App",
      description: "Create a mobile application for iOS/Android",
      features: ["Native Development", "Push Notifications", "In-App Purchases"],
      timeline: "4-8 months"
    },
    {
      title: "E-commerce Platform",
      description: "Launch an online store or marketplace",
      features: ["Product Catalog", "Payment Gateway", "Order Management"],
      timeline: "2-4 months"
    }
  ];

  const milestones = [
    { task: "Market Research", status: "completed", date: "Week 1-2" },
    { task: "MVP Development", status: "in-progress", date: "Week 3-8" },
    { task: "Beta Testing", status: "pending", date: "Week 9-10" },
    { task: "Product Launch", status: "pending", date: "Week 11-12" }
  ];

  const getStepIcon = (step: typeof steps[0]) => {
    if (step.completed) return <CheckCircle className="h-5 w-5 text-green-600" />;
    if (step.id === currentStep) return <Clock className="h-5 w-5 text-primary" />;
    return <Circle className="h-5 w-5 text-muted-foreground" />;
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "in-progress": return <Clock className="h-4 w-4 text-primary" />;
      default: return <Circle className="h-4 w-4 text-muted-foreground" />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <Hammer className="h-8 w-8 text-primary" />
            <h1 className="text-4xl font-bold">Idea Builder</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform your startup idea into a actionable plan with step-by-step guidance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-card shadow-card sticky top-4">
              <CardHeader>
                <CardTitle>Build Progress</CardTitle>
                <Progress value={(currentStep / steps.length) * 100} className="mt-2" />
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {steps.map((step) => (
                    <div 
                      key={step.id}
                      className={`flex items-center space-x-3 p-2 rounded-lg cursor-pointer transition-colors ${
                        step.id === currentStep ? 'bg-primary/10' : 'hover:bg-muted/50'
                      }`}
                      onClick={() => setCurrentStep(step.id)}
                    >
                      {getStepIcon(step)}
                      <span className={`text-sm ${step.id === currentStep ? 'font-medium' : ''}`}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Current Step Content */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle>Step {currentStep}: {steps[currentStep - 1]?.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {currentStep === 1 && (
                  <>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Idea Title</label>
                      <Input
                        placeholder="Enter your startup idea title..."
                        value={ideaTitle}
                        onChange={(e) => setIdeaTitle(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Problem Statement</label>
                      <Textarea
                        placeholder="Describe the problem your idea solves..."
                        value={problemStatement}
                        onChange={(e) => setProblemStatement(e.target.value)}
                        className="min-h-[120px]"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Target Audience</label>
                      <Input placeholder="Who are your target customers?" />
                    </div>
                  </>
                )}
                
                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    disabled={currentStep === 1}
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                  >
                    Previous
                  </Button>
                  <Button 
                    variant="gradient"
                    onClick={() => setCurrentStep(Math.min(steps.length, currentStep + 1))}
                  >
                    {currentStep === steps.length ? 'Complete' : 'Next Step'}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Templates */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Startup Templates</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((template, index) => (
                  <Card key={index} className="bg-card shadow-card hover:shadow-elegant transition-all duration-300 cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-lg">{template.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{template.description}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-4">
                        {template.features.map((feature, idx) => (
                          <Badge key={idx} variant="outline" className="mr-1 mb-1">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Timeline:</span>
                        <span className="font-medium">{template.timeline}</span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Milestones */}
            <Card className="bg-card shadow-card">
              <CardHeader>
                <CardTitle>Project Milestones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getStatusIcon(milestone.status)}
                        <span className="font-medium">{milestone.task}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{milestone.date}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaBuilder;