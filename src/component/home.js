import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

function home() {
  return (
    <>
      {/* Top Bar */}
      <div className="top-bar border-bottom">
        <div className="container d-flex justify-content-between">
          <div>
            <a href="mailto:contact@idemta.com">
              <i className="bi bi-envelope"></i> contact@idemta.com
            </a>
            <a href="tel:+918010502950">
              <i className="bi bi-telephone"></i> +91 8010502950
            </a>
          </div>
          <div>
            <a href="#">
              <i className="bi bi-facebook"></i> Facebook
            </a>
            <a href="#">
              <i className="bi bi-twitter"></i> Twitter
            </a>
            <a href="#">
              <i className="bi bi-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            <i className="bi bi-card-heading"></i> IDEMTA
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-center">
              <li className="nav-item">
                <a className="nav-link px-3 text-white hover-warning" href="#">
                  <i className="bi bi-card-heading"></i> ID Cards
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-3 text-white hover-warning"
                  href="#contact"
                >
                  <i className="bi bi-telephone"></i> Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 text-white hover-warning" href="#">
                  <i className="bi bi-laptop"></i> Online ID Card
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link px-3 text-white hover-warning" href="#">
                  <i className="bi bi-person-plus"></i> Register
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link px-3 text-white hover-warning"
                  href="/dashboard.html"
                >
                  <i className="bi bi-person-plus"></i> Dashboard
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="btn btn-warning px-4 fw-semibold"
                  href="/login.html"
                >
                  <i className="bi bi-box-arrow-in-right"></i> Login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-lg-6 text-start">
              <h1 className="display-4 fw-bold mb-4 text-white">
                IDEMTA - Identity Card Solution
              </h1>
              <p className="lead mb-4 text-white">
                A complete cloud-based ID card software for online digital
                collection of school/office data, data storage and management,
                online photography, and more.
              </p>
              <div className="d-flex gap-3">
                <a href="#" className="btn btn-warning btn-lg px-4">
                  Get Started
                </a>
                <a href="#" className="btn btn-outline-light btn-lg px-4">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <img src="/asstes/Id card.png" alt="Hero" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <div className="intro py-5 bg-light">
        <div className="container">
          <div className="section-title text-center mb-5">
            <span className="text-primary text-uppercase">Our Work</span>
            <h2 className="display-5">Featured ID Card Designs</h2>
          </div>
          <div
            id="carouselExampleCaptions"
            className="carousel slide carousel-fade shadow-lg"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="/asstes/ID1.jpg"
                  className="d-block w-100"
                  alt="Slide 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="asstes/ID2.jpg"
                  className="d-block w-100"
                  alt="Slide 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  src="/asstes/idcard1.jpg"
                  className="d-block w-100"
                  alt="Slide 3"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="service-card bg-light">
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="section-title text-center mb-4">
              <span className="text-primary text-uppercase">Features</span>
              <h2 className="display-5">Our Services</h2>
            </div>
            <div className="row g-4">
              {services.map((service, index) => (
                <div key={index} className="col-md-4">
                  <div className="card h-100 shadow-sm hover-card">
                    <div className="card-body d-flex flex-column">
                      <div className="icon-box mb-3">
                        <i
                          className={`bi ${service.icon} display-5 text-primary`}
                        ></i>
                      </div>
                      <h5 className="card-title">{service.title}</h5>
                      <p className="card-text flex-grow-1">
                        {service.description}
                      </p>
                      <a
                        href={service.link}
                        className="btn btn-primary mt-auto"
                      >
                        {service.buttonText}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Why Choose Us Section --> */}
      <section class="why-choose-us py-5 bg-light">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center mb-5">
              <span class="text-primary text-uppercase">Benefits</span>
              <h2 class="display-5 mb-4">Why Choose Us?</h2>
              <p class="lead">
                With advanced technology, IDEMTA provides comprehensive ID card
                solutions that streamline your operations
              </p>
            </div>

            <div class="row g-4">
              {/* <!-- Benefits List --> */}
              <div class="col-12">
                <div class="benefit-list p-4 bg-white rounded shadow-sm">
                  <div class="d-flex flex-column gap-3">
                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Unified Platform</h5>
                        <p class="mb-0">
                          Single platform for data management & storage of ID
                          Card data, Photo, Design file with existing process.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Web-Based Solution</h5>
                        <p class="mb-0">
                          No software installation required. Hardware
                          independent and no data loss due to Hard-disk
                          crash/corruption.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Enhanced Security</h5>
                        <p class="mb-0">
                          Data security – data visible only to authenticated and
                          authorized person only.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">OTP Authentication</h5>
                        <p class="mb-0">
                          OTP authentication based & Online data verification,
                          data update and email notification.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Mobile Photography</h5>
                        <p class="mb-0">
                          Mobile based photography – instant mapping and upload
                          of photo to server.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Advanced Photo Processing</h5>
                        <p class="mb-0">
                          Auto-Photo Cropping, Background removal – face
                          identification based bulk photo cropping.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Task Management</h5>
                        <p class="mb-0">
                          User login-based Job Order task assignment,
                          management, tracking & Invoicing, payment
                          notifications.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Quick ID Generation</h5>
                        <p class="mb-0">
                          Web based ID card designing, generate ID card,
                          download printable PDF file in few minutes.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Batch Printing</h5>
                        <p class="mb-0">
                          Batch printing for miscellaneous Print Jobs.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">On-Spot Generation</h5>
                        <p class="mb-0">
                          Instant On-Spot ID card generation for Conferences,
                          Events Elections.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Supplier Integration</h5>
                        <p class="mb-0">
                          Integration with ID card material supplier for better
                          stock/order management.
                        </p>
                      </div>
                    </div>

                    <div class="benefit-item d-flex align-items-start">
                      <i class="bi bi-check-circle-fill text-primary me-3 mt-1"></i>
                      <div>
                        <h5 class="h6 mb-2">Design Library</h5>
                        <p class="mb-0">
                          Large library of ID Card designs and team of designers
                          available free for use.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Benefits Section with Modern Design --> */}
      <section class="benefits-section py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center mb-5">
              <span class="text-primary text-uppercase">Advantages</span>
              <h2 class="display-5">Benefits of using IDEMTA</h2>
              <p class="lead">
                Discover how our comprehensive solution can transform your ID
                card management
              </p>
            </div>
          </div>

          <div class="row g-4">
            {/* <!-- Benefit Item 1 --> */}
            <div class="col-lg-6">
              <div class="benefit-wrapper d-flex p-4 bg-white rounded-4 shadow-sm animate-on-scroll">
                <div class="benefit-icon me-4">
                  <i class="bi bi-cloud-check text-primary display-5"></i>
                </div>
                <div class="benefit-content">
                  <h4 class="h5 mb-3">Cloud-Based Solution</h4>
                  <p class="mb-0">
                    No upfront software purchase cost involved, hardware cost.
                    Cloud based data storage - data available 24/7. Work anytime
                    anywhere.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Benefit Item 2 --> */}
            <div class="col-lg-6">
              <div class="benefit-wrapper d-flex p-4 bg-white rounded-4 shadow-sm animate-on-scroll">
                <div class="benefit-icon me-4">
                  <i class="bi bi-shield-check text-primary display-5"></i>
                </div>
                <div class="benefit-content">
                  <h4 class="h5 mb-3">Automated Data Processing</h4>
                  <p class="mb-0">
                    Reduced error data processing & data verification is
                    automated filters duplicate data, missing mandatory data,
                    missing photo.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Benefit Item 3 --> */}
            <div class="col-lg-6">
              <div class="benefit-wrapper d-flex p-4 bg-white rounded-4 shadow-sm animate-on-scroll">
                <div class="benefit-icon me-4">
                  <i class="bi bi-graph-up-arrow text-primary display-5"></i>
                </div>
                <div class="benefit-content">
                  <h4 class="h5 mb-3">Cost & Time Efficient</h4>
                  <p class="mb-0">
                    Save overall cost, time and resources. Increased profit with
                    streamlined operations.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Benefit Item 4 --> */}
            <div class="col-lg-6">
              <div class="benefit-wrapper d-flex p-4 bg-white rounded-4 shadow-sm animate-on-scroll">
                <div class="benefit-icon me-4">
                  <i class="bi bi-envelope-paper text-primary display-5"></i>
                </div>
                <div class="benefit-content">
                  <h4 class="h5 mb-3">Smart Information Management</h4>
                  <p class="mb-0">
                    Better information management with e-mail notification to
                    school/parent for important updates.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Benefit Item 5 --> */}
            <div class="col-lg-6">
              <div class="benefit-wrapper d-flex p-4 bg-white rounded-4 shadow-sm animate-on-scroll">
                <div class="benefit-icon me-4">
                  <i class="bi bi-clipboard-data text-primary display-5"></i>
                </div>
                <div class="benefit-content">
                  <h4 class="h5 mb-3">Enhanced Job Management</h4>
                  <p class="mb-0">
                    Better Job management, order tracking. Stock management, and
                    delivery tracking system.
                  </p>
                </div>
              </div>
            </div>

            {/* <!-- Benefit Item 6 --> */}
            <div class="col-lg-6">
              <div class="benefit-wrapper d-flex p-4 bg-white rounded-4 shadow-sm animate-on-scroll">
                <div class="benefit-icon me-4">
                  <i class="bi bi-cash-stack text-primary display-5"></i>
                </div>
                <div class="benefit-content">
                  <h4 class="h5 mb-3">Improved Cash Flow</h4>
                  <p class="mb-0">
                    Better payment realization and cost effective solution for
                    school management systems.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Contact Info --> */}
      <section id="contact" class="get-in-touch py-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-md-8 text-center mb-5">
              <span class="text-primary text-uppercase">Contact</span>
              <h2 class="display-5 mb-3">Get in Touch</h2>
              <p class="lead">
                Have questions? We'd love to hear from you. Send us a message
                and we'll respond as soon as possible.
              </p>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10">
              <div class="contact-wrapper bg-white rounded-4 shadow-lg p-5">
                <div class="row g-4">
                  <div class="col-md-4">
                    <div class="contact-info">
                      <div class="contact-item mb-4 animate-on-scroll">
                        <div class="icon-box mb-3">
                          <i class="bi bi-geo-alt-fill text-primary display-6"></i>
                        </div>
                        <h5>Our Location</h5>
                        <p class="mb-0">
                          123 Business Street, New Delhi, India
                        </p>
                      </div>

                      <div class="contact-item mb-4 animate-on-scroll">
                        <div class="icon-box mb-3">
                          <i class="bi bi-envelope-fill text-primary display-6"></i>
                        </div>
                        <h5>Email Us</h5>
                        <p class="mb-0">contact@idemta.com</p>
                      </div>

                      <div class="contact-item animate-on-scroll">
                        <div class="icon-box mb-3">
                          <i class="bi bi-telephone-fill text-primary display-6"></i>
                        </div>
                        <h5>Call Us</h5>
                        <p class="mb-0">+91 8010502950</p>
                      </div>
                    </div>
                  </div>

                  {/* <!-- Contact Form --> */}
                  <div class="col-md-8">
                    <form class="contact-form">
                      <div class="row g-3">
                        <div class="col-md-6">
                          <div class="form-floating animate-on-scroll">
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              placeholder="Your Name"
                            />
                            <label for="name">Your Name</label>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-floating animate-on-scroll">
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              placeholder="Email"
                            />
                            <label for="email">Email Address</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating animate-on-scroll">
                            <input
                              type="text"
                              class="form-control"
                              id="subject"
                              placeholder="Subject"
                            />
                            <label for="subject">Subject</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <div class="form-floating animate-on-scroll">
                            <textarea
                              class="form-control"
                              id="message"
                              style="height: 150px"
                              placeholder="Message"
                            ></textarea>
                            <label for="message">Message</label>
                          </div>
                        </div>
                        <div class="col-12">
                          <button
                            type="submit"
                            class="btn btn-primary btn-lg w-100 animate-on-scroll"
                          >
                            <i class="bi bi-send me-2"></i>Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const services = [
  {
    icon: "bi-list-check",
    title: "Print Column Management",
    description: "Add Yes/No column to the Student List for print tracking.",
    link: "#",
    buttonText: "Configure",
  },
  {
    icon: "bi-file-earmark-pdf",
    title: "PDF Watermark",
    description: "Add watermark functionality to PDF downloads.",
    link: "#",
    buttonText: "Manage",
  },
  {
    icon: "bi-image",
    title: "Photo Optimization",
    description:
      "Convert and optimize photos to 10kb for certificate printing.",
    link: "#",
    buttonText: "Process",
  },
  {
    icon: "bi-people",
    title: "Parent Portal",
    description: "Access portal for parents to check student details.",
    link: "#",
    buttonText: "Access",
  },
  {
    icon: "bi-phone",
    title: "Mobile Photo Capture",
    description:
      "Mobile app integration for photo capture and form assignment.",
    link: "#",
    buttonText: "Setup",
  },
  {
    icon: "bi-qr-code",
    title: "Digital Card QR Sync",
    description: "Sync digital cards with student QR codes.",
    link: "#",
    buttonText: "Sync",
  },
  {
    icon: "bi-file-earmark-text",
    title: "Document Scanner",
    description: "Scan and upload data from physical documents.",
    link: "#",
    buttonText: "Scan",
  },
];

export default home;
