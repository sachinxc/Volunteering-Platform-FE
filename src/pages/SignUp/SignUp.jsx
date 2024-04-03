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
  Box,
  Grid,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { Field, Form, Formik } from "formik";
import {
  countries,
  interestsList,
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
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh", marginTop: "100px", marginBottom: "200px" }}
    >
      <Paper
        elevation={6}
        sx={{
          padding: 3,
          maxWidth: 500,
          backgroundColor: "#ddeee4",
          borderRadius: "20px",
        }}
      >
        <Stack spacing={3}>
          <Avatar sx={{ m: "auto", bgcolor: "secondary.main" }}>
            {userType === "Volunteer" ? <PersonIcon /> : <CorporateFareIcon />}
          </Avatar>
          <Typography variant="h5" align="center">
            Sign up
          </Typography>
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
                    label="Organization's Name"
                    autoComplete="name"
                    autoFocus
                    error={touched.organizationName && errors.organizationName}
                    helperText={
                      touched.organizationName && errors.organizationName
                    }
                  />
                )}

                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Country</InputLabel>
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
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Signup;
