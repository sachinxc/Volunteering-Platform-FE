import React from "react";
import { Link } from "react-router-dom";
import Ico_Facebook from "../assets/Icons/Ico_facebook";
import Ico_Instagram from "../assets/Icons/Ico_instagram";
import Ico_Twitter from "../assets/Icons/Ico_twitter";
import { fadein } from "../Styles/keyframes";
import { fadeinBottom } from "../Styles/keyframes";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import "./main.css";
import backImage from "../assets/Images/backg.png";

function Main() {
  return React.createElement(
    Flex,
    {
      dir: "column",
      justify: "around",
      css: {
        width: "100%",
        height: "100%",
        opacity: "0",
        animation: "0.4s ease-in 0.4s 1 both " + fadein,
      },
    },
    React.createElement(
      Text,
      {
        css: {
          display1: "800",
          paddingTop: "$7",
          "@bp2": {
            display2: "800",
          },
          "@bp4": {
            display3: "800",
          },
          "@bp5": {
            headline1: "800",
          },
        },
      },
      "Together we unite ",
      React.createElement("br", null),
      "to make a change ",
      React.createElement("br", null),
      "globally."
    ),
    React.createElement(
      Text,
      {
        css: {
          paddingTop: "$3",
          subhead1: "500",
          "@bp4": {
            paddingTop: "$1",
            subhead1: "400",
          },
        },
      },
      "All what it takes is togetherness to keep our planet healthy!",
      React.createElement("br", null),
      "Join us With Helping hands to make a change today."
    ),
    React.createElement(
      Flex,
      {
        css: {
          paddingTop: "$5",
        },
      },
      React.createElement(
        Link,
        {
          to: "/volunteer", // Specify the path to the VolunteerExplorerPage
          style: {
            textDecoration: "none",
          },
        },
        React.createElement(
          Text,
          {
            cursor: "pointer",
            css: {
              border: "1px solid white",
              color: "black",
              backgroundColor: "white",
              headline6: "600",
              padding: "$1 $3",
              borderRadius: "8px",
              boxShadow: "$1dp",
              "&:hover": {
                color: "white",
                backgroundColor: "darkgreen",
              },
              "&:active": {
                boxShadow: "none",
                color: "$onPrimary",
                backgroundColor: "$primary600",
              },
            },
          },
          "Volunteer now!"
        )
      ),

      React.createElement(
        "div",
        {
          className: "home-image",
          style: { position: "absolute", left: "700px", top: "-350px" },
        },
        React.createElement("img", {
          src: backImage,
          alt: "Home",
          style: {
            width: "100%",
            height: "auto",
            animation: "0.7s ease-in 0.7s 1 both " + fadeinBottom,
          }, // Maintain aspect ratio
        })
      ),

      React.createElement(
        Text,
        {
          cursor: "click",
          css: {
            border: "1px solid white",
            color: "black",
            backgroundColor: "white",
            headline6: "600",
            padding: "$1 $3",
            borderRadius: "8px",
            marginLeft: "$3",
            "&:hover": {
              color: "white",
              backgroundColor: "darkgreen",
            },
            "&:active": {
              boxShadow: "none",
              color: "$onPrimary",
            },
          },
        },
        "Register"
      )
    ),
    React.createElement(
      Text,
      {
        css: {
          subhead2: "500",
          color: "$onBg800",
          paddingTop: "$2",
        },
      },
      "Together we unite to make a change globally"
    ),
    React.createElement(
      Flex,
      {
        justify: "end",
        css: {
          width: "100%",
          "& svg": {
            fill: "$onBg800",
            cursor: "pointer",
            marginRight: "$3",
            "&:hover": {
              fill: "$onBg",
              transform: "scale(1.1)",
            },
          },
        },
      },
      React.createElement(Ico_Facebook, { width: "32", height: "32" }),
      React.createElement(Ico_Instagram, { width: "32", height: "32" }),
      React.createElement(Ico_Twitter, { width: "32", height: "32" })
    )
  );
}

export default Main;
