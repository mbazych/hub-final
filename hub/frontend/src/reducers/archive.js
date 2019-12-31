import { GET_ARCHIVE } from "../actions/types.js";

const initialState = {
  archives: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_ARCHIVE:
      return {
        ...state,
        archives: action.payload
      };

    default:
      return state;
  }
}
