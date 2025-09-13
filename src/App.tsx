import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Layout/Header";
import Home from "./pages/Home";
import Database from "./pages/Database";
import TopIdeas from "./pages/TopIdeas";
import Trends from "./pages/Trends";
import MarketInsights from "./pages/MarketInsights";
import IdeaAgent from "./pages/IdeaAgent";
import IdeaBuilder from "./pages/IdeaBuilder";
import Pricing from "./pages/Pricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/database" element={<Database />} />
            <Route path="/top-ideas" element={<TopIdeas />} />
            <Route path="/trends" element={<Trends />} />
            <Route path="/market-insights" element={<MarketInsights />} />
            <Route path="/idea-agent" element={<IdeaAgent />} />
            <Route path="/idea-builder" element={<IdeaBuilder />} />
            <Route path="/pricing" element={<Pricing />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
