import React from "react";
import { Backdrop, Box, CircularProgress } from "@mui/material";

const Loader = ({ openLoad }) => {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openLoad}
    >
      <Box sx={{ display: "inline-flex", width: 50 }}>
        <CircularProgress color="inherit" />
      </Box>
    </Backdrop>
  );
};

export default Loader;
