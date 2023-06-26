import styled from "styled-components";

export const Nav = styled.header`
  width: 100%;
  height: 10rem;
  background: #FFFFFF;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 1.3rem;
  
  @media screen and (max-width: 975px) {
    flex-direction: column;
    height: auto;
    padding: 1rem;
  }
`;

export const ButtonPokedex = styled.button`
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;

  position: absolute;
  width: 17.9rem;
  height: 4.6rem;
  right: 2.5rem;
  top: 3rem;

  border: none;
  color: #FFFFFF;
  background: #33A4F5;
  border-radius: 0.5rem;
  
  @media screen and (max-width: 975px) {
    position: static;
    width: 100%;
    margin-top: 1rem;
  }
`;

export const ButtonAllPokemons = styled.a`
  position: absolute;
  height: 2.25rem;
  left: 5rem;
  top: 3.8rem;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media screen and (max-width: 975px) {
    position: static;
    margin-top: 1rem;
  }
`;

export const ButtonDeletePokemon = styled.button`
  color: #FFF;
  font-size: 1rem;
  font-family: Poppins;
  cursor: pointer;

  position: absolute;
  width: 17.9rem;
  height: 4.6rem;
  right: 2.5rem;
  top: 3rem;

  border: none;
  color: #FFFFFF;
  border-radius: 8px;
  background: #FF6262;
  
  @media screen and (max-width: 975px) {
    position: static;
    width: 100%;
    margin-top: 1rem;
  }
`;

export const ButtonCapturePokemon = styled.button`
  color: #FFF;
  font-size: 1rem;
  font-family: Poppins;
  cursor: pointer;

  position: absolute;
  width: 17.9rem;
  height: 4.6rem;
  right: 2.5rem;
  top: 3rem;

  border: none;
  color: #FFFFFF;
  border-radius: 8px;
  background: #33A4F5;
  
  @media screen and (max-width: 975px) {
    position: static;
    width: 100%;
    margin-top: 1rem;
  }
`;