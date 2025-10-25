"use client";

import { Button, useTheme } from "@repo/ui";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <>
      <Button onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}>
        <span>switch theme</span>
      </Button>
    </>
  );
}
