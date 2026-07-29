import { Link } from "react-router-dom";
import type { Tool } from "@/types/Tool";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type ToolCardProps = {
  tool: Tool;
};



function ToolCard({ tool }: ToolCardProps) {
    const Icon = tool.icon;
  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <Icon classname="h-8 w-8 text-green-700"/>
      <CardHeader>
        <div className="mb-4">{tool.icon}</div>

        <CardTitle>{tool.title}</CardTitle>

        <CardDescription>{tool.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <Button asChild className="w-full">
          <Link to={tool.route}>Open →</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ToolCard;