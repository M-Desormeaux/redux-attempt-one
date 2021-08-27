import { createStore } from "redux";

const actionType = {
  increment: "increment",
  increase: "increase",
  decrement: "decrement",
  reset: "reset",
  toggleView: "toggleView",
};

const initialState = { counter: 0, isSeen: false };

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.increment:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionType.increase:
      return {
        ...state,
        counter: state.counter + action.value,
      };
    case actionType.decrement:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionType.reset:
      return {
        ...state,
        counter: 0,
      };
    case actionType.toggleView:
      return {
        ...state,
        isSeen: !state.isSeen,
      };
    default:
      return state;
  }
};

export const store = createStore(counterReducer);
