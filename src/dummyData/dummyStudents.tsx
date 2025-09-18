// ---- Types ----
export interface Session {
  id: number;
  date: string;
  topic: string;
}

export interface Note {
  id: number;
  content: string;
}

export interface Student {
  id: string;
  name: string;
  credits: number;
  sessions: Session[];
  notes: Note[];
}

// ---- Dummy Data ----
export const dummyStudent1: Student = {
  id: "student1",
  name: "Alice",
  credits: 3,
  sessions: [
    { id: 1, date: "2025-09-15", topic: "Math Tutoring" },
    { id: 2, date: "2025-09-18", topic: "Science Review" },
  ],
  notes: [
    { id: 1, content: "Great progress today!" },
    { id: 2, content: "Needs more practice with fractions." },
  ],
};

export const dummyStudent2: Student = {
  id: "student2",
  name: "Bob",
  credits: 3,
  sessions: [
    { id: 1, date: "2025-10-15", topic: "English Tutoring" },
    { id: 2, date: "2025-10-18", topic: "CompSci Review" },
  ],
  notes: [
    { id: 1, content: "Awesome progress today!" },
    { id: 2, content: "Needs more practice with past-tense." },
  ],
};

// Array of students
export const dummyStudents: Student[] = [dummyStudent1, dummyStudent2];
