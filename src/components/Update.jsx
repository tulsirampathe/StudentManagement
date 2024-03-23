import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function Update() {
  const { state } = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleUpdate = async (e) => {
    e.preventDefault();

    const student = { name, email };

    try {
      const response = await fetch(
        `http://localhost:8080/student/updateStudent/${state.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(student),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update student.");
      }

      console.log("Student Updated");
      navigate(-1);
    } catch (error) {
      console.error("Error updating student:", error.message);
    }
  };

  return (
    <>
    <div className="h-[90vh]">
      <div className="py-28 flex flex-col justify-center items-center">
        <form className="bg-gray-700 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Update 📝 Student</h1>
          <div className="mb-4">
            <label className="blockt text-white text-sm font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="Enter email"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={handleUpdate}
            >
              Update
            </button>
            <button
              onClick={() => navigate("/")}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Back
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}

export default Update;
