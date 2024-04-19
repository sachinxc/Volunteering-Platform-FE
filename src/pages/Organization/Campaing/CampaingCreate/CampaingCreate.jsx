import * as React from "react";
import Avatar from "@mui/material/Avatar";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Avatar01 from "./../../../../assets/Avatar/Avatar01.jpg";
import {
  FormControl,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import dayjs from "dayjs";
import DateInput from "../../../../components/DateInput/DateInput";
import CustomTextarea from "../../../../components/Textarea/Textarea";
import ChipsArray from "../../../../components/ChipsArray/ChipsArray";
import * as Yup from "yup";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const validationCampaignSchema = Yup.object().shape({
  campaign_title: Yup.string().required("campaign title is required"),
  location: Yup.string().required("required"),
  skill: Yup.string().required("required"),
  duration: Yup.string().required("required"),
});

const CampaignCreate = () => {
  const [loading, setLoading] = React.useState(false);
  const [errorList, setErrorList] = React.useState({
    mobile: [],
    nic: [],
    password: [],
    email: [],
  });

  const campaignValues = {
    campaign_title: "",
    location: "",
    date: "",
    start_time: "",
    end_time: "",
    overview: "",
    categories: "",
    skill: "",
    duration: "",
  };

  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const initialValues = campaignValues;

  const validationSchema = validationCampaignSchema;

  const handleSubmit = (values) => {
    console.log("===============values===================");
    console.log(values);
    // registerCampaign(values);
    console.log(campaignValues);
  };

  const registerCampaign = async (values) => {
    setLoading(true);
    await http
      .post("volunteer/register", values)
      .then((res) => {
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        setErrorList(error.response.data.errors);
      });
  };

  return (
    <Grid>
      <CssBaseline />
      <Grid
        container
        component="main"
        justifyContent="center"
        sx={{
          height: "auto", // small screens
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          component={Paper}
          elevation={6}
          sx={{}}
        >
          <Grid xs={12} sm={12} md={6}></Grid>
          <Box
            sx={{
              my: 2,
              mx: 2,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box sx={{ mt: 3 }}>
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
                  {
                    console.log(errors)
                  }
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={12} md={6} sx={{ px: 2 }}>
                        <Grid container spacing={2}>
                          <Grid
                            item
                            xs={12}
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                            }}
                          >
                            <Avatar
                              sx={{ width: 150, height: 150, my: 2 }}
                              src={Avatar01}
                            />
                            <Button
                              component="label"
                              role={undefined}
                              variant="contained"
                              tabIndex={-1}
                              startIcon={<CloudUploadIcon />}
                            >
                              Update Logo
                              <VisuallyHiddenInput type="file" />
                            </Button>
                          </Grid>
                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              required
                              fullWidth
                              id="campaign_title"
                              name="campaign_title"
                              variant="standard"
                              label="Campaign Title"
                              autoComplete="given-name"
                              autoFocus
                              error={
                                touched.campaign_title && errors.campaign_title
                              }
                              helperText={
                                touched.campaign_title && errors.campaign_title
                              }
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              fullWidth
                              id="location"
                              label="Location"
                              name="location"
                              autoComplete="location"
                              variant="standard"
                              required
                              error={touched.location && errors.location}
                              helperText={touched.location && errors.location}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <FormControl required fullWidth variant="standard">
                              <InputLabel id="demo-simple-select-standard-label">
                                Duration
                              </InputLabel>
                              <Field
                                as={Select}
                                id="duration"
                                name="duration"
                                error={touched.duration && errors.duration}
                                helperText={touched.duration && errors.duration}
                                fullWidth
                                variant="standard"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Long Term</MenuItem>
                              </Field>
                            </FormControl>
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <FormControl required fullWidth variant="standard">
                              <InputLabel id="demo-simple-select-standard-label">
                                Skill Level
                              </InputLabel>
                              <Field
                                as={Select}
                                id="skill"
                                name="skill"
                                error={touched.skill && errors.skill}
                                helperText={touched.skill && errors.skill}
                                fullWidth
                                variant="standard"
                              >
                                <MenuItem value="">
                                  <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Long Term</MenuItem>
                              </Field>
                            </FormControl>
                          </Grid>
                        </Grid>
                      </Grid>

                      <Grid item xs={12} sm={12} md={6} sx={{ px: 2 }}>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              type="time"
                              fullWidth
                              id="start_time"
                              label="Start Time"
                              name="start_time"
                              autoComplete="start_time"
                              variant="standard"
                              required
                              error={touched.location && errors.location}
                              helperText={touched.location && errors.location}
                            />
                          </Grid>
                          <Grid item xs={12} md={6}>
                            <Field
                              as={TextField}
                              type="time"
                              fullWidth
                              id="end_time"
                              label="End Time"
                              name="end_time"
                              autoComplete="end_time"
                              variant="standard"
                              required
                              error={touched.location && errors.location}
                              helperText={touched.location && errors.location}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Field
                              as={DateInput}
                              label="Campaign Date"
                              id="date"
                              name="date"
                              value={value}
                              onChange={(newValue) => setValue(newValue)}
                              required
                              error={touched.date && errors.date}
                              helperText={touched.date && errors.date}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Field
                              as={CustomTextarea}
                              id="overview"
                              name="overview"
                              minRows={3}
                              placeholder="Overview"
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <ChipsArray
                              placeholder="Objectives"
                              dataList={chipData}
                              setDataList={(value) => setChipData(value)}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Button
                              type="submit"
                              fullWidth
                              variant="contained"
                              sx={{ mt: 3, mb: 2 }}
                              onClick={submitForm}>
                              Create Campaign
                            </Button>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CampaignCreate;
