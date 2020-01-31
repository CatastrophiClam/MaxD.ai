import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";

/* Child Components */
import App from "./App";

const StartApp = () => {
  ReactDOM.render(<App />, document.getElementById("root"));
};

StartApp();
