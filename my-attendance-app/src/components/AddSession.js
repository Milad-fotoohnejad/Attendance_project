// src/components/AddSession.js

import React, { useState } from "react";
import { db } from "../firebaseConfig";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  arrayUnion,
} from "firebase/firestore";

const AddSession = ({ groupId }) => {
  const [sessionDate, setSessionDate] = useState("");

  const handleAddSession = async () => {
    try {
      const sessionRef = await addDoc(collection(db, "sessions"), {
        groupId,
        date: sessionDate,
        students: [],
      });

      const groupRef = doc(db, "groups", groupId);
      await updateDoc(groupRef, {
        sessions: arrayUnion(sessionRef.id),
      });

      console.log("Session added successfully");
    } catch (error) {
      console.error("Error adding session: ", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={sessionDate}
        onChange={(e) => setSessionDate(e.target.value)}
        placeholder="Session Date"
      />
      <button onClick={handleAddSession}>Add Session</button>
    </div>
  );
};

export default AddSession;
