import { useEffect, useState } from "react";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {
  ContainerHome,
  ContainerListCard,
  TituloAllPokemons,
} from "./PokemonsListPageStyle";

function PokemonsListPage() {

  const [countPokemon, setCountPokemon ] = useState([])

  useEffect(() => {
    setCountPokemon(["1","2","3"])
 
	}, [])


  return (
    <>
      <ContainerHome>
        <TituloAllPokemons>Todos Pokémons</TituloAllPokemons>
        <ContainerListCard>
          <PokemonCard numPokemon={1}/>
        </ContainerListCard>
      </ContainerHome>
    </>
  );
}

export default PokemonsListPage;
