import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { motion } from "framer-motion";

const DigitalCardSync = () => {
  const [studentName, setStudentName] = useState("");
  const [qrCode, setQrCode] = useState("");

  const generateQRCode = () => {
    if (studentName) {
      setQrCode(
        `https://example.com/student/${encodeURIComponent(studentName)}`
      );
    } else {
      alert("Please enter the student's name.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 text-center">
          Digital Card Sync
        </h1>
        <p className="text-gray-600 mt-2 text-center">
          Generate and sync your digital cards seamlessly.
        </p>

        <div className="mt-8">
          <div className="bg-white shadow-md rounded p-6">
            <h2 className="text-xl font-semibold mb-4">Generate QR Code</h2>
            <label className="block mb-2">
              <span className="text-gray-700">Enter Student Name:</span>
              <input
                type="text"
                className="mt-1 block w-full border-gray-300 rounded p-2"
                placeholder="Enter student's name"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
              />
            </label>
            <button
              onClick={generateQRCode}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Generate QR Code
            </button>
          </div>

          {qrCode && (
            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Your QR Code</h2>
              <QRCodeCanvas value={qrCode} size={256} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DigitalCardSync;
