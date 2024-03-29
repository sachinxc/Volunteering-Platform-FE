import {
  Avatar,
  Box,
  Button,
  Container,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
<<<<<<< HEAD
import "../Signin/signin.css"; // Import CSS file for styling
=======
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
>>>>>>> 4e594711a11732e8ccedf9888158697364332ac2

const Signin = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string().required("Required"),
  });

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
<<<<<<< HEAD
          <Box
            component="form"
            // onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: "rgb(0, 192, 177)",
                "&:hover": {
                  backgroundColor: "#4d8bff",
                },
=======
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={(values) => {
                console.log(values);
>>>>>>> 4e594711a11732e8ccedf9888158697364332ac2
              }}
            >
              {({ errors, touched, submitForm }) => (
                <Form>
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
                <Link href="#" variant="body2">
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
