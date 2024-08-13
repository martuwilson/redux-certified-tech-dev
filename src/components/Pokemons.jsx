/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../thunk/thunk";

const Pokemons = () => {

    const {isLoading, pokemons = [], page, error} = useSelector(state => state.pokemons); // son los initialStates de pokemonSlice
    console.log(pokemons,isLoading,error, page);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, [dispatch]);

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
        onClick={() => dispatch(getPokemons(page))}
        >Next page</button>
    </div>
  )
}

export default Pokemons