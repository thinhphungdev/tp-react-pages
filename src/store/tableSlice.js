import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : []
}

export const tableSlice = createSlice({
    name: 'table',
    initialState,
    reducers: {
        setTableData (state, action) {
            state.data = action.payload
        },
        updateTableData (state, action) {
            state.data = [...state.data, action.payload]
        }
    }
});

export const {setTableData, updateTableData} = tableSlice.actions;

export default tableSlice.reducer;