import React, { useState } from "react";
import { Form, Row, Col, Button, Card } from "react-bootstrap";
import { db } from "../../firebaseconfig";
import { collection, addDoc } from "firebase/firestore";

const CreateSchool = () => {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.state) newErrors.state = "State is required";
    if (!formData.district) newErrors.district = "District is required";
    if (!formData.city) newErrors.city = "City/Town is required";
    if (!formData.schoolName) newErrors.schoolName = "School Name is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phoneNo) newErrors.phoneNo = "Phone No is required";
    if (!formData.mobileNo) newErrors.mobileNo = "Mobile No is required";
    if (!formData.principalName)
      newErrors.principalName = "Principal Name is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        await addDoc(collection(db, "schools"), formData);
        handleReset();
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  const handleReset = () => {
    setFormData({
      state: "",
      district: "",
      city: "",
      schoolName: "",
      address: "",
      phoneNo: "",
      mobileNo: "",
      principalName: "",
      schoolCode: "",
      vendor: "",
      pincode: "",
      emailID: "",
      website: "",
      registrationNo: "",
      management: "",
      affiliation: "",
      affiliationNo: "",
      principalPhoneNo: "",
      principalMobile: "",
      principalWhatsApp: "",
      principalEmail: "",
      contactPerson1Name: "",
      contactPerson1Designation: "",
      contactPerson1MobileNo: "",
      contactPerson1WhatsApp: "",
      contactPerson1Email: "",
      contactPerson2Name: "",
      contactPerson2Designation: "",
      contactPerson2MobileNo: "",
      contactPerson2WhatsApp: "",
      contactPerson2Email: "",
    });
    setErrors({});
  };

  return (
    <>
      <h2 className="text mb-3">School Registration</h2>
      <div className="container mt-4 border p-4 rounded bg-white">
        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>
              State <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Select
              name="state"
              onChange={handleChange}
              value={formData.state || ""}
            >
              <option>---Select---</option>
              <option>TamilNadu</option>
              <option>Kerala</option>
            </Form.Select>
            {errors.state && <div className="text-danger">{errors.state}</div>}
          </Col>
          <Col md={3}>
            <Form.Label>
              District <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Select
              name="district"
              onChange={handleChange}
              value={formData.district || ""}
            >
              <option>---Select---</option>
              <option>trichy</option>
              <option>chennai</option>
            </Form.Select>
            {errors.district && (
              <div className="text-danger">{errors.district}</div>
            )}
          </Col>
          <Col md={3}>
            <Form.Label>Block/Tehsil</Form.Label>
            <Form.Select
              name="blockTehsil"
              onChange={handleChange}
              value={formData.blockTehsil || ""}
            >
              <option>---Select---</option>
              <option>aaa</option>
              <option>abc</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label>
              City/Town <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Select
              name="city"
              onChange={handleChange}
              value={formData.city || ""}
            >
              <option>---Select---</option>
              <option>aaa</option>
              <option>abc</option>
            </Form.Select>
            {errors.city && <div className="text-danger">{errors.city}</div>}
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>School Name</Form.Label>
            <Form.Control
              type="text"
              name="schoolName"
              onChange={handleChange}
              value={formData.schoolName || ""}
            />
            {errors.schoolName && (
              <div className="text-danger">{errors.schoolName}</div>
            )}
          </Col>
          <Col md={3}>
            <Form.Label>School Code</Form.Label>
            <Form.Control
              type="text"
              name="schoolCode"
              onChange={handleChange}
              value={formData.schoolCode || ""}
            />
          </Col>
          <Col md={3}>
            <Form.Label>Vendor</Form.Label>
            <Form.Control
              type="text"
              name="vendor"
              onChange={handleChange}
              value={formData.vendor || ""}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              onChange={handleChange}
              value={formData.address || ""}
            />
            {errors.address && (
              <div className="text-danger">{errors.address}</div>
            )}
          </Col>
          <Col md={3}>
            <Form.Label>Pincode</Form.Label>
            <Form.Control
              type="text"
              name="pincode"
              onChange={handleChange}
              value={formData.pincode || ""}
            />
          </Col>
          <Col md={3}>
            <Form.Label>Photo download name</Form.Label>
            <Form.Select
              name="photoDownloadName"
              onChange={handleChange}
              value={formData.photoDownloadName || ""}
            >
              <option>---Select---</option>
            </Form.Select>
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Phone No</Form.Label>
            <Form.Control
              type="text"
              name="phoneNo"
              onChange={handleChange}
              value={formData.phoneNo || ""}
            />
            {errors.phoneNo && (
              <div className="text-danger">{errors.phoneNo}</div>
            )}
          </Col>
          <Col md={3}>
            <Form.Label>Mobile No</Form.Label>
            <Form.Control
              type="text"
              name="mobileNo"
              onChange={handleChange}
              value={formData.mobileNo || ""}
            />
            {errors.mobileNo && (
              <div className="text-danger">{errors.mobileNo}</div>
            )}
          </Col>
          <Col md={3}>
            <Form.Label>Email ID</Form.Label>
            <Form.Control
              type="email"
              name="emailID"
              onChange={handleChange}
              value={formData.emailID || ""}
            />
          </Col>
          <Col md={3}>
            <Form.Label>Website</Form.Label>
            <Form.Control
              type="text"
              name="website"
              onChange={handleChange}
              value={formData.website || ""}
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md={3}>
            <Form.Label>Registration No</Form.Label>
            <Form.Control
              type="text"
              name="registrationNo"
              onChange={handleChange}
              value={formData.registrationNo || ""}
            />
          </Col>
          <Col md={3}>
            <Form.Label>Management</Form.Label>
            <Form.Control
              type="text"
              name="management"
              onChange={handleChange}
              value={formData.management || ""}
            />
          </Col>
          <Col md={3}>
            <Form.Label>Affiliation</Form.Label>
            <Form.Select
              name="affiliation"
              onChange={handleChange}
              value={formData.affiliation || ""}
            >
              <option>---Select---</option>
            </Form.Select>
          </Col>
          <Col md={3}>
            <Form.Label>Affiliation No</Form.Label>
            <Form.Control
              type="text"
              name="affiliationNo"
              onChange={handleChange}
              value={formData.affiliationNo || ""}
            />
          </Col>
        </Row>
        <Card className="p-3 bg-light border mb-3">
          <h5 className="text-dark">Principal Details</h5>
          <Row>
            <Col md={3}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="principalName"
                onChange={handleChange}
                value={formData.principalName || ""}
              />
              {errors.principalName && (
                <div className="text-danger">{errors.principalName}</div>
              )}
            </Col>
            <Col md={2}>
              <Form.Label>Phone No</Form.Label>
              <Form.Control
                type="text"
                name="principalPhoneNo"
                onChange={handleChange}
                value={formData.principalPhoneNo || ""}
              />
            </Col>
            <Col md={2}>
              <Form.Label>Mobile</Form.Label>
              <Form.Control
                type="text"
                name="principalMobile"
                onChange={handleChange}
                value={formData.principalMobile || ""}
              />
            </Col>
            <Col md={2}>
              <Form.Label>WhatsApp</Form.Label>
              <Form.Control
                type="text"
                name="principalWhatsApp"
                onChange={handleChange}
                value={formData.principalWhatsApp || ""}
              />
            </Col>
            <Col md={2}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="principalEmail"
                onChange={handleChange}
                value={formData.principalEmail || ""}
              />
            </Col>
          </Row>
        </Card>
        <Card className="p-3 bg-light border mb-3">
          <h5 className="text-dark">Contact Person 1</h5>
          <Row>
            <Col md={3}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="contactPerson1Name"
                onChange={handleChange}
                value={formData.contactPerson1Name || ""}
              />
            </Col>
            <Col md={2}>
              <Form.Label>Designation</Form.Label>
              <Form.Select
                name="contactPerson1Designation"
                onChange={handleChange}
                value={formData.contactPerson1Designation || ""}
              >
                <option>---Select---</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="text"
                name="contactPerson1MobileNo"
                onChange={handleChange}
                value={formData.contactPerson1MobileNo || ""}
              />
            </Col>
            <Col md={2}>
              <Form.Label>WhatsApp</Form.Label>
              <Form.Control
                type="text"
                name="contactPerson1WhatsApp"
                onChange={handleChange}
                value={formData.contactPerson1WhatsApp || ""}
              />
            </Col>
            <Col md={2}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="contactPerson1Email"
                onChange={handleChange}
                value={formData.contactPerson1Email || ""}
              />
            </Col>
          </Row>
        </Card>
        <Card className="p-3 bg-light border mb-3">
          <h5 className="text-dark">Contact Person 2</h5>
          <Row>
            <Col md={3}>
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="contactPerson2Name"
                onChange={handleChange}
                value={formData.contactPerson2Name || ""}
              />
            </Col>
            <Col md={2}>
              <Form.Label>Designation</Form.Label>
              <Form.Select
                name="contactPerson2Designation"
                onChange={handleChange}
                value={formData.contactPerson2Designation || ""}
              >
                <option>---Select---</option>
              </Form.Select>
            </Col>
            <Col md={2}>
              <Form.Label>Mobile No</Form.Label>
              <Form.Control
                type="text"
                name="contactPerson2MobileNo"
                onChange={handleChange}
                value={formData.contactPerson2MobileNo || ""}
              />
            </Col>
            <Col md={2}>
              <Form.Label>WhatsApp</Form.Label>
              <Form.Control
                type="text"
                name="contactPerson2WhatsApp"
                onChange={handleChange}
                value={formData.contactPerson2WhatsApp || ""}
              />
            </Col>
            <Col md={2}>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="contactPerson2Email"
                onChange={handleChange}
                value={formData.contactPerson2Email || ""}
              />
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
        <div className="text-center ">
          <Button className="mt-3 mx-2" variant="primary" href="#">
            School List
          </Button>
          <Button
            className="mt-3 mx-2"
            variant="success"
            onClick={handleSubmit}
          >
            Create
          </Button>

          <Button
            className="mt-3 text-center"
            variant="secondary"
            onClick={handleReset}
          >
            Reset
          </Button>
        </div>
      </div>
    </>
  );
};

export default CreateSchool;
