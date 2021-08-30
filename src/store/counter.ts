import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  isSeen: boolean;
}
const initialCounterState: CounterState = { value: 0, isSeen: false };

const counterState = createSlice({
  name: "counter", // name
  initialState: initialCounterState, // initial state object
  reducers: {
    increment: (state) => {
      state.value++;
    },
    increase: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    decrement: (state) => {
      state.value--;
    },
    reset: (state) => {
      state.value = 0;
    },
    toggleCounter: (state) => {
      state.isSeen = !state.isSeen;
    },
  },
});

export default counterState.reducer;

export const counterActions = counterState.actions;
