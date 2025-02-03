import React, { useState } from "react";
import imageCompression from "browser-image-compression";

const PhotoOptimizationApp = () => {
  const [image, setImage] = useState(null);
  const [optimizedImage, setOptimizedImage] = useState(null);
  const [fileSize, setFileSize] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      setError(null);
    }
  };

  const handleOptimize = async () => {
    if (!image) return;

    const file = document.getElementById("image-upload").files[0];
    const options = {
      maxSizeMB: 0.01, // Approx. 10KB
      maxWidthOrHeight: 800, // Resize if needed
      useWebWorker: true,
    };

    setLoading(true);
    setError(null);

    try {
      const compressedFile = await imageCompression(file, options);
      setFileSize((compressedFile.size / 1024).toFixed(2)); // Size in KB
      const compressedImageUrl = URL.createObjectURL(compressedFile);
      setOptimizedImage(compressedImageUrl);
    } catch (error) {
      setError("Error compressing image. Please try again.");
      console.error("Error compressing image:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">
        Photo Optimization for Certificates
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Upload */}
        <div className="p-4 border rounded shadow-md bg-white">
          <h2 className="text-xl font-bold mb-4">Upload Photo</h2>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="mb-4 p-2 border rounded w-full"
          />
          {image && (
            <img src={image} alt="Uploaded" className="mb-4 max-h-48" />
          )}
          <button
            onClick={handleOptimize}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            {loading ? "Optimizing..." : "Optimize Photo"}
          </button>
          {error && <p className="text-red-500 mt-2">{error}</p>}
        </div>

        {/* Optimized Preview */}
        <div className="p-4 border rounded shadow-md bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Optimized Photo</h2>
          {optimizedImage ? (
            <>
              <img
                src={optimizedImage}
                alt="Optimized"
                className="mb-4 max-h-48"
              />
              <p className="text-gray-700">File Size: {fileSize} KB</p>
              <a
                href={optimizedImage}
                download="optimized-photo.jpg"
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 inline-block mt-4"
              >
                Download Photo
              </a>
            </>
          ) : (
            <p className="text-gray-500">Optimized photo will appear here.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoOptimizationApp;
