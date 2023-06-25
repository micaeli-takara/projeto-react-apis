import styled from "styled-components";
import { colors, fonts, spacing, borderRadius } from "../../utils/Theme";

export const ContainerDetailCard = styled.main`
  background-color: ${colors.primary};
  height: 63.3rem;
  padding: 1.5rem;
`;

export const TitleDetail = styled.h1`
  color: ${colors.white};
  font-family: ${fonts.primary};
  font-weight: 700;
  font-size: 3rem;
  line-height: 4.5rem;
  padding: ${spacing.large} ${spacing.medium};
`;

export const ArticleDetailPokemon = styled.article`
  background-color: ${(props) => props.backgroundColor};
  width: 81rem;
  height: 42rem;
  border-radius: ${borderRadius.large};
  display: flex;
  padding: ${spacing.large};
`;

export const SectionPokemon = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.94rem;
  margin-left: ${spacing.medium};
`;

export const AnimatedImageBox = styled.div`
  width: 17.625rem;
  height: 17.625rem;
  background: ${colors.white};
  border-radius: ${borderRadius.small};
  justify-content: center;
  align-items: center;
  display: flex;
`;

export const AnimatedImage = styled.img`
  width: 6rem;
`

export const SectionStatusPokemon = styled.div`
  background: ${colors.white};
  margin-left: ${spacing.large};
  padding: ${spacing.medium};
  width: 21.4375rem;
  height: 38.3125rem;
  border-radius: ${borderRadius.small};
  z-index: 1;
`;

export const PokeballImageDetail = styled.img`
  position: absolute;
  left: 33.8rem;
  top: 21rem;
`;

export const SectionMovesInfo = styled.section`
  z-index: 1;
  margin-left: ${spacing.large};
  display: flex;
  flex-direction: column;
`;

export const PokemonId = styled.p`
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 1rem;
`;

export const PokemonName = styled.h1`
  color: ${colors.white};
  font-size: 3rem;
  font-family: ${fonts.secondary};
  font-weight: 700;
  text-transform: capitalize;
`;

export const MovesBox = styled.div`
  background: ${colors.white};
  width: 18.25rem;
  height: 28.3125rem;
  margin-top: ${spacing.large};
  padding: ${spacing.medium};
  border-radius: ${borderRadius.small};
`;

export const MovesTitle = styled.h2`
  font-family: ${fonts.secondary};
  font-weight: 800;
  font-size: 1.5rem;
  line-height: 1.8rem;
  padding-bottom: ${spacing.medium};
`;

export const MoveText = styled.p`
  font-family: ${fonts.tertiary};
  font-size: 0.8rem;
  padding: ${spacing.small};
  background: ${colors.accent};
  border: 1px dashed rgba(0, 0, 0, 0.14);
  border-radius: ${borderRadius.medium};
  text-transform: capitalize;
`;

export const MovesAside = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${spacing.small};
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
  gap: ${spacing.medium};
`;

