import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { styled } from "@mui/material/styles";
import Avatar01 from "./../../../../assets/Avatar/Avatar01.jpg";
import { FormControl, InputLabel, MenuItem, Select, TextareaAutosize } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import DateInput from "../../../../components/DateInput/DateInput";
import CustomTextarea from "../../../../components/Textarea/Textarea";
import ChipsArray from "../../../../components/ChipsArray/ChipsArray";

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

const CampaignCreate = () => {
  const [value, setValue] = React.useState(dayjs("2022-04-17"));
  const [chipData, setChipData] = React.useState([
    { key: 0, label: "Angular" },
    { key: 1, label: "jQuery" },
    { key: 2, label: "Polymer" },
    { key: 3, label: "React" },
    { key: 4, label: "Vue.js" },
  ]);

  const handleSubmit = (event, { setSubmitting }) => {
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    setTimeout(() => {
      alert("Form submitted successfully!");
      setSubmitting(false);
    }, 1000);
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
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              {/* Left side form fields */}
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
                      <TextField
                        required
                        fullWidth
                        id="title"
                        label="Campaign Title"
                        name="title"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        fullWidth
                        id="location"
                        label="Location"
                        name="location"
                        autoComplete="location"
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl required fullWidth variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">
                          Duration
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          //   value={age}
                          //   onChange={handleChange}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Long Term</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <FormControl required fullWidth variant="standard">
                        <InputLabel id="demo-simple-select-standard-label">
                          Skill Level
                        </InputLabel>
                        <Select
                          labelId="demo-simple-select-standard-label"
                          id="demo-simple-select-standard"
                          //   value={age}
                          //   onChange={handleChange}
                          label="Age"
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Beginner</MenuItem>
                        </Select>
                      </FormControl>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={12} md={6} sx={{ px: 2 }}>
                  <Grid container spacing={2}>
                    
                    <Grid item xs={12}>
                      <DateInput
                        label="Campaign Date"
                        value={value}
                        onChange={(newValue) => setValue(newValue)}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTextarea minRows={3} placeholder="Overview" />
                    </Grid>
                    <Grid item xs={12}>
                      <ChipsArray placeholder="Objectives" dataList={chipData} setDataList={(value)=>setChipData(value)} />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Create  Campaign
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CampaignCreate;
