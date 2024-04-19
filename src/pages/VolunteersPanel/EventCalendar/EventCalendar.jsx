import React, { useEffect, useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import { Box, Card, CardContent } from "@mui/material";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Loader from "../../../components/Loading/Loading";
import http from "../../../http";
import { getToken } from "../../../helpers/helpers";

const localizer = momentLocalizer(moment);

const EventCalendar = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  // const myEventsList = [
  //   {
  //     id: 1,
  //     title: "Meeting",
  //     start: new Date(2024, 3, 2, 10, 0), // Year, Month (0-based), Day, Hour, Minute
  //     end: new Date(2024, 3, 2, 11, 0),
  //   },
  //   {
  //     id: 2,
  //     title: "Lunch",
  //     start: new Date(2024, 3, 2, 12, 0),
  //     end: new Date(2024, 3, 2, 13, 0),
  //   },
  //   {
  //     id: 3,
  //     title: "Conference",
  //     start: new Date(2024, 3, 5, 9, 0),
  //     end: new Date(2024, 3, 5, 17, 0),
  //   },
  //   // Add more events as needed
  // ];

  const transformEventData = (data) => {
    return data.map((event) => {
      const { id, campaign_title, date, start_time, end_time } = event;
      const startDateTime = new Date(`${date}T${start_time}`);
      const endDateTime = new Date(`${date}T${end_time}`);
      return {
        id,
        title: campaign_title,
        start: startDateTime,
        end: endDateTime,
      };
    });
  };

  const getCampaigns = async (newPage) => {
    setLoading(true);
    await http
      .get(`volunteer/campaign?token=${getToken()}&page=${newPage}`)
      .then((res) => {
        setLoading(false);
        setData(transformEventData(res.data.campaigns.data));
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getCampaigns(1);
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      <Card>
        <CardContent>
          <Calendar
            localizer={localizer}
            events={data}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
          />
        </CardContent>
      </Card>
      <Loader openLoad={loading} />
    </Box>
  );
};

export default EventCalendar;
