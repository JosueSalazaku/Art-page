import * as React from "react";
import { Moon, Sun } from "lucide-react";

import { Button } from "@/Components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";

export function ModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("theme-light");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark =
      theme === "dark" ||
      (theme === "system" &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
  }, [theme]);

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setThemeState(theme === "dark" ? "theme-light" : "dark")}
      aria-label="Toggle theme"
      className="w-12 h-12"
    >
      {theme === "dark" ? (
        <Sun size={45} fill="currentColor" />
      ) : (
        <Moon size={45} fill="currentColor" stroke="none" />
      )}
    </Button>
  );
}
