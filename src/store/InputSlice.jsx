import {createSlice} from "@reduxjs/toolkit";


const InputSlice = createSlice({
    name: "InputSlice",
    initialState: {
        before: 0,
        after: 0,
        total: 0,
    },
    reducers: {
        getBefore: ( state, action) => {
            state.before = action.payload;
            state.total = (state.before - state.after) * 2;
        },
        getAfter: ( state, action) => {
            state.after = action.payload;
            state.total = (state.before - state.after) * 2;
        },
        getTotal: ( state, action) => {
            state.total = action.payload;
            state.before = (state.total / 100) * 30;
            state.after = (state.total / 100) * 70;
        }
    }
});

export const {getBefore,getAfter,getTotal} = InputSlice.actions

export default InputSlice.reducer
