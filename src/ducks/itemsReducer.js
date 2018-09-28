import axios from "axios";

// constants
const GET_ITEMS = "GET_ITEMS";

// ACTION CREATORS
export function getItems() {
  return {
    type: GET_ITEMS,
    payload: axios.get("/api/items")
  };
}

// initial state
const initialState = {
  items: []
};

// reducer function
export default function itemsReducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ITEMS}_PENDING`:
      return {
        ...state,
        isLoading: true
      };
    case `${GET_ITEMS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        items: action.payload.data
      };
    default:
      return state;
  }
}
