// ---- Imports ----
import { dummyStudents } from "@/dummyData/dummyStudents";
import type { Student } from "@/dummyData/dummyStudents";

// ---- Types ----
export interface Instructor {
  id: string;
  name: string;
  students: Student[];
}

// ---- Dummy Data ----
export const dummyInstructor1: Instructor = {
  id: "instructor1",
  name: "Mr. Smith",
  students: dummyStudents, // all students
};

export const dummyInstructor2: Instructor = {
  id: "instructor2",
  name: "Mrs. Ingram",
  students: [dummyStudents[0]], // only Alice
};

export const dummyInstructor3: Instructor = {
  id: "instructor3",
  name: "Dr. Taylor",
  students: [], // no students yet
};

// Array of instructors
export const dummyInstructors: Instructor[] = [
  dummyInstructor1,
  dummyInstructor2,
  dummyInstructor3,
];
