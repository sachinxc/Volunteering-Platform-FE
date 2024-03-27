import React, { useState } from "react";
import "./register.css"; // Import CSS file for styling
import backImage from "../assets/Images/backgold.jpg"; // Import the image file

const handleSubmit = (e) => {
  e.preventDefault();
  // Your handleSubmit logic goes here
};

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    receiveEmails: false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  return (
    <div className="registermain">
      <div className="register-container">
        <div className="register-form">
          <div className="avatar-container">
            {/* Custom icon or image for the avatar */}
            <img src={backImage} alt="avatar" className="avatar" />
          </div>
          <h1 className="register-heading">Sign up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                value={formData.password}
                onChange={handleChange}
                className="form-input"
              />
            </div>
            <div className="form-group checkbox">
              <label className="checkbox-label">
                <input
                  type="checkbox"
                  name="receiveEmails"
                  checked={formData.receiveEmails}
                  onChange={handleChange}
                  className="checkbox-input"
                />
                I want to subscribe to helping hands newsletter, campaign
                updates via email.
              </label>
            </div>
            <button type="submit" className="submit-button">
              Sign Up
            </button>
            <div className="login-link">Already have an account?</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
