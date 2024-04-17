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
  Box,
  Stack,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import { Field, Form, Formik } from "formik";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as Yup from "yup";
import formImage from "../../assets/LandingPageImages/background3.jpg";
import http from "../../http";
import Loader from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { isEmpty } from "lodash";

const countries = [
  "Sri Lanka",
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
];

const validationVolunteerSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("required"),
  password: Yup.string().required("required").min(6),
  first_name: Yup.string().required("required"),
  last_name: Yup.string().required("required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("required"),
  address: Yup.string().required("required"),
  nic: Yup.string().required("required"),
  mobile: Yup.string().required("required"),
  birth_of_date: Yup.string().required("required"),
  gender: Yup.string().required("required"),
});

const validationOrganizationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("required"),
  password: Yup.string().required("required"),
  organization_name: Yup.string().required("required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("required"),
  address: Yup.string().required("required"),
  contact_no: Yup.string().required("required"),
});

const defaultTheme = createTheme();

const Signup = () => {
  const [userType, setUser] = React.useState("Volunteer");
  const [showPassword, setShowPassword] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [errorList, setErrorList] = React.useState({
    mobile: [],
    nic: [],
    password: [],
    email: [],
  });
  const navigate = useNavigate();

  const changeUserType = (value) => {
    setUser(value);
  };

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  // const getErrors = (er) => {
  //   errorList.filter((er)=>er.)
  // };

  const volunteerValues = {
    email: "",
    first_name: "",
    last_name: "",
    password: "",
    confirmPassword: "",
    country: "",
    news_letter_sub: true,
    birth_of_date: "",
    mobile: "",
    gender: "",
    nic: "",
  };

  const organizationValues = {
    email: "",
    password: "",
    organization_name: "",
    confirmPassword: "",
    address: "",
    contact_no: "",
  };

  const initialValues =
    userType === "Volunteer" ? volunteerValues : organizationValues;

  const validationSchema =
    userType === "Volunteer"
      ? validationVolunteerSchema
      : validationOrganizationSchema;

  const handleSubmit = (values) => {
    userType === "Volunteer" ? registerUser(values) : registerVolunteer(values);
  };

  const registerUser = async (values) => {
    setLoading(true);
    await http
      .post("volunteer/register", values)
      .then((res) => {
        setLoading(false);
        navigate("/signin");
      })
      .catch((error) => {
        setLoading(false);
        setErrorList(error.response.data.errors);
      });
  };

  const registerVolunteer = async (values) => {
    setLoading(true);
    await http
      .post("organization/register", values)
      .then((res) => {
        localStorage.setItem("User", JSON.stringify(res.data.user));
        setLoading(false);
        navigate("/signin");
        window.location.reload();
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const getErrors = (er) => {
    return isEmpty(errorList[er]) ? false : errorList[er][0];
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
          marginBottom: "100px",
        }}
      >
        <Box
          sx={{
            width: "70%",
            overflow: "hidden",
            borderRadius: "20px",
            //border: "solid 3px lightgray",
            "@media (max-width: 1200px)": {
              width: "90%",
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
                "& .css-1y8ugea": {
                  marginTop: "30px",
                  marginBottom: "30px",
                },
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
                <Avatar sx={{ m: 1, bgcolor: "rgb(211 0 176)" }}>
                  {userType === "Volunteer" ? (
                    <PersonIcon />
                  ) : (
                    <CorporateFareIcon />
                  )}
                </Avatar>
                <Typography
                  component="h1"
                  variant="h5"
                  sx={{ marginBottom: "10px" }}
                >
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
                        size="small" // Set size to small
                        sx={{
                          marginBottom: "10px",
                        }}
                      >
                        <ToggleButton
                          value="Volunteer"
                          sx={{
                            "&.MuiToggleButton-root.Mui-selected": {
                              color: "white",
                              backgroundColor: "#646464",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          Volunteer
                        </ToggleButton>
                        <ToggleButton
                          value="Organization"
                          sx={{
                            "&.MuiToggleButton-root.Mui-selected": {
                              color: "white",
                              backgroundColor: "#646464",
                              fontWeight: "bold",
                            },
                          }}
                        >
                          Organization
                        </ToggleButton>
                      </ToggleButtonGroup>

                      {userType === "Volunteer" ? (
                        <>
                          <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                              <Field
                                as={TextField}
                                margin="normal"
                                required
                                fullWidth
                                id="first_name"
                                name="first_name"
                                label="First Name"
                                autoComplete="given-name"
                                autoFocus
                                error={touched.first_name && errors.first_name}
                                helperText={
                                  touched.first_name && errors.first_name
                                }
                                size="small" // Set size to small
                              />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Field
                                as={TextField}
                                margin="normal"
                                required
                                fullWidth
                                id="last_name"
                                name="last_name"
                                label="Last Name"
                                autoComplete="family-name"
                                autoFocus
                                error={touched.last_name && errors.last_name}
                                helperText={
                                  touched.last_name && errors.last_name
                                }
                                size="small" // Set size to small
                              />
                            </Grid>
                          </Grid>
                        </>
                      ) : (
                        <Field
                          as={TextField}
                          margin="normal"
                          required
                          fullWidth
                          id="organization_name"
                          name="organization_name"
                          label="Organization's Name"
                          autoComplete="organization"
                          autoFocus
                          error={
                            touched.organization_name &&
                            errors.organization_name
                          }
                          helperText={
                            touched.organization_name &&
                            errors.organization_name
                          }
                          size="small" // Set size to small
                        />
                      )}
                      <Grid item xs={12}>
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
                          error={
                            (touched.email && errors.email) ||
                            getErrors("email")
                          }
                          helperText={
                            (touched.email && errors.email) ||
                            getErrors("email")
                          }
                          size="small" // Set size to small
                        />
                      </Grid>

                      <Box sx={{ margin: "5px 0" }}>
                        <Grid container spacing={1} sx={{}}>
                          <Grid item xs={12} md={6}>
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
                              error={
                                (touched.password && errors.password) ||
                                getErrors("password")
                              }
                              helperText={
                                (touched.password && errors.password) ||
                                getErrors("password")
                              }
                              size="small" // Set size to small
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
                          </Grid>
                          <Grid item xs={12} md={6}>
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
                                touched.confirmPassword &&
                                errors.confirmPassword
                              }
                              helperText={
                                touched.confirmPassword &&
                                errors.confirmPassword
                              }
                              size="small" // Set size to small
                            />
                          </Grid>
                        </Grid>
                      </Box>

                      {userType === "Volunteer" ? (
                        <Box sx={{ margin: "3px 0" }}>
                          <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                              <Field
                                as={TextField}
                                margin="normal"
                                required
                                fullWidth
                                name="nic"
                                label="NIC"
                                id="nic"
                                autoComplete="nic"
                                error={
                                  (touched.nic && errors.nic) ||
                                  getErrors("nic")
                                }
                                helperText={
                                  (touched.nic && errors.nic) ||
                                  getErrors("nic")
                                }
                                size="small"
                              />
                            </Grid>
                            <Grid item xs={12} md={6}>
                              <Field
                                as={TextField}
                                margin="normal"
                                required
                                fullWidth
                                name="mobile"
                                label="Mobile"
                                type="number"
                                id="mobile"
                                autoComplete="new-password"
                                error={
                                  (touched.mobile && errors.mobile) ||
                                  getErrors("mobile")
                                }
                                helperText={
                                  (touched.mobile && errors.mobile) ||
                                  getErrors("mobile")
                                }
                                size="small"
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      ) : (
                        <Field
                          as={TextField}
                          margin="normal"
                          required
                          fullWidth
                          name="contact_no"
                          label="Mobile"
                          type="number"
                          id="mobile"
                          autoComplete="new-password"
                          error={touched.contact_no && errors.contact_no}
                          helperText={touched.contact_no && errors.contact_no}
                          size="small"
                        />
                      )}

                      {userType === "Volunteer" && (
                        <Box sx={{ margin: "15px 0" }}>
                          <Grid container spacing={1}>
                            <Grid item xs={12} md={6}>
                              <FormControl fullWidth size="small">
                                <InputLabel id="demo-simple-select-label">
                                  Select Gender
                                </InputLabel>
                                <Field
                                  as={Select}
                                  name="gender"
                                  label="Select Gender"
                                  value={values.gender}
                                  onChange={handleChange}
                                  onBlur={handleBlur}
                                >
                                  <MenuItem value="" disabled>
                                    Select Gender
                                  </MenuItem>
                                  <MenuItem value={1}>Male</MenuItem>
                                  <MenuItem value={2}>Female</MenuItem>
                                </Field>
                              </FormControl>
                            </Grid>

                            <Grid item xs={12} md={6}>
                              <Field
                                as={TextField}
                                // margin="normal"
                                required
                                fullWidth
                                name="birth_of_date"
                                label="Date of Birth"
                                id="birth_of_date"
                                autoComplete="new-password"
                                error={
                                  touched.birth_of_date && errors.birth_of_date
                                }
                                helperText={
                                  touched.birth_of_date && errors.birth_of_date
                                }
                                size="small" // Set size to small
                                type="date"
                              />
                            </Grid>
                          </Grid>
                        </Box>
                      )}

                      <Stack sx={{ margin: { md: "20px 0" } }}>
                        <FormControl fullWidth size="small">
                          <InputLabel id="demo-simple-select-label">
                            Country
                          </InputLabel>
                          <Field
                            as={Select}
                            name="address"
                            label="Country"
                            value={values.address}
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
                      </Stack>

                      <Button
                        onClick={submitForm}
                        fullWidth
                        variant="contained"
                        sx={{
                          mt: 3,
                          mb: 2,
                          backgroundColor: "#2ab6bb",
                          boxShadow: "none",
                          borderRadius: "10px",
                          fontWeight: "bold",
                          "&:hover": {
                            backgroundColor: "#087478", // Change the color on hover
                          },
                        }}
                      >
                        Create
                      </Button>
                    </Form>
                  )}
                </Formik>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Loader openLoad={loading} />
    </ThemeProvider>
  );
};

export default Signup;
