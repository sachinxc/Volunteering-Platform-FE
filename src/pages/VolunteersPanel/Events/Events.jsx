import React, { useEffect, useState } from "react";
import { Box, CssBaseline, Grid, Paper, Pagination } from "@mui/material";

import { getToken } from "../../../helpers/helpers";
import http from "../../../http";
import Loader from "../../../components/Loading/Loading";
import EventCards from "../../../components/EventCards/EventCards";

const Events = () => {
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);

  const getCampaigns = async (newPage) => {
    setLoading(true);
    await http
      .get(`volunteer/campaign?token=${getToken()}&page=${newPage || page}`)
      .then((res) => {
        setLoading(false);
        setData(res.data.campaigns.data);
        setPage(res.data.campaigns.current_page);
        setTotal(Math.ceil(res.data.campaigns.total / 10));
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const changePage = (e, a) => {
    getCampaigns(a);
    setPage(a);
  };

  useEffect(() => {
    getCampaigns();
    localStorage.removeItem("viewEvent");
  }, []);

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
                count={total}
                variant="outlined"
                color="primary"
                onChange={changePage}
                page={page}
              />
              <Grid container spacing={2}>
                {data.map((Obj) => (
                  <Grid item xs={12} sm={12} md={6} lg={4}>
                    <EventCards {...Obj} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>

      <Loader openLoad={loading} />
    </Grid>
  );
};

export default Events;
