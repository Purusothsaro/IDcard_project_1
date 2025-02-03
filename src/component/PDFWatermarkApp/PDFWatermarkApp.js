import React, { useState } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { PDFDocument, rgb, degrees } from "pdf-lib";

const PDFWatermarkApp = () => {
  const [watermark, setWatermark] = useState("Sample Watermark");
  const [pdfContent, setPdfContent] = useState("This is your PDF content.");
  const [uploadedPdf, setUploadedPdf] = useState(null);

  const handleUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setUploadedPdf(reader.result);
      };
      reader.readAsArrayBuffer(file);
    }
  };

  const handleDownload = async () => {
    if (!uploadedPdf) return;

    const pdfDoc = await PDFDocument.load(uploadedPdf);
    const pages = pdfDoc.getPages();
    const { width, height } = pages[0].getSize();

    pages.forEach((page) => {
      page.drawText(watermark, {
        x: width / 2,
        y: height / 2,
        size: 50,
        color: rgb(0.75, 0.75, 0.75),
        opacity: 0.5,
        rotate: degrees(-45),
      });
    });

    const pdfBytes = await pdfDoc.save();
    const blob = new Blob([pdfBytes], { type: "application/pdf" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "watermarked-document.pdf";
    link.click();
  };

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Watermark Form */}
        <div className="p-4 border rounded shadow-md bg-white">
          <h2 className="text-xl font-bold mb-4">Add Watermark</h2>
          <input
            type="text"
            value={watermark}
            onChange={(e) => setWatermark(e.target.value)}
            className="w-full mb-4 p-2 border rounded"
            placeholder="Enter watermark text"
          />
          <input
            type="file"
            accept="application/pdf"
            onChange={handleUpload}
            className="w-full mb-4 p-2 border rounded"
          />
          <button
            onClick={handleDownload}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Download PDF
          </button>
        </div>

        {/* PDF Preview */}
        <div
          id="pdf-preview"
          className="p-4 border rounded shadow-md bg-gray-50 relative"
        >
          <div className="absolute top-10 left-10 text-gray-400 opacity-50 text-6xl -rotate-45">
            {watermark}
          </div>
          <p>{pdfContent}</p>
        </div>
      </div>
    </div>
  );
};

export default PDFWatermarkApp;
