import { combineReducers, createStore } from "redux";

const SWITCH_SEARCH = "SWITCH_SEARCH";
const ADD_PURCHASE = "ADD_PURCHASE";

export function switchSearch(key) {
  return {
    type: SWITCH_SEARCH,
    key,
  };
}

export function addNewPurchase(purchase) {
  return {
    type: ADD_PURCHASE,
    payload: purchase,
  };
}

function currentSwitch(state = "", action) {
  switch (action.type) {
    case SWITCH_SEARCH:
      return action.key;
    default:
      return state;
  }
}

function addBasketArray(state = [], action) {
  switch (action.type) {
    case ADD_PURCHASE:
      return { ...state, purchase: action.payload };

    default:
      return state;
  }
}

const reducers = combineReducers({ currentSwitch, addBasketArray });

export const store = createStore(reducers);
