import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counterVel: 0 },
  reducers: {
    increment: (state) => {
      state.counterVel += 1
    },
    decrement: (state) => {
      state.counterVel -= 1
    },
    add: (state, action) => {
      state.counterVel += Number(action.payload)
    },
    subs: (state, action) => {
      state.counterVel -= Number(action.payload)
    }
  }
})

const peSlice = createSlice({
  name: 'privicy',
  initialState: false,
  reducers: {
    changePrivicy: (state) => {
      return state = !state
    }
  }
})

const counterStor = configureStore({
  reducer:
  {
    counter: counterSlice.reducer,
    privicy: peSlice.reducer
  },
});

export const counterActions = counterSlice.actions;
export const peSliceActions = peSlice.actions;
export default counterStor;