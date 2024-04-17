import React, { useEffect, useState } from "react";
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
  const [user, setUser] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );

  useEffect(() => {
    const updateUser = () => {
      console.log("updates");
      setUser(JSON.parse(localStorage.getItem("user")));
    };

    window.addEventListener("storage", updateUser);

    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, []);

  // Determine which routes to use based on user type
  const getRoutes = user
    ? user.user_type === VOLUNTEER
      ? volunteerRoutes
      : user.user_type === ORGANIZATION
      ? organizationRoutes
      : defaultRouter
    : defaultRouter;
  // Fallback to default routes if user data is not available

  // globalStyle();

  console.log(user?.user_type);

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
