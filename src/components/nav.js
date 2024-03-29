import React from "react";
import { Link } from "react-router-dom";
import Ico_slogo from "../assets/Icons/Ico_slogo";
import Ico_user from "../assets/Icons/Ico_user";
import Ico_menu from "../assets/Icons/Ico_menu";
import { fadeinTop } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";

function Nav() {
  return React.createElement(
    Flex,
    {
      align: "center",
      justify: "between",
      css: {
        width: "100%",
        paddingTop: "$2",
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
      },
    },
    React.createElement(
      Flex,
      {
        align: "center",
        css: {
          cursor: "pointer",
        },
      },
      React.createElement(Ico_slogo, { width: "35", height: "35" }),
      React.createElement(
        Text,
        {
          cursor: "click",
          css: {
            headline4_i: "600",
            marginLeft: "15px", //makes the logo text move from the logo graphic
          },
        },
        React.createElement(Link, { to: "/" }, "Helping Hands")
      )
    ),
    React.createElement(
      Flex,
      {
        justify: "end",
        align: "center",
        css: {
          "@bp2": {
            display: "none",
          },
        },
      },
      React.createElement(
        Flex,
        {
          css: {
            "& p": {
              headline6: "700",
              cursor: "pointer ",
              padding: "0 $3",
              color: "$onBg800",
              "&:hover": {
                color: "$onBg",
              },
            },
            marginRight: "$6",
            "@bp2": {
              marginRight: "$3",
            },
          },
        },
        React.createElement(
          Link,
          { to: "/volunteer" },
          React.createElement(Text, null, "Volunteer")
        ),
        React.createElement(
          Link,
          { to: "/testimonials" },
          React.createElement(Text, null, "Testimonials")
        ),
        React.createElement(
          Link,
          { to: "/about" },
          React.createElement(Text, null, "About")
        ),
        React.createElement(
          Link,
          { to: "/register" },
          React.createElement(Text, null, "Sign Up")
        ),
        React.createElement(
          Link,
          { to: "/signin" },
          React.createElement(Text, null, "Sign In")
        )
      ),
      React.createElement(
        Flex,
        {
          justify: "around",
          align: "center",
          css: {
            "& svg": {
              cursor: "pointer",
              "&:hover": {
                transform: "scale(1.1)",
              },
            },
            "& svg[id=userSvg]": {
              backgroundColor: "$primary600",
              fill: "$onPrimary",
              borderRadius: "$50",
              padding: "4px",
              "&:hover": {
                backgroundColor: "$primary",
              },
            },
          },
        },
        React.createElement(Ico_user, {
          width: "35",
          height: "35",
          id: "userSvg",
        })
      )
    ),
    React.createElement(Ico_menu, { width: "32", height: "32", id: "menu" })
  );
}

export default Nav;
