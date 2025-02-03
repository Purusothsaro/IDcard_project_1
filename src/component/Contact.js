import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: "bi-geo-alt-fill",
      title: "Our Location",
      content: "123 Business Street, New Delhi, India",
    },
    {
      icon: "bi-envelope-fill",
      title: "Email Us",
      content: "contact@idemta.com",
    },
    {
      icon: "bi-telephone-fill",
      title: "Call Us",
      content: "+91 8010502950",
    },
  ];

  return (
    <section id="contact" className="get-in-touch py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 text-center mb-5">
            <span className="text-primary text-uppercase">Contact</span>
            <h2 className="display-5 mb-3">Get in Touch</h2>
            <p className="lead">
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="contact-wrapper bg-white rounded-4 shadow-lg p-5">
              <div className="row g-4">
                <div className="col-md-4">
                  <div className="contact-info">
                    {contactInfo.map((info, index) => (
                      <div
                        className="contact-item mb-4 animate-on-scroll"
                        key={index}
                      >
                        <div className="icon-box mb-3">
                          <i
                            className={`bi ${info.icon} text-primary display-6`}
                          ></i>
                        </div>
                        <h5>{info.title}</h5>
                        <p className="mb-0">{info.content}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="col-md-8">
                  <form className="contact-form" onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating animate-on-scroll">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Your Name"
                            value={formData.name}
                            onChange={handleChange}
                          />
                          <label htmlFor="name">Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating animate-on-scroll">
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          <label htmlFor="email">Email Address</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating animate-on-scroll">
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                          />
                          <label htmlFor="subject">Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating animate-on-scroll">
                          <textarea
                            className="form-control"
                            id="message"
                            style={{ height: "150px" }}
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                          ></textarea>
                          <label htmlFor="message">Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-primary btn-lg w-100 animate-on-scroll"
                        >
                          <i className="bi bi-send me-2"></i>Send Message
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
  );
}

export default Contact;
