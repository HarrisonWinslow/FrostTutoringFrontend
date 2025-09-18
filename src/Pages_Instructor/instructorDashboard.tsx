import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/other/themeToggle.tsx";
// ---- Dummy Data ----
import { dummyInstructors } from "@/dummyData/dummyInstructors";
const dummyInstructor = dummyInstructors[0];
// ---- Motion Variants ----
import { fadeIn } from "@/animation/motionVariants";


// ---- Instructor Dashboard ----
function InstructorDashboard({ onLogout }: { onLogout: () => void }) {
  const navigate = useNavigate();
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="p-6 max-w-2xl mx-auto min-h-screen bg-gray-900">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-white">Welcome, {dummyInstructor.name}</h1>
        <div className="flex gap-2"><ThemeToggle /><Button className="text-white border-gray-600 bg-gray-800" onClick={onLogout}>Logout</Button></div>
      </div>
      <h2 className="text-lg font-semibold mb-2 text-white">Your Students</h2>
      {dummyInstructor.students.map(s => (
        <motion.div key={s.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="my-2 p-4 cursor-pointer hover:bg-gray-700 transition bg-gray-800 border border-gray-700" onClick={() => navigate(`/instructor/${s.id}`)}>
            <p className="text-white">{s.name}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default InstructorDashboard;