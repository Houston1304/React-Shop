import { combineReducers, createStore } from "redux";

const SWITCH_SEARCH = "SWITCH_SEARCH";
const ADD_PURCHASE = "ADD_PURCHASE";
const CURRENT_PAGE = "CURRENT_PAGE";

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

export const chengeNumberPage = (text) => {
  return { type: CURRENT_PAGE, payload: text };
};

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

const pageSwitch = (state = 1, action) => {
  switch (action.type) {
    case CURRENT_PAGE:
      return { ...state, currentPage: action.payload };

    default:
      return state;
  }
};

const reducers = combineReducers({ currentSwitch, addBasketArray, pageSwitch });

export const store = createStore(reducers);
