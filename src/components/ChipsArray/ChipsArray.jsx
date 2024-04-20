import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import TagFacesIcon from "@mui/icons-material/TagFaces";
import { TextField } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const ChipsArray = (props) => {
  const [chipValue, setChipValue] = React.useState("");
  
  const handleDelete = (chipToDelete) => () => {
    props.setDataList((chips) =>
      chips.filter((chip) => chip.label !== chipToDelete.label)
    );
  };

  const handleOnChange = (event) => {
    setChipValue(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && chipValue.trim() !== "") {
      props.setDataList((chips) => [
        ...chips,
        { label: chipValue.trim() },
      ]);
      event.preventDefault(); // Prevent page refresh
      setChipValue("");
    }
  };

  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      <TextField
        fullWidth
        id="chip_label"
        label={props.placeholder}
        name="chip_label"
        variant="standard"
        sx={{ mb: 2 }}
        value={chipValue}
        onChange={handleOnChange}
        onKeyDown={handleKeyDown}
      />
      {props.dataList.map((data) => {
        let icon;

        if (data.label === "React") {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.label}>
            <Chip
              icon={icon}
              label={data.label}
              onDelete={data.label === "React" ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
};

export default ChipsArray;
