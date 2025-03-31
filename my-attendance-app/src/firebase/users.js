import { doc, getDoc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebaseConfig";

export async function getUser(userId) {
  const docRef = doc(db, "users", userId);
  const snapshot = await getDoc(docRef);
  return snapshot.exists() ? snapshot.data() : null;
}

export async function enrollStudentInClass(userId, classId) {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    enrolledClassIds: arrayUnion(classId),
  });
}

export async function assignInstructorToClass(userId, classId) {
  const userRef = doc(db, "users", userId);
  await updateDoc(userRef, {
    teachingClassIds: arrayUnion(classId),
  });
}
