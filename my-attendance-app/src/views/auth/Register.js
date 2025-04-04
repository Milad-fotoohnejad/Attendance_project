// src/views/auth/Register.js
import React, { useState } from "react";
import { signUp } from "../../firebase/auth";
import { Link } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("instructor"); // default to instructor
  const [userData, setUserData] = useState({
    name: "",
    location: "",
  });

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password, role, {
        name: userData.name,
        location: userData.location,
      });
      console.log("User signed up successfully");
    } catch (error) {
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="container mx-auto px-4 h-full">
      <div className="flex justify-center">
        <div className="w-full lg:w-4/12 mt-32 px-4">
          <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-blueGray-200">
            <div className="text-center w-full mt-5">
              <h6 className="text-blueGray-600 text-md mb-3 font-normal">
                Already have an account?
              </h6>
              <div className="flex justify-center">
                <Link
                  to="/auth/login"
                  className="bg-blueGray-800 w-three-quarter text-white hover:text-emerald-200 text-md font-normal px-4 py-2 rounded mb-3 text-center"
                >
                  Log In
                </Link>
              </div>
            </div>

            <hr className="my-4 border-blueGray-300" />

            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSignUp}>
                <div className="mb-4">
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="password"
                    className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                    placeholder="Full Name"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData({ ...userData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div className="mb-4">
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-600 text-blueGray-600 bg-white rounded text-sm shadow w-full"
                    placeholder="Location"
                    value={userData.location}
                    onChange={(e) =>
                      setUserData({ ...userData, location: e.target.value })
                    }
                  />
                </div>

                <div className="mb-4">
                  <label className="block text-blueGray-600 text-sm mb-2">
                    Select Role:
                  </label>
                  <select
                    className="border-0 px-3 py-2 rounded text-sm shadow w-full"
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                  >
                    <option value="instructor">Instructor</option>
                    <option value="student">Student</option>
                  </select>
                </div>

                <div className="text-center mt-6">
                  <button
                    type="submit"
                    className="bg-blueGray-800 text-white hover:text-emerald-200 text-md font-normal px-6 py-3 rounded shadow-lg w-full"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
