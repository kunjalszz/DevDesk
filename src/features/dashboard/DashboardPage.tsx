import ToolCard from "@/components/ui/ToolCard";

import DashboardHero from "./components/DashboardHero";
import { tools } from "./tools";

function DashboardPage() {
  return (
    <section className="mx-auto max-w-7xl space-y-8">
      <DashboardHero />

      <div>
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-stone-800">
              Developer Toolbox
            </h2>

            <p className="mt-1 text-stone-500">
              Everything you need to work faster.
            </p>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default DashboardPage;