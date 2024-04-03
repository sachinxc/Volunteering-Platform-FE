import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Stack,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import ReactPhoneInput from "react-phone-input-2";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { DatePicker } from "@mui/x-date-pickers";

const style = {
  txtinput: {
    bgcolor: "#EFE2FF",
    border: "2px solid #FFF",
    borderRadius: "12px",
    minHeight: "45px",
    "& .MuiOutlinedInput-input": {
      height: "24px",
      // padding: "10px 14px",
    },
    "& .MuiOutlinedInput-root": {
      height: "45px",
      display: "flex",
      alignItems: "center",
      fontSize: "0.9rem",
      padding: "3px 9px",
      "& fieldset": {
        borderColor: "white",
        width: { md: "100%", xs: "100%" },
        minHeight: "45px",
        color: "#BAD4DF",
        borderRadius: "12px",
      },
      "&:hover fieldset": {
        borderColor: "white",
        borderRadius: "12px",
      },
      "&.Mui-focused fieldset": {
        borderColor: "white",
        borderRadius: "12px",
      },
    },
  },
};

const RegisterEvent = () => {
  const [value, setValue] = useState("");

  return (
    <Container sx={{ mt: "20px", padding: "20px" }}>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Stack gap={2}>
            <ReactPhoneInput
              inputExtraProps={{
                name: "phoneNumber",
                required: true,
                autoFocus: true,
              }}
              id="phoneNumber"
              name="phoneNumber"
              specialLabel="Mobile Number"
              defaultCountry={"au"}
              // value={`+${values.mobile}`}
              onChange={(a) => {
                // setFieldValue("mobile", parseInt(a));
              }}
              style={{
                ...style.txtinput,
              }}
              inputStyle={{
                width: "100%",
                height: "3.7375em",
                fontSize: "16px",
                borderRadius: "12px !important",
              }}
            />

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["TimePicker"]}>
                <Stack
                  sx={{
                    gap: "10px",
                    flexDirection: { sm: "column", md: "row" },
                  }}
                >
                  <DatePicker
                    label="Select available date"
                    sx={{ width: "100%" }}
                  />
                  <TimePicker
                    label="Select Start Time"
                    sx={{ width: "100%" }}
                  />
                  <TimePicker label="Select End Time" sx={{ width: "100%" }} />
                </Stack>
              </DemoContainer>
            </LocalizationProvider>

            <TextField
              rows={4}
              placeholder="Describe about your self"
              label="Describe about your self"
            />
            <Stack
              direction={"row"}
              sx={{ gap: "10px", justifyContent: "flex-end" }}
            >
              <Button variant="outlined">Cancel</Button>
              <Button variant="contained">Register</Button>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
};

export default RegisterEvent;
