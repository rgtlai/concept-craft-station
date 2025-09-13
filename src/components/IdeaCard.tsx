import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Zap, Plus } from "lucide-react";

interface IdeaCardProps {
  id: string;
  title: string;
  description: string;
  image?: string;
  tags?: string[];
  timing?: boolean;
  better?: boolean;
  advantage?: boolean;
  moreCount?: number;
  ranking?: number;
}

export const IdeaCard = ({ 
  id, 
  title, 
  description, 
  image, 
  tags = [], 
  timing, 
  better, 
  advantage, 
  moreCount,
  ranking 
}: IdeaCardProps) => {
  return (
    <Card className="group overflow-hidden border-0 bg-card shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-0">
        {image && (
          <div className="aspect-video overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <div className="p-6">
          {ranking && (
            <div className="flex items-center justify-between mb-4">
              <div className="text-3xl font-bold text-primary">{ranking}</div>
              <div className="flex items-center space-x-2">
                <Button variant="gradient-outline" size="sm">
                  <Plus className="h-4 w-4" />
                  Build This Idea
                </Button>
              </div>
            </div>
          )}
          
          <Link to={`/idea/${id}`} className="group">
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
              {title}
            </h3>
          </Link>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {timing && (
              <Badge variant="secondary" className="bg-orange-100 text-orange-700 border-orange-200">
                <Clock className="h-3 w-3 mr-1" />
                Perfect Timing
              </Badge>
            )}
            {better && (
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 border-purple-200">
                <TrendingUp className="h-3 w-3 mr-1" />
                10x Better
              </Badge>
            )}
            {advantage && (
              <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200">
                <Zap className="h-3 w-3 mr-1" />
                Unfair Advantage
              </Badge>
            )}
            {moreCount && (
              <Badge variant="outline">
                +{moreCount} More
              </Badge>
            )}
          </div>
          
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
            {description}
          </p>
          
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-4">
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};