import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import formImage from "../../assets/LandingPageImages/background3.jpg";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loading/Loading";
import http from "../../http";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const defaultTheme = createTheme();

export default function SignInSide() {
  const [showPassword, setShowPassword] = React.useState(false); // Define showPassword state
  const [loading, setLoading] = React.useState(false);
  const [userType, setUser] = React.useState("Volunteer");
  const [setError, setErrorList] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const loginUser = async (values) => {
    setLoading(true);
    await http
      .post("volunteer/login", values)
      .then((res) => {
        setLoading(false);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "/volunteer/dashboard";
      })
      .catch((error) => {
        setLoading(false);
        setErrorList(true);
      });
  };

  const registerOrg = async (values) => {
    setLoading(true);
    await http
      .post("organization/login", values)
      .then((res) => {
        setLoading(false);
        setErrorList(false);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        window.location.href = "/organization/dashboard";
      })
      .catch((error) => {
        setLoading(false);
        setErrorList(true);
      });
  };

  const handleSubmit = (values) => {
    userType === "Volunteer" ? loginUser(values) : registerOrg(values);
  };

  const changeUserType = (value) => {
    setUser(value);
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
            borderRadius: "20px",
            overflow: "hidden",
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
                backgroundImage: `url(${formImage})`, // Use the imported formImage
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
            >
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  p: 1,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "rgb(211 0 176)" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Formik
                  initialValues={{
                    email: "",
                    password: "",
                    remember: false,
                  }}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  {({ isSubmitting, errors, touched }) => (
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

                      <Box component="div" noValidate sx={{ mt: 1 }}>
                        <Field
                          as={TextField}
                          margin="normal"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                          autoFocus
                          variant="standard"
                          error={
                            (touched.email && Boolean(errors.email)) || setError
                          }
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
                          autoComplete="current-password"
                          variant="standard"
                          error={
                            (touched.password && Boolean(errors.password)) ||
                            setError
                          }
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

                        <Button
                          type="submit"
                          fullWidth
                          variant="contained"
                          sx={{
                            mt: 3,
                            mb: 3,
                            backgroundColor: "#2ab6bb",
                            boxShadow: "none",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            "&:hover": {
                              backgroundColor: "#087478", // Change the color on hover
                            },
                          }}
                        >
                          Sign In
                        </Button>
                        <Grid container sx={{ color: "gray" }}>
                          <Grid item xs>
                            <Link
                              href="/resetpassword/:id"
                              variant="body2"
                              color="inherit"
                              underline="none"
                            >
                              Forgot password?
                            </Link>
                          </Grid>
                          <Grid item>
                            <Link
                              href="/signup"
                              variant="body2"
                              color="inherit"
                              underline="none"
                            >
                              {"Don't have an Account? Sign Up"}
                            </Link>
                          </Grid>
                        </Grid>
                      </Box>
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
}
