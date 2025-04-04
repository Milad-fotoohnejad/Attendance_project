// src/components/AddSession.js
import React, { useState } from "react";
import { createSession } from "../firebase/sessions";

const AddSession = ({ classId }) => {
  const [sessionDate, setSessionDate] = useState("");

  const handleAddSession = async () => {
    if (!classId) return alert("No class ID provided!");

    try {
      // Generate a unique session token for QR code use
      const token = `${classId}-${Date.now()}`;

      const sessionId = await createSession(classId, sessionDate, token);
      alert(`Session created with ID: ${sessionId}`);
      setSessionDate("");
    } catch (error) {
      console.error("Error creating session:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Create Session</h2>
      <input
        type="datetime-local"
        className="border px-3 py-2 rounded w-full mb-4"
        value={sessionDate}
        onChange={(e) => setSessionDate(e.target.value)}
      />
      <button
        onClick={handleAddSession}
        className="bg-blueGray-800 text-white hover:text-emerald-200 px-4 py-2 rounded"
      >
        Create Session
      </button>
    </div>
  );
};

export default AddSession;
