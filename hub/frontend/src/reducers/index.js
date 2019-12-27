import { combineReducers } from "redux";
import reservations from "./reservations";
import errors from "./errors";
import messages from "./messages";
import auth from "./auth";
export default combineReducers({
  reservations,
  errors,
  messages,
  auth
});
