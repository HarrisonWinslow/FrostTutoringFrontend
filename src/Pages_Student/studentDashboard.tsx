import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ThemeToggle from "@/components/other/themeToggle.tsx";
// ---- Dummy Data ----
import { dummyStudents } from "@/dummyData/dummyStudents";
const dummyStudent = dummyStudents[0];
// ---- Motion Variants ----
import { fadeIn } from "@/animation/motionVariants";


// ---- Student Dashboard ----
function StudentDashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <AnimatePresence>
      <motion.div initial="hidden" animate="visible" exit="hidden" variants={fadeIn} className="p-6 max-w-2xl mx-auto min-h-screen bg-gray-900">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-white">Welcome, {dummyStudent.name}</h1>
          <div className="flex gap-2"><ThemeToggle /><Button className="text-white border-gray-600 bg-gray-800" onClick={onLogout}>Logout</Button></div>
        </div>
        <Tabs defaultValue="sessions">
          <TabsList className="grid w-full grid-cols-2 border-b border-gray-700">
            <TabsTrigger value="sessions" className="text-white">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="notes" className="text-white">Session Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="sessions">
            {dummyStudent.sessions.map(s => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="my-2">
                <Card className="p-4 shadow-md shadow-white/20 bg-gray-800 border border-gray-700">
                  <p className="text-white">{s.date} - {s.topic}</p>
                  <div className="flex space-x-2 mt-2">
                    <Button className="text-white border-gray-600 bg-gray-700">Reschedule</Button>
                    <Button className="text-white border-gray-600 bg-gray-700">Cancel</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
            <Button className="mt-4 w-full text-white border-gray-600 bg-gray-700" disabled={dummyStudent.credits <= 0}>
              Schedule New Session ({dummyStudent.credits} credits left)
            </Button>
          </TabsContent>
          <TabsContent value="notes">
            {dummyStudent.notes.map(n => (
              <motion.div key={n.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-2">
                <Card className="p-4 shadow-sm bg-gray-800 border border-gray-700">
                  <p className="text-white">{n.content}</p>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </AnimatePresence>
  );
}

export default StudentDashboard;