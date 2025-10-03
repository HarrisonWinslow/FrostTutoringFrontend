import { motion, AnimatePresence } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ThemeToggle from "@/components/themes/themeToggle";
// ---- Dummy Data ----
import { dummyStudents } from "@/dummyData/dummyStudents";
const dummyStudent = dummyStudents[0];
// ---- Motion Variants ----
import { fadeIn } from "@/animation/motionVariants";


// ---- Student Dashboard ----
function StudentDashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <AnimatePresence>
      <motion.div initial="hidden" animate="visible" exit="hidden" variants={fadeIn} className="flex flex-col h-screen w-screen">
        <div className="w-[33vw] flex flex-col items-center h-full p-4 bg-gray-950/5 dark:bg-white/3">
          <h1 className="text-2xl font-bold">Welcome, </h1>
          <h1 className="text-2xl font-bold m-4">{dummyStudent.name}</h1>

          <Tabs defaultValue="upcoming sessions">
            <TabsList className="grid w-full grid-cols-2 h-auto border-b">
              <TabsTrigger value="upcoming sessions" className="mr-4">Upcoming Sessions</TabsTrigger>
              <TabsTrigger value="previous sessions" className="ml-4">Previous Sessions</TabsTrigger>
            </TabsList>
            <TabsContent value="upcoming sessions">
              <div className="h-[60vh] overflow-y-auto border p-2">
                {dummyStudent.sessions.map(s => (
                  <motion.div key={s.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="my-2">
                    <Card className="p-4">
                      <p className="">{s.date} - {s.topic}</p>
                      <div className="flex space-x-2 mt-2">
                        <Button className="">Reschedule</Button>
                        <Button className="">Cancel</Button>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <Button className="mt-4 w-full" disabled={dummyStudent.credits <= 0}>
                Schedule New Session ({dummyStudent.credits} credits left)
              </Button>
            </TabsContent>
            <TabsContent value="previous sessions">
              <div className="h-[60vh] overflow-y-auto border p-2">
                {dummyStudent.notes.map(n => (
                  <motion.div key={n.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-2">
                    <Card className="p-4">
                      <p className="">{n.content}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
        <div className="absolute top-4 right-4 flex items-center space-x-2"><ThemeToggle /><Button onClick={onLogout}>Logout</Button></div>
      </motion.div>
    </AnimatePresence>
  );
}

export default StudentDashboard;