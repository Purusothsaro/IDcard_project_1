import React, { useState } from "react";
import { Table, Form, Button } from "react-bootstrap";

const AllSchoolList = () => {
  const [search, setSearch] = useState("");
  const [schools, setSchools] = useState([
    {
      name: "GOVT.HS SCHOOL",
      address: "PADINJARATHARA",
      code: "001",
      principal: "Subramanyan",
      district: "Wayanad",
      city: "Padinjarathara",
      pincode: "673575",
    },
  ]);

  return (
    <div className="p-4">
      <h2 className="mb-4">All School List</h2>
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="d-flex flex-wrap gap-2 mb-3">
                <Form.Group className="mb-3">
                  <Form.Label>State</Form.Label>
                  <Form.Select className="w-auto" aria-label="Select State">
                    <option value="">Select State</option>
                    <option value="kerala">Kerala</option>
                    <option value="tamil-nadu">Tamil Nadu</option>
                    <option value="karnataka">Karnataka</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>District</Form.Label>
                  <Form.Select className="w-auto" aria-label="Select District">
                    <option value="">Select District</option>
                    <option value="wayanad">Wayanad</option>
                    <option value="kozhikode">Kozhikode</option>
                    <option value="malappuram">Malappuram</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>City/Town</Form.Label>
                  <Form.Select className="w-auto" aria-label="Select City/Town">
                    <option value="">Select City/Town</option>
                    <option value="padinjarathara">Padinjarathara</option>
                    <option value="kozhikode-city">Kozhikode City</option>
                    <option value="malappuram-town">Malappuram Town</option>
                  </Form.Select>
                </Form.Group>
                <div className="d-flex align-items-center gap-2">
                  <Button variant="warning" className="me-2">
                    Filter
                  </Button>
                  <Form.Control
                    type="text"
                    placeholder="Enter School name"
                    className="w-auto"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ maxWidth: "300px" }}
                  />
                  <Button variant="success" className="ms-2">
                    Search
                  </Button>
                </div>
              </div>
              <Table striped bordered hover>
                <thead className="table-dark">
                  <tr>
                    <th>School Name</th>
                    <th>Address</th>
                    <th>Code</th>
                    <th>Principal Name</th>
                    <th>District</th>
                    <th>City</th>
                    <th>Pin Code</th>
                  </tr>
                </thead>
                <tbody>
                  {schools.map((school, index) => (
                    <tr key={index}>
                      <td>{school.name}</td>
                      <td>{school.address}</td>
                      <td>{school.code}</td>
                      <td>{school.principal}</td>
                      <td>{school.district}</td>
                      <td>{school.city}</td>
                      <td>{school.pincode}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span>Showing 1-1 of 1</span>
                <div>
                  <Button variant="secondary" size="sm" className="me-2">
                    &lt;&lt;
                  </Button>
                  <Button variant="secondary" size="sm" disabled>
                    1
                  </Button>
                  <Button variant="secondary" size="sm" className="ms-2">
                    &gt;&gt;
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllSchoolList;
