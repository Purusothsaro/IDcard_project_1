import React, { useState } from "react";
import { Table, Form, Button, InputGroup } from "react-bootstrap";

const initialSchools = [
  {
    name: "GOVT.HS SCHOOL",
    address: "PADINJARATHARA",
    branchCode: "001",
    principal: "Subramanyan",
    city: "Padinjarathara",
    district: "Wayanad",
    pincode: "673575",
  },
];

const SchoolList = () => {
  const [search, setSearch] = useState("");
  const [entries, setEntries] = useState(10);
  const [schools, setSchools] = useState(initialSchools);

  const handlePagination = (direction) => {
    // Logic for pagination can be added here
  };

  return (
    <>
      <h2 className="text mb-3">School List</h2>
      <div className="container mt-4 border rounded p-4 bg-white">
        <div className="d-flex flex-wrap gap-3 mb-3 align-items-center">
          <Form.Group>
            <Form.Label>Entity Admin</Form.Label>
            <Form.Select className="w-auto">
              <option>EntityAdmin</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>Saavikka</Form.Label>
            <Form.Select className="w-auto">
              <option>saavikka - SavithAp</option>
            </Form.Select>
          </Form.Group>
          <Form.Group>
            <Form.Label>City</Form.Label>
            <Form.Select className="w-auto">
              <option>--- All City ---</option>
            </Form.Select>
          </Form.Group>
          <InputGroup className="w-auto ">
            <Form.Group>
              <Form.Label>Search</Form.Label>
              <Form.Control
                type="text"
                placeholder="Search..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="me-2"
              />
            </Form.Group>
            <Button
              variant="primary"
              style={{
                width: "50px",
                height: "40px",
                marginTop: "30px",
                borderRadius: "2px",
              }}
              aria-label="Search"
            >
              <i class="bi bi-search d-flex justify-content-center align-items-center"></i>
            </Button>
          </InputGroup>
        </div>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <Form.Select
            className="w-auto"
            onChange={(e) => setEntries(e.target.value)}
          >
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </Form.Select>
          <span className="text-muted">Showing 1 to 1 of 1 entries</span>
        </div>
        <Table
          striped
          bordered
          hover
          responsive
          className="table-sm text-center"
        >
          <thead className="table-success">
            <tr>
              <th>School Name</th>
              <th>Address</th>
              <th>Branch Code</th>
              <th>Principal Name</th>
              <th>City</th>
              <th>District</th>
              <th>Pin Code</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {schools.map(
              (
                {
                  name,
                  address,
                  branchCode,
                  principal,
                  city,
                  district,
                  pincode,
                },
                index
              ) => (
                <tr key={index}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{branchCode}</td>
                  <td>{principal}</td>
                  <td>{city}</td>
                  <td>{district}</td>
                  <td>{pincode}</td>
                  <td>
                    <Button
                      variant="warning"
                      aria-label={`Details for ${name}`}
                    >
                      Details
                    </Button>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </Table>
        <div className="d-flex justify-content-between align-items-center mt-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handlePagination("prev")}
            aria-label="Previous page"
          >
            Previous
          </Button>
          <Button variant="primary" size="sm" aria-label="Current page 1">
            1
          </Button>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => handlePagination("next")}
            aria-label="Next page"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
};

export default SchoolList;
