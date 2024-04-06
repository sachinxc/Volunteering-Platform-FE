import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

const SelectMenu = (props) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 125 }} size="small">
      <InputLabel id="demo-select-small-label">{props.label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={props.value}
        label={props.label}
        onChange={props.handleChange}
      >
        {props.dataList?.map((Obj) => (
          <MenuItem value={Obj.id}>{Obj.label}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMenu;
