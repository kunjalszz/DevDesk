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
<Card
  className="
    group
    overflow-hidden
    rounded-3xl
    border-stone-200
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-emerald-300
    hover:shadow-xl
  "
>
     
      <CardHeader>
        <div
    className="
    mb-5
    flex
    h-14
    w-14
    items-center
    justify-center
    rounded-2xl
    bg-emerald-100
    transition-all
    group-hover:scale-110
">
            <Icon className="bg-gradient-to-br from-emerald-100 to-lime-50 h-14 w-14"/>
        </div>


        <CardTitle>{tool.title}</CardTitle>

        <CardDescription>{tool.description}</CardDescription>
      </CardHeader>

      <CardContent>
        <Button asChild  variant="outline"
    className="w-full rounded-xl">
          <Link to={tool.route}>Open Tool →</Link>
        </Button>
      </CardContent>
    </Card>
  );
}

export default ToolCard;