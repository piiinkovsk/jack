import React from "react";
import "./carform.css";
import DropDownList from "./DropDownList";

export default function CarForm({ content }) {
  content.map((element) => {
    console.log(element.model);
    return (
      <div className="car-form">
        <DropDownList type={element.brand} label="Brand"></DropDownList>
        <DropDownList type={element.model} label="Model"></DropDownList>
        <DropDownList type={element.year} label="Year"></DropDownList>
      </div>
    );
  });
}
