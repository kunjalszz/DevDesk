import SearchBar from '../ui/SearchBar';
import { Button } from "../ui/button"


function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-300 bg-stone-50 px-8">
<div className="mx-auto flex h-16 items-center justify-end gap-4 px-8">
      <SearchBar/>

      <Button variant="outline" className='rounded-full'>
        🌙
      </Button>
      </div>
    </header>
  );
}

export default Navbar;