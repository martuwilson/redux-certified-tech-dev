import { configureStore } from "@reduxjs/toolkit"
//import contadorReducer from "../reducers/contadorReducer";
import { counterSlice } from "../reducers/contadorSlice";
import { pokemonSlice } from "../reducers/pokemonSlice";
//import {thunk} from "redux-thunk";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        // Add reducers here
        //contador: contadorReducer  //contador con reducer
        contador: counterSlice.reducer,
        pokemons: pokemonSlice.reducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;