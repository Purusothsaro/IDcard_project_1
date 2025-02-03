import React, { useEffect } from "react";
import { Carousel } from "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const FeaturedDesigns = () => {
  useEffect(() => {
    // Initialize Bootstrap carousel
    const carousel = document.querySelector("#carouselExampleCaptions");
    new Carousel(carousel, {
      interval: 3000, // Change slides every 3 seconds
      ride: "carousel",
    });
  }, []);

  return (
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
            {[0, 1, 2].map((index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="/assets/ID1.jpg"
                className="d-block w-100"
                alt="ID Card Design 1"
              />
              <div className="carousel-caption d-none d-md-block" />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/ID2.jpg"
                className="d-block w-100"
                alt="ID Card Design 2"
              />
              <div className="carousel-caption d-none d-md-block" />
            </div>
            <div className="carousel-item">
              <img
                src="/assets/idcard1.jpg"
                className="d-block w-100"
                alt="ID Card Design 3"
              />
              <div className="carousel-caption d-none d-md-block" />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDesigns;
