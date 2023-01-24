import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";
import "./dropdownlist.css";

export default function DropDownList({
  _caption,
  _labelId,
  _id,
  _activeElement,
  _data,
  _event,
  _isDisabled,
}) {
  return (
    <FormControl>
      <InputLabel className="drop-down-list-caption">{_caption}</InputLabel>
      <Select
        labelId={_labelId}
        id={_id}
        value={_activeElement}
        onChange={_event}
        className={`drop-down-list-element ${_isDisabled ? "disabled" : ""}`}
        disabled={_isDisabled}
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
