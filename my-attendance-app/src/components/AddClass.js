// src/components/AddClass.js
import React, { useState } from "react";
import { createClass } from "../firebase/classes";
import { auth } from "../firebaseConfig";

const AddClass = () => {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [semester, setSemester] = useState("");

  const handleCreateClass = async () => {
    const instructorId = auth.currentUser?.uid;
    if (!instructorId) return alert("You must be logged in.");

    try {
      const classId = await createClass(name, code, semester, instructorId);
      alert(`Class "${name}" created with ID: ${classId}`);
      setName("");
      setCode("");
      setSemester("");
    } catch (error) {
      console.error("Error creating class:", error);
    }
  };

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Create New Class</h2>
      <input
        type="text"
        className="border px-3 py-2 rounded w-full mb-2"
        placeholder="Class Name (e.g., Intro to Programming)"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        className="border px-3 py-2 rounded w-full mb-2"
        placeholder="Course Code (e.g., CS101)"
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />
      <input
        type="text"
        className="border px-3 py-2 rounded w-full mb-4"
        placeholder="Semester (e.g., Fall 2024)"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      />
      <button
        onClick={handleCreateClass}
        className="bg-blueGray-800 text-white hover:text-emerald-200 px-4 py-2 rounded"
      >
        Create Class
      </button>
    </div>
  );
};

export default AddClass;
