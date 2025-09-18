import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// ---- Motion Variants ----
import { fadeIn } from "@/animation/motionVariants";

// ---- Not Found ----
function NotFound() {
  const navigate = useNavigate();
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-900">
      <h1 className="text-4xl font-extrabold text-white">404 - Page Not Found</h1>
      <Button className="hover:scale-105 transition text-white border-gray-600 bg-gray-800" onClick={() => navigate("/")}>Go Home</Button>
    </motion.div>
  );
}

export default NotFound;