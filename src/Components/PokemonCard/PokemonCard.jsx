import { useNavigate } from "react-router-dom";
import { PId } from "../../Pages/PokemonDetailPage/PokemonDetailPageStyle";
import {
  ContainerCard,
  ImagePokemon,
  ButtonCapturar,
  ImagePokebola,
  NamePokemonCard,
  TypesContainer,
  ButtonDetalhes,
} from "./PokemonCardStyle";
import { getTypes } from "../../utils/ReturnPokemonType";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

function PokemonCard({ pokemon, cardColor }) {
  const context = useContext(GlobalContext)
  const {addToPokedex} = context

  const navigate = useNavigate();

  const goToPokeDetail = () => {
    navigate(`/detalhes/${pokemon.id}`);
  };

  const typePokemonsCard = pokemon.types.map((type, index) => {
    return <img key={index} src={getTypes(type.type.name)} alt="" />
  });

  return (
    <ContainerCard color={cardColor}>
      <div>
        <PId>{`#0${pokemon.id}`}</PId>
        <NamePokemonCard>{pokemon.name}</NamePokemonCard>
        <TypesContainer> {typePokemonsCard} </TypesContainer>
        <ButtonDetalhes onClick={goToPokeDetail}>
          <u>Detalhes</u>
        </ButtonDetalhes>
      </div>
      <div>
        <ImagePokemon
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="fotinho"
        />
        <ButtonCapturar onClick={() => addToPokedex(pokemon)}>Capturar!</ButtonCapturar>
      </div>
      <ImagePokebola src="../src/assets/pokebola.png" alt="pokeball" />
    </ContainerCard>
  );
}

export default PokemonCard;
