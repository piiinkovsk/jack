import React from "react";
import "./App.css";
import CarForm from "./CarForm.jsx";
import { carsSource } from "./cars.js";

export default function App() {
  return <CarForm content={carsSource} />;
}
