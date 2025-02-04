import { SpaceIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const UploadSchool = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = () => {
    if (selectedFile) {
      alert("File uploaded successfully");
    }
  };

  const handleReset = () => {
    setSelectedFile(null);
  };

  return (
    <div className="container mt-4">
      <div className="card p-4  rounded">
        <div className="card-header bg-primary text-white d-flex justify-content-between">
          <strong>Upload School Master</strong>
          <a
            href="/path-to-template.xlsx"
            className="text-white text-decoration-none"
          >
            Download excel template
            <img
              src="assets/excel.png"
              alt="excelicon"
              style={{ with: 30, height: 30, marginLeft: 10 }}
            ></img>
          </a>
        </div>
        <div className="card-body">
          <div className="mb-3">
            <input
              type="file"
              className="form-control"
              onChange={handleFileChange}
            />
            {selectedFile && (
              <p className="mt-2">Selected File: {selectedFile.name}</p>
            )}
          </div>
          <div className="d-flex gap-2">
            <Button variant="success" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-between">
          <div>
            <Link
              to="/SchoolDetails/SchoolList"
              className="text-primary text-decoration-none me-2"
            >
              Back to List
            </Link>
            |
            <a
              href="/upload-history"
              className="text-primary text-decoration-none ms-2"
            >
              Upload History
            </a>
          </div>
        </div>
      </div>

      <div className="mt-3">
        <p>
          <strong>Note:</strong>{" "}
          <em>
            Download excel blank file template for uploading school details.
          </em>
        </p>
        <p>
          After downloading the file, fill in all the details in the Excel
          sheet. Save the template file with the same or a different file name.
        </p>
        <p>
          Click the 'Choose File' button to select the Excel file. You can
          re-select the Excel file if chosen wrongly.
        </p>
        <p>
          Click on the submit button to preview the Excel content. Then, click
          submit again to save new school details on the server.
        </p>
      </div>
    </div>
  );
};

export default UploadSchool;
