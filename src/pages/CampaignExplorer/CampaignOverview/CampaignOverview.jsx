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
import FavoriteIcon from "@mui/icons-material/Favorite"; // Import the heart icon
import campaignImage from "../../../assets/CampaignImages/dog.jpg";
import { Link } from "react-router-dom";

function CampaignOverview() {
  // Dummy like count for demonstration
  const likeCount = 10;

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
          backgroundColor: "#ddeee4",
          borderRadius: 8,
          p: 4, // Adjust padding
          width: "60%", // Adjust width of the box
          marginTop: "100px", // Add margin top to create space between navbar and white box
          position: "relative", // Position relative for absolute positioning of grid container
          display: "flex", // Ensure flex display to control child elements
          flexDirection: "column", // Arrange children in column layout
          alignItems: "center", // Align items to the center horizontally
          marginBottom: "100px",
        }}
      >
        <Link to="/campaignexplorer">
          <IconButton
            sx={{
              color: "#493536",
              position: "absolute",
              top: "80px", // Adjust top position for responsiveness
              left: "60px", // Adjust left position for responsiveness
              fontSize: "40px", // Adjust font size for responsiveness
            }}
          >
            <ArrowBackIcon />
          </IconButton>
        </Link>
        {/* Heart icon for like count */}
        <IconButton
          sx={{
            color: "red", // Set color to red
            position: "absolute",
            top: "80px", // Adjust top position for responsiveness
            right: "60px", // Adjust right position for responsiveness
            fontSize: "40px", // Adjust font size for responsiveness
          }}
        >
          <FavoriteIcon />
          <Typography variant="body1" sx={{ ml: 1 }}>
            {likeCount}
          </Typography>
        </IconButton>
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          fontWeight="bold"
          fontSize="35px"
          color="#493536"
          sx={{ marginBottom: "40px", marginTop: "40px" }} // Adding margin bottom to create space
        >
          Rescue Street Dogs
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column", // Change to column layout for responsiveness
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box
            sx={{
              width: "90%", // Adjust width for responsiveness
              marginBottom: "40px", // Add margin bottom for spacing
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
              width: "90%", // Adjust width for responsiveness
              textAlign: "left",
            }}
          >
            <Card
              sx={{
                borderRadius: "20px",
                color: "#493536",
                backgroundColor: "#cce5db",
                boxShadow: "none", // Remove the shadow
                marginBottom: "40px",
              }}
            >
              <CardContent>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Category: Animal Welfare
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Location: Galle, Sri Lanka
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Duration: Long Term
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Skill Level: Beginner
                </Typography>
                <Typography variant="body1" gutterBottom fontWeight="bold">
                  Date: 24.05.2024
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
            width: "90%", // Adjust width for responsiveness
            textAlign: "left",
            marginBottom: "20px", // Add margin bottom for spacing
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            color="#493536"
            fontWeight="bold"
          >
            Overview
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            color="#493536"
            sx={{ marginBottom: "20px" }}
          >
            Join our heartfelt mission to rescue and provide sanctuary for our
            loyal companions. Our dog rescue campaign aims to offer safety,
            love, and a second chance to furry friends in need. Together, let's
            create a community where every tail wags with joy and every bark
            echoes hope.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "90%", // Adjust width for responsiveness
            textAlign: "left",
            marginBottom: "20px", // Add margin bottom for spacing
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
            <ListItem>
              <ListItemText
                primary="- Relocate them to safer areas"
                color="#493536"
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="- Give them medical treatments"
                color="#493536"
              />
            </ListItem>
            <ListItem>
              <ListItemText primary="- Give them food" color="#493536" />
            </ListItem>

            {/* Add more objectives as needed */}
          </List>
        </Box>
        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            marginTop: "10px",
            marginBottom: "40px",
            color: "#493536",
            fontWeight: "bold",
            fontSize: "17px",
            backgroundColor: "#42ce9f",
            width: "200px", // Adjust the width as needed
            height: "45px", // Adjust the height as needed
          }}
        >
          I want to join!
        </Button>
      </Box>
    </div>
  );
}

export default CampaignOverview;
