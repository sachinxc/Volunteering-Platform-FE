import { Container, Grid, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import StatisticsCard from "../../../components/OrganizationComponents/StatisticsCard";
import UpcomingCard from "../../../components/OrganizationComponents/UpcomingCard";
import UpcomingComplete from "../../../components/OrganizationComponents/UpcomingComplete";
import TopVolunteer from "../../../components/OrganizationComponents/TopVolunteer";
import Timer from "../../../constant/Timer";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
}

const OrganizationDashboard = () => {
  const [timerValues, setTimeValues] = useState("");

  useEffect(() => {
    // Function to be executed after every 1000 milliseconds (1 second)
    const interval = setInterval(() => {
      setTimeValues(Timer(new Date("2024-04-27T12:00:00")));
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []); // Empty dependency array means this effect will run once after the component mounts

  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          {/* Chart */}
          <Grid item md={12} lg={8}>
            <StatisticsCard />
          </Grid>
          {/* Recent Deposits */}
          <Grid item md={12} lg={4}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 240,
              }}
            >
              <Typography variant="body1" color="black" sx={{ ml: 2 }}>
                Next Campaign
              </Typography>
              <UpcomingCard timerValues={timerValues} />
            </Paper>
          </Grid>
          <Grid item md={12} lg={8}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <UpcomingComplete />
            </Paper>
          </Grid>
          <Grid item md={12} lg={4}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <TopVolunteer />
            </Paper>
          </Grid>
          <Grid item xs={12}></Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </div>
  );
};

export default OrganizationDashboard;
