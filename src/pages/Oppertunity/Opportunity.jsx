import { Button, Card, CardContent, CardHeader, Stack } from "@mui/material";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Opportunity = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [value, setValue] = useState("");

  return (
    <div>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <ReactQuill theme="snow" value={value} onChange={setValue} />
          <Stack
            direction={"row"}
            gap={2}
            sx={{ justifyContent: "flex-end", mt: "20px" }}
          >
            <Button variant="outlined">Back</Button>
            <Button
              variant="contained"
              onClick={() => navigate(`/explore/${id}/register`)}
            >
              Register
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </div>
  );
};

export default Opportunity;
