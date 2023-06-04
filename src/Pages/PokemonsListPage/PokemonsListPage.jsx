import Header from "../../Components/Header/Header";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import { ContainerListCard, TituloAllPokemons } from "./PokemonsListPageStyle";

function PokemonsListPage() {
  return (
    <main className="container">
      <Header />
      <TituloAllPokemons>Todos Pokémons</TituloAllPokemons>
      <ContainerListCard>
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
        <PokemonCard />
      </ContainerListCard>
    </main>
  );
}

export default PokemonsListPage;
