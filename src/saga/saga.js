
import { call, put, takeEvery } from "redux-saga/effects";
import { failedFetchPokemons, fetchPokemons, loadingPokemons } from "../reducers/pokemonSlice";

// Servicio para traer los datos de la API de pokemon
const fetchingPokemons = async (page = 0) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`);
    const data = response.json();

    return data;
}

// Saga para obtener los datos de la API de pokemon
function* getPokemons(action) {
    const page = action.payload;

    try {
        yield put(loadingPokemons());

        //obtener datos de la api
        const data = yield call(fetchingPokemons, page)

        //guardar datos en la store
        yield put(fetchPokemons({pokemons: data.results, offset: page}));

    } catch (error) {
        yield put(failedFetchPokemons({error: error.message}));
    }
}

// saga principal para observar la accion de getPokemons
function* watchGetPokemons() {
    yield takeEvery('pokemon/fetchingPokemon', getPokemons) // del 1er param --> pokemon es el name del slice y fetchPokemons es el nombre de la accion
}

export default watchGetPokemons;