import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";

// Create a new session
export async function createSession(classId, date, qrCodeToken) {
  const sessionRef = await addDoc(collection(db, "sessions"), {
    classId,
    date,
    qrCodeToken,
    createdAt: new Date().toISOString(),
  });

  return sessionRef.id;
}
