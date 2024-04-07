import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
  Grid,
  ToggleButton,
  ToggleButtonGroup,
  IconButton,
  InputAdornment,
  Box, // Add this import statement for Box component
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { Field, Form, Formik } from "formik";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as Yup from "yup";
import formImage from "../../assets/LandingPageImages/background3.jpg"; // Import the background image

// Define the countries array
const countries = [
  "Sri Lanka",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  // Add more countries as needed
];

const validationVolunteerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  country: Yup.string().required("Country is required"),
});

const validationOrganizationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  organizationName: Yup.string().required("Organization name is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm Password is required"),
  country: Yup.string().required("Country is required"),
});

const defaultTheme = createTheme();

const Signup = () => {
  const [userType, setUser] = React.useState("Volunteer");
  const [showPassword, setShowPassword] = React.useState(false);

  const changeUserType = (value) => {
    setUser(value);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert("Form submitted successfully!");
      setSubmitting(false);
    }, 1000);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Box
          sx={{
            width: "70%",
            overflow: "hidden",
            borderRadius: "20px",
            "@media (max-width: 1200px)": {
              width: "90%", // Adjust width to 90% on mobile screens
            },
          }}
        >
          <Grid container component="main">
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${formImage})`,
                backgroundRepeat: "no-repeat",
                backgroundColor: (t) =>
                  t.palette.mode === "light"
                    ? t.palette.grey[50]
                    : t.palette.grey[900],
                backgroundSize: "cover",
                backgroundPosition: "center",
                //borderRadius: "20px", //for the img
              }}
            />
            <Grid
              item
              xs={12}
              sm={8}
              md={5}
              component={Paper}
              elevation={6}
              square
              sx={{
                boxShadow: "none",
                //borderRadius: "20px", //for the form
              }}
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
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
                  Create an Account
                </Typography>
                <Formik
                  initialValues={initialValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    isSubmitting,
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
                        type={showPassword ? "text" : "password"}
                        id="password"
                        autoComplete="new-password"
                        error={touched.password && errors.password}
                        helperText={touched.password && errors.password}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                              >
                                {showPassword ? (
                                  <VisibilityOff />
                                ) : (
                                  <Visibility />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
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
                        error={
                          touched.confirmPassword && errors.confirmPassword
                        }
                        helperText={
                          touched.confirmPassword && errors.confirmPassword
                        }
                      />
                      <Button
                        onClick={submitForm}
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 3,
                          mb: 2,
                          backgroundColor: "#2ab6bb",
                          boxShadow: "none",
                        }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Create"}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Signup;
