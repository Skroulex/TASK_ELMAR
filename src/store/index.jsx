import { combineReducers, configureStore} from "@reduxjs/toolkit";
import reducer from "./InputSlice";
import InputSlice from "./InputSlice";
const rootReducer = combineReducers({
    toolkit: reducer,
    InputSlice:InputSlice,
})

export const store = configureStore({
    reducer:rootReducer,
})