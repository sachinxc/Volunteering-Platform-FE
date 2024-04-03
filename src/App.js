import * as React from "react";
import { Outlet } from "react-router-dom"; // Importing necessary components from react-router-dom
import "./globalStyles.css";

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </React.Suspense>
  );
}

export default App; // Exporting the App component as the default export

/*import React from "react";
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
import { ORGANIZATION, VOLUNTEER } from "./constants";

function App() {
  const getUser = JSON.parse(localStorage.getItem("user"));
  const getRoutes =
    getUser.type === VOLUNTEER
      ? volunteerRoutes
      : getUser.type === ORGANIZATION
      ? organizationRoutes
      : defaultRouter;

  globalStyle();
  return (
    <div style={{ width: "100%" }}>
      <Provider store={store}>
        <RouterProvider router={getRoutes} />
      </Provider>
    </div>
  );
}

export default App;*/
