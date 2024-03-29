import React from "react";
import { Link } from "react-router-dom";
import Flex from "../Styles/styledComponent/Flex";
import Text from "../Styles/styledComponent/Text";
import { fadein, fadeinBottom } from "../Styles/keyframes";
import backImage from "../assets/Images/backg.png";
import IcoFacebook from "../assets/Icons/Ico_facebook";
import IcoInstagram from "../assets/Icons/Ico_instagram";
import IcoTwitter from "../assets/Icons/Ico_twitter";

function Main() {
  const fadeInAnimation = { animation: "0.4s ease-in 0.4s 1 both " + fadein };
  const fadeInBottomAnimation = {
    animation: "0.7s ease-in 0.7s 1 both " + fadeinBottom,
  };

  return (
    <Flex
      dir="column"
      justify="around"
      css={{ width: "100%", height: "100%", opacity: "0", ...fadeInAnimation }}
    >
      <Text css={{ display1: "800", paddingTop: "$7" }}>
        Together we unite <br /> to make a change <br /> globally.
      </Text>
      <Text css={{ paddingTop: "$3", fontFamily: "arial", fontWeight: "bold" }}>
        All what it takes is togetherness to keep our planet healthy! <br />{" "}
        Join us With Helping hands to make a change today.
      </Text>
      <Flex css={{ paddingTop: "$5" }}>
        <Link to="/volunteer" style={{ textDecoration: "none" }}>
          <Text
            cursor="pointer"
            css={{
              border: "1px solid white",
              color: "black",
              backgroundColor: "white",
              headline6: "600",
              padding: "$1 $3",
              borderRadius: "8px",
              boxShadow: "$1dp",
              "&:hover": { color: "white", backgroundColor: "darkgreen" },
              "&:active": {
                boxShadow: "none",
                color: "$onPrimary",
                backgroundColor: "$primary600",
              },
            }}
          >
            Volunteer now!
          </Text>
        </Link>
        <div
          className="home-image"
          style={{ position: "absolute", left: "700px", top: "-350px" }}
        >
          <img
            src={backImage}
            alt="Home"
            style={{ width: "100%", height: "auto", ...fadeInBottomAnimation }}
          />
        </div>
        <Link to="/register" style={{ textDecoration: "none" }}>
          <Text
            cursor="click"
            css={{
              border: "1px solid white",
              color: "black",
              backgroundColor: "white",
              headline6: "600",
              padding: "$1 $3",
              borderRadius: "8px",
              marginLeft: "$3",
              "&:hover": { color: "white", backgroundColor: "darkgreen" },
              "&:active": { boxShadow: "none", color: "$onPrimary" },
            }}
          >
            Register
          </Text>
        </Link>
      </Flex>
      <Text css={{ subhead2: "500", color: "$onBg800", paddingTop: "$2" }}>
        Together we unite to make a change globally
      </Text>
      <Flex
        justify="end"
        css={{
          width: "100%",
          "& svg": {
            fill: "$onBg800",
            cursor: "pointer",
            marginRight: "$3",
            "&:hover": { fill: "$onBg", transform: "scale(1.1)" },
          },
        }}
      >
        <IcoFacebook width="32" height="32" />
        <IcoInstagram width="32" height="32" />
        <IcoTwitter width="32" height="32" />
      </Flex>
    </Flex>
  );
}

export default Main;
