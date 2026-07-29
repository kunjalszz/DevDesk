import ToolCard from "@/components/ui/ToolCard";

import { tools } from "./tools";

function DashboardPage() {
  return (
    <section className="space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-stone-800">
          🍃 Welcome Back
        </h1>

        <p className="mt-3 text-lg text-stone-600">
          The forest is quiet today. Choose a tool and start crafting.
        </p>
      </div>

      <div>
        <h2 className="mb-6 text-2xl font-semibold text-stone-700">
          Developer Toolbox
        </h2>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;