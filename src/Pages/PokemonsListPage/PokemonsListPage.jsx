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
  const {homePokemons, addToPokedex} = context
  return (
    <>
      <ContainerHome>
        <TituloAllPokemons>Todos Pokémons</TituloAllPokemons>
        <ContainerListCard>
          {homePokemons.map((pokes, index) => {
            return (
              <PokemonCard
                key={index}
                pokemon={pokes}
                addToPokedex={addToPokedex}
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
