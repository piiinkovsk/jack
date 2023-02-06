import React, { useState, useEffect } from "react";
import {
  Box,
  ThemeProvider,
  Typography,
  Button,
  Snackbar,
} from "@mui/material";
import DropDownList from "./DropDownList.jsx";
import { defaultTheme } from "./theme.js";
import "./carform.css";

export default function CarForm({ content }) {
  const brands = new Set(
    content.map((element) => {
      return element.brand;
    })
  );

  const [isColorDisabled, setIsColorDisabled] = useState(true);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [activeBrand, setActiveBrand] = useState("");
  const [activeModel, setActiveModel] = useState("");
  const [activeColor, setActiveColor] = useState("");
  const [models, setModels] = useState(new Set());
  const [colors, setColors] = useState(new Set());

  const handleClickSnackbar = () => {
    setOpenSnackbar(true);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  useEffect(() => {
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
    setColors(new Set(filteredColors));
  }, [activeModel]);

  useEffect(() => {
    colors.size === 0 ? setIsColorDisabled(true) : setIsColorDisabled(false);
  }, [colors]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box className="car-form">
        <Typography variant="h6"> Choose your car</Typography>
        <DropDownList
          _caption="Brand"
          _activeElement={activeBrand}
          _event={(event) => setActiveBrand(event.target.value)}
          _data={brands}
          _isDisabled={false}
        />
        <DropDownList
          _caption="Model"
          _activeElement={activeModel}
          _event={(event) => setActiveModel(event.target.value)}
          _data={models}
          _isDisabled={activeBrand === "" ? true : false}
        />
        <DropDownList
          _caption="Color"
          _activeElement={activeColor}
          _event={(event) => setActiveColor(event.target.value)}
          _data={colors}
          _isDisabled={isColorDisabled}
        />
        <Button variant="contained" onClick={handleClickSnackbar}>
          Result
        </Button>
        <Snackbar
          open={openSnackbar}
          autoHideDuration={1500}
          onClose={handleCloseSnackbar}
          message="Great work"
        ></Snackbar>
      </Box>
    </ThemeProvider>
  );
}
