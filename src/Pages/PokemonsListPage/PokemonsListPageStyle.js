import styled from "styled-components";
import { colors, fonts } from "../../utils/Theme";

export const ContainerHome = styled.div`
    background-color: ${colors.primary};
`

export const TituloAllPokemons = styled.h1`
    color: ${colors.white};
    font-family: ${fonts.primary};
    font-weight: 700;
    font-size: 3rem;
    line-height: 4.5rem;
    padding: 2.25rem 2rem;
`
export const ContainerListCard = styled.article`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0.4rem;
`

export const StyledButton = styled.button`
  background-color: #f44336;
  color: #fff;
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #d32f2f;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

// Create a wrapper component to contain the buttons
export const ButtonWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

export const Temporario = styled.div`
    display: flex;
`