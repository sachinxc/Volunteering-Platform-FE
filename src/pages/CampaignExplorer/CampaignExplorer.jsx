import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  CssBaseline,
  FormControl,
  Grid,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Stack,
} from "@mui/material";
//import SearchIcon from "@mui/icons-material/Search";
//import Divider from "@mui/material/Divider";
import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";

const OpportunityCard = (props) => {
  return (
    <Card sx={{ borderRadius: "20px" }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.cardData.category}
        </Typography>
        <Typography variant="h5" component="div">
          {props.cardData.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {props.cardData.location}
        </Typography>
        <Typography variant="body2">{props.cardData.skillLevel}</Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to="/campaignoverview">
          <Button
            size="small"
            sx={{
              fontSize: "12px",
              color: "#49353",
              fontWeight: "bold",
              border: "1px solid #5bb55b",
              borderRadius: "10px",
              padding: "5px",
            }}
          >
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
};

const CampaignExplorer = () => {
  const campaigns = [
    {
      id: 1,
      title: "Campaign 1",
      category: "Humanitarian",
      location: "New York",
      skillLevel: "Beginner",
    },
    {
      id: 2,
      title: "Campaign 2",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 3,
      title: "Campaign 3",
      category: "Animals",
      location: "Colombo",
      skillLevel: "Advanced",
    },
    {
      id: 4,
      title: "Campaign 4",
      category: "Humanitarian",
      location: "Los Angeles",
      skillLevel: "Beginner",
    },
    {
      id: 5,
      title: "Campaign 5",
      category: "Environment",
      location: "Colombo",
      skillLevel: "Intermediate",
    },
    {
      id: 6,
      title: "Campaign 6",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 7,
      title: "Campaign 7",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 8,
      title: "Campaign 8",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 9,
      title: "Campaign 9",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 10,
      title: "Campaign 10",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    // Add more campaign data with locations as Colombo, New York, or Los Angeles
    {
      id: 11,
      title: "Campaign 11",
      category: "Environment",
      location: "Colombo",
      skillLevel: "Intermediate",
    },
    {
      id: 12,
      title: "Campaign 12",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 13,
      title: "Campaign 13",
      category: "Humanitarian",
      location: "Los Angeles",
      skillLevel: "Beginner",
    },
    {
      id: 14,
      title: "Campaign 14",
      category: "Environment",
      location: "Colombo",
      skillLevel: "Intermediate",
    },
    {
      id: 15,
      title: "Campaign 15",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 16,
      title: "Campaign 16",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 17,
      title: "Campaign 17",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 18,
      title: "Campaign 18",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 19,
      title: "Campaign 19",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 20,
      title: "Campaign 20",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 21,
      title: "Campaign 21",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 22,
      title: "Campaign 22",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 23,
      title: "Campaign 23",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 24,
      title: "Campaign 24",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 25,
      title: "Campaign 25",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 26,
      title: "Campaign 26",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 27,
      title: "Campaign 27",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    {
      id: 28,
      title: "Campaign 28",
      category: "Humanitarian",
      location: "Colombo",
      skillLevel: "Beginner",
    },
    {
      id: 29,
      title: "Campaign 29",
      category: "Environment",
      location: "Los Angeles",
      skillLevel: "Intermediate",
    },
    {
      id: 30,
      title: "Campaign 30",
      category: "Animals",
      location: "New York",
      skillLevel: "Advanced",
    },
    // Your campaign data here
    // Your campaign data here
  ];

  const [page, setPage] = useState(1);
  const cardsPerPage = 12;
  const totalNumPages = Math.ceil(campaigns.length / cardsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const displayedCampaigns = campaigns.slice(
    (page - 1) * cardsPerPage,
    page * cardsPerPage
  );

  return (
    <div>
      <CssBaseline />
      <Grid
        container
        component="main"
        justifyContent="center"
        sx={{
          marginTop: 8,
          padding: 4,
        }}
      >
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "white", fontWeight: "bold", marginBottom: "50px" }}
          gutterBottom
        >
          Explore Volunteering Opportunities
        </Typography>

        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          component={Paper}
          sx={{ p: 4, backgroundColor: "#ddeee4", borderRadius: "20px" }}
        >
          <Grid container spacing={2} alignItems="center">
            {/* Filter components */}
            <Grid item xs={11} md={11}>
              <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                <InputLabel id="category-select-label" sx={{ color: "black" }}>
                  Category
                </InputLabel>
                <Select
                  labelId="category-select-label"
                  id="category-select"
                  label="Category"
                >
                  <MenuItem value="">
                    <em>All Categories</em>
                  </MenuItem>
                  <MenuItem value={"Humanitarian"}>Humanitarian</MenuItem>
                  <MenuItem value={"Environment"}>Environment</MenuItem>
                  <MenuItem value={"Animals"}>Animal Welfare</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                <InputLabel id="skill-select-label" sx={{ color: "black" }}>
                  Skill
                </InputLabel>
                <Select
                  labelId="skill-select-label"
                  id="skill-select"
                  label="Skill"
                >
                  <MenuItem value="">
                    <em>All Skill Levels</em>
                  </MenuItem>
                  <MenuItem value={"Beginner"}>Beginner</MenuItem>
                  <MenuItem value={"Intermediate"}>Intermediate</MenuItem>
                  <MenuItem value={"Advanced"}>Advanced</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: "black" }}
                >
                  Duration
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={age}
                  label="Duration"
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>All Duration Types</em>
                  </MenuItem>
                  <MenuItem value={10}>One Time</MenuItem>
                  <MenuItem value={20}>Continuous</MenuItem>
                  <MenuItem value={30}>Long Term</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: "black" }}
                >
                  Location
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={age}
                  label="Location"
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>All Locations</em>
                  </MenuItem>
                  <MenuItem value={10}>Kandy Sri Lanka</MenuItem>
                  <MenuItem value={20}>Colombo Sri Lanka</MenuItem>
                  <MenuItem value={30}>Jaffna Sri Lanka</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
                <InputLabel
                  id="demo-select-small-label"
                  sx={{ color: "black" }}
                >
                  Date
                </InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  // value={age}
                  label="Date"
                  // onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>All Dates</em>
                  </MenuItem>
                  <MenuItem value={10}>This month</MenuItem>
                  <MenuItem value={20}>This Year</MenuItem>
                  <MenuItem value={30}>Upcoming</MenuItem>
                </Select>
              </FormControl>
              {/* Add more filter components as needed */}
              {/* Search bar */}
              <FormControl sx={{ m: 1, minWidth: 125 }}>
                <InputLabel id="search-select-label" sx={{ color: "black" }}>
                  Search
                </InputLabel>
                <InputBase
                  sx={{
                    backgroundColor: "white",
                  }}
                  placeholder="Search by keywords"
                  inputProps={{ "aria-label": "Search by keywords" }}
                />
              </FormControl>
            </Grid>
            {/* Button */}
            <Grid>
              <Button variant="contained" color="primary">
                Search
              </Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={10}
          component={Paper}
          sx={{ p: 4, mt: 1, backgroundColor: "#ddeee4", borderRadius: "20px" }}
        >
          <Grid xs={12} md={12}>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                {displayedCampaigns.map((campaign) => (
                  <Grid item xs={12} sm={6} md={3} key={campaign.id}>
                    <OpportunityCard cardData={campaign} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
          <Stack spacing={2}>
            <Grid container justifyContent="center">
              <Pagination
                count={totalNumPages}
                page={page}
                onChange={handleChangePage}
                variant="outlined"
                color="primary"
                sx={{ mt: 2 }}
              />
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default CampaignExplorer;
