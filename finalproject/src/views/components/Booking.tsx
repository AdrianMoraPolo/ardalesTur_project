import React from "react";
import "../styles/Booking.css";
import 'moment/locale/es.js' // or 'rc-datepicker/node_modules/moment/locale/fr.js' if you don't have it in your node_modules folder
import { DatePickerInput } from 'rc-datepicker';
import 'rc-datepicker/lib/style.css';

const Booking: React.FC = () => {
  return <div>
    <DatePickerInput locale='es' />
  </div>;
  
};

export default Booking;
