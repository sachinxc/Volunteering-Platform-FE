import React from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Button,
  Card,
  CardContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import campaignImage from "../../../assets/CampaignImages/dog.jpg";
import { useNavigate } from "react-router-dom";
import { convertDate } from "../../../helpers/helpers";

function CampaignOverview() {
  const likeCount = 10;
  const navigate = useNavigate();
  const getCampaign = JSON.parse(localStorage.getItem("campaign"));

  console.log(getCampaign, "getCampaign");

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

        <IconButton
          sx={{
            color: "red",
            position: "absolute",
            top: "40px",
            right: "25px",
          }}
        >
          <FavoriteIcon />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {likeCount}
          </Typography>
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
              src={campaignImage}
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

        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            navigate(`/campaignregistrationform/${getCampaign?.id}`)
          }
          sx={{
            marginTop: "10px",
            marginBottom: "40px",
            color: "#493536",
            fontWeight: "bold",
            fontSize: "17px",
            backgroundColor: "#42ce9f",
            width: "200px",
            height: "45px",
          }}
        >
          I want to join!
        </Button>

        <Button
          onClick={() => navigate(`/testimonials/${getCampaign?.id}`)}
          variant="contained"
          color="primary"
          sx={{
            marginTop: "10px",
            marginBottom: "40px",
            color: "#493536",
            fontWeight: "bold",
            fontSize: "17px",
            backgroundColor: "#e54081",
            width: "250px",
            height: "45px",
          }}
        >
          View Testimonials
        </Button>
      </Box>
    </div>
  );
}

export default CampaignOverview;
