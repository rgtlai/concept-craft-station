import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Search } from "lucide-react";
import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <img src={logo} alt="IdeaBrowser" className="h-8 w-8" />
            <span className="hidden font-bold sm:inline-block">
              ideabrowser.com
            </span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground/60 hover:text-foreground transition-colors">
                <span>Browse Ideas</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/database" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground">
                    Database
                  </Link>
                  <Link to="/top-ideas" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground">
                    Top Ideas
                  </Link>
                  <Link to="/trends" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground">
                    Trends
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground/60 hover:text-foreground transition-colors">
                <span>Tools</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-background border rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-1">
                  <Link to="/market-insights" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground">
                    Market Insights
                  </Link>
                  <Link to="/idea-agent" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground">
                    Idea Agent
                  </Link>
                  <Link to="/idea-builder" className="block px-4 py-2 text-sm text-foreground/80 hover:bg-accent hover:text-foreground">
                    Idea Builder
                  </Link>
                </div>
              </div>
            </div>
            <Link 
              to="/pricing" 
              className="text-foreground/60 transition-colors hover:text-foreground"
            >
              Pricing
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-foreground/60 hover:text-foreground transition-colors">
                <span>More</span>
                <ChevronDown className="h-4 w-4" />
              </button>
            </div>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Button variant="ghost" size="sm" className="h-9 w-9 px-0 md:hidden">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Login
            </Button>
            <Button variant="gradient" size="sm">
              Sign Up
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};