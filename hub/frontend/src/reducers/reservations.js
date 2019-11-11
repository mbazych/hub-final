import { GET_RESERVATIONS } from "../actions/types.js";

const initialState = {
  reservations: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_RESERVATIONS:
      return {
        ...state,
        reservations: action.payload
      };
    default:
      return state;
  }
}
