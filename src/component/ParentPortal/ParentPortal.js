import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

const ParentPortal = () => {
  const attendanceData = [
    { name: "Present", value: 75 },
    { name: "Absent", value: 25 },
  ];

  const COLORS = ["#4caf50", "#f44336"];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Welcome Section */}
      <header className="text-center mb-8">
        <h1 className="text-3xl font-bold text-blue-600">
          Welcome to the Parent Portal
        </h1>
        <p className="text-gray-600">Access your child's details and updates</p>
      </header>

      {/* Main Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Quick Info Cards */}
        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="text-xl font-semibold text-gray-700">Student Name</h2>
          <p className="text-gray-500">John Doe</p>
        </div>

        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="text-xl font-semibold text-gray-700">Class</h2>
          <p className="text-gray-500">Grade 5</p>
        </div>

        <div className="bg-white shadow-md p-4 rounded">
          <h2 className="text-xl font-semibold text-gray-700">Attendance</h2>
          <PieChart width={200} height={200}>
            <Pie
              data={attendanceData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              dataKey="value"
            >
              {attendanceData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mt-10">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Personal Information
          </h3>
          <p>
            <strong>Name:</strong> John Doe
          </p>
          <p>
            <strong>Class:</strong> Grade 5
          </p>
          <p>
            <strong>Roll Number:</strong> 12345
          </p>
        </div>
      </div>
    </div>
  );
};

export default ParentPortal;
