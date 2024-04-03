import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import VolunteerLayout from "../layout/VolunteerLayout";
import Opportunity from "../pages/Opportunity/Opportunity";
import RegisterEvent from "../pages/Opportunity/RegisterEvent";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/SignUp/SignUp";
import Signin from "../pages/SignIn/SignIn";
import VolunteerExplorerPage from "../pages/CampaignExplorer/CampaignExplorer";
import Calender from "../pages/VolunteersPanel/Calendar/Calendar";
import Dashboard from "../pages/VolunteersPanel/Dashboard/Dashboard";
import Profile from "../pages/VolunteersPanel/Profile/Profile";
import PasswordReset from "../pages/PasswordReset/PasswordReset";

// un-authenticated
export const defaultRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        element: <Signin />,
        path: "/login",
      },
      {
        element: <PageNotFound />,
        path: "*",
      },
    ],
  },
]);

// volunteer's routes
export const volunteerRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        element: <Signin />,
        path: "/login",
      },
      {
        element: <PasswordReset />,
        path: "/resetpassword/:id",
      },
      {
        element: <VolunteerExplorerPage />,
        path: "/explore",
      },
      {
        element: <Opportunity />,
        path: "/explore/:id",
      },
      {
        element: <RegisterEvent />,
        path: "/explore/:id/register",
      },
      {
        element: <PageNotFound />,
        path: "*",
      },
    ],
  },
  {
    element: <VolunteerLayout />,
    children: [
      {
        path: "/volunteer/dashboard",
        element: <Dashboard />,
      },
      {
        element: <PasswordReset />,
        path: "/resetpassword/:id",
      },
      {
        path: "/volunteer/profile",
        element: <Profile />,
      },
      {
        element: <Calender />,
        path: "/volunteer/calender",
      },
      {
        element: <PageNotFound />,
        path: "*",
      },
    ],
  },
]);

// organization's routes
export const organizationRoutes = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/organization",
        children: [
          {
            path: "/organization/dashboard",
            element: <Dashboard />,
          },
        ],
      },
    ],
  },
]);
