import { ContainerCard, ImagePokemon, ImageTipoPokemon, ButtonCapturar, ImagePokebola } from "./PokemonCardStyle";

function PokemonCard() {
    return (
      <ContainerCard>
        <div>
          <p>#19</p>
          <h1>Rattata</h1>
          <ImageTipoPokemon>
            <img src="../src/assets/tipo.png" alt="coisinha" />
          </ImageTipoPokemon>
          <a>Detalhes</a>
        </div>
        <div>
          <ImagePokemon src="../src/assets/pokemon.png" alt="pokemon"/>
          <ButtonCapturar>Capturar!</ButtonCapturar>
        </div>
        <ImagePokebola src="../src/assets/pokebola.png" alt="pokeball"/>
      </ContainerCard>
    );
  }
  
  export default PokemonCard;