import { configureStore } from "@reduxjs/toolkit"
import contadorReducer from "../reducers/contadorReducer";

const store = configureStore({
    reducer: {
        // Add reducers here
        contador: contadorReducer
    }
});

export default store;