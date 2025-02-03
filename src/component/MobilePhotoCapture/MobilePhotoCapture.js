import React from "react";
import { Camera, FileText } from "lucide-react";
import { motion } from "framer-motion";

const MobilePhotoCapture = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center py-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-bold text-gray-800">
            Mobile Photo Capture & Form Assignment
          </h1>
          <p className="text-gray-600 mt-2">
            Seamlessly integrate mobile photo capture and form assignment into
            your workflow.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="shadow-lg bg-white rounded-2xl overflow-hidden">
            <div className="bg-blue-500 text-white p-4">
              <h2 className="text-xl font-semibold">Capture Photo</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Use your mobile device to quickly capture photos for student IDs
                or other purposes.
              </p>
              <button className="w-full flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                <Camera />
                Open Camera
              </button>
            </div>
          </div>

          <div className="shadow-lg bg-white rounded-2xl overflow-hidden">
            <div className="bg-green-500 text-white p-4">
              <h2 className="text-xl font-semibold">Assign Forms</h2>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">
                Assign and manage forms directly from your app for streamlined
                data collection.
              </p>
              <button className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
                <FileText />
                Assign Form
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobilePhotoCapture;
