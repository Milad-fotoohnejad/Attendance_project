// src/components/AddGroup.js

import React, { useState } from "react";
import { db, auth } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

const AddGroup = () => {
  const [groupName, setGroupName] = useState("");

  const handleAddGroup = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        await addDoc(collection(db, "groups"), {
          name: groupName,
          userId: user.uid,
          sessions: [],
        });
        console.log("Group added successfully");
      }
    } catch (error) {
      console.error("Error adding group: ", error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={groupName}
        onChange={(e) => setGroupName(e.target.value)}
        placeholder="Group Name"
      />
      <button onClick={handleAddGroup}>Add Group</button>
    </div>
  );
};

export default AddGroup;
