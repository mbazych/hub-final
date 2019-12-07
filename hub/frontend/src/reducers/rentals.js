import { GET_RENTALS } from "../actions/types.js";

const initialState = {
  rentals: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RENTALS:
      return {
        ...state,
        rentals: action.payload
      };
    default:
      return state;
  }
}
