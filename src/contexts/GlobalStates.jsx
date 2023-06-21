import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../Components/Constants/BASE_URL";
import { ImagePokebolaLoading } from "../Components/PokemonCard/PokemonCardStyle";

export const GlobalStates = (props) => {
  const [homePokemons, setHomePokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = () => {
      axios
        .get(`${BASE_URL}?limit=20/`)
        .then(({ data: { results } }) => {
          const promises = results.map(({ url }) => axios.get(url));
          return axios.all(promises);
        })
        .then((responses) => {
          const urlPokeAll = responses.map(({ data }) => data);
          setHomePokemons(urlPokeAll);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    getPokemons();
  }, []);

  if (loading) {
    return <ImagePokebolaLoading
      src="https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"
      alt="foto"
    />;
  }

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );
    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
    console.log(pokemonToAdd);
  };

  const context = {
    homePokemons,
    pokedex,
    addToPokedex,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
