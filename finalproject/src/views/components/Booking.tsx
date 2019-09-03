import React from "react";
import "../styles/Booking.css";
import 'moment/locale/es.js' // or 'rc-datepicker/node_modules/moment/locale/fr.js' if you don't have it in your node_modules folder
//DATEPICKER
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import { BookingButton } from "../styles/stylesComponents";


const Booking: React.FC = () => {
  return (
    <div>
      <DayPicker />

      <div className="row inputgroup">
        <form className="col s12">
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">account_box</i>
              <input id="icon_name inp" type="text" className="validate inp"></input>
              <label >Nombre</label>
            </div>

            <div className="input-field col s6">
              <i className="tiny material-icons prefix icon-white small"> art_track</i>
              <input id="icon_lastname inp" type="text" className="validate inp"></input>
              <label >Apellidos</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">phone</i>
              <input id="icon_telephone inp" type="tel" className="validate inp"></input>
              <label >Teléfono</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">email</i>
              <input id="icon_email" type="text" className="validate"></input>
              <label >Email</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">fingerprint</i>
              <input id="icon_dni inp" type="text" className="validate inp"></input>
              <label >DNI</label>
            </div>

            <div className="input-field col s6">
              <i className="material-icons prefix icon-white small">airport_shuttle</i>
              <input id="icon_size" type="text" className="validate"></input>
              <label >Tamaño del grupo</label>
            </div>


          </div>
        </form>
      </div>
      <div className="BookingButton">
        <BookingButton>REALIZAR RESERVA</BookingButton>
      </div>
    </div>
  );
};

export default Booking;
