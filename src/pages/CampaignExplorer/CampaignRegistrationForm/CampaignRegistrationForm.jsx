import * as React from "react";
import { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  IconButton,
  Button,
  Box,
  Stack,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { VOLUNTEER } from "../../../constants";
import { getToken } from "../../../helpers/helpers";
import http from "../../../http";
import Loader from "../../../components/Loading/Loading";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";

const RegistrationForm = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  const navigate = useNavigate();

  const initialValues = {
    qualifications: "",
    week_days_start_time: "00:00",
    week_days_end_time: "00:00",
    week_end_days_start_time: "00:00",
    week_end_days_end_time: "00:00",
    campaign_id: id,
  };

  const validationSchema = Yup.object().shape({
    qualifications: Yup.string().required("Description are required"),
    week_days_start_time: Yup.string().required("Start time is required"),
    week_days_end_time: Yup.string().required("End time is required"),
    week_end_days_start_time: Yup.string().required("Start time is required"),
    week_end_days_end_time: Yup.string().required("End time is required"),
  });

  const handleSubmit = async (values) => {
    await http
      .post(`volunteer/campaign/register?token=${getToken()}`, values)
      .then((res) => {
        setLoading(false);
        localStorage.removeItem("campRegister");
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const isUserAvailable = JSON.parse(localStorage.getItem("user"));
  const isUserVolunteer =
    isUserAvailable && isUserAvailable?.user_type === VOLUNTEER;

  const signInNecessory = () => {
    const currentUrl = window.location.href;
    localStorage.setItem("campRegister", JSON.stringify(currentUrl));
    navigate("/signin");
  };

  return (
    <Stack
      sx={{ justifyContent: "center", alignItems: "center", marginTop: "20px" }}
    >
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
            <Stack
              sx={{
                p: "40px",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <Box sx={{ width: { md: "70%", sm: "100%" } }}>
                <Grid
                  container
                  sx={{
                    backgroundColor: "#ddeee4",
                    borderRadius: 8,
                    padding: "20px",
                    gap: "10px",
                  }}
                >
                  <Grid item md={12}>
                    <IconButton
                      onClick={() => window.history.back()}
                      sx={{
                        color: "#493536",
                        top: "3px",
                        left: "-180px",
                        fontSize: "40px",
                      }}
                    >
                      <ArrowBackIcon />
                    </IconButton>
                    <Typography
                      variant="h4"
                      align="center"
                      sx={{ fontWeight: "bold" }}
                    >
                      Campaign Registration
                    </Typography>
                  </Grid>
                  <Grid item md={12} xs={10}>
                    <Typography
                      variant="h7"
                      align="left"
                      sx={{ fontWeight: "bold" }}
                    >
                      Tell us about your time availability in general:
                    </Typography>
                  </Grid>
                  <Grid item md={12}>
                    <Typography variant="sm" align="center" sx={{ mr: 1 }}>
                      Week Days:
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack
                        sx={{
                          flexDirection: { md: "row", sm: "column" },
                          gap: "10px",
                          width: "100%",
                        }}
                      >
                        <Field
                          as={TextField}
                          type={"time"}
                          margin="normal"
                          required
                          fullWidth
                          id="organization_name"
                          name="week_days_start_time"
                          label="Starting from"
                          autoComplete="organization"
                          autoFocus
                          error={
                            touched.week_days_start_time &&
                            errors.week_days_start_time
                          }
                          helperText={
                            touched.week_days_start_time &&
                            errors.week_days_start_time
                          }
                        />

                        <Field
                          as={TextField}
                          type={"time"}
                          margin="normal"
                          required
                          fullWidth
                          id="organization_name"
                          name="week_days_end_time"
                          label="Until"
                          autoComplete="organization"
                          autoFocus
                          error={
                            touched.week_days_end_time &&
                            errors.week_days_end_time
                          }
                          helperText={
                            touched.week_days_end_time &&
                            errors.week_days_end_time
                          }
                        />
                      </Stack>
                    </LocalizationProvider>
                  </Grid>
                  <Grid item md={12}>
                    <Typography variant="sm" align="center" sx={{ mr: 1 }}>
                      Week Ends:
                    </Typography>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <Stack
                        sx={{
                          flexDirection: { md: "row", sm: "column" },
                          gap: "10px",
                          width: "100%",
                        }}
                      >
                        <Field
                          as={TextField}
                          margin="normal"
                          required
                          type={"time"}
                          fullWidth
                          id="organization_name"
                          name="week_end_days_start_time"
                          label="Starting from"
                          autoComplete="organization"
                          autoFocus
                          error={
                            touched.week_end_days_start_time &&
                            errors.week_end_days_start_time
                          }
                          helperText={
                            touched.week_end_days_start_time &&
                            errors.week_end_days_start_time
                          }
                        />

                        <Field
                          as={TextField}
                          margin="normal"
                          type={"time"}
                          required
                          fullWidth
                          id="organization_name"
                          name="week_end_days_end_time"
                          label="Until"
                          autoComplete="organization"
                          autoFocus
                          error={
                            touched.week_end_days_end_time &&
                            errors.week_end_days_end_time
                          }
                          helperText={
                            touched.week_end_days_end_time &&
                            errors.week_end_days_end_time
                          }
                        />
                      </Stack>
                    </LocalizationProvider>
                  </Grid>

                  <Grid item md={12}>
                    <Typography variant="sm" align="left">
                      Briefly describe why you chose this campaign and state any
                      relevant qualifications or experiences you have:
                    </Typography>
                  </Grid>

                  <Grid item md={12}>
                    <Field
                      as={TextField}
                      margin="normal"
                      required
                      fullWidth
                      id="organization_name"
                      name="qualifications"
                      label="Description"
                      autoComplete="organization"
                      autoFocus
                      rows={4}
                      multiline
                      error={touched.qualifications && errors.qualifications}
                      helperText={
                        touched.qualifications && errors.qualifications
                      }
                    />
                  </Grid>

                  <Grid item md={12}>
                    <Stack
                      sx={{ justifyContent: "center", alignItems: "center" }}
                    >
                      {isUserVolunteer ? (
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={submitForm}
                          sx={{
                            marginTop: "10px",
                            marginBottom: "40px",
                            color: "#493536",
                            fontWeight: "bold",
                            fontSize: "17px",
                            backgroundColor: "#42ce9f",
                            width: "200px",
                            height: "45px",
                          }}
                        >
                          Submit
                        </Button>
                      ) : (
                        ""
                      )}
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Form>
        )}
      </Formik>
      {!isUserVolunteer && (
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "10px",
            marginBottom: "40px",
            color: "#493536",
            fontWeight: "bold",
            fontSize: "17px",
            backgroundColor: "#42ce9f",
            width: "200px",
            height: "45px",
          }}
          onClick={signInNecessory}
        >
          SignIn
        </Button>
      )}

      <Loader openLoad={loading} />
    </Stack>
  );
};

export default RegistrationForm;
