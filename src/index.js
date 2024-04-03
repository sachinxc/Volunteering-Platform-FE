import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "../src/layout/MainLayout";
import Home from "./pages/Home/Home";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import CampaignExplorer from "./pages/CampaignExplorer/CampaignExplorer";
import CampaignOverview from "./pages/CampaignExplorer/CampaignOverview/CampaignOverview";
import About from "./pages/About/About";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <PageNotFound />,
    children: [
      {
        index: true, // Set index to true for the root path
        element: <Home />, // Render the Home component for the root path
      },

      {
        path: "home",
        element: <Home />,
      },
      {
        path: "campaignexplorer",
        element: <CampaignExplorer />,
      },
      {
        path: "campaignoverview",
        element: <CampaignOverview />,
      },

      {
        path: "signin",
        element: <SignIn />,
        errorElement: <PageNotFound />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },

      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);*/
