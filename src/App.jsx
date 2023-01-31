import { ThemeProvider } from "@emotion/react";
import React from "react";
import CarForm from "./CarForm.jsx";
import { carsSource } from "./cars.js";
import { defaultTheme } from "./theme.js";
import "./App.css";

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CarForm content={carsSource} />
    </ThemeProvider>
  );
}
