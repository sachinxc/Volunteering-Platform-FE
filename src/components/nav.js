import React from "react";
import { Link } from "react-router-dom";
import IcoSlogo from "../assets/Icons/Ico_slogo";
import IcoUser from "../assets/Icons/Ico_user";
import IcoMenu from "../assets/Icons/Ico_menu";
import { fadeinTop } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import { useLocation } from "react-router-dom";
import { MenuItem, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import Menu from "@mui/material/Menu";

const Nav = () => {
  const location = useLocation();
  const path = location.pathname;
  const getUser = JSON.parse(localStorage.getItem("user"));

  const navigationUrls = [
    { paths: "/explore", pathName: "Volunteer" },
    { paths: "/testimonials", pathName: "Testimonials" },
    { paths: "/about", pathName: "About" },
    { paths: "/register", pathName: "Sign Up" },
    { paths: "/login", pathName: "Sign In" },
  ];

  const navigationUserUrls = [
    { paths: "/explore", pathName: "Volunteer" },
    { paths: "/testimonials", pathName: "Testimonials" },
    { paths: "/about", pathName: "About" },
  ];

  const urls = getUser ? navigationUserUrls : navigationUrls;

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Flex
      align="center"
      justify="between"
      css={{
        width: "100%",

        "& svg": {
          fill: "$onBg",
        },
        "& svg[id=menu]": {
          display: "none",
          cursor: "pointer",
          fill: "$onBg800",
          "&:hover": {
            fill: "$onBg",
          },
        },
        "@bp2": {
          "& svg[id=menu]": {
            display: "block",
          },
        },
        animation: fadeinTop + " 1s ",
      }}
    >
      <Flex align="center" cursor="pointer">
        <IcoSlogo width="35" height="35" />
        <Text cursor="click" css={{ headline4_i: "600", marginLeft: "15px" }}>
          <Link to="/">Helping Hands</Link>
        </Text>
      </Flex>
      <Flex justify="end" align="center" css={{ "@bp2": { display: "none" } }}>
        <Flex
          css={{
            "& p": {
              headline6: "700",
              cursor: "pointer ",
              padding: "0 $3",
              color: "$onBg800",
              "&:hover": { color: "$onBg" },
            },
            marginRight: "$6",
            "@bp2": { marginRight: "$3" },
          }}
        >
          {urls.map((link, index) => (
            <Link to={link.paths} key={index}>
              <Typography
                sx={{
                  textDecoration: path === link.paths ? "underline" : "none",
                  textDecorationSkipInk: "spaces",
                }}
              >
                {link.pathName}
              </Typography>
            </Link>
          ))}
        </Flex>
        <Flex
          justify="around"
          align="center"
          css={{
            "& svg": {
              cursor: "pointer",
              "&:hover": { transform: "scale(1.1)" },
            },
            "& svg[id=userSvg]": {
              backgroundColor: "$primary600",
              fill: "$onPrimary",
              borderRadius: "$50",
              padding: "4px",
              "&:hover": { backgroundColor: "$primary" },
            },
          }}
        >
          {getUser && <IcoUser width="35" height="35" id="userSvg" />}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Nav;
