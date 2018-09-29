import axios from "axios";

// constants
const GET_ITEMS = "GET_ITEMS";
const DELETE_ITEM = "DELETE_ITEM";
const ADD_ITEM = "ADD_ITEM";
const UPDATE_PRICE = "UPDATE_PRICE";

// ACTION CREATORS
export function getItems() {
  return {
    type: GET_ITEMS,
    payload: axios.get("/api/items")
  };
}
export function deleteItem(id) {
  return {
    type: DELETE_ITEM,
    payload: axios.delete(`/api/item/${id}`)
  };
}

export function addMyItem(name, price) {
  return {
    type: ADD_ITEM,
    payload: axios.post("/api/item", { name, price })
  };
}

export function updatePrice(id, price) {
  return {
    type: UPDATE_PRICE,
    payload: axios.put(`/api/item/${id}`, price)
  };
}

// initial state
const initialState = {
  items: []
};

// reducer function
export default function itemsReducer(state = initialState, action) {
  console.log(action.payload);
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
    case `${DELETE_ITEM}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        items: action.payload.data
      };
    case `${ADD_ITEM}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        items: action.payload.data
      };
    case `${UPDATE_PRICE}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        items: action.payload.data
      };
    default:
      return state;
  }
}
