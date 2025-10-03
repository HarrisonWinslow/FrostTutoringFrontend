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
    { id: 3, date: "2025-09-15", topic: "Math Tutoring" },
    { id: 4, date: "2025-09-18", topic: "Science Review" },
    { id: 5, date: "2025-09-15", topic: "Math Tutoring" },
    { id: 6, date: "2025-09-18", topic: "Science Review" },
    { id: 7, date: "2025-09-15", topic: "Math Tutoring" },
    { id: 8, date: "2025-09-18", topic: "Science Review" },
    { id: 9, date: "2025-09-15", topic: "Math Tutoring" },
    { id: 10, date: "2025-09-18", topic: "Science Review" },
    { id: 11, date: "2025-09-15", topic: "Math Tutoring" },
    { id: 12, date: "2025-09-18", topic: "Science Review" },
  ],
  notes: [
    { id: 1, content: "Great progress today!" },
    { id: 2, content: "Needs more practice with fractions." },
    { id: 3, content: "Great progress today!" },
    { id: 4, content: "Needs more practice with fractions." },
    { id: 5, content: "Great progress today!" },
    { id: 6, content: "Needs more practice with fractions." },
    { id: 7, content: "Great progress today!" },
    { id: 8, content: "Needs more practice with fractions." },
    { id: 9, content: "Great progress today!" },
    { id: 10, content: "Needs more practice with fractions." },
    { id: 11, content: "Great progress today!" },
    { id: 12, content: "Needs more practice with fractions." },
    { id: 13, content: "Great progress today!" },
    { id: 14, content: "Needs more practice with fractions." },
    { id: 15, content: "Great progress today!" },
    { id: 16, content: "Needs more practice with fractions." },
    { id: 17, content: "Great progress today!" },
    { id: 18, content: "Needs more practice with fractions." },
    { id: 19, content: "Great progress today!" },
    { id: 20, content: "Needs more practice with fractions." },
    { id: 21, content: "Great progress today!" },
    { id: 22, content: "Needs more practice with fractions." },
    { id: 23, content: "Great progress today!" },
    { id: 24, content: "Needs more practice with fractions." },
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
