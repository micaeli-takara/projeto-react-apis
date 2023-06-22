import styled from "styled-components";
import { colors, fonts, spacing, borderRadius } from "../../utils/Theme";


export const ContainerCard = styled.div`
  padding: ${spacing.medium};
  width: 27rem;
  height: 13rem;
  border-radius: ${borderRadius.medium};
  display: flex;
  position: relative;
  color: ${colors.white};
  margin-left: ${spacing.small};
  margin-bottom: 3.3rem;
  background-color: ${(props) => props.color};
`;

export const TypesContainer = styled.div`
  margin-bottom: ${spacing.large};
  display: flex;
  gap: ${spacing.small};
  width: 5.6rem;
  height: 1.9rem;
`;

export const ImagePokemon = styled.img`
  position: absolute;
  top: -3.75rem;
  right: 0;
  width: 12rem;
  z-index: 2;
`;

export const ButtonCapture = styled.button`
  width: 9.12rem;
  height: 2.3rem;
  background: ${colors.white};
  border-radius: ${borderRadius.small};
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0.7rem;
  right: 1.3rem;
  z-index: 2;
  color: ${colors.primary};
  font-size: 1rem;
  font-family: ${fonts.primary};
`;

export const ButtonDelete = styled.button`
  width: 9.12rem;
  height: 2.3rem;
  background: ${colors.red};
  border-radius: ${borderRadius.small};
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0.7rem;
  right: 1.3rem;
  z-index: 2;
  color: ${colors.white};
  font-size: 1rem;
  font-family: ${fonts.primary};
`;

export const ButtonDetails = styled.a`
  font-family: ${fonts.primary};
  font-style: normal;
  font-weight: 700;
  color: ${colors.white};
  cursor: pointer;
`;

export const ImagePokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`;

export const PokemonName = styled.h1`
  color: ${colors.white};
  font-family: ${fonts.secondary};
  font-weight: 700;
  font-size: 2rem;
  text-transform: capitalize;
`;

export const ImagePokeballLoading = styled.img`
  width: 50px;
  border-radius: 50%;
  animation: spin 3s infinite linear;

  @keyframes spin {
    100% {
      transform: rotate(1turn);
    }
  }
`;

export const PokemonId = styled.p`
    color: ${colors.white};
    font-family: ${fonts.secondary};
    font-weight: 700;
    font-size: 1rem;
`;
