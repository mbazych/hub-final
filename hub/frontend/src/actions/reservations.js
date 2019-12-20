import axios from "axios";

import {
  GET_RESERVATIONS,
  DELETE_RESERVATIONS,
  ADD_RESERVATIONS
} from "./types";

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

// DELETE RESERVATIONS
export const deleteReservations = (id, reservation) => dispatch => {
  axios
    .delete(`/api/car_reservation/${id}/`) 
    .then(res => {
      dispatch({
        type: DELETE_RESERVATIONS,
        payload: id
      });
    })
    .catch(err => console.log(err));
};

// ADD RESERVATIONS
export const addReservations = reservation => dispatch => {
  axios
    .post(`/api/car_reservation/`, reservation)
    .then(res => {
      dispatch({
        type: ADD_RESERVATIONS,
        payload: res.data
      });
    })
    .catch(err => console.log(err));
};

// RENT CARS