import React from "react";
import { RouterProvider } from "react-router-dom";
// import globalStyle from "./Styles/globalCss";
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

  // globalStyle();
  return (
    <div style={{ width: "100%" }}>
      <Provider store={store}>
        <RouterProvider router={volunteerRoutes} />
      </Provider>
    </div>
  );
}

export default App;
