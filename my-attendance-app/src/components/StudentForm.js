import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { markAttendance } from "../firebase/attendance";

const StudentForm = () => {
  const location = useLocation();
  const [sessionToken, setSessionToken] = useState("");
  const [sessionId, setSessionId] = useState(null);
  const [studentInfo, setStudentInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    studentNumber: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    setSessionToken(token);

    const fetchSessionId = async () => {
      try {
        const q = query(
          collection(db, "sessions"),
          where("qrCodeToken", "==", token)
        );
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const sessionDoc = querySnapshot.docs[0];
          setSessionId(sessionDoc.id);
        } else {
          console.error("Session not found");
        }
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };

    if (token) fetchSessionId();
  }, [location.search]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!sessionId) return alert("Session not found!");

    try {
      await markAttendance(sessionId, null, "present", {
        ...studentInfo,
        timestamp: new Date().toISOString(),
      });

      alert("Attendance submitted!");
      setStudentInfo({
        firstName: "",
        lastName: "",
        email: "",
        studentNumber: "",
      });
    } catch (error) {
      console.error("Error marking attendance:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        {sessionId ? "Mark Your Attendance" : "Loading session..."}
      </h2>
      {sessionId && (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="First Name"
            value={studentInfo.firstName}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, firstName: e.target.value })
            }
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={studentInfo.lastName}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, lastName: e.target.value })
            }
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            value={studentInfo.email}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, email: e.target.value })
            }
            required
            className="w-full border px-3 py-2 rounded"
          />
          <input
            type="text"
            placeholder="Student Number"
            value={studentInfo.studentNumber}
            onChange={(e) =>
              setStudentInfo({ ...studentInfo, studentNumber: e.target.value })
            }
            required
            className="w-full border px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="bg-blueGray-800 text-white hover:text-emerald-200 px-4 py-2 rounded"
          >
            Submit Attendance
          </button>
        </form>
      )}
    </div>
  );
};

export default StudentForm;
