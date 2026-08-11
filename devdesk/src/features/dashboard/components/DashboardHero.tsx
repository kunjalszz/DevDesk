function DashboardHero() {
  return (
    <section className="max-w-5xl rounded-3xl border border-stone-200 bg-gradient-to-r from-stone-50 via-emerald-50 to-stone-100 p-6">
      <p className="text-sm uppercase tracking-widest text-stone-500">
        Welcome Back 🌿
      </p>

      <h1 className="mt-2 text-3xl lg:text-4xl font-bold text-stone-800">
        Your Quiet Developer Workspace
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-stone-600">
        Everything you need to build, debug and experiment—
wrapped inside one quiet developer workspace.
      </p>
    </section>
  );
}

export default DashboardHero;