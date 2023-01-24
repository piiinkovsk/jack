import React, { useState, useEffect } from "react";
import DropDownList from "./DropDownList.jsx";
import { Box } from "@mui/material";
import "./carform.css";

export default function CarForm({ content }) {
  const [brands, setBrands] = useState(
    new Set(
      content.map((element) => {
        return element.brand;
      })
    )
  );
  const [isColorDisabled, setIsColorDisabled] = useState(true);
  const [activeBrand, setActiveBrand] = useState("");
  const [activeModel, setActiveModel] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [models, setModels] = useState([]);
  const [colors, setColors] = useState([]);

  useEffect(() => {
    setModels([]);
    setColors([]);
    setActiveModel("");
    setActiveColor("");
    const filteredBrand = content.filter((_element) => {
      return _element.brand === activeBrand;
    });
    const filteredModels = filteredBrand.map((_element) => {
      return _element.model;
    });
    setModels([...new Set(filteredModels)]);
  }, [activeBrand]);

  useEffect(() => {
    setActiveColor("");
    const filteredColors = content
      .filter((_element) => _element.brand === activeBrand)
      .filter((_element) => _element.model === activeModel)
      .map((_element) => {
        return _element.color;
      });
    setColors([...new Set(filteredColors)]);
  }, [activeModel]);

  useEffect(() => {
    colors.length === 0 ? setIsColorDisabled(true) : setIsColorDisabled(false);
  }, [colors]);

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
        _isDisabled={false}
      />
      <DropDownList
        _caption="Model"
        _labelId="demo-simple-select-label"
        _id="demo-simple-select"
        _activeElement={activeModel}
        _event={(event) => setActiveModel(event.target.value)}
        _data={models}
        _isDisabled={activeBrand === "" ? true : false}
      />
      <DropDownList
        _caption="Color"
        _labelId="demo-simple-select-label"
        _id="demo-simple-select"
        _activeElement={activeColor}
        _event={(event) => setActiveColor(event.target.value)}
        _data={colors}
        _isDisabled={isColorDisabled}
      />
    </Box>
  );
}
