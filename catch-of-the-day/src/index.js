import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./css/style.css";

render(
  <p>
    <App />
  </p>,
  document.querySelector("#main")
);
