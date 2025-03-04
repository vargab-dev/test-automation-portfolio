// src/pages/Contact.js

import React, { useState } from "react";
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus("Please fill in all fields.");
      return;
    }

    console.log(formData);
    alert("Message sent!");

    // Clear form and reset status
    setFormData({ name: "", email: "", message: "" });
    setFormStatus("Message sent successfully!");
  };

  return (
    <div className="contact">
      <h1 className="page-header">Contact Me</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="input-field"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="input-field"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="input-field"
        />
        <button type="submit" className="submit-button">Send Message</button>
      </form>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
}

export default Contact;