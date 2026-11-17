"use client";

import { TanStackDevtools } from "@tanstack/react-devtools";
import { ReactQueryDevtoolsPanel } from "@tanstack/react-query-devtools";

// Where :: module scope so the plugins array identity stays stable across renders.
const plugins = [
  {
    name: "TanStack Query",
    render: <ReactQueryDevtoolsPanel />,
  },
];

export function Devtools() {
  return <TanStackDevtools plugins={plugins} />;
}
