import {
  collection,
  addDoc,
  doc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
import { db } from "../firebase";

// Create a new class
export async function createClass(name, code, semester, instructorId) {
  const classRef = await addDoc(collection(db, "classes"), {
    name,
    code,
    semester,
    instructorId,
    studentIds: [],
    createdAt: new Date().toISOString(),
  });

  // Also add the class to the instructor’s teachingClassIds
  const instructorRef = doc(db, "users", instructorId);
  await updateDoc(instructorRef, {
    teachingClassIds: arrayUnion(classRef.id),
  });

  return classRef.id;
}

// Add a student to a class
export async function addStudentToClass(classId, studentId) {
  const classRef = doc(db, "classes", classId);
  await updateDoc(classRef, {
    studentIds: arrayUnion(studentId),
  });
}
