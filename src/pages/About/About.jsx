import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const About = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Grid
        container
        spacing={3}
        sx={{
          alignItems: "center",
          width: "60%",
          color: "#493536",
          backgroundColor: "#ddeee4",
          borderRadius: "20px",
          marginTop: "100px",
          marginBottom: "100px",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom sx={{ fontWeight: "bold" }}>
            Our Story
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="body1">
            At Helping Hands, we believe in the power of community and the
            impact that individuals can make when they come together to support
            a common cause. Our platform is dedicated to connecting volunteers
            with organizations and groups that are making a difference in their
            communities.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Our Mission
          </Typography>
          <Typography variant="body1">
            Our mission is to empower volunteers to make a positive impact by
            providing them with easy access to meaningful volunteer
            opportunities. We strive to support organizations and groups in need
            by connecting them with dedicated volunteers who are passionate
            about making a difference.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            What We Do
          </Typography>
          <Typography variant="body1">
            Helping Hands is a centralized platform where volunteers can
            discover, sign up for, and participate in a wide range of volunteer
            activities and projects. Whether you're interested in environmental
            conservation, community outreach, education, or social justice, we
            have opportunities for you to get involved and make a difference.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="body1">
            Volunteers can browse through our curated list of volunteer
            opportunities, filter by location, category, and time commitment,
            and sign up for activities that align with their interests and
            availability. Our platform makes it easy for volunteers to connect
            with organizations and groups, track their volunteer hours, and stay
            informed about upcoming events and initiatives.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Our Commitment
          </Typography>
          <Typography variant="body1">
            At Helping Hands, we are committed to fostering a culture of
            inclusivity, diversity, and collaboration. We believe that everyone
            has something valuable to contribute, and we welcome volunteers of
            all backgrounds, abilities, and experiences. We are dedicated to
            creating a supportive and empowering environment where volunteers
            can thrive and make a meaningful impact in their communities.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Get Involved
          </Typography>
          <Typography variant="body1">
            Ready to lend a helping hand? Join us today and start making a
            difference in your community! Whether you have a few hours to spare
            or are looking for a long-term commitment, there's a volunteer
            opportunity waiting for you at Helping Hands.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">
            Have questions or feedback? We'd love to hear from you! Get in touch
            with our team at{" "}
            <a href="mailto:contact@email.com">contact@email.com</a> or connect
            with us on social media.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
