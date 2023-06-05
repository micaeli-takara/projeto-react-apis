import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {
  ContainerHome,
  ContainerListCard,
  TituloAllPokemons,
} from "./PokemonsListPageStyle";

function PokemonsListPage() {
  return (
    <>
      <ContainerHome>
        <TituloAllPokemons>Todos Pokémons</TituloAllPokemons>
        <ContainerListCard>
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
          <PokemonCard />
        </ContainerListCard>
      </ContainerHome>
    </>
  );
}

export default PokemonsListPage;
