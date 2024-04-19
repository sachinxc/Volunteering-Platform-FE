/*import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import BannerImage1 from "../../assets/LandingPageImages/background1.jpg";
import BannerImage2 from "../../assets/LandingPageImages/background2.png";
import BannerImage3 from "../../assets/LandingPageImages/background3.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

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
  }, [bannerImages.length]);

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
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "white",
                marginTop: "150px",
                fontSize: "65px",
              }}
            >
              Together we unite to make a change globally
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "white", marginTop: "20px", marginBottom: "50px" }}
            >
              All what it takes is togetherness to keep our planet healthy! Join
              us With Helping hands to make a change today.
            </Typography>
          </Grid>
          <Grid item>
            <Link to="/signup">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  border: "2px solid white",
                  backdropFilter: "blur(20px)", // Apply backdrop filter to blur background
                  marginBottom: "40px",
                }}
              >
                Join Us Today
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Home;*/

/*import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import BannerImage1 from "../../assets/LandingPageImages/background1.jpg";
import BannerImage2 from "../../assets/LandingPageImages/background2.png";
import BannerImage3 from "../../assets/LandingPageImages/background3.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import "./Home.css"; // Import CSS file for custom animations

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [BannerImage1, BannerImage2, BannerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 6000); // Change the image every 6 seconds (6000 milliseconds)

    return () => clearInterval(interval);
  }, [bannerImages.length]);

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
          <Grid item className="main-text">
            {" "}
            {/* Apply animation class *
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "white",
                marginTop: "150px",
                fontSize: "65px",
              }}
            >
              Together we unite to make a change globally
            </Typography>
          </Grid>
          <Grid item className="main-text">
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "white", marginTop: "20px", marginBottom: "50px" }}
            >
              All what it takes is togetherness to keep our planet healthy! Join
              us With Helping hands to make a change today.
            </Typography>
          </Grid>
          <Grid item className="button-container">
            <Link to="/signup">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  border: "2px solid white",
                  backdropFilter: "blur(20px)", // Apply backdrop filter to blur background
                  marginBottom: "40px",
                }}
              >
                Join Us Today
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
};

export default Home;*/

import React, { useState, useEffect } from "react";
import { Container, Typography, Grid } from "@mui/material";
import BannerImage1 from "../../assets/LandingPageImages/background1.jpg";
import BannerImage2 from "../../assets/LandingPageImages/background2.png";
import BannerImage3 from "../../assets/LandingPageImages/background3.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Instagram, Twitter, Facebook } from "@mui/icons-material"; // Import social media icons
import "./Home.css"; // Import CSS file for custom animations

const Home = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const bannerImages = [BannerImage1, BannerImage2, BannerImage3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % bannerImages.length
      );
    }, 6000); // Change the image every 6 seconds (6000 milliseconds)

    return () => clearInterval(interval);
  }, [bannerImages.length]);

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
          <Grid item className="main-text">
            {" "}
            {/* Apply animation class */}
            <Typography
              variant="h1"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "white",
                marginTop: "150px",
                fontSize: "65px",
              }}
            >
              Together we unite to make a change globally
            </Typography>
          </Grid>
          <Grid item className="main-text">
            <Typography
              variant="body1"
              gutterBottom
              sx={{ color: "white", marginTop: "20px", marginBottom: "50px" }}
            >
              All what it takes is togetherness to keep our planet healthy! Join
              us With Helping hands to make a change today.
            </Typography>
          </Grid>
          <Grid item className="button-container">
            <Link to="/signup">
              <Button
                variant="outlined"
                size="large"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  border: "2px solid white",
                  backdropFilter: "blur(20px)", // Apply backdrop filter to blur background
                  marginBottom: "40px",
                }}
              >
                Join Us Today
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>
      {/* Footer with Social Media Icons */}
      <Grid
        container
        justifyContent="flex-end"
        alignItems="center"
        sx={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          padding: "20px",
          color: "white",
        }}
      >
        <Grid item sx={{ marginRight: "20px" }}>
          <Instagram />
        </Grid>
        <Grid item sx={{ marginRight: "20px" }}>
          <Twitter />
        </Grid>
        <Grid item>
          <Facebook />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
