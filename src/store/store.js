import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice.js';
import tableReducer from './tableSlice.js';


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        table: tableReducer
    }
});