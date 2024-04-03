import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Box, Card, CardContent } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const Calender = () => {
  const myEventsList = [
    {
      id: 1,
      title: "Meeting",
      start: new Date(2024, 3, 2, 10, 0), // Year, Month (0-based), Day, Hour, Minute
      end: new Date(2024, 3, 2, 11, 0),
    },
    {
      id: 2,
      title: "Lunch",
      start: new Date(2024, 3, 2, 12, 0),
      end: new Date(2024, 3, 2, 13, 0),
    },
    {
      id: 3,
      title: "Conference",
      start: new Date(2024, 3, 5, 9, 0),
      end: new Date(2024, 3, 5, 17, 0),
    },
    // Add more events as needed
  ];

  const getMyEvents = () => {};

  return (
    <Box sx={{ padding: "20px" }}>
      <Card>
        <CardContent>
          <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </CardContent>
      </Card>
    </Box>
  );
};

export default Calender;
