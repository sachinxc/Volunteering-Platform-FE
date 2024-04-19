import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import { getRandomImageUrl } from "../../DummyData/imagelist";
import { convertDate } from "../../helpers/helpers";

const EventsView = () => {
  const getCampaign = JSON.parse(localStorage.getItem("viewEvent"));

  return (
    <div
      style={{
        backgroundColor: "#389e7f",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ddeee4",
          borderRadius: 8,
          p: 2,
          width: "55%",
          marginTop: "100px",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: "100px",
          "@media (max-width: 1200px)": {
            width: "90%",
          },
        }}
      >
        <IconButton
          onClick={() => window.history.back()}
          sx={{
            color: "#493536",
            position: "absolute",
            top: "40px",
            left: "25px",
          }}
        >
          <ArrowBackIcon />
        </IconButton>

        <Typography
          variant="h4"
          width="50%"
          align="center"
          gutterBottom
          fontWeight="bold"
          color="#493536"
          sx={{ marginBottom: "40px", marginTop: "40px" }}
        >
          {getCampaign.campaign_title}
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "90%",
              marginBottom: "30px",
            }}
          >
            <img
              src={getRandomImageUrl()}
              alt="dog"
              style={{
                width: "100%",
                borderRadius: 20,
              }}
            />
          </Box>

          <Box
            sx={{
              width: "90%",
              textAlign: "left",
            }}
          >
            <Card
              sx={{
                borderRadius: "20px",
                color: "#493536",
                backgroundColor: "#cce5db",
                boxShadow: "none",
                marginBottom: "30px",
              }}
            >
              <CardContent>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Category: {getCampaign?.categories}
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Location: {getCampaign?.location}
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Duration: {getCampaign?.duration}
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Skill Level: {getCampaign?.skill}
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Date: {convertDate(getCampaign?.date)}
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Offered By: Friendly Paws
                </Typography>
              </CardContent>
            </Card>
          </Box>
        </Box>
        <Box
          sx={{
            width: "90%",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            color="#493536"
            fontWeight="bold"
          >
            {getCampaign?.overview}
          </Typography>
        </Box>
        <Box
          sx={{
            width: "90%",
            textAlign: "left",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            color="#493536"
            fontWeight="bold"
          >
            Objectives
          </Typography>
          <List>
            {getCampaign?.objectives.map((o) => (
              <ListItem>
                <ListItemText
                  primary={`- ${o?.objective_title}`}
                  color="#493536"
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </div>
  );
};

export default EventsView;
