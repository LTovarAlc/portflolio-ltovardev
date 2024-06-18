import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    if (!formData.name || formData.name.length > 25) {
      formIsValid = false;
      newErrors.name = "Name is required and should be a maximum of 25 characters.";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email || !emailPattern.test(formData.email)) {
      formIsValid = false;
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.subject || formData.subject.length > 15) {
      formIsValid = false;
      newErrors.subject = "Subject is required and should be a maximum of 15 characters.";
    }

    if (!formData.message) {
      formIsValid = false;
      newErrors.message = "Message is required.";
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Here you can handle form submission, like sending the data to an API
      console.log("Form data:", formData);
      alert("Form submitted successfully!");
    }
  };

  return (
    <section className="section contact">
      <h2 className="section-title">Contact to me</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="input-container">
          <input
            type="text"
            name="name"
            className="text-input"
            value={formData.name}
            onChange={handleChange}
          />
          <label htmlFor="name">Name</label>
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="input-container">
          <input
            type="email"
            name="email"
            className="text-input"
            value={formData.email}
            onChange={handleChange}
          />
          <label htmlFor="email">Email</label>
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="input-container">
          <input
            type="text"
            name="subject"
            className="text-input"
            value={formData.subject}
            onChange={handleChange}
          />
          <label htmlFor="subject">Subject</label>
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>
        <div className="input-container">
          <textarea
            name="message"
            className="text-input"
            rows={5}
            value={formData.message}
            onChange={handleChange}
          />
          <label htmlFor="message">Message</label>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button className="button" type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
