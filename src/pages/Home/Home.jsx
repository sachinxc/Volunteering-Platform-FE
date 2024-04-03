import React from "react";
import { Container, Typography } from "@mui/material";
import BannerImage from "../../assets/LandingPageImages/background3.jpg";

const Home = () => {
  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${BannerImage})`, // Replace 'path_to_your_image.jpg' with the actual path to your image
        color: "white", // Text color
        //backgroundColor:"",
        backgroundPosition: "center",
        textAlign: "center",
      }}
    >
      <Container>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: "250px" }}
        >
          Together we unite to make a change globally
        </Typography>
        <Typography variant="body1" gutterBottom>
          All what it takes is togetherness to keep our planet healthy! Join us
          With Helping hands to make a change today.
        </Typography>
      </Container>
    </div>
  );
};

export default Home;
