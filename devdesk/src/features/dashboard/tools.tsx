import {
  Braces,
  Regex,
  KeyRound,
  FileText,
} from "lucide-react";

import { ROUTES } from "@/app/routes";
import type { Tool } from "../../types/Tool";

export const tools: Tool[] = [
  {
    id: 1,
    title: "JSON Formatter",
    description: "Beautify, minify and validate JSON effortlessly.",
    route: ROUTES.JSON_FORMATTER,
    icon: Braces,
  },
  {
    id: 2,
    title: "Regex Tester",
    description: "Test and debug regular expressions in real time.",
    route: ROUTES.REGEX_TESTER,
    icon: Regex,
  },
  {
    id: 3,
    title: "JWT Decoder",
    description: "Decode JWT tokens and inspect their payload.",
    route: ROUTES.JWT_DECODER,
    icon: KeyRound,
  },
  {
    id: 4,
    title: "Markdown Preview",
    description: "Write markdown and preview it instantly.",
    route: "#",
    icon: FileText,
  },
];