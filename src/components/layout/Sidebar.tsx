import { Link } from "react-router-dom";
import { ROUTES } from "../../src/app/routes";

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen border-r border-stone-300 bg-stone-50 p-6">
      <nav className="space-y-3">
        <Link className="block rounded-lg p-2 hover:bg-stone-200" to={ROUTES.HOME}>
          🏡 Dashboard
        </Link>

        <Link className="block rounded-lg p-2 hover:bg-stone-200" to={ROUTES.JSON_FORMATTER}>
          📄 JSON Formatter
        </Link>

        <Link className="block rounded-lg p-2 hover:bg-stone-200" to={ROUTES.REGEX_TESTER}>
          🔍 Regex Tester
        </Link>

        <Link className="block rounded-lg p-2 hover:bg-stone-200" to={ROUTES.JWT_DECODER}>
          🔐 JWT Decoder
        </Link>
      </nav>
    </aside>
  );
}

export default Sidebar;