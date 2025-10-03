import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ThemeToggle from "@/components/themes/themeToggle";
// ---- Dummy Data ----
import { dummyStudents } from "@/dummyData/dummyStudents";
const dummyStudent = dummyStudents[0];
import { dummyInstructors } from "@/dummyData/dummyInstructors";
const dummyInstructor = dummyInstructors[0];
// ---- Motion Variants ----
import { fadeIn } from "@/animation/motionVariants";


// ---- Student Details ----
function StudentDetails({ onLogout }: { onLogout: () => void }) {
  const { studentId } = useParams();
  const student = dummyInstructor.students.find(s => s.id === studentId) ?? dummyStudent;
  const navigate = useNavigate();
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="p-6 max-w-2xl mx-auto min-h-screen bg-gray-900">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-white">{student.name}'s Details</h1>
        <div className="flex gap-2">
          <ThemeToggle />
          <Button className="text-white border-gray-600 bg-gray-800" onClick={() => navigate(-1)}>Back</Button>
          <Button className="text-white border-gray-600 bg-gray-800" onClick={onLogout}>Logout</Button>
        </div>
      </div>
      <Tabs defaultValue="sessions">
        <TabsList className="grid grid-cols-3 w-full border-b border-gray-700">
          <TabsTrigger value="sessions" className="text-white">Sessions</TabsTrigger>
          <TabsTrigger value="notes" className="text-white">Notes</TabsTrigger>
          <TabsTrigger value="credits" className="text-white">Credits</TabsTrigger>
        </TabsList>
        <TabsContent value="sessions">
          {student.sessions.map(s => (
            <Card key={s.id} className="my-2 p-4 shadow-sm bg-gray-800 border border-gray-700">
              <p className="text-white">{s.date} - {s.topic}</p>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="notes">
          {student.notes.map(n => (
            <Card key={n.id} className="my-2 p-4 shadow-sm bg-gray-800 border border-gray-700">
              <p className="text-white">{n.content}</p>
              <Button className="mt-2 text-white border-gray-600 bg-gray-700">Edit</Button>
            </Card>
          ))}
          <Button className="mt-4 w-full text-white border-gray-600 bg-gray-700">Add Note</Button>
        </TabsContent>
        <TabsContent value="credits">
          <Card className="p-4 shadow-sm bg-gray-800 border border-gray-700">
            <p className="text-white">Available Credits: {student.credits}</p>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

export default StudentDetails;