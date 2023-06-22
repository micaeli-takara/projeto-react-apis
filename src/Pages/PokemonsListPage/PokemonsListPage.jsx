import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {
  ContainerHome,
  ContainerListCard,
  TituloAllPokemons,
} from "./PokemonsListPageStyle";
import { getColors } from "../../utils/ReturnPokemonColor";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
;

function PokemonsListPage() {
  const context = useContext(GlobalContext)
  const {homePokemons, addToPokedex, pokedex} = context

  const filteredPokelist = () =>
  homePokemons.filter(
    (pokemonInList) =>
      !pokedex.find(
        (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
      )
  );

  return (
    <>
      <ContainerHome>
        <TituloAllPokemons>Todos Pokémons</TituloAllPokemons>
        <ContainerListCard>
          {filteredPokelist().map((pokemon, index) => {
            return (
              <PokemonCard
                key={index}
                pokemon={pokemon}
                addToPokedex={addToPokedex}
                cardColor={getColors(pokemon.types[0].type.name)}
              />
            );
          })}
        </ContainerListCard>
      </ContainerHome>
    </>
  );
}

export default PokemonsListPage;
