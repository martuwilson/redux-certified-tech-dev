import { configureStore } from "@reduxjs/toolkit"
//import contadorReducer from "../reducers/contadorReducer";
import { counterSlice } from "../reducers/contadorSlice";
import { pokemonSlice } from "../reducers/pokemonSlice";
import {thunk} from "redux-thunk";

const store = configureStore({
    reducer: {
        // Add reducers here
        //contador: contadorReducer  //contador con reducer
        contador: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;