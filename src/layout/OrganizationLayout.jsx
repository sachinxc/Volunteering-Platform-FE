import { AppBar, Divider, IconButton } from "@mui/material";
import React from "react";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { styled } from "@mui/material/styles";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Outlet, useLocation } from "react-router-dom";
import Person2Icon from "@mui/icons-material/Person2";
import { useNavigate } from "react-router-dom";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { CustomWidthTooltip } from "../components/CustomTooltip/CustomTooltip";
import { useSelector } from "react-redux";
import CampaignIcon from '@mui/icons-material/Campaign';

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Saved reports
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItemButton>
  </React.Fragment>
);

const drawerWidth = 240;

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const OrganizationLayout = () => {
  const [open, setOpen] = React.useState(true);
  const [openLogout, setOpenLogout] = React.useState(true);

  const location = useLocation();
  const navigate = useNavigate();
  const state = useSelector((state) => state);

  console.log(state, "state");

  const path = location.pathname;
  const lastIndex = path.lastIndexOf("/");

  // Extract the text after the last "/"
  const textAfterLastSlash =
    lastIndex !== -1 ? path.substring(lastIndex + 1) : path;

  const pageList = [
    {
      path: "/organization/dashboard",
      element: <DashboardIcon />,
      name: "Dashboard",
    },
    {
      path: "/organization/campaign",
      element: <CampaignIcon />,
      name: "Campaign",
    },
    {
      path: "/organization/profile",
      element: <Person2Icon />,
      name: "Profile",
    },
    {
      path: "/volunteer/calender",
      element: <CalendarMonthIcon />,
      name: "Calender",
    },
  ];
  const getActivePath = (pagePath) => {
    return path === pagePath;
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleTooltipOpen = () => {
    setOpenLogout(!openLogout);
  };

  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <AppBar position="absolute" sx={{ bgcolor: "#143109" }} open={open}>
          <Toolbar
            sx={{
              pr: "24px", // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: "36px",
                ...(open && { display: "none" }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1, textTransform: "capitalize" }}
            >
              {textAfterLastSlash}
            </Typography>

            <CustomWidthTooltip
              placement="bottom"
              PopperProps={{
                disablePortal: true,
              }}
              arrow
              onClose={handleTooltipOpen}
              open={openLogout}
              title={
                <React.Fragment>
                  <Divider>
                    <Box>
                      <Typography
                        sx={{
                          color: "gray",
                          fontSize: "15px",
                          fontWeight: 700,
                        }}
                      >
                        asdasd
                      </Typography>
                    </Box>
                  </Divider>
                </React.Fragment>
              }
            >
              <IconButton onClick={() => handleTooltipOpen()}>
                {openLogout ? (
                  <AccountCircleIcon sx={{ color: "white" }} />
                ) : (
                  <AccountCircleIcon />
                )}
              </IconButton>
            </CustomWidthTooltip>
          </Toolbar>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <React.Fragment>
              {pageList.map((page, index) => (
                <ListItemButton
                  key={index}
                  sx={{ color: getActivePath(page.path) ? "#1976d2" : "black" }}
                  onClick={() => navigate(page.path)}
                >
                  <ListItemIcon
                    sx={{
                      color: getActivePath(page.path) ? "#1976d2" : "black",
                    }}
                  >
                    {page.element}
                  </ListItemIcon>
                  <ListItemText primary={page.name} />
                </ListItemButton>
              ))}
            </React.Fragment>
          </List>
        </Drawer>

        <Box
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            paddingTop: "50px",
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

export default OrganizationLayout;
