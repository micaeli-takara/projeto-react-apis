import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getTypes } from "../../utils/ReturnPokemonType";
import {   
  ContainerCard,
  ImagePokemon,
  ButtonCapture,
  ImagePokeball,
  PokemonName,
  TypesContainer,
  ButtonDetails,
  ButtonDelete,
  PokemonId } from "./PokemonCardStyle";


function PokemonCard({ pokemon, cardColor }) {
  const context = useContext(GlobalContext);
  const { addToPokedex, removeFromPokedex } = context;

  const location = useLocation();
  const navigate = useNavigate();

  const goToPokeDetail = () => {
    navigate(`/detalhes/${pokemon.id}`);
  };

  const formattedId = String(pokemon.id).padStart(2, "0");

  const renderTypes = () => {
    return pokemon.types.map((type, index) => (
      <img key={index} src={getTypes(type.type.name)} alt="type" />
    ));
  };

  const renderButton = () => {
    if (location.pathname === "/") {
      return (
        <ButtonCapture onClick={() => addToPokedex(pokemon)}>
          Capturar!
        </ButtonCapture>
      );
    } else {
      return (
        <ButtonDelete onClick={() => removeFromPokedex(pokemon)}>
          Excluir
        </ButtonDelete>
      );
    }
  };

  return (
    <ContainerCard color={cardColor}>
      <div>
        <PokemonId>#{formattedId}</PokemonId>
        <PokemonName>{pokemon.name}</PokemonName>
        <TypesContainer>{renderTypes()}</TypesContainer>
        <ButtonDetails onClick={goToPokeDetail}>
          <u>Detalhes</u>
        </ButtonDetails>
      </div>
      <div>
        <ImagePokemon
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt="fotinho"
        />
        <div>{renderButton()}</div>
      </div>
      <ImagePokeball src="../src/assets/pokebola.png" alt="pokeball" />
    </ContainerCard>
  );
}

export default PokemonCard;