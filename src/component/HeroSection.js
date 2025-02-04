function HeroSection() {
  return (
    <section className="hero">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 text-start">
            <h1 className="display-4 fw-bold mb-4 text-white">OctoGenie</h1>
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
            <img
              src="/assets/Id card.png"
              alt="Hero Image"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
