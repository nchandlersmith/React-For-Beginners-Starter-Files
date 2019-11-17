import React from "react";
import { render } from "react-dom";
import Router from "./components/Router";
import "./css/style.css";

render(
  <div>
    <Router />
  </div>,
  document.querySelector("#main")
);
