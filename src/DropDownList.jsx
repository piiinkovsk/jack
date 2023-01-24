import React from "react";
import "./dropdownlist.css";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import { FormControl, InputLabel, TextField } from "@mui/material";

export default function DropDownList({
  _caption,
  _labelId,
  _id,
  _activeElement,
  _data,
  _event, // here you pass a setState from the parent to update the state (activeModel or activeBrand)
  _condition,
}) {
  return (
    <FormControl>
      <InputLabel className="drop-down-list-caption">{_caption}</InputLabel>
      <Select
        labelId={_labelId}
        id={_id}
        value={_activeElement}
        onChange={_event}
        className="drop-down-list-element"
        disabled={_condition}
      >
        {_data.map((element) => {
          return (
            <MenuItem key={element} value={element}>
              {element}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
}
