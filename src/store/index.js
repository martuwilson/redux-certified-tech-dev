import { configureStore } from "@reduxjs/toolkit"
//import contadorReducer from "../reducers/contadorReducer";
import { counterSlice } from "../reducers/contadorSlice";

const store = configureStore({
    reducer: {
        // Add reducers here
        //contador: contadorReducer  //contador con reducer
        contador: counterSlice.reducer
    }
});

export default store;