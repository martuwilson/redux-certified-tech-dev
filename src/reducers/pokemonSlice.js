import { createAction, createSlice } from "@reduxjs/toolkit";


export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page: 0,
        pokemons: [],
        isLoading: false,
        error: null,
    },
    reducers: {
        loadingPokemons: (state) =>{
            state.isLoading = true;
        },
        fetchPokemons: (state, action) =>{
            state.isLoading = false;
            state.page = action.payload.page;
            state.pokemons = action.payload.pokemons;
        },
        failedFetchPokemons: (state, action) =>{
            state.isLoading = false;
            state.error = action.payload.error;
        }
    }
});

export const { loadingPokemons, fetchPokemons, failedFetchPokemons } = pokemonSlice.actions;

export const fetchingPokemons = createAction('pokemon/fetchingPokemon');