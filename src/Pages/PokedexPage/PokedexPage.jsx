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
  const { pokedex } = useContext(GlobalContext);

  return (
    <ContainerHome>
      <TituloAllPokemons>Meus Pokemons</TituloAllPokemons>
      <ContainerListCard>
        {pokedex.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            pokemon={pokemon}
            cardColor={getColors(pokemon.types[0].type.name)}
          />
        ))}
      </ContainerListCard>
    </ContainerHome>
  );
}

export default PokedexPage;
