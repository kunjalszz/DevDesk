import { NavLink } from "react-router-dom";

import { navigation } from "@/config/navigation";

function Sidebar() {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-stone-200 bg-stone-50">
      <div className="border-b border-stone-200 p-5">
        <h1 className="flex items-center gap-2 text-2xl font-bold text-stone-800">
          🌿 DevDesk
        </h1>

        <p className="mt-1 text-xs text-stone-500">
          Your quiet developer workspace
        </p>
      </div>

      <nav className="flex-1 space-y-8 p-6">
        {navigation.map((group) => (
          <div key={group.section}>
            <p className="mb-2 mt-6 px-2 text-[11px] font-bold uppercase tracking-[0.25em] text-stone-400">
              {group.section}
            </p>

            <div className="space-y-2">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.title}
                    to={item.route}
                    className={({ isActive }) =>
                      `flex items-center gap-3 rounded-xl px-4 py-3 transition-all ${
                        isActive
                          ? "bg-emerald-100 border border-emerald shadow-sm font-semibold text-emerald-700"
                          : "text-stone-700 hover:bg-stone-100"
                      }`
                    }
                  >
                    <Icon className="h-5 w-5" />

                    {item.title}
                  </NavLink>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <footer className="border-t border-stone-200 p-6 text-sm text-stone-400">
  Made with ❤️ by Kunjal
</footer>
    </aside>
  );
}

export default Sidebar;