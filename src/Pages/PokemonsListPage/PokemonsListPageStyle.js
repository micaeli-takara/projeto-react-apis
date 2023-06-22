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
