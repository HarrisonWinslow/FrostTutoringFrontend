// ---- Theme Toggle (still allows dark/light if needed) ----
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sun, Moon } from "lucide-react";

function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(
    typeof window !== "undefined"
      ? document.documentElement.classList.contains("dark")
      : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.documentElement.style.backgroundColor = "#000";
      document.documentElement.style.color = "#ffd7aaff";
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.backgroundColor = "#ffd7aaff";
      document.documentElement.style.color = "#000";
    }
  }, [dark]);

  return (
    <Button variant="outline" size="icon" onClick={() => setDark(!dark)}>
      {dark ? <Sun className="h-4 w-4 text-white" /> : <Moon className="h-4 w-4 text-white" />}
    </Button>
  );
}

export default ThemeToggle;
