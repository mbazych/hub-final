import axios from "axios";
import { returnErrors } from "./messages";
import { GET_ARCHIVE } from "./types";

// GET RESERVATIONS
export const getArchive = () => dispatch => {
  axios
    .get("/api/reservation_archive/")
    .then(res => {
      dispatch({
        type: GET_ARCHIVE,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};
