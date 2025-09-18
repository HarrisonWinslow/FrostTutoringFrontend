import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
// ---- Pages ----
import LandingPage from "@/Pages_General/landingPage.tsx";
import NotFound from "@/Pages_General/notFound.tsx";
import StudentDashboard from "@/Pages_Student/studentDashboard";
import InstructorDashboard from "@/Pages_Instructor/instructorDashboard";
import StudentDetails from "@/Pages_Instructor/studentDetails";



// ---- Main App ----
export default function App() {
  const [userType, setUserType] = useState<"instructor" | "student" | null>(null);
  const handleLogout = () => setUserType(null);

  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<LandingPage setUserType={setUserType} />} />
          <Route
            path="/student"
            element={userType === "student" ? <StudentDashboard onLogout={handleLogout} /> : <Navigate to="/" replace />}
          />
          <Route
            path="/instructor"
            element={userType === "instructor" ? <InstructorDashboard onLogout={handleLogout} /> : <Navigate to="/" replace />}
          />
          <Route
            path="/instructor/:studentId"
            element={userType === "instructor" ? <StudentDetails onLogout={handleLogout} /> : <Navigate to="/" replace />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </Router>
  );
}
