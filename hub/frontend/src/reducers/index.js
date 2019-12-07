import { combineReducers } from "redux";
import reservations from "./reservations";
import rentals from "./rentals";

export default combineReducers({
  reservations,
  rentals
});
