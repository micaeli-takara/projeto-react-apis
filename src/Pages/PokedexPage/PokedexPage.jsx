import { useContext } from "react";
import {
  ContainerHome,
  ContainerListCard,
  TituloAllPokemons,
} from "../PokemonsListPage/PokemonsListPageStyle";
import { GlobalContext } from "../../contexts/GlobalContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { getColors } from "../../utils/ReturnPokemonColor";

function PokedexPage() {
  const context = useContext(GlobalContext);
  const { pokedex, removeFromPokedex } = context;
  return (
    <ContainerHome>
      <TituloAllPokemons>Meus Pokemons</TituloAllPokemons>
      <ContainerListCard>
        {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            removeFromPokedex={removeFromPokedex}
            cardColor={getColors(pokemon.types[0].type.name)}
          />
        ))}
      </ContainerListCard>
    </ContainerHome>
  );
}

export default PokedexPage;
