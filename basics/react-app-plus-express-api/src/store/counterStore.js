import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { total: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
      state.total += 1;
    },
    decrement(state) {
      state.total -= 1;
    },
    increase(state, action) {
      state.total += action.payload;
    },
    decrease(state, action) {
      state.total -= action.payload;
    },
  },
});

const counterStore = configureStore({
  reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;
export default counterStore;
