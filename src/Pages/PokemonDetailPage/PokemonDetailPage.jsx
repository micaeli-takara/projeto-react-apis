import { useParams } from "react-router-dom";
import { BASE_URL } from "../../Components/Constants/BASE_URL";
import { useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { getTypes } from "../../utils/ReturnPokemonType";
import { getColors } from "../../utils/ReturnPokemonColor";
import {
  AnimatedImage,
  AnimatedImageBox,
  ArticleDetailPokemon,
  ContainerDetailCard,
  MoveText,
  MovesAside,
  MovesBox,
  MovesTitle,
  PokeballImageDetail,
  PokemonId,
  PokemonImageDetail,
  PokemonName,
  SectionMovesInfo,
  SectionPokemon,
  SectionStatusPokemon,
  TitleDetail,
  TypesContainer,
} from "./PokemonDetailPageStyle";
import { Flex, Text, Divider, Progress } from "@chakra-ui/react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokemonDetailPage() {
  const { pokemon } = useContext(GlobalContext);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  const typePokemons = pokemon.types.map((type, index) => {
    return <img key={index} src={getTypes(type.type.name)} alt="" />;
  });

  const formattedId = String(pokemon.id).padStart(2, "0");

  const totalStats = pokemon.stats.reduce(
    (total, stat) => total + stat.base_stat,
    0
  );

  function replaceSpecialWords(str) {
    const specialDefenseRegex = /\bspecial-defense\b/g;
    const specialAttackRegex = /\bspecial-attack\b/g;
    const replacementDefense = "Sp. Def";
    const replacementAttack = "Sp. Atk";
    const replacedStr = str
      .replace(specialDefenseRegex, replacementDefense)
      .replace(specialAttackRegex, replacementAttack);

    // Capitalizar a primeira letra de cada palavra
    const capitalizedStr = replacedStr.replace(/\b\w/g, (match) =>
      match.toUpperCase()
    );

    return capitalizedStr;
  }
  
  const renderStats = pokemon.stats.map((stat, index) => {
    let statColor = "yellow"; // Cor padrão para valores maiores que 50

    if (stat.base_stat < 50) {
      statColor = "orange"; // Cor para valores menores que 50
    }

    const formattedStatName = replaceSpecialWords(stat.stat.name);
    return (
      <div key={index}>
        <Flex alignItems="center" justifyContent="right" gap="1px">
          <Text color="gray.500" fontWeight="bold">
            {formattedStatName}
          </Text>
          <Divider orientation="vertical" mx={2} h={4} bg="gray.400" />
          <Flex
            w="14rem"
            alignItems="center"
            justifyContent="space-between"
            gap="13px"
          >
            <Text fontWeight="bold">{stat.base_stat}</Text>
            <Progress
              value={stat.base_stat}
              max={100}
              colorScheme={statColor}
              flex="1"
              rounded="4"
              bg="transparent"
            />
          </Flex>
        </Flex>
        <Divider my={1} borderColor="gray.200" />
      </div>
    );
  });

  return (
    <ContainerDetailCard>
      <TitleDetail>Detalhes</TitleDetail>
      <ArticleDetailPokemon backgroundColor={getColors(pokemon.types[0].type.name)} >
        <SectionPokemon>
          <AnimatedImageBox>
            <AnimatedImage
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .front_default
              }
              alt="Frente"
            />
          </AnimatedImageBox>
          <AnimatedImageBox>
            <AnimatedImage
              src={
                pokemon.sprites.versions["generation-v"]["black-white"].animated
                  .back_default
              }
              alt="Verso"
            />
          </AnimatedImageBox>
        </SectionPokemon>
        <SectionStatusPokemon>
          <MovesTitle>Base stats:</MovesTitle>
          <Divider my={1} borderColor="gray.200" />
          {renderStats}
          <Text pl={8} display="flex" gap="15px" fontWeight="bold">
            <Text color="gray.500">Total</Text>
            <Text fontWeight="extrabold">{totalStats}</Text>
          </Text>
          <Divider my={1} borderColor="gray.200" />
        </SectionStatusPokemon>
        <SectionMovesInfo>
          <div>
            <PokemonId>{`#${formattedId}`}</PokemonId>
            <PokemonName>{pokemon.name}</PokemonName>
            <TypesContainer>{typePokemons}</TypesContainer>
          </div>
          <MovesBox>
            <MovesTitle>Moves:</MovesTitle>
            <MovesAside>
              <MoveText>{pokemon.moves[0].move.name}</MoveText>
              <MoveText>{pokemon.moves[1].move.name}</MoveText>
              <MoveText>{pokemon.moves[2].move.name}</MoveText>
              <MoveText>{pokemon.moves[3].move.name}</MoveText>
            </MovesAside>
          </MovesBox>
          <PokemonImageDetail
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="Bulbasaur"
          />
        </SectionMovesInfo>
      </ArticleDetailPokemon>
    </ContainerDetailCard>
  );
}

export default PokemonDetailPage;
