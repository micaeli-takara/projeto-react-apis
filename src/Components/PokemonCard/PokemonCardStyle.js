import styled from "styled-components";

export const ContainerCard = styled.div`
    padding: 1rem;
    width: 27rem;
    height: 13rem;
    border-radius: 0.75rem;
    display: flex;
    position: relative;
    color: #ffffff;
    margin-left: 0.5rem;
    margin-bottom: 3.3rem;
    background-color: ${(props) => props.color};
`
export const TypesContainer = styled.div`
  margin-bottom: 52px;
`;

export const PokemonType = styled.img`
  max-width: 100px;
  height: 32px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px dashed #ffffff;
  margin-right: 8px;
`;

export const ImagePokemon = styled.img`
    position: absolute;
    top: -3.75rem;
    right: 0;
    width: 12rem;
    z-index: 2;
`
export const ButtonCapturar = styled.button`
    width: 9.12rem;
    height: 2.3rem;
    background: #ffffff;
    border-radius: 0.5rem;
    border: none;
    cursor: pointer;
    position: absolute;
    bottom: 0.7rem;
    right: 1.3rem;
    z-index: 2;
    color: #0F0F0F;
`
export const ButtonDetalhes = styled.a`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 700;
    color: #FFFFFF;
    cursor: pointer;
`
export const ImagePokebola = styled.img`
    position: absolute;
    top: 0;
    right: 0;
`
export const NamePokemonCard = styled.h1`
    color: #FFF;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 2rem;
`
export const ImagePokebolaLoading = styled.img`
  width: 50px;
  border-radius: 50%;
  animation: s2 3s infinite linear;

  @keyframes s2 {
  100% {transform: rotate(1turn)}};
`