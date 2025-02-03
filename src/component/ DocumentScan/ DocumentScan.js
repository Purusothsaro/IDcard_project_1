import React, { useState } from "react";
import { Camera, Upload, Trash2 } from "lucide-react"; // Ensure lucide-react is installed

const DocumentScan = () => {
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState(null);

  const handleFileUpload = (e) => {
    const uploadedFiles = Array.from(e.target.files);
    setFiles([...files, ...uploadedFiles]);
  };

  const handleCapture = () => {
    alert("Capture functionality coming soon!");
  };

  const handleDelete = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1 className="text-2xl font-bold">Document Scanner</h1>
        <p className="text-gray-600">
          Scan and upload data from physical documents seamlessly.
        </p>
      </div>

      {/* Action Section */}
      <div className="bg-white p-4 space-y-4 text-center shadow-md rounded">
        <div className="flex justify-center space-x-4">
          <button
            onClick={handleCapture}
            className="flex items-center space-x-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            <Camera size={18} />
            <span>Scan via Camera</span>
          </button>
          <label className="flex items-center space-x-2 cursor-pointer">
            <Upload size={18} />
            <span>Upload Files</span>
            <input
              type="file"
              accept="image/*,application/pdf"
              multiple
              onChange={handleFileUpload}
              className="hidden"
            />
          </label>
        </div>

        {preview && (
          <div className="mt-4 border p-4 rounded-lg">
            <img src={preview} alt="Preview" className="max-w-full h-auto" />
          </div>
        )}
      </div>

      {/* Uploaded Files Section */}
      {files.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Uploaded Documents</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {files.map((file, index) => (
              <div
                key={index}
                className="relative bg-white shadow-md rounded p-4"
              >
                <div className="absolute top-2 right-2">
                  <button
                    className="bg-red-500 text-white rounded p-1"
                    onClick={() => handleDelete(index)}
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
                <div>
                  <p className="truncate text-gray-700">{file.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentScan;
