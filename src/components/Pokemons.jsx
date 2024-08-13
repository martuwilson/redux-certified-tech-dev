/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
//import { getPokemons } from "../thunk/thunk";
import { fetchingPokemons } from "../reducers/pokemonSlice";

const Pokemons = () => {

    const [localPage, setLocalPage] = useState(0)

    const {isLoading, pokemons = [], error} = useSelector(state => state.pokemons); // son los initialStates de pokemonSlice
    console.log(pokemons,isLoading,error);
    const dispatch = useDispatch();

    useEffect(() => {
        //dispatch(getPokemons()); //metodo thunk
        dispatch(fetchingPokemons(localPage)); //metodo saga
    }, [localPage, dispatch]);

  return (
    <div>
        <h2>Pokemons</h2>
        {isLoading && <p>Cargando...</p>}
        {error && <p>{error}</p>}
        <div>
            {pokemons.map((pokemon, index) => (
                <p key={pokemon.name}>
                    <p>{pokemon.name}</p>
                </p>
            ))}
        </div>
        <button
        onClick={() => dispatch(() => setLocalPage(localPage + 1))}
        >Next page</button>
    </div>
  )
}

export default Pokemons