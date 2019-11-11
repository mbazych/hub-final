import axios from "axios";

import { GET_RESERVATIONS } from "./types";

// GET RESERVATIONS
export const getReservations = () => dispatch => {
  axios
    .get("/api/car_reservation/")
    .then(res => {
      dispatch({
        type: GET_RESERVATIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};
