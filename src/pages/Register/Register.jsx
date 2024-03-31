import React, { useState } from "react";
import "./register.css"; // Import CSS file for styling Import the image file
import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Field, Form, Formik } from "formik";
import {
  countries,
  interestsList,
  validationOrganizationSchema,
  validationVolunteerSchema,
} from "./constants";
import PersonIcon from "@mui/icons-material/Person";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";

const Register = () => {
  const [userType, setUser] = useState("Volunteer");

  const volunteerValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    interest: "",
    country: "",
  };

  const organizationValues = {
    email: "",
    password: "",
    organizationName: "",
    confirmPassword: "",
    interest: "",
    country: "",
  };

  const initialValues =
    userType === "Volunteer" ? volunteerValues : organizationValues;

  const validationSchema =
    userType === "Volunteer"
      ? validationVolunteerSchema
      : validationOrganizationSchema;

  const changeUserType = (e, a) => {
    setUser(e.target.value);
  };

  return (
    <div className="registermain">
      <div className="register-container">
        <div className="register-form">
          <Stack
            sx={{
              alignItems: "center",
              padding: "20px",
              justifyContent: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              {userType === "Volunteer" ? (
                <PersonIcon />
              ) : (
                <CorporateFareIcon />
              )}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
          </Stack>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({
              errors,
              touched,
              submitForm,
              values,
              handleChange,
              handleBlur,
            }) => (
              <Form>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">I am </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={userType}
                    label="I am"
                    onChange={changeUserType}
                  >
                    <MenuItem value={"Organization"}>Organization</MenuItem>
                    <MenuItem value={"Volunteer"}>Volunteer</MenuItem>
                  </Select>
                </FormControl>

                {userType === "Volunteer" ? (
                  <>
                    <Field
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      name="firstName"
                      label="First Name"
                      autoComplete="name"
                      autoFocus
                      error={touched.firstName && errors.firstName}
                      helperText={touched.firstName && errors.firstName}
                    />

                    <Field
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      name="lastName"
                      label="Last Name"
                      autoComplete="name"
                      autoFocus
                      error={touched.lastName && errors.lastName}
                      helperText={touched.lastName && errors.lastName}
                    />
                  </>
                ) : (
                  <Field
                    as={TextField}
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    name="organizationName"
                    label="organization's Name"
                    autoComplete="name"
                    autoFocus
                    error={touched.organizationName && errors.organizationName}
                    helperText={
                      touched.organizationName && errors.organizationName
                    }
                  />
                )}

                <Stack gap={2}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Country
                    </InputLabel>
                    <Field
                      as={Select}
                      name="country"
                      label="Country"
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <MenuItem value="" disabled>
                        Select Country
                      </MenuItem>
                      {countries.map((country, index) => (
                        <MenuItem key={index} value={country}>
                          {country}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Interest
                    </InputLabel>
                    <Field
                      as={Select}
                      name="interest"
                      label="Interest"
                      value={values?.interest}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={touched.interest && errors.interest}
                      helperText={touched.interest && errors.interest}
                    >
                      <MenuItem value="" disabled>
                        Select Interest
                      </MenuItem>
                      {interestsList.map((interest, index) => (
                        <MenuItem key={index} value={interest}>
                          {interest}
                        </MenuItem>
                      ))}
                    </Field>
                  </FormControl>
                </Stack>

                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  name="email"
                  label="Email Address"
                  autoComplete="email"
                  autoFocus
                  error={touched.email && errors.email}
                  helperText={touched.email && errors.email}
                />

                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={touched.password && errors.password}
                  helperText={touched.password && errors.password}
                />

                <Field
                  as={TextField}
                  margin="normal"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  error={touched.confirmPassword && errors.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />

                {/* <label className="checkbox-label">
                  <input
                    type="checkbox"
                    name="receiveEmails"
                    checked={formData.receiveEmails}
                    onChange={handleChange}
                    className="checkbox-input"
                  />
                  Subscribe me for updates and news via email!
                </label> */}

                <Button
                  onClick={() => submitForm()}
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Create
                </Button>
              </Form>
            )}
          </Formik>

          {/* {step === 3 && (
            <form className="form3">
              <div className="success-message">
                <h1 className="successHeading">Registration Successful!</h1>
                <p>
                  Thank you for signing up. We have sent you a confirmation
                  email!
                </p>
              </div>
            </form>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Register;
