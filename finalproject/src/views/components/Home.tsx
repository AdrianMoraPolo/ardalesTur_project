import React, { useState } from "react";
import "../styles/Home.css";
import Navbar from "./Navbar";
import { BookingButton } from "../styles/stylesComponents";
// import { Route, Switch, Link, Redirect } from "react-router-dom";
import posed, { PoseGroup } from "react-pose";
import "../styles/Booking.css";
import Booking from './Booking';


// const Cluck = posed.button({
//   pressable: true,
//   init: { scale: 1 },
//   press: { scale: 0.8 }
// });

const LateralBlack = posed.div({
  enter: { x: 0, opacity: 1, delay: 100,
    transition: { duration: 500 } },
  exit: { x: "100%", opacity: 1,
  transition: { duration: 400 } }
});

const Home: React.FC = () => {

  const [visible, setVisible] = React.useState(false);

  const toggleVisibility = () => setVisible(v => !v);


  //POSE HACER GRANDE Y PEQUEÑO CUANDO SE SELECCIONA
  // const Box = posed.div({
  //   pressable: true,
  //   init: { scale: 1 },
  //   press: { scale: 0.8 }
  // });

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
          {/* <BookingButton>RESERVAR</BookingButton> */}
          <PoseGroup>
            {visible && <LateralBlack key="Booking" className="Blackbox">
<Booking/>
            </LateralBlack>}
          </PoseGroup>
          {/* <Cluck className="<BookingButton/>" /> */}
          {/* {position && <Box className="Booking" />} */}

         
          <BookingButton className="Box" onClick={toggleVisibility}>RESERVAR</BookingButton>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
