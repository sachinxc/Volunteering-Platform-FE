import React, { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Rating,
  Avatar,
} from "@mui/material";

const TestimonialsPage = () => {
  const [volunteerReview, setVolunteerReview] = useState({
    rating: 0,
    review: "",
  });
  const [organizationReply, setOrganizationReply] = useState({
    rating: 0,
    reply: "",
  });
  const [organizationRating, setOrganizationRating] = useState(0);

  const handleVolunteerReviewChange = (event) => {
    const { name, value } = event.target;
    setVolunteerReview((prevReview) => ({ ...prevReview, [name]: value }));
  };

  const handleOrganizationReplyChange = (event) => {
    const { name, value } = event.target;
    setOrganizationReply((prevReply) => ({ ...prevReply, [name]: value }));
  };

  const handleVolunteerRatingChange = (newRating) => {
    setVolunteerReview((prevReview) => ({ ...prevReview, rating: newRating }));
  };

  const handleOrganizationRatingChange = (newRating) => {
    setOrganizationReply((prevReply) => ({ ...prevReply, rating: newRating }));
  };

  const handleVolunteerSubmit = () => {
    // Handle submission of volunteer review
    // You can implement backend logic here, like sending data to a server
    console.log(volunteerReview);
  };

  const handleOrganizationReplySubmit = () => {
    // Handle submission of organization reply
    // You can implement backend logic here, like sending data to a server
    console.log(organizationReply);
  };

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center">
          Testimonials
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5">
          Organization Rating: {organizationRating} Stars
        </Typography>
        <Rating
          name="organization-rating"
          value={organizationRating}
          readOnly
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Volunteer Review
          </Typography>
          <Rating
            name="volunteer-rating"
            value={volunteerReview.rating}
            onChange={(event, newRating) =>
              handleVolunteerRatingChange(newRating)
            }
          />
          <TextField
            name="review"
            label="Review"
            multiline
            rows={4}
            value={volunteerReview.review}
            onChange={handleVolunteerReviewChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleVolunteerSubmit}
          >
            Submit Review
          </Button>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Organization Reply
          </Typography>
          <Rating
            name="organization-reply-rating"
            value={organizationReply.rating}
            onChange={(event, newRating) =>
              handleOrganizationRatingChange(newRating)
            }
          />
          <TextField
            name="reply"
            label="Reply"
            multiline
            rows={4}
            value={organizationReply.reply}
            onChange={handleOrganizationReplyChange}
            fullWidth
            margin="normal"
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleOrganizationReplySubmit}
          >
            Submit Reply
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default TestimonialsPage;
