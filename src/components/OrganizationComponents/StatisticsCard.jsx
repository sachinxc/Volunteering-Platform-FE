// ** MUI Imports
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Avatar from "@mui/material/Avatar";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { TrendingUp } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const salesData = [
  {
    stats: "24",
    title: "Total",
    color: "primary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "14",
    title: "Close",
    color: "success",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  },
  {
    stats: "10",
    title: "Upcoming",
    color: "secondary",
    icon: <TrendingUp sx={{ fontSize: "1.75rem" }} />,
  }
];

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={12} md={4} key={index}>
      <Box
        key={index}
        sx={{ display: "flex", alignItems: "center", boxShadow: 0,p:2 }}
      >
        <Avatar
          variant="rounded"
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: "common.white",
            backgroundColor: `${item.color}.main`,
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="caption" sx={{ fontSize: "1.2rem", fontWeight: "bold" }}>{item.title}</Typography>
          <Typography variant="h6">{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ));
};

const StatisticsCard = () => {
  return (
    <Card>
      <CardHeader
        title="Campaign Summery"
        action={
          <Link to="/organization/create-campaign">
          <Button size='small' aria-label='settings' className='card-more-options'  variant="contained" color="success"sx={{ color: 'white' }}>
            Add New Campaign
          </Button>
          </Link>
        }
      />
      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={5}>
          {renderStats()}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default StatisticsCard;
