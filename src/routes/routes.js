import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "../components/main";
import Layout from "../layout/Layout";
import VolunteerLayout from "../layout/VolunteerLayout";
import Opportunity from "../pages/Oppertunity/Opportunity";
import RegisterEvent from "../pages/Oppertunity/RegisterEvent";
import PageNotFound from "../pages/PageNotFound/PageNotFound";
import Register from "../pages/Register/Register";
import Signin from "../pages/Signin/Signin";
import VolunteerExplorerPage from "../pages/Volunteer/VolunteerExplorerPage";
import Calender from "../pages/Volunteers/Calender/Calender";
import Dashboard from "../pages/Volunteers/Dashboard/Dashboard";
import Profile from "../pages/Volunteers/Profile/Profile";
import OrganizationLayout from "../layout/OrganizationLayout";
import OrganizationDashboard from "../pages/Organization/OrganizationDashboard/OrganizationDashboard";
import OrganizationProfile from "../pages/Organization/OrganizationProfile/OrganizationProfile";
import CampaignCreate from "../pages/Organization/Campaing/CampaingCreate/CampaingCreate";
import CampaignList from "../pages/Organization/Campaing/CampaignList/CampaignList";

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
        element: <Main />,
      },
      // {
      //   path: "/organization",
      //   children: [
      //     {
      //       path: "/organization/dashboard",
      //       element: <Dashboard />,
      //     },
      //   ],
      // },
    ],
  },
  {
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
