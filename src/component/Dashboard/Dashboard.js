import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Nav } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";
import SchoolList from "../SchoolDetails/SchoolList";
import StudentList from "../SchoolDetails/StudentList";
import StudentEntry from "../SchoolDetails/StudentEntry";
import PhotoGALLERY from "../SchoolDetails/PhotoGallery";
import UploadStudentStaff from "../SchoolDetails/UploadStudentStaff";
import UploadImage from "../SchoolDetails/UploadImage";
import UploadSchool from "../SchoolDetails/UploadSchool";
import AllSchoolList from "../SchoolDetails/AllSchoolList";
import CreateSchool from "../SchoolDetails/CreateSchool";

function Dashboard() {
  const [expandedItems, setExpandedItems] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const [activeContent, setActiveContent] = useState("dashboard");

  const toggleItem = (itemId) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderContent = () => {
    switch (activeContent) {
      case "School-List":
        return <SchoolList />;
      case "Student-list":
        return <StudentList />;
      case "Student-Entry":
        return <StudentEntry />;
      case "Photo-Gallery":
        return <PhotoGALLERY />;
      case "Upload-Student/Staff":
        return <UploadStudentStaff />;
      case "Upload-Image":
        return <UploadImage />;
      case "Upload-School":
        return <UploadSchool />;
      case "All-SchoolList":
        return <AllSchoolList />;
      case "Create-School":
        return <CreateSchool />;

      case "dashboard":
        return (
          <>
            <div className="page-header">
              <h4 className="mb-2">Dashboard Overview</h4>
              <p className="text-muted">
                Welcome back! Here's what's happening today.
              </p>
            </div>

            <div className="stats-grid">
              <div className="stat-card">
                <div className="stat-icon" style={{ background: "#e0e7ff" }}>
                  <i
                    className="bi bi-building fs-4"
                    style={{ color: "var(--primary)" }}
                  ></i>
                </div>
                <h3 className="h2 mb-1">248</h3>
                <p className="text-muted mb-0">Total Schools</p>
                <div className="d-flex align-items-center mt-3">
                  <span className="badge badge-custom bg-success-subtle text-success me-2">
                    <i className="bi bi-arrow-up-short"></i> 12%
                  </span>
                  <small className="text-muted">vs last month</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ background: "#dcfce7" }}>
                  <i
                    className="bi bi-people fs-4"
                    style={{ color: "var(--success)" }}
                  ></i>
                </div>
                <h3 className="h2 mb-1">1,847</h3>
                <p className="text-muted mb-0">Active Users</p>
                <div className="d-flex align-items-center mt-3">
                  <span className="badge badge-custom bg-success-subtle text-success me-2">
                    <i className="bi bi-arrow-up-short"></i> 8%
                  </span>
                  <small className="text-muted">vs last month</small>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon" style={{ background: "#fef3c7" }}>
                  <i
                    className="bi bi-check2-circle fs-4"
                    style={{ color: "var(--warning)" }}
                  ></i>
                </div>
                <h3 className="h2 mb-1">156</h3>
                <p className="text-muted mb-0">Completed Tasks</p>
                <div className="d-flex align-items-center mt-3">
                  <span className="badge badge-custom bg-warning-subtle text-warning me-2">
                    <i className="bi bi-arrow-up-short"></i> 5%
                  </span>
                  <small className="text-muted">vs last month</small>
                </div>
              </div>
            </div>

            <div className="charts-grid">
              <div className="chart-card">
                <h5 className="mb-4">Activity Overview</h5>
                {/* Add your chart component here */}
                <div
                  style={{
                    height: "300px",
                    background: "#f9fafb",
                    borderRadius: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Chart Placeholder
                </div>
              </div>

              <div className="activity-card">
                <h5 className="mb-4">Recent Activities</h5>
                <div className="activity-item">
                  <div className="activity-icon bg-primary-subtle">
                    <i className="bi bi-plus text-primary"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">New School Added</h6>
                    <small className="text-muted">2 hours ago</small>
                  </div>
                </div>
                <div className="activity-item">
                  <div className="activity-icon bg-success-subtle">
                    <i className="bi bi-check2 text-success"></i>
                  </div>
                  <div>
                    <h6 className="mb-1">Task Completed</h6>
                    <small className="text-muted">5 hours ago</small>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div style={{ display: "flex" }}>
      <style>
        {`
          :root {
            --primary: #4f46e5;
            --secondary: #818cf8;
            --success: #10b981;
            --warning: #f59e0b;
            --danger: #ef4444;
            --dark: #111827;
            --light: #f3f4f6;
          }

          body {
            background: #f9fafb;
            font-family: 'Inter', sans-serif;
          }

          /* Navbar Styles */
          .navbar-custom {
            background: white;
            height: 70px;
            padding: 0 1.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          }

          .navbar-brand {
            font-size: 1.5rem;
            font-weight: 700;
            background: linear-gradient(to right, var(--primary), var(--secondary));
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }

          .navbar-icons {
            gap: 1.5rem;
            padding: 0.5rem 1rem;
            background: var(--light);
            border-radius: 12px;
          }

          .nav-icon-wrapper {
            position: relative;
            padding: 0.5rem;
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .nav-icon-wrapper:hover {
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
          }

          .nav-icon {
            width: 22px;
            height: 22px;
          }

          
          /* Sidebar Styles */
          .sidebar {
            width: 280px;
            height: 100vh;
            background-color: #f5f8ff;
            border-right: 1px solid #ddd;
            padding: 1rem 0;
            position: fixed;
          }

          .sidebar .nav-link {
            color: #3467c5;
            font-size: 1rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 1.25rem;
            border-radius: 4px;
            text-decoration: none;
          }

          .sidebar .nav-link:hover {
            background-color: #d9e3f9;
          }

          .sidebar .dropdown-menu {
            background-color: transparent;
            border: none;
            box-shadow: none;
            position: static;
            width: 100%;
            padding: 0;
            margin: 0;
          }

          .sidebar .dropdown-menu .dropdown-item {
            color: #3467c5;
            padding: 0.5rem 2.5rem;
            font-size: 0.9rem;
            background-color: transparent;
          }

          .sidebar .dropdown-menu .dropdown-item:hover {
            background-color: #d9e3f9;
          }

          .sidebar .dropdown-menu.show {
            background-color: transparent;
          }

          .collapse.show {
            background-color: transparent;
          }

          .sidebar .nav-link.collapsed {
            background-color: transparent;
          }

          .sidebar span {
            display: flex;
            align-items: center;
            gap: 0.5rem;
          }

          .sidebar .nav-link i.bi-chevron-right {
            transition: transform 0.2s ease-in-out;
            font-size: 0.875rem;
          }

          /* Main Content */
          .main-content {
            margin-left: 280px;  /* Match sidebar width */
            padding: 2rem;
            width: calc(100% - 280px);
            min-height: calc(100vh - 70px);  /* Subtract navbar height */
            background: #f9fafb;
          }

          .page-header {
            margin-bottom: 2rem;
          }

          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          .charts-grid {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 1.5rem;
            margin-bottom: 2rem;
          }

          @media (max-width: 1200px) {
            .charts-grid {
              grid-template-columns: 1fr;
            }
          }

          @media (max-width: 768px) {
            .stats-grid {
              grid-template-columns: 1fr;
            }
          }

          .stat-card, .chart-card, .activity-card {
            background: white;
            border-radius: 12px;
            padding: 1.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          }

          .stat-card {
            background: white;
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
            transition: all 0.3s ease;
          }

          .stat-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          }

          .stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 1rem;
            background: var(--light);
          }

          .activity-card {
            background: white;
            border-radius: 16px;
            padding: 1.5rem;
            box-shadow: 0 1px 3px rgba(0,0,0,0.05);
          }

          .activity-item {
            display: flex;
            align-items: center;
            padding: 1rem 0;
            border-bottom: 1px solid #e5e7eb;
          }

          .activity-icon {
            width: 36px;
            height: 36px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 1rem;
          }

          .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            object-fit: cover;
          }

          .badge-custom {
            padding: 0.35em 0.65em;
            font-size: 0.75em;
            font-weight: 600;
            border-radius: 6px;
          }

          .dropdown-item {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.5rem 1rem;
          }

          .dropdown-item i {
            width: 16px;
          }

          .dropdown-item:hover {
            background-color: var(--light);
          }
        `}
      </style>

      {/* Navbar */}
      <nav className="navbar navbar-custom fixed-top">
        <div className="container-fluid">
          <div className="navbar-brand">Third Eye Security</div>

          <div className="d-flex align-items-center gap-4">
            <div className="navbar-icons d-flex align-items-center">
              <a href="/" className="nav-icon-wrapper">
                <img
                  src="/assets/nava/school.png"
                  alt="School"
                  className="nav-icon"
                />
              </a>
              <a href="/offices" className="nav-icon-wrapper">
                <img
                  src="/assets/nava/construction.png"
                  alt="Office"
                  className="nav-icon"
                />
              </a>
              <a href="/banks" className="nav-icon-wrapper">
                <img
                  src="/assets/nava/office-building.png"
                  alt="Bank"
                  className="nav-icon"
                />
              </a>
              <a href="/tasks" className="nav-icon-wrapper">
                <img
                  src="/assets/nava/clipboard.png"
                  alt="Clipboard"
                  className="nav-icon"
                />
              </a>
            </div>

            <div className="dropdown">
              <a
                className="btn btn-primary dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Hi, saavikka!
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuLink"
              >
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-user"></i> Profile
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-clock"></i> Timeline
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="fa-solid fa-right-to-bracket"></i> Logout
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div className="sidebar" style={{ marginTop: "70px" }}>
        <Nav className="flex-column">
          <Nav.Item className="nav-link">
            <span
              href="#"
              className="fs-5"
              onClick={() => setActiveContent("dashboard")}
              style={{ cursor: "pointer" }}
            >
              Dashboard
            </span>
          </Nav.Item>

          {/* School */}
          <Nav.Item>
            <Nav.Link
              href="#"
              className={`${
                !expandedItems.includes("school") ? "collapsed" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                toggleItem("school");
              }}
            >
              <span>
                <i className="bi bi-mortarboard-fill me-2"></i>School
              </span>
              <i
                className="bi bi-chevron-right"
                style={{
                  transform: expandedItems.includes("school")
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              ></i>
            </Nav.Link>
            <div
              className={`collapse ${
                expandedItems.includes("school") ? "show" : ""
              }`}
            >
              <Nav className="dropdown-menu show">
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("School-List")}
                  style={{ cursor: "pointer" }}
                >
                  School List
                </Nav.Link>
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("Student-list")}
                  style={{ cursor: "pointer" }}
                >
                  Student List
                </Nav.Link>
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("Student-Entry")}
                  style={{ cursor: "pointer" }}
                >
                  Student Entry
                </Nav.Link>
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("Create-School")}
                  style={{ cursor: "pointer" }}
                >
                  Create School
                </Nav.Link>
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("Photo-Gallery")}
                  style={{ cursor: "pointer" }}
                >
                  Photo Gallery
                </Nav.Link>
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("Upload-School")}
                  style={{ cursor: "pointer" }}
                >
                  Upload School
                </Nav.Link>
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("Upload-Student/Staff")}
                  style={{ cursor: "pointer" }}
                >
                  Upload Student/Staff
                </Nav.Link>
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("Upload-Image")}
                  style={{ cursor: "pointer" }}
                >
                  Upload Image
                </Nav.Link>
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("All-SchoolList")}
                  style={{ cursor: "pointer" }}
                >
                  All School List
                </Nav.Link>
              </Nav>
            </div>
          </Nav.Item>

          {/* Offices */}
          <Nav.Item>
            <Nav.Link
              href="#"
              className={`${
                !expandedItems.includes("offices") ? "collapsed" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                toggleItem("offices");
              }}
            >
              <span>
                <i className="bi bi-building me-2"></i>Offices
              </span>
              <i
                className="bi bi-chevron-right"
                style={{
                  transform: expandedItems.includes("offices")
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              ></i>
            </Nav.Link>
            <div
              className={`collapse ${
                expandedItems.includes("offices") ? "show" : ""
              }`}
            >
              <Nav className="dropdown-menu show">
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("add-office")}
                  style={{ cursor: "pointer" }}
                >
                  Add Office
                </Nav.Link>
                <Nav.Link
                  className="dropdown-item"
                  onClick={() => setActiveContent("view-offices")}
                  style={{ cursor: "pointer" }}
                >
                  View Offices
                </Nav.Link>
              </Nav>
            </div>
          </Nav.Item>

          {/* College */}
          <Nav.Item>
            <Nav.Link
              href="#"
              className={`${
                !expandedItems.includes("College") ? "collapsed" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                toggleItem("College");
              }}
            >
              <span>
                <i className="fa-solid fa-graduation-cap me-2"></i>College
              </span>
              <i
                className="bi bi-chevron-right"
                style={{
                  transform: expandedItems.includes("College")
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              ></i>
            </Nav.Link>
            <div
              className={`collapse ${
                expandedItems.includes("College") ? "show" : ""
              }`}
            >
              <Nav className="dropdown-menu show">
                <Nav.Link className="dropdown-item" href="#">
                  Add College
                </Nav.Link>
                <Nav.Link className="dropdown-item" href="#">
                  View College
                </Nav.Link>
              </Nav>
            </div>
          </Nav.Item>

          {/* Job order */}
          <Nav.Item>
            <Nav.Link
              href="#"
              className={`${!expandedItems.includes("Job") ? "collapsed" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                toggleItem("Job");
              }}
            >
              <span>
                <i className="fa-solid fa-list-check me-2"></i>Job order
              </span>
              <i
                className="bi bi-chevron-right"
                style={{
                  transform: expandedItems.includes("Job")
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              ></i>
            </Nav.Link>
            <div
              className={`collapse ${
                expandedItems.includes("Job") ? "show" : ""
              }`}
            >
              <Nav className="dropdown-menu show">
                <Nav.Link className="dropdown-item" href="#">
                  Add Job
                </Nav.Link>
                <Nav.Link className="dropdown-item" href="#">
                  View Job
                </Nav.Link>
              </Nav>
            </div>
          </Nav.Item>

          {/* Id Card */}
          <Nav.Item>
            <Nav.Link
              href="#"
              className={`${
                !expandedItems.includes("id card") ? "collapsed" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                toggleItem("id card");
              }}
            >
              <span>
                <i className="fa-solid fa-id-card me-2"></i>Id Card
              </span>
              <i
                className="bi bi-chevron-right"
                style={{
                  transform: expandedItems.includes("id card")
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              ></i>
            </Nav.Link>
            <div
              className={`collapse ${
                expandedItems.includes("id card") ? "show" : ""
              }`}
            >
              <Nav className="dropdown-menu show">
                <Nav.Link className="dropdown-item" href="#">
                  Add Id Card
                </Nav.Link>
                <Nav.Link className="dropdown-item" href="#">
                  View Id Card
                </Nav.Link>
              </Nav>
            </div>
          </Nav.Item>

          {/* Entity */}
          <Nav.Item>
            <Nav.Link
              href="#"
              className={`${
                !expandedItems.includes("Entity") ? "collapsed" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                toggleItem("Entity");
              }}
            >
              <span>
                <i className="fa-solid fa-house-laptop me-2"></i>Entity
              </span>
              <i
                className="bi bi-chevron-right"
                style={{
                  transform: expandedItems.includes("Entity")
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              ></i>
            </Nav.Link>
            <div
              className={`collapse ${
                expandedItems.includes("Entity") ? "show" : ""
              }`}
            >
              <Nav className="dropdown-menu show">
                <Nav.Link className="dropdown-item" href="#">
                  Add Entity
                </Nav.Link>
                <Nav.Link className="dropdown-item" href="#">
                  View Entity
                </Nav.Link>
              </Nav>
            </div>
          </Nav.Item>

          {/* Users */}
          <Nav.Item>
            <Nav.Link
              href="#"
              className={`${
                !expandedItems.includes("Users") ? "collapsed" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                toggleItem("Users");
              }}
            >
              <span>
                <i className="fa-solid fa-users me-2"></i>Users
              </span>
              <i
                className="bi bi-chevron-right"
                style={{
                  transform: expandedItems.includes("Users")
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              ></i>
            </Nav.Link>
            <div
              className={`collapse ${
                expandedItems.includes("Users") ? "show" : ""
              }`}
            >
              <Nav className="dropdown-menu show">
                <Nav.Link className="dropdown-item" href="#">
                  Add Users
                </Nav.Link>
                <Nav.Link className="dropdown-item" href="#">
                  View Users
                </Nav.Link>
              </Nav>
            </div>
          </Nav.Item>

          {/* Masters */}
          <Nav.Item>
            <Nav.Link
              href="#"
              className={`${
                !expandedItems.includes("Masters") ? "collapsed" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                toggleItem("Masters");
              }}
            >
              <span>
                <i className="fa-solid fa-user-gear me-2"></i>Masters
              </span>
              <i
                className="bi bi-chevron-right"
                style={{
                  transform: expandedItems.includes("Masters")
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              ></i>
            </Nav.Link>
            <div
              className={`collapse ${
                expandedItems.includes("Masters") ? "show" : ""
              }`}
            >
              <Nav className="dropdown-menu show">
                <Nav.Link className="dropdown-item" href="#">
                  Add Masters
                </Nav.Link>
                <Nav.Link className="dropdown-item" href="#">
                  View Masters
                </Nav.Link>
              </Nav>
            </div>
          </Nav.Item>

          {/* College Student */}
          <Nav.Item>
            <Nav.Link
              href="#"
              className={`${
                !expandedItems.includes("College Student") ? "collapsed" : ""
              }`}
              onClick={(e) => {
                e.preventDefault();
                toggleItem("College Student");
              }}
            >
              <span>
                <i className="fa-solid fa-user-graduate me-2"></i>College
                Student
              </span>
              <i
                className="bi bi-chevron-right"
                style={{
                  transform: expandedItems.includes("College Student")
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                  transition: "transform 0.2s ease-in-out",
                }}
              ></i>
            </Nav.Link>
            <div
              className={`collapse ${
                expandedItems.includes("College Student") ? "show" : ""
              }`}
            >
              <Nav className="dropdown-menu show">
                <Nav.Link className="dropdown-item" href="#">
                  Add College Student
                </Nav.Link>
                <Nav.Link className="dropdown-item" href="#">
                  View College Student
                </Nav.Link>
              </Nav>
            </div>
          </Nav.Item>
        </Nav>
      </div>

      {/* Updated Main Content */}
      <div className="main-content" style={{ marginTop: "70px" }}>
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;
