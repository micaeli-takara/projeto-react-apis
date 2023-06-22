import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../Components/Constants/BASE_URL";
import { ImagePokeballLoading } from "../Components/PokemonCard/PokemonCardStyle";


export const GlobalStates = (props) => {
  const [homePokemons, setHomePokemons] = useState([]);
  const [pokedex, setPokedex] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  const getPokemons = async () => {
    try {
      const response = await axios.get(`${BASE_URL}?limit=20&offset=${(currentPage - 1) * 20}/`);
      const { results } = response.data;
  
      const promises = results.map(({ url }) => axios.get(url));
      const responses = await axios.all(promises);
  
      const urlPokeAll = responses.map(({ data }) => data);
      setHomePokemons((prevPokemons) => [...prevPokemons, ...urlPokeAll]);
      setLoading(false);
    } catch (error) {
      console.log(error.response);
    }
  };
  
  const handleScroll = () => {
    const isScrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
  
    if (isScrolledToBottom) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };
  
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const getPokemonsAndAddToHome = async () => {
      await getPokemons();
    };
  
    getPokemonsAndAddToHome();
  }, [currentPage]);
  

  if (loading) {
    return (
      <ImagePokeballLoading
        src="https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"
        alt="foto"
      />
    );
  }

  const addToPokedex = (pokemonToAdd) => {
    const isAlreadyOnPokedex = pokedex.find(
      (pokemonInPokedex) => pokemonInPokedex.name === pokemonToAdd.name
    );
    if (!isAlreadyOnPokedex) {
      const newPokedex = [...pokedex, pokemonToAdd];
      setPokedex(newPokedex);
    }
  };

  const removeFromPokedex = (pokemonToRemove) => {
    const newPokedex = pokedex.filter(
      (pokemonInPokedex) => pokemonInPokedex.name !== pokemonToRemove.name
    );

    setPokedex(newPokedex);
  };

  const context = {
    homePokemons,
    pokedex,
    addToPokedex,
    removeFromPokedex,
  };

  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  );
};
