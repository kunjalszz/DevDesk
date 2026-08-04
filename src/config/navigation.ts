import {
  Home,
  Braces,
  Regex,
  KeyRound,
} from "lucide-react";

import { ROUTES } from "@/app/routes";

export const navigation = [
  {
    section: "Main",
    items: [
      {
        title: "Dashboard",
        icon: Home,
        route: ROUTES.DASHBOARD,
      },
    ],
  },

  {
    section: "Developer Tools",
    items: [
      {
        title: "JSON Formatter",
        icon: Braces,
        route: ROUTES.JSON_FORMATTER,
      },
      {
        title: "Regex Tester",
        icon: Regex,
        route: ROUTES.REGEX_TESTER,
      },
      {
        title: "JWT Decoder",
        icon: KeyRound,
        route: ROUTES.JWT_DECODER,
      },
    ],
  },
];