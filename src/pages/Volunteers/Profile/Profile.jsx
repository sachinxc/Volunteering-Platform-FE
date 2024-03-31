import {
  Button,
  Card,
  CardContent,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import {
  countries,
  interestsList,
  validationVolunteerSchema,
} from "../../Register/constants";

const Profile = () => {
  const initialValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    interest: "",
    country: "",
  };

  return (
    <Stack
      sx={{
        justifyContent: "center",
        alignItems: "center",
        padding: "10px",
        mt: "20px",
      }}
    >
      <Card>
        <CardContent>
          <Formik
            initialValues={initialValues}
            validationSchema={validationVolunteerSchema}
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

                <Stack direction={"row"} gap={2}>
                  <Button
                    onClick={() => submitForm()}
                    fullWidth
                    variant="outlined"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Cancel
                  </Button>

                  <Button
                    onClick={() => submitForm()}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Update
                  </Button>
                </Stack>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Profile;
