import React from "react";
import { Outlet } from "react-router-dom"; // Importing necessary components from react-router-dom
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import DrawerAppBar from "../components/Navbar/DrawerAppBar";
import Footer from "../components/Footer/Footer"; // Import your Footer component

const MainLayout = () => {
  return (
    <Box
      sx={{
        display: "flex", // Change "0" to "flex"
        flexDirection: "column", // Add flexDirection property
        width: "100%", // Set width to fill horizontal space
        minHeight: "100vh", // Add minHeight property to fill the height
        backgroundColor: "rgb(56, 158, 127)",
      }}
    >
      <CssBaseline />
      <DrawerAppBar />
      <Box
        component="main"
        sx={{
          flex: "1", // Add flex property to fill remaining space
          width: "100%", // Set width to fill horizontal space
        }}
      >
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
