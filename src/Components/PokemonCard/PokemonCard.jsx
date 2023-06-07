import { useNavigate } from "react-router-dom";
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
import axios from "axios";
import { BASE_URL } from "../Constants/BASE_URL";
import { useEffect, useState } from "react";

function PokemonCard() {
  const navigate = useNavigate();

  const goToPokeDetail = () => {
    navigate("/detalhes");
  };

  const [pokemon, setPokemon] = useState({});

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await axios.get(`${BASE_URL}/1`);
    try {
      (response) => {
        setPokemon(response.data.json());
        console.log(response.data)
      };
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ContainerCard>
      <div>
        <PId>#{pokemon.id}</PId>
        <NamePokemon>{pokemon.name}</NamePokemon>
        <ImageTipoPokemon>
          <img alt="coisinha" />
        </ImageTipoPokemon>
        <button
          onClick={() => {
            goToPokeDetail(navigate);
          }}
        >
          Detalhes
        </button>
      </div>
      <div>
        <ImagePokemon
          src={pokemon.sprites?.other["official-artwork"].front_default}
          alt="pokemon"
        />
        <ButtonCapturar>Capturar!</ButtonCapturar>
      </div>
      <ImagePokebola src="../src/assets/pokebola.png" alt="pokeball" />
    </ContainerCard>
  );
}

export default PokemonCard;
