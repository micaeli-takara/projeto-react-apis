import { useNavigate } from "react-router-dom";
import { PId } from "../../Pages/PokemonDetailPage/PokemonDetailPageStyle";
import {
  ContainerCard,
  ImagePokemon,
  ButtonCapturar,
  ImagePokebola,
  NamePokemonCard,
  TypesContainer,
  PokemonType,
  ButtonDetalhes,
} from "./PokemonCardStyle";
import { getTypes } from "../../utils/ReturnPokemonType";

function PokemonCard(props) {
  const navigate = useNavigate();

  const goToPokeDetail = () => {
    navigate("/detalhes");
  };

  const typePokemonsCard = props.pokemon.types.map((type, index) => {
    return <PokemonType key={index} src={getTypes(type.type.name)} alt="" />;
  });


  return (
    <ContainerCard color={props.cardColor}>
      <div>
        <PId>{`#0${props.pokemon.id}`}</PId>
        <NamePokemonCard>
          {" "}
          {props.pokemon.name.charAt(0).toUpperCase() +
            props.pokemon.name.slice(1)}
        </NamePokemonCard>
        <TypesContainer> {typePokemonsCard} </TypesContainer>
        <ButtonDetalhes
          onClick={() => {
            goToPokeDetail(navigate);
          }}
        >
          {" "}
          <u>Detalhes</u>{" "}
        </ButtonDetalhes>
      </div>
      <div>
        <ImagePokemon
          src={props.pokemon.sprites.other["official-artwork"].front_default}
          alt="fotinho"
        />
        <ButtonCapturar>Capturar!</ButtonCapturar>
      </div>
      <ImagePokebola src="../src/assets/pokebola.png" alt="pokeball" />
    </ContainerCard>
  );
}

export default PokemonCard;
