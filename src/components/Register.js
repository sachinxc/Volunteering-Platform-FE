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
    interests: [], // New field for interests
    country: "", // New field for country
  });

  const interestsList = [
    "Art",
    "Sports",
    "Technology",
    "Music",
    "Cooking",
    "Travel",
    "Health",
    "Education",
    "Environment",
    "Fashion",
  ];

  const countries = [
    "Sri Lanka",
    "Afghanistan",
    "Albania",
    "Algeria",
    "India",
    "United Kingdom",
    "United States",
    "Canada",
    "Australia",
    // Add more countries as needed
  ];

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  const handleInterestClick = (interest, e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const updatedInterests = [...formData.interests];
    const index = updatedInterests.indexOf(interest);
    if (index === -1) {
      updatedInterests.push(interest);
    } else {
      updatedInterests.splice(index, 1);
    }
    setFormData((prevData) => ({
      ...prevData,
      interests: updatedInterests,
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
      setStep(2); // Move to step 2
      return false; // Return false to indicate step 1 validation passed
    }
    if (step === 2) {
      // Validate if all necessary fields are filled in step 2
      if (
        formData.accountType === "" || // Account type not selected
        formData.interests.length < 1 ||
        (formData.accountType === "organization" &&
          formData.organizationName === "") ||
        formData.country === "" // Less than 1 interest selected
      ) {
        alert("Please fill all required fields!");
        return false; // Return false if validation fails
      }

      setStep(3);

      return true; // Return true if validation passes without moving to step 3
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
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
              <form>
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
                    <label className="oname">
                      Please enter your Organization name:
                      <input
                        type="text"
                        name="organizationName"
                        placeholder="Organization Name"
                        required
                        value={formData.organizationName}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </label>
                  </div>
                )}
                <div className="form-group">
                  <label>Country:</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className="form-input"
                    required
                  >
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <h2 className="interests-heading">Select your Interests</h2>
                <div className="interests-container">
                  {interestsList.map((interest) => (
                    <button
                      key={interest}
                      className={`interest-button ${
                        formData.interests.includes(interest) ? "selected" : ""
                      }`}
                      onClick={(e) => handleInterestClick(interest, e)}
                    >
                      {interest}
                    </button>
                  ))}
                </div>
                <div className="button-container">
                  <button
                    type="Submit"
                    className="submit-button"
                    onClick={handleSubmit}
                  >
                    Final Submit
                  </button>

                  <button onClick={handleBack} className="back-button">
                    Back
                  </button>
                </div>
              </form>
            </>
          )}
          {step === 3 && (
            <form>
              <div className="success-message">
                <h1>Registration Successful!</h1>
                <p>
                  Thank you for signing up. We have sent you a confirmation
                  email!
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Register;
