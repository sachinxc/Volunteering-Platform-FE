import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Button, Chip } from "@mui/material";
import { getRandomImageUrl } from "../../DummyData/imagelist";
import { useNavigate } from "react-router-dom";

const EventCards = ({ ...props }) => {
  const { campaign_title, location, skill, overview, id } = props;
  const navigate = useNavigate();

  const setViewEvent = () => {
    const viewEvent = { ...props };
    localStorage.setItem("viewEvent", JSON.stringify(viewEvent));
    navigate(`/volunteer/events/view/${id}`);
  };

  return (
    <Card sx={{ maxWidth: "auto" }}>
      <CardHeader title={campaign_title} subheader={location} />
      <CardMedia
        component="img"
        height="194"
        image={getRandomImageUrl()}
        alt="Paella dish"
      />
      <CardContent>
        <Chip label={skill} />
        <Typography variant="body2" sx={{ color: "black" }}>
          {overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          aria-label="add to favorites"
          fullWidth
          sx={{ color: "white", background: "#143109", fontWeight: "bold" }}
          onClick={() => setViewEvent()}
        >
          View
        </Button>
      </CardActions>
    </Card>
  );
};

export default EventCards;
