import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/main";
import Layout from "../layout/Layout";
import VolunteerLayout from "../layout/VolunteerLayout";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import Dashboard from "../pages/Volunteers/Dashboard/Dashboard";
import Profile from "../pages/Volunteers/Profile/Profile";

// un-authenticated
export const defaultRouter = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        element: <Signin />,
        path: "/login",
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
        element: <Main />,
      },
      {
        element: <Register />,
        path: "/register",
      },
      {
        element: <Signin />,
        path: "/login",
      },
    ],
  },
  {
    path: "/volunteer",
    element: <VolunteerLayout />,
    children: [
      {
        path: "/volunteer/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/volunteer/profile",
        element: <Profile />,
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
        element: <Main />,
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
