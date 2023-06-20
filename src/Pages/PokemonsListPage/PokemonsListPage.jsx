import { useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {
  ContainerHome,
  ContainerListCard,
  TituloAllPokemons,
} from "./PokemonsListPageStyle";
import axios from "axios";
import { BASE_URL } from "../../Components/Constants/BASE_URL";
import { ImagePokebolaLoading } from "../../Components/PokemonCard/PokemonCardStyle";
import { getColors } from "../../utils/ReturnPokemonColor";

function PokemonsListPage() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPokemons = () => {
      axios
        .get(`${BASE_URL}?limit=100&offset=0/`)
        .then(({ data: { results } }) => {
          const promises = results.map(({ url }) => axios.get(url));
          return axios.all(promises);
        })
        .then((responses) => {
          const urlPokeAll = responses.map(({ data }) => data);
          setPokemons(urlPokeAll);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error.response);
        });
    };
    getPokemons();
  }, []);

  if (loading) {
    return (
      <>
        <ImagePokebolaLoading
          src="https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"
          alt="foto"
        />
      </>
    );
  }

  const addToPokedex = (pokemons) =>{
    setPokemons([...pokemons, ])
  }

  return (
    <>
      <ContainerHome>
        <TituloAllPokemons>Todos Pokémons</TituloAllPokemons>
        <ContainerListCard>
          {pokemons.map((pokes, index) => {
            return (
              <PokemonCard
                key={index}
                pokemon={pokes}
                cardColor={getColors(pokes.types[0].type.name)}
              />
            );
          })}
        </ContainerListCard>
      </ContainerHome>
    </>
  );
}

export default PokemonsListPage;
