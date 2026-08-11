import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

function SearchBar() {
  return (
    <div className="relative w-full max-w-sm">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" />

      <Input
        placeholder="Search developer tools..."
        className="pl-10"
      />
    </div>
  );
}

export default SearchBar;