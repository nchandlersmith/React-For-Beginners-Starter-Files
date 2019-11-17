import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";

render(
  <p>
    <Router />
  </p>,
  document.querySelector("#main")
);
