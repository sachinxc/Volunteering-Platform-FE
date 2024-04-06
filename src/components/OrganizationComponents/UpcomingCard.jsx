import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Grid } from "@mui/material";

function TimerDisplayItem({ timeValue }) {
  return (
    <Grid item>
      <Avatar sx={{ bgcolor: "#1976d2" }} aria-label="days">
        {timeValue}
      </Avatar>
    </Grid>
  );
}

function TimerDisplay({ timerValues }) {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <TimerDisplayItem timeValue={timerValues.days} />
      <TimerDisplayItem timeValue={timerValues.hours} />
      <TimerDisplayItem timeValue={timerValues.minutes} />
      <TimerDisplayItem timeValue={timerValues.seconds} />
    </Grid>
  );
}

const UpcomingCard = (props) => {
  return (
    <Card sx={{ maxWidth: 345, mt: 2, boxShadow: 0 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardContent>
        <TimerDisplay timerValues={props.timerValues} />
      </CardContent>
    </Card>
  );
};

export default UpcomingCard;
