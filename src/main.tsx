import ReactDOM from "react-dom/client";
import "./Styles/index.css";
import {BrowserRouter } from "react-router-dom";
import RoutesComponent from "./Routes/Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <RoutesComponent />
  </BrowserRouter>
);
