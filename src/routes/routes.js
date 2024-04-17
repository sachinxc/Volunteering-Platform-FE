import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Layout from "../layout/Layout";
import VolunteerLayout from "../layout/VolunteerLayout";
import Opportunity from "../pages/Opportunity/Opportunity";
import RegisterEvent from "../pages/Opportunity/RegisterEvent";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Calender from "../pages/VolunteersPanel/EventCalendar/EventCalendar";
import Dashboard from "../pages/VolunteersPanel/Dashboard/Dashboard";
import Profile from "../pages/VolunteersPanel/Profile/Profile";
import OrganizationLayout from "../layout/OrganizationLayout";
import OrganizationDashboard from "../pages/Organization/OrganizationDashboard/OrganizationDashboard";
import OrganizationProfile from "../pages/Organization/OrganizationProfile/OrganizationProfile";
import CampaignCreate from "../pages/Organization/Campaing/CampaingCreate/CampaingCreate";
import CampaignList from "../pages/Organization/Campaing/CampaignList/CampaignList";

import SignUp from "../pages/SignUp/SignUp";
import CampaignExplorer from "../pages/CampaignExplorer/CampaignExplorer";
import EventCalendar from "../pages/VolunteersPanel/EventCalendar/EventCalendar";
import PasswordReset from "../pages/PasswordReset/PasswordReset";
import CampaignOverview from "../pages/CampaignExplorer/CampaignOverview/CampaignOverview";
import About from "../pages/About/About";
import MainLayout from "../layout/MainLayout";
import Signin from "./../pages/SignIn/SignIn";
import Events from "../pages/VolunteersPanel/Events/Events";
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
        element: <Signin />,
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
        path: "/campaignoverview/:id",
      },
    ],
  },
]);

// volunteer's routes
export const volunteerRoutes = createBrowserRouter([
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
        element: <EventCalendar />,
        path: "/volunteer/eventcalendar",
      },
      {
        element: <Events />,
        path: "/volunteer/events",
      },
      {
        element: <PageNotFound />,
        path: "*",
      },
    ],
  },
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
        element: <Signin />,
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
        path: "/campaignoverview/:id",
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
]);

// organization's routes
export const organizationRoutes = createBrowserRouter([
  {
    path: "/organization",
    element: <OrganizationLayout />,
    children: [
      {
        path: "/organization/dashboard",
        element: <OrganizationDashboard />,
      },
      {
        path: "/organization/profile",
        element: <OrganizationProfile />,
      },
      {
        path: "/organization/campaign",
        element: <CampaignList />,
      },
      {
        path: "/organization/create-campaign",
        element: <CampaignCreate />,
      },
      {
        element: <PageNotFound />,
        path: "*",
      },
    ],
  },
]);
