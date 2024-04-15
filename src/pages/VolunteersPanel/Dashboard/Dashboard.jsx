import { Container, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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

const Dashboard = () => {
  return (
    <div>
      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: 200,
              }}
            >
              <Stack>
                <Typography sx={{}}>25H</Typography>
                <Typography>Volunteer Hours</Typography>
              </Stack>
            </Paper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 200,
              }}
            ></Paper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 200,
              }}
            ></Paper>
          </Grid>
          <Grid item xs={12} md={3} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: "flex",
                flexDirection: "column",
                height: 200,
              }}
            ></Paper>
          </Grid>
        </Grid>
        <Copyright sx={{ pt: 4 }} />
      </Container>
    </div>
  );
};

export default Dashboard;
