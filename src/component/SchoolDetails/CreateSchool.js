import React, { useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";

const CreateSchool = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2 className="text mb-3">School Registration</h2>
      <div className="container mt-4 border p-4 rounded bg-white">
        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>State</Form.Label>
            <Form.Select>
              <option>---Select---</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label>District</Form.Label>
            <Form.Select>
              <option>---Select---</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label>Block/Tehsil</Form.Label>
            <Form.Select>
              <option>---Select---</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label>City/Town</Form.Label>
            <Form.Select>
              <option>---Select---</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>School Name</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md={3}>
            <Form.Label>School Code</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md={3}>
            <Form.Label>Vendor</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md={3}>
            <Form.Label>Pincode</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md={3}>
            <Form.Label>Photo download name</Form.Label>
            <Form.Select>
              <option>---Select---</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>PhoneNo</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md={3}>
            <Form.Label>Mobile No</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md={3}>
            <Form.Label>EmailID</Form.Label>
            <Form.Control type="email" />
          </Col>
          <Col md={3}>
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Registration No</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md={3}>
            <Form.Label>Management</Form.Label>
            <Form.Control type="text" />
          </Col>
          <Col md={3}>
            <Form.Label>Affiliation</Form.Label>
            <Form.Select>
              <option>---Select---</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label>Affiliation No</Form.Label>
            <Form.Control type="text" />
          </Col>
        </Row>
        <Card className="p-3 bg-light border mb-3">
          <h5 className="text-dark">Principal Details</h5>
          <Row>
            <Col md={3}>
              <Form.Label>Name*</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>Phone No</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>Mobile</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>WhatsApp</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
        </Card>
        <Card className="p-3 bg-light border mb-3">
          <h5 className="text-dark">Contact Person 1</h5>
          <Row>
            <Col md={3}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>Designation</Form.Label>
              <Form.Select>
                <option>---Select---</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Label>Mobile No</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>WhatsApp</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
        </Card>
        <Card className="p-3 bg-light border mb-3">
          <h5 className="text-dark">Contact Person 2</h5>
          <Row>
            <Col md={3}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>Designation</Form.Label>
              <Form.Select>
                <option>---Select---</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Label>Mobile No</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>WhatsApp</Form.Label>
              <Form.Control type="text" />
            </Col>
            <Col md={2}>
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" />
            </Col>
          </Row>
        </Card>
        <Row>
          <Col md={4}>
            <Card className="p-3 text-center">
              <Form.Label>Upload School Logo</Form.Label>
              <Form.Control type="file" />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 text-center">
              <Form.Label>School Watermark</Form.Label>
              <Form.Control type="file" />
            </Card>
          </Col>
          <Col md={4}>
            <Card className="p-3 text-center">
              <Form.Label>Signature</Form.Label>
              <Form.Control type="file" />
            </Card>
          </Col>
        </Row>
        <Button
          className="mt-3 algin-item-center"
          variant="success"
          onClick={() => {
            /* Handle create logic */
          }}
        >
          Create
        </Button>
        <Button
          className="mt-3"
          variant="secondary"
          onClick={() => {
            /* Handle reset logic */
          }}
        >
          Reset
        </Button>
      </div>
    </>
  );
};

export default CreateSchool;
