import * as React from "react";
import { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  IconButton,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    phoneNumber: "",
    qualifications: "",
    backgroundCheck: false,
    dayTimes: {
      Weekdays: { start: null, end: null },
      Weekends: { start: null, end: null },
    },
  });

  const handleTimeChange = (day, timeType) => (date) => {
    setFormData((prevData) => ({
      ...prevData,
      dayTimes: {
        ...prevData.dayTimes,
        [day]: {
          ...prevData.dayTimes[day],
          [timeType]: date,
        },
      },
    }));
  };

  const handleSubmit = () => {
    // Handle form submission
    console.log(formData);
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        marginTop: "100px",
      }}
    >
      <IconButton
        onClick={() => window.history.back()}
        sx={{
          color: "#493536",
          position: "absolute",
          top: "40px", // Adjust top position for responsiveness
          left: "25px", // Adjust left position for responsiveness
          //fontSize: "40px", // Adjust font size for responsiveness
        }}
      >
        <ArrowBackIcon />
      </IconButton>

      <Grid
        container
        spacing={2}
        direction="column"
        alignItems="center"
        sx={{
          backgroundColor: "#ddeee4",
          borderRadius: 8,
          p: 2, // Adjust padding
          width: "60%", // Adjust width of the box
          "@media (max-width: 1200px)": {
            width: "90%", // Adjust width to 90% on mobile screens
          },
        }}
      >
        <Grid item xs={12} sx={{ m: 5 }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
            Campaign Registration
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ width: "80%" }}>
          <Typography variant="sm" align="left">
            Tell us about your time availability in general:
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ width: "80%" }}>
          <Typography variant="sm" align="center" sx={{ mr: 1 }}>
            Week Days:
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Starting from"
              value={formData.dayTimes["Weekdays"].start}
              onChange={handleTimeChange("Weekdays", "start")}
              sx={{ mr: 1 }}
            />
            <TimePicker
              label="Until"
              value={formData.dayTimes["Weekdays"].end}
              onChange={handleTimeChange("Weekdays", "end")}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={10} sx={{ width: "80%" }}>
          <Typography variant="sm" align="center" sx={{ mr: 1 }}>
            Week Ends:
          </Typography>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <TimePicker
              label="Starting from"
              value={formData.dayTimes["Weekends"].start}
              onChange={handleTimeChange("Weekends", "start")}
              sx={{ mr: 1 }}
            />
            <TimePicker
              label="Until"
              value={formData.dayTimes["Weekends"].end}
              onChange={handleTimeChange("Weekends", "end")}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item xs={10} sx={{ width: "80%" }}>
          <Typography variant="sm" align="left">
            Briefly describe why you chose this campaign and state any relevant
            qualifications or experiences you have:
          </Typography>
        </Grid>
        <Grid item xs={10} sx={{ width: "80%" }}>
          <TextField
            name="info"
            fullWidth
            multiline
            rows={4}
            value={formData.qualifications}
          />
        </Grid>

        <Grid item xs={10} sx={{ width: "80%" }}>
          <FormControlLabel
            control={
              <Checkbox
                color="primary"
                name="backgroundCheck"
                checked={formData.backgroundCheck}
              />
            }
            label="I confirm that the above information provided by me is accurate."
          />
        </Grid>
        <Grid item xs={10}>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            sx={{
              marginTop: "10px",
              marginBottom: "40px",
              color: "#493536",
              fontWeight: "bold",
              fontSize: "17px",
              backgroundColor: "#42ce9f",
              width: "200px", // Adjust the width as needed
              height: "45px", // Adjust the height as needed
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegistrationForm;
