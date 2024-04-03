import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import BannerImage1 from "../../assets/LandingPageImages/background1.jpg";
import BannerImage2 from "../../assets/LandingPageImages/background2.jpg";
import BannerImage3 from "../../assets/LandingPageImages/background3.jpg";

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [BannerImage1, BannerImage2, BannerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 6000); // Change the image every 5 seconds (5000 milliseconds)

    return () => clearInterval(interval);
  }, []);

  return (
    <Grid
      container
      justifyContent="center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${bannerImages[currentImageIndex]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 2s ease-in-out", // Apply transition effect
      }}
    >
      <Container>
        <Grid
          container
          spacing={2}
          direction="column"
          textAlign="center"
          alignItems="center"
        >
          <Grid item>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "rgb(0 219 154)",
                marginTop: "150px",
              }}
            >
              Together we unite to make a change globally
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1" gutterBottom sx={{ color: "white" }}>
              All what it takes is togetherness to keep our planet healthy! Join
              us With Helping hands to make a change today.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Home;
