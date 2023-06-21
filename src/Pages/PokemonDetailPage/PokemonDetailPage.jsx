import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Components/Constants/BASE_URL";
import {
  ArticleDetailPokemon,
  AsideMoves,
  BoxMoves,
  ContainerDetailCard,
  ImagePokebolaDetail,
  ImagemAnimada,
  ImagemPokemonDetail,
  NamePokemon,
  PId,
  PMoves,
  SectionMovesInfo,
  SectionPokemon,
  SectionStatusPokemon,
  TitleDetail,
  TitleMoves,
  TypesDetails,
} from "./PokemonDetailPageStyle";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnPokemonColor";

function PokemonDetailPage({cardColor}) {
  console.log(cardColor)
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
    return <img key={index} src={getTypes(type.type.name)} alt="" />;
  });

  return (
    <>
      <ContainerDetailCard>
        <TitleDetail>Detalhes</TitleDetail>
        <ArticleDetailPokemon cardColor={getColors(pokemon.types[0].type.name)}>
          <SectionPokemon>
            <ImagemAnimada
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
              alt="Frente"
            />
            <ImagemAnimada
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .back_default
              }
              alt="Verso"
            />
          </SectionPokemon>
          <SectionStatusPokemon>
            <TitleMoves>Base stats:</TitleMoves>
          </SectionStatusPokemon>
          <SectionMovesInfo>
            <PId>{`#0${pokemon.id}`}</PId>
            <NamePokemon>{pokemon.name}</NamePokemon>
            <TypesDetails>{typePokemons}</TypesDetails>
            <BoxMoves>
              <TitleMoves>Moves:</TitleMoves>
              <AsideMoves>
                <PMoves>{pokemon.moves[0].move.name}</PMoves>
                <PMoves>{pokemon.moves[1].move.name}</PMoves>
                <PMoves>{pokemon.moves[2].move.name}</PMoves>
                <PMoves>{pokemon.moves[3].move.name}</PMoves>
              </AsideMoves>
            </BoxMoves>
          </SectionMovesInfo>
          <ImagemPokemonDetail
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="Bulbasaur"
          />
          <ImagePokebolaDetail
            src="../src/assets/pokebolacarddetalhe.png"
            alt="pokebolacarddetalhe"
          />
        </ArticleDetailPokemon>
      </ContainerDetailCard>
    </>
  );
}

export default PokemonDetailPage;
