import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Components/Constants/BASE_URL";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnPokemonColor";
import {  AnimatedImage, ArticleDetailPokemon, ContainerDetailCard, MoveText, MovesAside, MovesBox, MovesTitle, PokeballImageDetail, PokemonId, PokemonImageDetail, PokemonName, SectionMovesInfo,  SectionPokemon,  SectionStatusPokemon, TitleDetail, TypesContainer } from "./PokemonDetailPageStyle";


function PokemonDetailPage() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${id}`)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const typePokemons = pokemon.types.map((type, index) => {
    return (
      <img
        key={index}
        src={getTypes(type.type.name)}
        alt=""
      />
    );
  });

  const formattedId = String(pokemon.id).padStart(2, "0");

  return (
    <>
      <ContainerDetailCard>
        <TitleDetail>Detalhes</TitleDetail>
        <ArticleDetailPokemon backgroundColor={getColors(pokemon.types[0].type.name)}>
          <SectionPokemon>
            <AnimatedImage
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
              alt="Frente"
            />
            <AnimatedImage 
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .back_default
              }
              alt="Verso"
            />
          </SectionPokemon>
          <SectionStatusPokemon>
            <MovesTitle>Base stats:</MovesTitle >
          </SectionStatusPokemon>
          <SectionMovesInfo>
            <PokemonId >{`#${formattedId}`}</PokemonId>
            <PokemonName>{pokemon.name}</PokemonName>
            <TypesContainer>{typePokemons}</TypesContainer >
            <MovesBox>
              <MovesTitle>Moves:</MovesTitle >
              <MovesAside>
                <MoveText>{pokemon.moves[0].move.name}</MoveText >
                <MoveText >{pokemon.moves[1].move.name}</MoveText >
                <MoveText >{pokemon.moves[2].move.name}</MoveText >
                <MoveText >{pokemon.moves[3].move.name}</MoveText >
              </MovesAside>
            </MovesBox >
          </SectionMovesInfo >
          <PokemonImageDetail
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="Bulbasaur"
          />
          <PokeballImageDetail
            src="../src/assets/pokebolacarddetalhe.png"
            alt="pokebolacarddetalhe"
          />
        </ArticleDetailPokemon>
      </ContainerDetailCard>
    </>
  );
}

export default PokemonDetailPage;
