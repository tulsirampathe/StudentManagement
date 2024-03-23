import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/student/getStudents")
      .then((res) => res.json())
      .then((data) => setStudents(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/student/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to delete student.");
      }

      console.log("Student Deleted");
      // Remove the deleted student from the local state
      setStudents((prevStudents) =>
        prevStudents.filter((student) => student.id !== id)
      );
    } catch (error) {
      console.error("Error deleting student:", error.message);
      // Handle error, display error message, etc.
    }
  };

  return (
    <div className="h-[91vh]">
      <div className="relative ">
        <div className="pt-16">
          <div className="w-full max-w-5xl mx-auto">
            <div className="block justify-left flex">
              {/* Add Student Button */}
              <button
                onClick={() => navigate("/Login1")}
                className="flex justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Add Student 🧑‍💻
              </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr className="text-xs text-gray-700 dark:text-gray-400">
                    <th className="px-6 py-3 text-left">ID</th>
                    <th className="px-6 py-3 text-left">NAME</th>
                    <th className="px-6 py-3 text-left">EMAIL ID</th>
                    <th className="px-6 py-3 text-right">ACTION</th>
                  </tr>
                </thead>
                <tbody className="text-black">
                  {students.map((student, index) => (
                    <tr
                      key={index}
                      className="border-t border-gray-200 dark:border-gray-600"
                    >
                      <td className="px-6 py-4">{student.id}</td>
                      <td className="px-6 py-4">{student.name}</td>
                      <td className="px-6 py-4">{student.email}</td>
                      <td className="px-6 py-4 text-right space-x-3">
                        <button
                          onClick={() =>
                            navigate("/Update", { state: { id: student.id } })
                          }
                          className="text-blue-600 dark:text-blue-400 hover:underline"
                        >
                          Edit 📝
                        </button>
                        <button
                          onClick={() => handleDelete(student.id)}
                          className="text-red-600 dark:text-red-400 hover:underline"
                        >
                          Delete 📦
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
