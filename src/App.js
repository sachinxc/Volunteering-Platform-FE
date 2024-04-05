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
  // Retrieve user data from localStorage
  const getUser = JSON.parse(localStorage.getItem("user"));
  // const getUser = JSON.parse(localStorage.getItem("user"));

  // Determine which routes to use based on user type
  const getRoutes = getUser
    ? getUser.type === VOLUNTEER
      ? volunteerRoutes
      : getUser.type === ORGANIZATION
      ? organizationRoutes
      : defaultRouter
    : defaultRouter; // Fallback to default routes if user data is not available

  // globalStyle();
  return (
    <div style={{ width: "100%" }}>
      <Provider store={store}>
        {/* Pass the determined routes */}
        <RouterProvider router={getRoutes} />
      </Provider>
    </div>
  );
}

export default App;
