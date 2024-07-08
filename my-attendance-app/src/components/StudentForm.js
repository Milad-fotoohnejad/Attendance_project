import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";

const StudentForm = ({ match }) => {
  const { sessionId } = match.params;
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(`Session ID: ${sessionId}`);
  }, [sessionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const timestamp = new Date().toLocaleString();
      const student = {
        firstName,
        lastName,
        email,
        timestamp,
      };

      const studentId = `${lastName.toUpperCase()}, ${firstName}`;

      const sessionRef = doc(db, "sessions", sessionId);
      await updateDoc(sessionRef, {
        students: arrayUnion({ id: studentId, ...student }),
      });

      console.log("Student added successfully");
    } catch (error) {
      console.error("Error adding student: ", error);
    }
  };

  return (
    <div>
      <h1>Register Attendance for Session: {sessionId}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Submit</button>
      </form>
      <p>If you see this message, the component is rendering correctly.</p>
    </div>
  );
};

export default StudentForm;
