import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";

// Record a student's attendance
export async function markAttendance(sessionId, studentId, status = "present") {
  await addDoc(collection(db, "attendanceRecords"), {
    sessionId,
    studentId,
    timestamp: new Date().toISOString(),
    status,
  });
}
