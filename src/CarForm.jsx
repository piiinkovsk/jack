import React from "react";
import { useState } from "react";
import "./carform.css";
import DropDownList from "./DropDownList";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";

export default function CarForm({ content }) {
  const [brands, setBrands] = useState(
    new Set(
      content.map((element) => {
        return element.brand;
      })
    )
  );

  const [activeBrand, setActiveBrand] = useState();
  const [activeModel, setActiveModel] = useState();
  const [models, setModels] = useState([]);

  useEffect(() => {
    const filteredBrand = content.filter((item) => {
      return item.brand === activeBrand;
    });

    const filteredModels = filteredBrand.map((e) => {
      return e.model;
    });

    setModels([...new Set(filteredModels)]);
  }, [activeBrand]);

  return (
    <div className="car-form">
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={activeBrand}
        label={activeBrand}
        onChange={(event) => setActiveBrand(event.target.value)}
      >
        {[...brands].map((element) => {
          return <MenuItem value={element}>{element}</MenuItem>;
        })}
      </Select>

      <Select
        labelId="demo-simple-select-label1"
        id="demo-simple-select1"
        value={activeModel}
        label={activeModel}
        onChange={(event) => setActiveModel(event.target.value)}
      >
        {models.map((element) => {
          return <MenuItem value={element}>{element}</MenuItem>;
        })}
      </Select>

      {/* <DropDownList type={element.year} label="Year"></DropDownList> */}
    </div>
  );
}
