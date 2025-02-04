import { useEffect } from "react";

function Benefits() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((element) => {
      observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const benefitItems = [
    {
      icon: "bi-cloud-check",
      title: "Cloud-Based Solution",
      description:
        "No upfront software purchase cost involved, hardware cost. Cloud based data storage - data available 24/7. Work anytime anywhere.",
    },
    {
      icon: "bi-shield-check",
      title: "Automated Data Processing",
      description:
        "Reduced error data processing & data verification is automated filters duplicate data, missing mandatory data, missing photo.",
    },
    {
      icon: "bi-graph-up-arrow",
      title: "Cost & Time Efficient",
      description:
        "Save overall cost, time and resources. Increased profit with streamlined operations.",
    },
    {
      icon: "bi-envelope-paper",
      title: "Smart Information Management",
      description:
        "Better information management with e-mail notification to school/parent for important updates.",
    },
    {
      icon: "bi-clipboard-data",
      title: "Enhanced Job Management",
      description:
        "Better Job management, order tracking. Stock management, and delivery tracking system.",
    },
    {
      icon: "bi-cash-stack",
      title: "Improved Cash Flow",
      description:
        "Better payment realization and cost effective solution for school management systems.",
    },
  ];

  return (
    <section className="benefits-section py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <span className="text-primary text-uppercase">Advantages</span>
            <h2 className="display-5">Benefits of using OctoGenie</h2>
            <p className="lead">
              Discover how our comprehensive solution can transform your ID card
              management
            </p>
          </div>
        </div>

        <div className="row g-4">
          {benefitItems.map((benefit, index) => (
            <div className="col-lg-6" key={index}>
              <div className="benefit-wrapper d-flex p-4 bg-white rounded-4 shadow-sm animate-on-scroll">
                <div className="benefit-icon me-4">
                  <i
                    className={`bi ${benefit.icon} text-primary display-5`}
                  ></i>
                </div>
                <div className="benefit-content">
                  <h4 className="h5 mb-3">{benefit.title}</h4>
                  <p className="mb-0">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
