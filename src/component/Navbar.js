import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold" href="/">
          <i className="bi bi-card-heading"></i> OctoGenie
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
              <a className="nav-link px-3 text-white hover-warning" href="/">
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
              <a
                className="nav-link px-3 text-white hover-warning"
                href="/online"
              >
                <i className="bi bi-laptop"></i> Online ID Card
              </a>
            </li>
            <li className="nav-item">
              <Link
                to="/dashboard"
                className="nav-link px-3 text-white hover-warning"
              >
                <i class="fa-brands fa-dashcube"></i> Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <a className="btn btn-warning px-4 fw-semibold" href="/login">
                <i className="bi bi-box-arrow-in-right"></i> Login
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
