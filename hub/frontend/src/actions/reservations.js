import axios from "axios";
import { createMessage } from "./messages";

import {
  GET_RESERVATIONS,
  DELETE_RESERVATIONS,
  ADD_RESERVATIONS,
  ADD_RENTAL,
  GET_ERRORS
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
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};

// DELETE RESERVATIONS
export const deleteReservations = id => dispatch => {
  axios
    .delete(`/api/car_reservation/${id}/`)
    .then(res => {
      dispatch({
        type: DELETE_RESERVATIONS,
        payload: id
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};

// ADD RESERVATIONS
export const addReservations = reservation => dispatch => {
  axios
    .post(`/api/car_reservation/`, reservation)
    .then(res => {
      dispatch(createMessage({ reservationAdded: "Reservation added" }));
      dispatch({
        type: ADD_RESERVATIONS,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};

// RENT CARS
export const addRental = id => dispatch => {
  axios
    .patch(`/api/car_reservation/${id}/`, {
      active: true
    })
    .then(res => {
      dispatch(createMessage({ carRented: "Car rented" }));
      dispatch({
        type: ADD_RENTAL,
        payload: res.data
      });
    })
    .catch(err => {
      const errors = {
        msg: err.response.data,
        status: err.response.status
      };
      dispatch({
        type: GET_ERRORS,
        payload: errors
      });
    });
};
