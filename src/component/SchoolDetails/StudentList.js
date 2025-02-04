import React from "react";

const StudentList = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4">View Student List</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form>
                {/* Form fields for adding a school */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label mandatory">
                      City <span style={{ color: "red" }}>*</span>
                    </label>
                    <select className="form-control mandatory" required>
                      <option value="">Select City</option>
                      <option value="city1">City 1</option>
                      <option value="city2">City 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label className="form-label mandatory">
                      All <span style={{ color: "red" }}>*</span>
                    </label>
                    <select className="form-control mandatory" required>
                      <option value="">Select All</option>
                      <option value="all1">All 1</option>
                      <option value="all2">All 2</option>
                      {/* Add more options as needed */}
                    </select>
                  </div>
                </div>
                {/* Other form fields... */}
                <button type="submit" className="btn btn-success">
                  view
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentList;
