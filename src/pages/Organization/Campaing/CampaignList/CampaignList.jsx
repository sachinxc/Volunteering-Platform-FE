import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import Divider from "@mui/material/Divider";
import {
  Box,
  CssBaseline,
  FormControl,
  Grid,
  Button,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  Pagination,
} from "@mui/material";
import CampaignCard from "../../../../components/CampaignCard/CampaignCard";
import SelectMenu from "../../../../components/SelectMenu/SelectMenu";
import { campaigns } from "../../../../DummyData/campaigns";
import { Link } from "react-router-dom";
import CustomModal from "../../../../components/Modal/Modal";

const CampaignList = () => {
  const filterList = [
    {
      label: "Location",
      dataList: [
        {
          id: 1,
          label: "Colombo",
        },
        {
          id: 2,
          label: "Gall",
        },
        {
          id: 3,
          label: "Panadura",
        },
      ],
    },
    {
      label: "Location",
      dataList: [
        {
          id: 1,
          label: "Colombo",
        },
        {
          id: 2,
          label: "Gall",
        },
        {
          id: 3,
          label: "Panadura",
        },
      ],
    },
    {
      label: "Location",
      dataList: [
        {
          id: 1,
          label: "Colombo",
        },
        {
          id: 2,
          label: "Gall",
        },
        {
          id: 3,
          label: "Panadura",
        },
      ],
    },
    {
      label: "Location",
      dataList: [
        {
          id: 1,
          label: "Colombo",
        },
        {
          id: 2,
          label: "Gall",
        },
        {
          id: 3,
          label: "Panadura",
        },
      ],
    },
    {
      label: "Location",
      dataList: [
        {
          id: 1,
          label: "Colombo",
        },
        {
          id: 2,
          label: "Gall",
        },
        {
          id: 3,
          label: "Panadura",
        },
      ],
    },
  ];

  const [open, setOpen] = React.useState(false);
  const [viewSingleCampaign, setViewSingleCampaign] = React.useState(null);

  //   Open Custom Modal
  const handleOpen = () => setOpen(true);

  //   Close Custom Modal
  const handleClose = () => setOpen(false);

  return (
    <Grid>
      <CssBaseline />
      <Grid
        container
        component="main"
        justifyContent="center"
        sx={{
          marginTop: 1,
          padding: 4,
        }}
      >
        <Grid item xs={12} sm={12} md={11} component={Paper} sx={{ p: 4 }}>
          <Grid xs={12} md={12}>
            <Paper
              component="form"
              sx={{
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                m: 1,
              }}
              fullWidth
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ "aria-label": "Search your Opportunities" }}
              />
              <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                <SearchIcon />
              </IconButton>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <Button
                variant="contained"
                sx={{ background: "#143109" }}
                color="success"
              >
                Search
              </Button>
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <Link to="/organization/create-campaign">
                <Button
                  variant="contained"
                  sx={{ background: "#143109" }}
                  color="success"
                >
                  Add New Campaign
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid xs={12} md={12} sx={{ mt: 4 }}>
            {filterList.map((Obj) => (
              <SelectMenu label={Obj.label} dataList={Obj.dataList} />
            ))}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={12}
          md={11}
          component={Paper}
          sx={{ p: 4, mt: 1 }}
        >
          <Grid xs={12} md={12}>
            <Box
              component="form"
              noValidate
              // onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Pagination
                sx={{
                  my: 2,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center", // Align center horizontally
                }}
                count={10}
                variant="outlined"
                color="primary"
              />
              <Grid container spacing={2}>
                {campaigns.map((Obj) => (
                  <Grid item xs={12} sm={6} md={4}>
                    {" "}
                    <CampaignCard
                      title={Obj.title}
                      subheader={Obj.date}
                      image={Obj.image}
                      category={Obj.category}
                      location={Obj.location}
                      skillLevel={Obj.skillLevel}
                      description={Obj.description}
                      handleViewAll={() => {
                        handleOpen();
                        setViewSingleCampaign(Obj);
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <CustomModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
        modalTitle="View  Campaign Details"
        modalBodyComponent=<CampaignCard
          title={campaigns[0].title}
          subheader={campaigns[0].date}
          image={campaigns[0].image}
          category={campaigns[0].category}
          location={campaigns[0].location}
          skillLevel={campaigns[0].skillLevel}
          description={campaigns[0].description}
          handleViewAll={() => {
            setViewSingleCampaign(campaigns[0]);
          }}
        />
      />
    </Grid>
  );
};

export default CampaignList;
