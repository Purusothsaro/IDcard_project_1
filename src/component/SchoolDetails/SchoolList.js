import React from "react";

const SchoolList = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4">School List</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <form>
                {/* Form fields for adding a school */}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label className="form-label mandatory">
                      * School Name
                    </label>
                    <input
                      type="text"
                      className="form-control mandatory"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="form-label">Location</label>
                    <input type="text" className="form-control" required />
                  </div>
                </div>
                {/* Other form fields... */}
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchoolList;
