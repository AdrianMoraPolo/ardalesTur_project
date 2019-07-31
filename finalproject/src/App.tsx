import React from "react";
import Home from "./views/components/Home";
import Booking from "./views/components/Booking";
import "./App.css";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="background">
      <BrowserRouter>
        <Home />
        <Redirect to="/" />
      </BrowserRouter>
      <script type="text/javascript" src="js/materialize.min.js" />
    </div>
  );
};

export default App;
