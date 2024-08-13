import { failedFetchPokemons, fetchPokemons, loadingPokemons } from "../reducers/pokemonSlice"


export const getPokemons = (page = 0) =>{

    return async(dispatch) => {
        dispatch(loadingPokemons());

        try {
            //llamada API para obtener los datos
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
            const data = await response.json();

            //colocar los datos en mi state y hacer dispatch
            dispatch(fetchPokemons({
                page: page + 1,
                pokemons: data.results
            }))

        } catch (error) {
            dispatch(failedFetchPokemons({error: error.message}))
        }
    }
}