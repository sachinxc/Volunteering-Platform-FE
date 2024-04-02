import React from "react";
import { RouterProvider } from "react-router-dom";
import globalStyle from "./Styles/globalCss";
import { Box, Container } from "@mui/material";
import {
  defaultRouter,
  volunteerRoutes,
  organizationRoutes,
} from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./store/store";

function App() {
  // defaultRouter
  // volunteerRoutes
  // organizationRoutes

  globalStyle();
  return (
    <div style={{ width: "100%" }}>
      <Provider store={store}>
        <RouterProvider router={volunteerRoutes} />
      </Provider>
    </div>
  );
}

export default App;
