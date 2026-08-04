import type { ReactNode } from "react";

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

type AppLayoutProps = {
  children: ReactNode;
};

function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="flex min-h-screen bg-stone-100">
      <Sidebar />

      <div className="flex flex-1 flex-col">
        <Navbar />

        <main className="flex-1 overflow-y-auto bg-stone-100 px-10 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}

export default AppLayout;