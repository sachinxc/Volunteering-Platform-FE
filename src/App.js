import React, { useEffect } from "react";
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

  // Determine which routes to use based on user type
  const getRoutes = getUser
    ? getUser.user_type === VOLUNTEER
      ? volunteerRoutes
      : getUser.user_type === ORGANIZATION
      ? organizationRoutes
      : defaultRouter
    : defaultRouter; // Fallback to default routes if user data is not available

  // globalStyle();

  useEffect(() => {
    console.log(getUser, "volunteer");
  }, [getUser]);

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
