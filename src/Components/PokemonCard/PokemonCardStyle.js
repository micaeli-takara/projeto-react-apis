import styled from "styled-components";

export const ContainerCard = styled.div`
  padding: 1rem;
  width: 27rem;
  height: 13rem;
  border-radius: 1rem;
  display: flex;
  position: relative;
  color: #ffffff;
  margin-left: 0.5rem;
  margin-bottom: 3.3rem;
  background-color: ${(props) => props.color};
`;

export const PokemonId = styled.p`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 1rem;
`;

export const PokemonName = styled.h1`
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  text-transform: capitalize;
`;

export const TypesContainer = styled.div`
  margin-bottom: 2rem;
  display: flex;
  gap: 0.5rem;
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
  background: #ffffff;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0.7rem;
  right: 1.3rem;
  z-index: 2;
  color: #5d5d5d;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
`;

export const ButtonDelete = styled.button`
  width: 9.12rem;
  height: 2.3rem;
  background: #FF6262;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  position: absolute;
  bottom: 0.7rem;
  right: 1.3rem;
  z-index: 2;
  color: #ffffff;
  font-size: 1rem;
  font-family: 'Poppins', sans-serif;
`;

export const ButtonDetails = styled.a`
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
`;

export const ImagePokeball = styled.img`
  position: absolute;
  top: 0;
  right: 0;
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