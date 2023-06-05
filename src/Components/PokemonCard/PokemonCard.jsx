import { useLocation, useNavigate } from "react-router-dom";
import {
  NamePokemon,
  PId,
} from "../../Pages/PokemonDetailPage/PokemonDetailPageStyle";
import {
  ContainerCard,
  ImagePokemon,
  ImageTipoPokemon,
  ButtonCapturar,
  ImagePokebola,
} from "./PokemonCardStyle";

function PokemonCard() {

  const navigate = useNavigate()

  const goToPokeDetail = () => {
    navigate("/detalhes")
  }
  return (
    <ContainerCard>
      <div>
        <PId>#19</PId>
        <NamePokemon>Rattata</NamePokemon>
        <ImageTipoPokemon>
          <img src="../src/assets/tipo.png" alt="coisinha" />
        </ImageTipoPokemon>
        <button onClick={() => {goToPokeDetail(navigate)}}>Detalhes</button>
      </div>
      <div>
        <ImagePokemon src="../src/assets/pokemon.png" alt="pokemon" />
        <ButtonCapturar>Capturar!</ButtonCapturar>
      </div>
      <ImagePokebola src="../src/assets/pokebola.png" alt="pokeball" />
    </ContainerCard>
  );
}

export default PokemonCard;
