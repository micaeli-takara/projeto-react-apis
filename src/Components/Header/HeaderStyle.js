import styled from "styled-components";

export const Nav = styled.header`
    background-color: white;
    width: 100%;
    height: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export const ImageLogo = styled.img`
    width: 19rem;
    height: 7rem;
    margin-top: 1.3rem;
    margin-bottom: 1.6rem;
`

export const ButtonAllPokemons = styled.button`
    margin: 2.5rem;
    max-height: 4rem;
    width: 15rem;
    border: none;
    cursor: pointer;
    background: none;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    font-size: 1.3rem;
    align-items: center;
`

export const ButtonPokedex = styled.button`
    margin-top: 2.5rem;
    margin-right: 4rem;
    max-height: 4rem;
    width: 15rem;
    border: none;
    background: #33A4F5;
    border-radius: 0.5rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 700;
    color: white;
    font-size: 1.3rem;
    cursor: pointer;
`