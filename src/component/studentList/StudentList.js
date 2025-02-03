import React, { useState } from "react";

const studentsData = [
  { id: 1, name: "John Doe", hasPrinted: false },
  { id: 2, name: "Jane Smith", hasPrinted: true },
  { id: 3, name: "Mark Johnson", hasPrinted: false },
];

const StudentList = () => {
  const [students, setStudents] = useState(studentsData);
  const [searchTerm, setSearchTerm] = useState("");

  const handlePrintToggle = (id) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) => {
        const { hasPrinted, ...rest } = student;
        return student.id === id
          ? { ...rest, hasPrinted: !hasPrinted }
          : student;
      })
    );
  };

  const handleDelete = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    );
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Student List</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mb-4 p-2 border rounded w-full"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredStudents.map(({ id, name, hasPrinted }) => (
            <div
              key={id}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <h2 className="text-lg font-semibold">{name}</h2>
              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={hasPrinted}
                    onChange={() => handlePrintToggle(id)}
                    className="h-4 w-4"
                  />
                  <span className="ml-2">Printed</span>
                </label>
                <button
                  onClick={() => handleDelete(id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-500">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
