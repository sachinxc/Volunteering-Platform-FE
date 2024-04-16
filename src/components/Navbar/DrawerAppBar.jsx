import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Avatar } from "@mui/material";
import UserPanelIcon from "../../assets/Avatar/userPanelicon.png";
import { Link } from "react-router-dom";
import HelpingHandsLogo from "../../assets/Avatar/logo.png";

const drawerWidth = "100%";
const navItems = [
  {
    title: "Explore Volunteering",
    routLink: "/campaignexplorer",
    isButton: true, // Add a property to specify if the item is a button
  },

  {
    title: "Sign Up",
    routLink: "/signup",
  },

  {
    title: "About",
    routLink: "/about",
  },

  {
    title: "Sign In",
    routLink: "/signin",
  },

  {
    title: "Home",
    routLink: "/home",
  },
];

function DrawerAppBar(props) {
  const getUser = JSON.parse(localStorage.getItem("user"));

  console.log(getUser, "getUser");

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  /*mobile view */
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", background: "#46c882" }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        Helping Hands
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center", color: "white" }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  /*nav bar background color*/
  return (
    <>
      <AppBar
        component="nav"
        sx={{ background: "rgb(56, 158, 127)", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Avatar
              alt="Helping Hands Logo"
              src={HelpingHandsLogo}
              sx={{ width: 60, height: 60, marginRight: 1 }}
            />
          </Link>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Helping Hands
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link to={item.routLink} key={item.title}>
                {item.isButton ? (
                  <Button
                    variant="outlined"
                    sx={{
                      mr: 2,
                      ml: 2,
                      fontWeight: "bold",
                      color: "#ffffff",
                      border: "1px solid white",
                    }}
                  >
                    {item.title}
                  </Button>
                ) : (
                  <Button
                    sx={{ mr: 2, ml: 2, fontWeight: "bold", color: "#ffffff" }}
                  >
                    {item.title}
                  </Button>
                )}
              </Link>
            ))}
          </Box>
          {getUser?.type && (
            <Avatar
              alt="UserPanelIcon"
              src={UserPanelIcon}
              sx={{ mr: 2, ml: 2 }}
            />
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            backgroundColor: "rgb(56, 158, 127)",
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
