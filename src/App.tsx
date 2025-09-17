import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, useParams, Navigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Moon, Sun } from "lucide-react";

// ---- Dummy Data ----
const dummyLearner = {
  id: "learner1",
  name: "Alice",
  credits: 3,
  sessions: [
    { id: 1, date: "2025-09-15", topic: "Math Tutoring" },
    { id: 2, date: "2025-09-18", topic: "Science Review" }
  ],
  notes: [
    { id: 1, content: "Great progress today!" },
    { id: 2, content: "Needs more practice with fractions." }
  ]
};

const dummyInstructor = {
  id: "instructor1",
  name: "Mr. Smith",
  students: [dummyLearner]
};

// ---- Motion Variants ----
const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 }
};

// ---- Theme Toggle ----
function ThemeToggle() {
  const [dark, setDark] = useState<boolean>(() =>
    typeof window !== "undefined" ? document.documentElement.classList.contains("dark") : false
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <Button variant="outline" size="icon" onClick={() => setDark(!dark)}>
      {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}

// ---- Components ----
function LandingPage({ setUserType }: { setUserType: (t: "instructor" | "learner") => void }) {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<"instructor" | "learner" | null>(null);
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-50 dark:bg-gray-900">
      <div className="absolute top-4 right-4"><ThemeToggle /></div>
      <Card className="max-w-md w-full p-6 shadow-2xl rounded-2xl bg-white dark:bg-gray-800">
        <CardContent className="flex flex-col space-y-4">
          <h1 className="text-3xl font-extrabold text-center text-gray-900 dark:text-gray-100">Welcome</h1>
          <div className="flex justify-center space-x-4">
            <Button variant={selected === "learner" ? "default" : "outline"} onClick={() => setSelected("learner")}>Learner</Button>
            <Button variant={selected === "instructor" ? "default" : "outline"} onClick={() => setSelected("instructor")}>Instructor</Button>
          </div>
          <Button
            onClick={() => {
              if (!selected) return;
              setUserType(selected);
              navigate(selected === "learner" ? "/learner" : "/instructor");
            }}
            disabled={!selected}
            className="transition-all hover:scale-105"
          >
            Continue as {selected ?? "..."}
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function LearnerDashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <AnimatePresence>
      <motion.div initial="hidden" animate="visible" exit="hidden" variants={fadeIn} className="p-6 max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome, {dummyLearner.name}</h1>
          <div className="flex gap-2"><ThemeToggle /><Button onClick={onLogout}>Logout</Button></div>
        </div>
        <Tabs defaultValue="sessions">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sessions">Upcoming Sessions</TabsTrigger>
            <TabsTrigger value="notes">Session Notes</TabsTrigger>
          </TabsList>
          <TabsContent value="sessions">
            {dummyLearner.sessions.map(s => (
              <motion.div key={s.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="my-2">
                <Card className="p-4 shadow-md hover:shadow-lg transition-all bg-white dark:bg-gray-800">
                  <p className="text-gray-800 dark:text-gray-200">{s.date} - {s.topic}</p>
                  <div className="flex space-x-2 mt-2">
                    <Button variant="outline">Reschedule</Button>
                    <Button variant="outline">Cancel</Button>
                  </div>
                </Card>
              </motion.div>
            ))}
            <Button className="mt-4 w-full" disabled={dummyLearner.credits <= 0}>
              Schedule New Session ({dummyLearner.credits} credits left)
            </Button>
          </TabsContent>
          <TabsContent value="notes">
            {dummyLearner.notes.map(n => (
              <motion.div key={n.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="my-2">
                <Card className="p-4 shadow-sm bg-white dark:bg-gray-800">
                  <p className="text-gray-800 dark:text-gray-200">{n.content}</p>
                </Card>
              </motion.div>
            ))}
          </TabsContent>
        </Tabs>
      </motion.div>
    </AnimatePresence>
  );
}

function InstructorDashboard({ onLogout }: { onLogout: () => void }) {
  const navigate = useNavigate();
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="p-6 max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Welcome, {dummyInstructor.name}</h1>
        <div className="flex gap-2"><ThemeToggle /><Button onClick={onLogout}>Logout</Button></div>
      </div>
      <h2 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Your Students</h2>
      {dummyInstructor.students.map(s => (
        <motion.div key={s.id} initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }}>
          <Card className="my-2 p-4 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition bg-white dark:bg-gray-800" onClick={() => navigate(`/instructor/${s.id}`)}>
            <p className="text-gray-800 dark:text-gray-200">{s.name}</p>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

function StudentDetail({ onLogout }: { onLogout: () => void }) {
  const { studentId } = useParams();
  const student = dummyInstructor.students.find(s => s.id === studentId) ?? dummyLearner;
  const navigate = useNavigate();
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="p-6 max-w-2xl mx-auto bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{student.name}'s Details</h1>
        <div className="flex gap-2">
          <ThemeToggle />
          <Button variant="outline" onClick={() => navigate(-1)}>Back</Button>
          <Button onClick={onLogout}>Logout</Button>
        </div>
      </div>
      <Tabs defaultValue="sessions">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="credits">Credits</TabsTrigger>
        </TabsList>
        <TabsContent value="sessions">
          {student.sessions.map(s => (
            <Card key={s.id} className="my-2 p-4 shadow-sm bg-white dark:bg-gray-800">
              <p className="text-gray-800 dark:text-gray-200">{s.date} - {s.topic}</p>
            </Card>
          ))}
        </TabsContent>
        <TabsContent value="notes">
          {student.notes.map(n => (
            <Card key={n.id} className="my-2 p-4 shadow-sm bg-white dark:bg-gray-800">
              <p className="text-gray-800 dark:text-gray-200">{n.content}</p>
              <Button variant="outline" className="mt-2">Edit</Button>
            </Card>
          ))}
          <Button className="mt-4 w-full">Add Note</Button>
        </TabsContent>
        <TabsContent value="credits">
          <Card className="p-4 shadow-sm bg-white dark:bg-gray-800">
            <p className="text-gray-800 dark:text-gray-200">Available Credits: {student.credits}</p>
          </Card>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
}

function NotFound() {
  const navigate = useNavigate();
  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-col items-center justify-center min-h-screen space-y-4 bg-gray-50 dark:bg-gray-900">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100">404 - Page Not Found</h1>
      <Button className="hover:scale-105 transition" onClick={() => navigate("/")}>Go Home</Button>
    </motion.div>
  );
}

// ---- Main App ----
export default function App() {
  const [userType, setUserType] = useState<"instructor" | "learner" | null>(null);
  const handleLogout = () => setUserType(null);

  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage setUserType={setUserType} />} />
          <Route
            path="/learner"
            element={userType === "learner" ? <LearnerDashboard onLogout={handleLogout} /> : <Navigate to="/" replace />}
          />
          <Route
            path="/instructor"
            element={userType === "instructor" ? <InstructorDashboard onLogout={handleLogout} /> : <Navigate to="/" replace />}
          />
          <Route
            path="/instructor/:studentId"
            element={userType === "instructor" ? <StudentDetail onLogout={handleLogout} /> : <Navigate to="/" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
