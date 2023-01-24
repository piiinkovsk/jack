import React from "react";
import { useState } from "react";
import "./carform.css";
import DropDownList from "./DropDownList.jsx";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { useEffect } from "react";
import { Box } from "@mui/material";
import { shadows } from "@mui/system";

export default function CarForm({ content }) {
  const [brands, setBrands] = useState(
    new Set(
      content.map((element) => {
        return element.brand;
      })
    )
  );
  const [activeBrand, setActiveBrand] = useState(""); //brand.jsx
  const [activeModel, setActiveModel] = useState(""); //model.jsx
  const [activeColor, setActiveColor] = useState("");
  const [models, setModels] = useState([]); // make this a set
  const [colors, setColors] = useState([]); // make this a set

  useEffect(() => {
    const filteredBrand = content.filter((_element) => {
      return _element.brand === activeBrand;
    });

    const filteredModels = filteredBrand.map((_element) => {
      return _element.model;
    });
    setModels([...new Set(filteredModels)]);
    setColors([]);
  }, [activeBrand]);

  useEffect(() => {
    const filteredColors = content
      .filter((_element) => _element.brand === activeBrand)
      .filter((_element) => _element.model === activeModel)
      .map((_element) => {
        return _element.color;
      });
    setColors([...new Set(filteredColors)]);
  }, [activeModel]);

  return (
    <Box
      className="car-form"
      sx={{
        boxShadow: "0px 4px 5px -4px hsl(220, 100%, 22%, 0.5)",
        width: "200px",
        backgroundColor: "hsl(220, 100%, 100%)",
      }}
    >
      <DropDownList
        _caption="Brand"
        _labelId="demo-simple-select-label"
        _id="demo-simple-select"
        _activeElement={activeBrand}
        _event={(event) => setActiveBrand(event.target.value)}
        _data={[...brands]}
        _condition={false}
      />
      <DropDownList
        _caption="Model"
        _labelId="demo-simple-select-label"
        _id="demo-simple-select"
        _activeElement={activeModel}
        _event={(event) => setActiveModel(event.target.value)}
        _data={models}
        _condition={activeBrand === "" ? true : false}
      />
      <DropDownList
        _caption="Color"
        _labelId="demo-simple-select-label"
        _id="demo-simple-select"
        _activeElement={activeColor}
        _event={(event) => setActiveColor(event.target.value)}
        _data={colors}
        _condition={activeModel === "" ? true : false}
      />
    </Box>
  );
}
