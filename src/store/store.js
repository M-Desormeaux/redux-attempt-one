import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialCounterState = { value: 0, isSeen: false };

const counterState = createSlice({
  name: "counter", // name
  initialState: initialCounterState, // initial state object
  reducers: {
    increment(state) {
      state.counter++;
    },
    increase(state, action) {
      state.counter += action.payload;
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

const initialAuthState = { isAuthenticated: false };

const authState = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const store = configureStore({
  reducer: {
    counter: counterState.reducer,
    auth: authState.reducer,
  },
});

export const counterActions = counterState.actions;
export const authActions = authState.actions;
