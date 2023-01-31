import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FormControl, InputLabel } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "./dropdownlist.css";

export default function DropDownList({
  _caption,
  _activeElement,
  _data,
  _event,
  _isDisabled,
}) {
  return (
    <FormControl>
      <InputLabel className="drop-down-list-caption">{_caption}</InputLabel>
      <Select
        value={_activeElement}
        onChange={_event}
        disabled={_isDisabled}
        className={`drop-down-list-element ${_isDisabled ? "disabled" : ""}`}
        IconComponent={KeyboardArrowDownIcon}
      >
        {[..._data].map((element) => {
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
