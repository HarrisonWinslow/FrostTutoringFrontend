import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/other/themeToggle.tsx";
// ---- Motion Variants ----
import { fadeIn } from "@/animation/motionVariants";


// ---- Landing Page ----
function LandingPage({ setUserType }: { setUserType: (t: "instructor" | "student") => void }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"instructor" | "student" | null>(null);

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col items-center justify-center min-h-screen p-4 bg-black">
      <div className="absolute top-4 right-4"><ThemeToggle /></div>
      <Card className="max-w-md w-full p-6 shadow-2xl rounded-2xl bg-gray-900 border border-gray-700">
        <CardContent className="flex flex-col space-y-4">
          <h1 className="text-3xl font-extrabold text-center text-white">Welcome</h1>
          <div className="flex justify-center space-x-4">
            <Button className={`text-white border-gray-600 ${selected === "student" ? "bg-gray-700" : "bg-gray-900"}`} onClick={() => setSelected("student")}>Learner</Button>
            <Button className={`text-white border-gray-600 ${selected === "instructor" ? "bg-gray-700" : "bg-gray-900"}`} onClick={() => setSelected("instructor")}>Instructor</Button>
          </div>
          <Button
            onClick={() => {
              if (!selected) return;
              setUserType(selected);
              navigate(selected === "student" ? "/student" : "/instructor");
            }}
            disabled={!selected}
            className="transition-all hover:scale-105 text-white border-gray-600 bg-gray-800"
          >
            Continue as {selected ?? "..."}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default LandingPage;