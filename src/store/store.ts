import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  isSeen: boolean;
}
const initialCounterState: CounterState = { value: 0, isSeen: false };

const counterState = createSlice({
  name: "counter", // name
  initialState: initialCounterState, // initial state object
  reducers: {
    increment(state) {
      state.value++;
    },
    increase(state, action: PayloadAction<number>) {
      state.value += action.payload;
    },
    decrement(state) {
      state.value--;
    },
    reset(state) {
      state.value = 0;
    },
    toggleCounter(state) {
      state.isSeen = !state.isSeen;
    },
  },
});

interface AuthState {
  isAuthenticated: boolean;
}
const initialAuthState: AuthState = { isAuthenticated: false };

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

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export const counterActions = counterState.actions;
export const authActions = authState.actions;
