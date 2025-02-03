import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer-logo">
              <img
                src="/logo.png"
                alt="IDEMTA Logo"
                style={{ maxWidth: "100%" }}
              />
            </div>
            <p>Follow us on Social Media:</p>
            <div className="footer-social">
              <a href="#">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="#">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="#">
                <i className="bi bi-linkedin"></i>
              </a>
            </div>
          </div>

          <div className="col-md-3">
            <h5>Explore</h5>
            <nav>
              <a href="#">Demo Tour</a>
              <a href="#">Tutorials</a>
              <a href="#">Register</a>
              <a href="#">Generate Bar Code</a>
              <a href="#">Generate QR Code</a>
            </nav>
          </div>

          <div className="col-md-3">
            <h5>Our Products</h5>
            <nav>
              <a href="#">ID Card Software</a>
              <a href="#">Lanyards</a>
              <a href="#">RFID Live Tracking</a>
              <a href="#">Online Update</a>
            </nav>
          </div>

          <div className="col-md-3 footer-contact">
            <h5>Get in Touch</h5>
            <form onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Your Name"
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Contact No"
              />
              <textarea
                className="form-control mb-2"
                placeholder="Message"
              ></textarea>
              <button type="submit" className="btn btn-warning w-100">
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} IDEMTA - Identity Card Solution
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
