import React, { useState, useEffect } from "react";
import { Box, ThemeProvider } from "@mui/material";
import DropDownList from "./DropDownList.jsx";
import { defaultTheme } from "./theme.js";
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
  const [models, setModels] = useState(new Set()); //array to Set
  const [colors, setColors] = useState([]); //array to Set

  useEffect(() => {
    setColors([]);
    setActiveModel("");
    setActiveColor("");
    const filteredBrand = content.filter((_element) => {
      return _element.brand === activeBrand;
    });
    const filteredModels = filteredBrand.map((_element) => {
      return _element.model;
    });
    setModels(new Set(filteredModels));
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
    <ThemeProvider theme={defaultTheme}>
      <Box className="car-form">
        <DropDownList
          _caption="Brand"
          _activeElement={activeBrand}
          _event={(event) => setActiveBrand(event.target.value)}
          _data={[...brands]}
          _isDisabled={false}
        />
        <DropDownList
          _caption="Model"
          _activeElement={activeModel}
          _event={(event) => setActiveModel(event.target.value)}
          _data={[...models]}
          _isDisabled={activeBrand === "" ? true : false}
        />
        <DropDownList
          _caption="Color"
          _activeElement={activeColor}
          _event={(event) => setActiveColor(event.target.value)}
          _data={colors}
          _isDisabled={isColorDisabled}
        />
      </Box>
    </ThemeProvider>
  );
}
