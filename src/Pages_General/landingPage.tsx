import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/themes/themeToggle.tsx";
// ---- Motion Variants ----
import { fadeIn } from "@/animation/motionVariants";
// ---- Styles ----
import '../index.css';
import { gradients, sidebars } from "../custom_styles/backgrounds.tsx";
// ---- Landing Page ----
function LandingPage({ setUserType }: { setUserType: (t: "instructor" | "student") => void }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"instructor" | "student" | null>(null);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className={`flex flex-row h-screen w-screen`}>
      
      <div className={`w-[33vw] flex items-center justify-center h-full p-4 bg-gray-950/5 dark:bg-white/3`}>
        <Card className="max-w-md w-full p-6 shadow-2xl rounded-2xl">
          <CardContent className="flex flex-col space-y-4">
            <h1 className="text-3xl font-extrabold text-center">Welcome</h1>
            <div className="flex justify-center space-x-4">
              <Button variant={selected === "student" ? "selected" : "unselected"} onClick={() => setSelected("student")} className={`transition-all ${selected === "student" ? "" : "hover:"}scale-105`}>Student</Button>
              <Button variant={selected === "instructor" ? "selected" : "unselected"} onClick={() => setSelected("instructor")} className={`transition-all ${selected === "instructor" ? "" : "hover:"}scale-105`}>Instructor</Button>
            </div>
            <Button
              onClick={() => {
                if (!selected) return;
                setUserType(selected);
                navigate(selected === "student" ? "/student" : "/instructor");
              }}
              disabled={!selected}
              className="transition-all hover:scale-105"
            >
              Continue as {selected ?? "..."}
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className={`absolute top-4 right-4`}><ThemeToggle /></div>
    </motion.div>
  );
}

export default LandingPage;