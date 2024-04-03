import React from "react";
import {
  Box,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import campaignImage from "../../../assets/campaignImages/dog.jpg";

function CampaignOverview() {
  return (
    <div
      style={{
        backgroundColor: "#389e7f",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "20px", // Add padding top to create space between navbar and white box
      }}
    >
      <Box
        sx={{
          bgcolor: "#ddeee4",
          borderRadius: 8,
          p: 3,
          width: "50%",
          marginTop: "64px", // Add margin top to create space between navbar and white box
        }}
      >
        <IconButton sx={{ color: "#493536" }}>
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          color="#493536"
          sx={{ marginBottom: "40px" }} // Adding margin bottom to create space
        >
          Campaign Title
        </Typography>
        <img
          src={campaignImage}
          style={{
            height: "250px",
            width: "50%",
            borderRadius: 20,
            marginBottom: "40px",
          }}
        />
        <Typography variant="body1" gutterBottom color="#493536">
          Overview description about the campaign.
        </Typography>
        <Typography variant="h6" gutterBottom color="#493536">
          Objectives
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Objective 1" color="#493536" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Objective 2" color="#493536" />
          </ListItem>
          {/* Add more objectives as needed */}
        </List>
      </Box>
    </div>
  );
}

export default CampaignOverview;
