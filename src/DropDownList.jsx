import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropDownList({ type, label }) {
  const [age, setAge] = React.useState("");
  console.log(type);
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id="demo-simple-select-standard-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        onChange={handleChange}
        label={label}
      >
        <MenuItem>{type}</MenuItem>
      </Select>
    </FormControl>
  );
}
