function TopBar() {
  return (
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
  );
}

export default TopBar;
