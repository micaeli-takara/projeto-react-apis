import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokeDex } from "../../Router/coordinator";
import {
  ButtonPokedex,
  Nav,
  ButtonAllPokemons,
  ButtonDeletePokemon,
  ButtonCapturePokemon,
} from "./HeaderStyle";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { logo } from "../src/assets/others/logo.png";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokemon, adicionarAoPokedex, removerDaPokedex, pokedex } =
    useContext(GlobalContext);

  const adicionarPokemon = (pokemon) => {
    adicionarAoPokedex(pokemon);
  };

  const removerPokemon = (pokemon) => {
    removerDaPokedex(pokemon);
  };

  if (location.pathname == "/") {
    return (
      <Nav>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <ButtonPokedex onClick={() => goToPokeDex(navigate)}>
          Pokédex ({pokedex.length})
        </ButtonPokedex>
      </Nav>
    );
  } else if (location.pathname == "/pokedex") {
    return (
      <Nav>
        <ButtonAllPokemons onClick={() => goToHome(navigate)}>
          {"<"}
          <u>Todos Pokémons</u>
        </ButtonAllPokemons>
        <div>
          <img src={logo} alt="logo" />
        </div>
      </Nav>
    );
  } else if (location.pathname.includes("/detalhes/")) {
    return (
      <Nav>
        <ButtonAllPokemons onClick={() => goToHome(navigate)}>
          {"<"}
          <b>Todos Pokémons</b>
        </ButtonAllPokemons>
        <div>
          <img src={logo} alt="logo" />
        </div>
        {pokemon.capturado ? (
          <ButtonDeletePokemon onClick={() => removerPokemon(pokemon)}>
            Excluir da Pokédex
          </ButtonDeletePokemon>
        ) : (
          <ButtonCapturePokemon onClick={() => adicionarPokemon(pokemon)}>
            Adicionar na Pokédex
          </ButtonCapturePokemon>
        )}
      </Nav>
    );
  }
}

export default Header;
