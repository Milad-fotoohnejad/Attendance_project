import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Record a student's attendance
export async function markAttendance(sessionId, studentId, status = "present") {
  await addDoc(collection(db, "attendanceRecords"), {
    sessionId,
    studentId,
    timestamp: new Date().toISOString(),
    status,
  });
}
