import React from "react";
import { RouterProvider } from "react-router-dom";
import globalStyle from "./Styles/globalCss";
import { Box, Container } from "@mui/material";
import {
  defaultRouter,
  volunteerRoutes,
  organizationRoutes,
} from "./routes/routes";

function App() {
  // defaultRouter
  // volunteerRoutes
  // organizationRoutes

  globalStyle();
  return (
    <div style={{ width: "100%" }}>
      <RouterProvider router={volunteerRoutes} />
    </div>
  );
}

export default App;
