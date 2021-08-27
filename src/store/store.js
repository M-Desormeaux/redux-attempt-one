import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, isSeen: false };

const counterState = createSlice({
  name: "counter", // name
  initialState, // initial state object
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.value;
    },
    decrement(state) {
      state.counter--;
    },
    reset(state) {
      state.counter = 0;
    },
    toggleCounter(state) {
      state.isSeen = !state.isSeen;
    },
  },
});

export const store = configureStore({
  reducer: counterState,
});
