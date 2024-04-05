import React from "react";
import { Typography, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#646464",
        color: "white",
        padding: "20px",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} Helping Hands by Byte Hogs. All rights
        reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
