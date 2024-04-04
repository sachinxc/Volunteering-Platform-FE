import React from "react";
import { Outlet } from "react-router-dom"; // Importing necessary components from react-router-dom
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import DrawerAppBar from "../components/Navbar/DrawerAppBar";
import Footer from "../components/Footer/Footer"; // Import your Footer component

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <DrawerAppBar />
      <Box
        component="main"
        sx={{ width: "100%", background: "rgb(56, 158, 127)" }}
      >
        <Outlet />
        <Footer />
      </Box>
    </Box>
  );
};

export default MainLayout;
