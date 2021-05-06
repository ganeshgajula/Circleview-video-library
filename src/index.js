import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { VideosProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <VideosProvider>
        <App />
      </VideosProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
