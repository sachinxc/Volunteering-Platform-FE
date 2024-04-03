import React from "react";
import { Container, Typography, Grid } from "@mui/material";
import BannerImage from "../../assets/LandingPageImages/background3.jpg";

const Home = () => {
  return (
    <Grid
      container
      justifyContent="center"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${BannerImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
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
              sx={{ fontWeight: "bold", color: "#46c882", marginTop: "150px" }}
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
