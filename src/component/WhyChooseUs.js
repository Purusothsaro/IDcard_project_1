const WhyChooseUs = () => {
  const benefits = [
    {
      title: "Unified Platform",
      description:
        "Single platform for data management & storage of ID Card data, Photo, Design file with existing process.",
    },
    {
      title: "Web-Based Solution",
      description:
        "No software installation required. Hardware independent and no data loss due to Hard-disk crash/corruption.",
    },
    {
      title: "Enhanced Security",
      description:
        "Data security – data visible only to authenticated and authorized person only.",
    },
    {
      title: "OTP Authentication",
      description:
        "OTP authentication based & Online data verification, data update and email notification.",
    },
    {
      title: "Mobile Photography",
      description:
        "Mobile based photography – instant mapping and upload of photo to server.",
    },
    {
      title: "Advanced Photo Processing",
      description:
        "Auto-Photo Cropping, Background removal – face identification based bulk photo cropping.",
    },
    {
      title: "Task Management",
      description:
        "User login-based Job Order task assignment, management, tracking & Invoicing, payment notifications.",
    },
    {
      title: "Quick ID Generation",
      description:
        "Web based ID card designing, generate ID card, download printable PDF file in few minutes.",
    },
    {
      title: "Batch Printing",
      description: "Batch printing for miscellaneous Print Jobs.",
    },
    {
      title: "On-Spot Generation",
      description:
        "Instant On-Spot ID card generation for Conferences, Events Elections.",
    },
    {
      title: "Supplier Integration",
      description:
        "Integration with ID card material supplier for better stock/order management.",
    },
    {
      title: "Design Library",
      description:
        "Large library of ID Card designs and team of designers available free for use.",
    },
  ];

  return (
    <section className="why-choose-us py-5 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <span className="text-primary text-uppercase">Benefits</span>
            <h2 className="display-5 mb-4">Why Choose Us?</h2>
            <p className="lead">
              With advanced technology, OctoGenie provides comprehensive ID card
              solutions that streamline your operations
            </p>
          </div>

          <div className="row g-4">
            <div className="col-12">
              <div className="benefit-list p-4 bg-white rounded shadow-sm">
                <div className="d-flex flex-column gap-3">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="benefit-item d-flex align-items-start"
                    >
                      <i className="bi bi-check-circle-fill text-primary me-3 mt-1" />
                      <div>
                        <h5 className="h6 mb-2">{benefit.title}</h5>
                        <p className="mb-0">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
