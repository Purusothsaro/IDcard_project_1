function Services() {
  const serviceItems = [
    {
      icon: "bi-list-check",
      title: "Print Column Management",
      description: "Add Yes/No column to the Student List for print tracking.",
      action: "Configure",
      href: "/studentList",
    },
    {
      icon: "bi-file-earmark-pdf",
      title: "PDF Watermark",
      description: "Add watermark functionality to PDF downloads.",
      action: "Manage",
      href: "/PDFWatermarkApp",
    },
    {
      icon: "bi-image",
      title: "Photo Optimization",
      description:
        "Convert and optimize photos to 10kb for certificate printing.",
      action: "Process",
      href: "/PhotoOptimizationApp",
    },
    {
      icon: "bi-people",
      title: "Parent Portal",
      description: "Access portal for parents to check student details.",
      action: "Access",
      href: "/ParentPortal",
    },
    {
      icon: "bi-phone",
      title: "Mobile Photo Capture",
      description:
        "Mobile app integration for photo capture and form assignment.",
      action: "Setup",
      href: "/MobilePhotoCapture",
    },
    {
      icon: "bi-qr-code",
      title: "Digital Card QR Sync",
      description: "Sync digital cards with student QR codes.",
      action: "Sync",
      href: "/DigitalCardSync",
    },
    {
      icon: "bi-file-earmark-text",
      title: "Document Scanner",
      description: "Scan and upload data from physical documents.",
      action: "Scan",
      href: "/DocumentScan",
    },
  ];

  return (
    <div className="service-card bg-light">
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="section-title text-center mb-4">
            <span className="text-primary text-uppercase">Features</span>
            <h2 className="display-5">Our Services</h2>
          </div>

          <div className="row g-4">
            {serviceItems.map((service, index) => (
              <div className="col-md-4" key={index}>
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
                    <a href={service.href} className="btn btn-primary mt-auto">
                      {service.action}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
