import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Video } from "lucide-react";

interface TalkCardProps {
  title: string;
  venue: string;
  slidesUrl?: string;
  videoUrl?: string;
}

export const TalkCard = ({ title, venue, slidesUrl, videoUrl }: TalkCardProps) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-card-hover bg-card">
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base">{venue}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-2">
        {slidesUrl && (
          <Button 
            variant="default" 
            size="sm" 
            asChild
            className="flex-1"
          >
            <a href={slidesUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              View Slides
            </a>
          </Button>
        )}
        {videoUrl && (
          <Button 
            variant="outline" 
            size="sm" 
            asChild
            className="flex-1"
          >
            <a href={videoUrl} target="_blank" rel="noopener noreferrer">
              <Video className="mr-2 h-4 w-4" />
              Watch Video
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  );
};
