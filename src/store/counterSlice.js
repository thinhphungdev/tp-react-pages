import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
       increment (state) {
          state.value++
       },
       
       reset (state) {
          state.value = 0;   
       }
    }
});

export const {increment, reset} = counterSlice.actions;

export default counterSlice.reducer;