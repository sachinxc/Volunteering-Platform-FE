import React from "react";
import {
  Avatar,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { Field, Form, Formik } from "formik";
import {
  countries,
  validationOrganizationSchema,
  validationVolunteerSchema,
} from "./constants";

const Signup = () => {
  const [userType, setUser] = React.useState("Volunteer");

  const volunteerValues = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    confirmPassword: "",
    country: "",
  };

  const organizationValues = {
    email: "",
    password: "",
    organizationName: "",
    confirmPassword: "",
    country: "",
  };

  const initialValues =
    userType === "Volunteer" ? volunteerValues : organizationValues;

  const validationSchema =
    userType === "Volunteer"
      ? validationVolunteerSchema
      : validationOrganizationSchema;

  const changeUserType = (value) => {
    setUser(value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          height: "100%",
          marginBottom: "100px",
          padding: "20px",
        }}
      >
        <Paper
          elevation={6}
          sx={{
            marginTop: 15,
            padding: 3,
            maxWidth: 500,
            backgroundColor: "#ddeee4",
            borderRadius: "20px",
          }}
        >
          <Stack spacing={3}>
            <grid>
              <Avatar
                sx={{
                  width: 50,
                  height: 50,
                  m: "auto",
                  bgcolor: "secondary.main",
                  textAlign: "center",
                  mb: 1, // Add margin bottom
                }}
              >
                {userType === "Volunteer" ? (
                  <PersonIcon />
                ) : (
                  <CorporateFareIcon />
                )}
              </Avatar>
              <Typography variant="h5" align="center" sx={{ mb: 1 }}>
                {" "}
                {/* Add margin bottom */}
                Sign up
              </Typography>
            </grid>
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
                  <FormControl fullWidth sx={{ marginBottom: 7 }}>
                    <InputLabel id="demo-simple-select-label">
                      Choose your Account Type, I'm a
                    </InputLabel>
                  </FormControl>

                  <ToggleButtonGroup
                    value={userType}
                    exclusive
                    onChange={(event, value) => changeUserType(value)}
                    aria-label="user-type"
                    fullWidth
                  >
                    <ToggleButton value="Volunteer">Volunteer</ToggleButton>
                    <ToggleButton value="Organization">
                      Organization
                    </ToggleButton>
                  </ToggleButtonGroup>

                  {userType === "Volunteer" ? (
                    <>
                      <Field
                        as={TextField}
                        margin="normal"
                        required
                        fullWidth
                        id="firstName"
                        name="firstName"
                        label="First Name"
                        autoComplete="given-name"
                        autoFocus
                        error={touched.firstName && errors.firstName}
                        helperText={touched.firstName && errors.firstName}
                      />

                      <Field
                        as={TextField}
                        margin="normal"
                        required
                        fullWidth
                        id="lastName"
                        name="lastName"
                        label="Last Name"
                        autoComplete="family-name"
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
                      id="organizationName"
                      name="organizationName"
                      label="Organization's Name"
                      autoComplete="organization"
                      autoFocus
                      error={
                        touched.organizationName && errors.organizationName
                      }
                      helperText={
                        touched.organizationName && errors.organizationName
                      }
                    />
                  )}

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
                    autoComplete="new-password"
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
                    id="confirmPassword"
                    autoComplete="new-password"
                    error={touched.confirmPassword && errors.confirmPassword}
                    helperText={
                      touched.confirmPassword && errors.confirmPassword
                    }
                  />

                  <Button
                    onClick={() => submitForm()}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2, backgroundColor: "#2ab6bb" }}
                  >
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </Stack>
        </Paper>
      </Grid>
    </div>
  );
};

export default Signup;
