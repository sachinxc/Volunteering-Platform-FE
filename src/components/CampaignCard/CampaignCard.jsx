import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Button, Chip } from "@mui/material";

const CampaignCard = (props) => {
  return (
    <Card sx={{ maxWidth: "auto" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {props.title.charAt(0)}
          </Avatar>
        }
        title={props.title}
        subheader={props.subheader + " | " + props.location}
      />
      <CardMedia
        component="img"
        height="194"
        image={props.image}
        alt="Paella dish"
      />
      <CardContent>
        <Chip label={props.skillLevel} />
        <Typography variant="body2" sx={{ color: "black" }}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          aria-label="add to favorites"
          fullWidth
          sx={{ color: "white", background: "#143109", fontWeight: "bold" }}
          onClick={props.handleViewAll}
        >
          View
        </Button>
        <Button
          aria-label="add to favorites"
          fullWidth
          sx={{ color: "white", background: "#143109", fontWeight: "bold" }}
          onClick={props.handleViewAll}
        >
          Request
        </Button>
      </CardActions>
    </Card>
  );
};

export default CampaignCard;
