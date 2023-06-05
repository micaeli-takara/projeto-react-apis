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
`
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
`
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
`
export const ButtonDeletePokemon = styled.button`
    position: absolute;
    width: 14rem;
    height: 3.5em;
    right: 2.5rem;
    top: 3rem;
    border-radius: 0.5rem;

    background: #FF6262;
    color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    border: none;
`