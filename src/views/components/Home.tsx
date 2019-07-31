import React from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import { BookingButton } from "../styles/stylesComponents";
import { Route, Switch, Link, Redirect } from "react-router-dom";


const Home: React.FC = () => {
  return (
    <div className="All">
      
      <div className="Navbar">
        <Navbar />
      </div>
      <div className="BodyHome">
        <div className="h1">
          <h1>VISITAS GUIADAS AL CAMINITO DEL REY</h1>
        </div>
        <div className="Booking">
          

          <Link to={"/booking"}>
          <BookingButton>RESERVAR</BookingButton>
                  </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
