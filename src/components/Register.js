/*import React, { useState } from "react";
import "./register.css"; // Import CSS file for styling
import signUpIco from "../assets/Images/signupico.png"; // Import the image file

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
            {/* Custom icon or image for the avatar *
            <img src={signUpIco} alt="avatar" className="avatar" />
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
                Subscribe me for updates and news via email!
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

export default Register;*/

import React, { useState } from "react";
import "./register.css"; // Import CSS file for styling
import signUpIco from "../assets/Images/signupico.png"; // Import the image file

const Register = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
    accountType: "", // New field for account type
    organizationName: "", // New field for organization name
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step === 1) {
      // Validate the first step form data
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Handle submission for step 2
      // Navigate to next page or perform other actions
      console.log("Form submitted:", formData);
    }
  };

  return (
    <div className="registermain">
      <div className="register-container">
        <div className="register-form">
          <div className="avatar-container">
            {/* Custom icon or image for the avatar */}
            <img src={signUpIco} alt="avatar" className="avatar" />
          </div>
          {step === 1 && (
            <>
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
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    required
                    value={formData.confirmPassword}
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
                    Subscribe me for updates and news via email!
                  </label>
                </div>
                <button type="submit" className="submit-button">
                  Next
                </button>
              </form>
            </>
          )}
          {step === 2 && (
            <>
              <h1 className="rstep2">Tell us more about yourself</h1>
              <form onSubmit={handleSubmit}>
                <div className="account-type-buttons">
                  <button
                    type="button"
                    className={`account-type-button ${
                      formData.accountType === "individual" ? "selected" : ""
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, accountType: "individual" })
                    }
                  >
                    I'm an Individual
                  </button>
                  <button
                    type="button"
                    className={`account-type-button ${
                      formData.accountType === "organization" ? "selected" : ""
                    }`}
                    onClick={() =>
                      setFormData({ ...formData, accountType: "organization" })
                    }
                  >
                    I'm an Organization
                  </button>
                </div>
                {formData.accountType === "organization" && (
                  <div className="form-group">
                    <input
                      type="text"
                      name="organizationName"
                      placeholder="Organization Name"
                      required
                      value={formData.organizationName}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                )}
                <button type="submit" className="submit-button">
                  Submit
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
