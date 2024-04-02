import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const Signin = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

  const [userType, setUser] = useState("Volunteer");

  const handleChange = (e, a) => {
    setUser(e.target.value);
  };

  const loginAction = () => {};

  return (
    <div>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#e3eee7",
            padding: "20px",
            borderRadius: "20px",
            animation: "fadeIn 0.5s ease-in",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                loginAction();
                console.log(values);
              }}
            >
              {({ errors, touched, submitForm }) => (
                <Form>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">I am </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userType}
                      label="I am"
                      onChange={handleChange}
                    >
                      <MenuItem value={"Organization"}>Organization</MenuItem>
                      <MenuItem value={"Volunteer"}>Volunteer</MenuItem>
                    </Select>
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

                  <Button
                    onClick={() => submitForm()}
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                  >
                    Sign In
                  </Button>
                </Form>
              )}
            </Formik>

            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/register" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default Signin;
