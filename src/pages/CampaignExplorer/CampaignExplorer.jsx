import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import { Image } from "@mui/icons-material";
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

import Pagination from "@mui/material/Pagination";
import { Link } from "react-router-dom";
import campaign1Image from "../../assets/CampaignImages/dog.jpg";
import PlaceIcon from "@mui/icons-material/Place";
import CategoryIcon from "@mui/icons-material/Category";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import SchoolIcon from "@mui/icons-material/School";
import http from "../../http";
import Loader from "../../components/Loading/Loading";
import { isEmpty } from "lodash";

const OpportunityCard = (props) => {
  return (
    <Card
      sx={{
        borderRadius: "20px",
        border: "solid 1px black",
        backgroundColor: "#ebefed",
      }}
    >
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: "bold",
          display: "flex",
          justifyContent: "center",
          px: 2,
          py: 1,
          color: "#493536",
        }}
      >
        {props.cardData.campaign_title}
      </Typography>

      <CardMedia
        component="img"
        alt="dog"
        height="140"
        image={campaign1Image}
      />
      <CardContent sx={{ p: 0 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: 1,
            width: "100%",
          }}
        >
          <Typography sx={{ fontSize: 13, mr: 1 }} color="text.secondary">
            <CategoryIcon sx={{ fontSize: 13, mr: 0.5 }} />
            {props.cardData.categories}
          </Typography>

          <Typography sx={{ fontSize: 13 }} color="text.secondary">
            <SchoolIcon sx={{ fontSize: 13, mr: 0.5 }} />
            {props.cardData.skill}
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            mt: 0.5,
          }}
        >
          <Typography sx={{ fontSize: 13, mr: 1 }} color="text.secondary">
            <AccessTimeFilledIcon sx={{ fontSize: 13, mr: 0.5 }} />
            {props.cardData.start_time}
          </Typography>

          <Typography sx={{ fontSize: 13 }} color="text.secondary">
            <PlaceIcon sx={{ fontSize: 13, mr: 0.5 }} />
            {props.cardData.location}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: "center" }}>
        <Link to={`/campaignoverview/${props.cardData.id}`}>
          <Button
            size="small"
            sx={{
              fontSize: "12px",
              color: "black",
              fontWeight: "bold",
              border: "1px solid black",
              borderRadius: "10px",
              mb: 1,
              "&:hover": {
                backgroundColor: "silver",
              },
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
  const [campaigns, setCampaigns] = useState([]);

  const [page, setPage] = useState(1);
  const [filters, setSelectedFilters] = useState({
    categories: "All",
    skill: "All",
    duration: "All",
  });
  const [displayedCampaigns, setDisplayedCampaigns] = useState([]);

  const cardsPerPage = 8;
  const totalNumPages = Math.ceil(displayedCampaigns.length / cardsPerPage);

  const [loading, setLoading] = useState(false);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const onChangeCategory = (e) => {
    setPage(1);
    const { name, value } = e.target; // Destructure name and value from event target
    setSelectedFilters((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (value === "All") {
      setDisplayedCampaigns([...campaigns]);
    } else {
      const list = campaigns.filter((camp) => camp[name] === value);
      setDisplayedCampaigns([...list]);
    }
  };

  const getOpportunities = async (values) => {
    setLoading(true);
    await http
      .post("volunteer/campaign/filter", values)
      .then((res) => {
        setLoading(false);
        setCampaigns(res.data.campaigns);
        setDisplayedCampaigns(res.data.campaigns);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getOpportunities();
  }, []);

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
          sx={{
            p: 4,
            backgroundColor: "#ddeee4",
            borderRadius: "20px",
          }}
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
                  name="categories"
                  value={filters.categories}
                  onChange={onChangeCategory}
                >
                  <MenuItem value="All">All Categories</MenuItem>
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
                  name="skill"
                  value={filters.skill}
                  onChange={onChangeCategory}
                >
                  <MenuItem value="All">All Skill Levels</MenuItem>
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
                  value={filters.duration}
                  label="Duration"
                  name="duration"
                  onChange={onChangeCategory}
                >
                  <MenuItem value="All">All Duration Types</MenuItem>
                  <MenuItem value={10}>One Time</MenuItem>
                  <MenuItem value={20}>Continuous</MenuItem>
                  <MenuItem value={30}>Long Term</MenuItem>
                </Select>
              </FormControl>

              {/* Add more filter components as needed */}
              <Button
                variant="contained"
                color="primary"
                sx={{
                  m: 1,
                  backgroundColor: "#2ab6bb",
                  fontWeight: "bold",
                  border: "solid 2px white",
                  boxShadow: "none",
                }}
              >
                <SearchIcon sx={{ color: "white", mr: 1 }} />
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
          sx={{
            p: 4,
            mt: 1,
            backgroundColor: "#ddeee4",
            borderRadius: "20px",
          }}
        >
          <Grid xs={12} md={12}>
            <Box component="form" noValidate sx={{ mt: 3 }}>
              <Grid container spacing={3}>
                {isEmpty(displayedCampaigns) ? (
                  <Typography>Campaigns Not Found</Typography>
                ) : (
                  displayedCampaigns
                    .slice((page - 1) * cardsPerPage, page * cardsPerPage)
                    .map((campaign) => (
                      <Grid item xs={12} sm={6} md={3} key={campaign.id}>
                        <OpportunityCard cardData={campaign} />
                      </Grid>
                    ))
                )}
              </Grid>
            </Box>
          </Grid>
          <Stack spacing={2}>
            <Grid container justifyContent="center">
              {isEmpty(displayedCampaigns) ? (
                ""
              ) : (
                <Pagination
                  count={totalNumPages}
                  page={page}
                  onChange={handleChangePage}
                  variant="outlined"
                  color="primary"
                  sx={{
                    mt: 2,
                    ".css-1b5ei7m.Mui-selected": {
                      backgroundColor: "rgb(56, 158, 127)",
                      color: "white",
                      border: "solid 1px black",
                    },

                    ".css-1b5ei7m.Mui-selected:hover": {
                      backgroundColor: "rgb(56, 158, 127)",
                      color: "white",
                      border: "solid 1px black",
                    },
                  }}
                />
              )}
            </Grid>
          </Stack>
          <Loader openLoad={loading} />
        </Grid>
      </Grid>
    </div>
  );
};

export default CampaignExplorer;
