import axios from "axios";

import { GET_RENTALS } from "./types";
import { ADD_RENTALS } from "./types";

// GET RENTALS
export const getRentals = () => dispatch => {
  axios
    .get("/api/rental_active/")
    .then(res => {
      dispatch({
        type: GET_RENTALS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// ADD RENTALS // TODO
export const addRentals = reservation => dispatch => {
  axios
    .post(`/api/rental_active/`, reservation.id)
    .then(res => {
      dispatch({
        type: ADD_RENTALS,
        payload: res.data
      });
    })
    .catch(err => console.log(reservation));
};
