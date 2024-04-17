import * as React from "react";
import { useState } from "react";
import {
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ddeee4",
          borderRadius: 8,
          p: 2, // Adjust padding
          width: "70%", // Adjust width of the box
          marginTop: "100px", // Add margin top to create space between navbar and white box
          position: "relative", // Position relative for absolute positioning of grid container
          display: "flex", // Ensure flex display to control child elements
          flexDirection: "column", // Arrange children in column layout
          alignItems: "center", // Align items to the left horizontally
          marginBottom: "100px",
          "@media (max-width: 1200px)": {
            width: "90%", // Adjust width to 90% on mobile screens
          },
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            alignItems: "left",
            flexDirection: "column",
            width: "90%",
          }}
        >
          <Grid item xs={12} sx={{ m: 5 }}>
            <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
              Campaign Registration
            </Typography>
          </Grid>
          <Grid item xs={10} sx={{ m: 1 }}>
            <Typography variant="sm" align="left">
              Tell us about your availability of time in general:
            </Typography>
          </Grid>
          <Grid item xs={10} sx={{ m: 1 }}>
            <Typography variant="sm" align="left" sx={{ mr: 3 }}>
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
          <Grid item xs={10} sx={{ m: 1 }}>
            <Typography variant="sm" align="left" sx={{ mr: 3 }}>
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
          <Grid item xs={10} sx={{ m: 1 }}>
            <Typography variant="sm" align="left">
              Briefly describe why you chose this campaign and state any
              relevant qualifications or experiences you have:
            </Typography>

            <TextField
              name="info"
              fullWidth
              multiline
              rows={4}
              value={formData.qualifications}
            />
          </Grid>

          <Grid item xs={10} sx={{ m: 1 }}>
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
          <Grid item xs={10} sx={{ m: 1 }}>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Submit
            </Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default RegistrationForm;
