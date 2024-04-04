import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import VolunteerLayout from "../layout/VolunteerLayout";
import Opportunity from "../pages/Opportunity/Opportunity";
import RegisterEvent from "../pages/Opportunity/RegisterEvent";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";
import CampaignExplorer from "../pages/CampaignExplorer/CampaignExplorer";
import Calendar from "../pages/VolunteersPanel/Calendar/Calendar";
import Dashboard from "../pages/VolunteersPanel/Dashboard/Dashboard";
import Profile from "../pages/VolunteersPanel/Profile/Profile";
import PasswordReset from "../pages/PasswordReset/PasswordReset";
import CampaignOverview from "../pages/CampaignExplorer/CampaignOverview/CampaignOverview";
import About from "../pages/About/About";
import MainLayout from "../layout/MainLayout";
// un-authenticated
export const defaultRouter = createBrowserRouter([
  {
    element: <Layout />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <Home />,
        path: "/home",
      },
      {
        element: <SignUp />,
        path: "/signup",
      },
      {
        element: <SignIn />,
        path: "/signin",
      },
      {
        element: <PageNotFound />,
        path: "*",
      },
      {
        element: <About />,
        path: "/about",
      },
      {
        element: <CampaignExplorer />,
        path: "/campaignexplorer",
      },
      {
        element: <CampaignOverview />,
        path: "/campaignoverview",
      },
    ],
  },
]);

// volunteer's routes
export const volunteerRoutes = createBrowserRouter([
  {
    element: <Layout />,
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <Home />,
        path: "/home",
      },
      {
        element: <SignUp />,
        path: "/signup",
      },
      {
        element: <SignIn />,
        path: "/signin",
      },
      {
        element: <PasswordReset />,
        path: "/resetpassword/:id",
      },
      {
        element: <CampaignExplorer />,
        path: "/campaignexplorer",
      },
      {
        element: <CampaignOverview />,
        path: "/campaignoverview",
      },
      {
        element: <Opportunity />,
        path: "/campaignexplorer/:id",
      },
      {
        element: <RegisterEvent />,
        path: "/campaignexplorer/:id/register",
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
        element: <Calendar />,
        path: "/volunteer/calendar",
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
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        element: <Home />,
        path: "/home",
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
