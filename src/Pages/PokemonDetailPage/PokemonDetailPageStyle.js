import styled from "styled-components";

export const ContainerDetailCard = styled.main`
  background-color: #5d5d5d;
  height: 63.3rem;
  padding: 1.5rem;
`;

export const TitleDetail = styled.h1`
  color: #ffffff;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  padding: 2rem 1rem;
`;

export const ArticleDetailPokemon = styled.article`
  background-color: ${(props) => props.backgroundColor};
  width: 81rem;
  height: 42rem;
  border-radius:2rem;
  display: flex;
  padding: 2rem;
`;

export const SectionPokemon = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.94rem;
  margin-left: 1rem;
`;

export const AnimatedImageBox = styled.div`
  width: 17.625rem;
  height: 17.625rem;
  background: #ffffff;
  border-radius: 0.5rem;
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const AnimatedImage = styled.img`
  width: 6rem;
`;

export const SectionStatusPokemon = styled.div`
  background: #ffffff;
  margin-left: 2rem;
  padding: 1rem;
  width: 21.4375rem;
  height: 38.3125rem;
  border-radius: 0.5rem;
  z-index: 1;
`;

export const PokeballImageDetail = styled.img`
  position: absolute;
  left: 33.8rem;
  top: 21rem;
`;

export const SectionMovesInfo = styled.section`
  z-index: 1;
  margin-left: 2rem;
  display: flex;
  flex-direction: column;
`;

export const PokemonId = styled.p`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1rem;
`;

export const PokemonName = styled.h1`
  color: #ffffff;
  font-size: 3rem;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  text-transform: capitalize;
`;

export const MovesBox = styled.div`
  background: #ffffff;
  width: 18.25rem;
  height: 28.3125rem;
  margin-top: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;

export const MovesTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.8rem;
  padding-bottom: 1rem;
`;

export const MoveText = styled.p`
  font-family: 'Montserrat', sans-serif;
  font-size: 0.8rem;
  padding: 0.5rem;
  background: #ececec;
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: 1rem;
  text-transform: capitalize;
`;

export const MovesAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
`;

export const PokemonImageDetail = styled.img`
  position: absolute;
  top: 13rem;
  left: 67rem;
  z-index: 2;
  width: 16rem;
  height: 16rem;
`;

export const TypesContainer = styled.div`
  display: flex;
  gap: 1rem;
`;