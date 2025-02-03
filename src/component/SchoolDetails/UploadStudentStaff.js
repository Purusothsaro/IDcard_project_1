import React from "react";

const UploadStudentStaff = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4">Upload Student/Staff Excel File</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form>
                {/* Form fields for adding a school */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label className="form-label mandatory">Upload Type</label>
                    <select className="form-control mandatory" required>
                      <option value="Student">Student</option>
                      <option value="Staff">Staff</option>
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label mandatory">City</label>
                    <select className="form-control mandatory" required>
                      <option value="">Select City</option>
                      <option value="city1">City 1</option>
                      <option value="city2">City 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label className="form-label">School</label>
                    <select className="form-control" required>
                      <option value="">Select School</option>
                      <option value="school1">School 1</option>
                      <option value="school2">School 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                {/* Other form fields... */}
                <button type="submit" className="btn btn-success">
                  Select
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadStudentStaff;
