function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-stone-300 bg-stone-50 px-8">
      <h1 className="text-2xl font-bold">
        🌿 DevDesk
      </h1>

      <button className="rounded-lg border border-stone-300 px-4 py-2 hover:bg-stone-200">
        Theme
      </button>
    </header>
  );
}

export default Navbar;