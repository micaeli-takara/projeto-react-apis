import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokeDex } from "../../Router/coordinator";
import {
  ButtonPokedex,
  Nav,
  ButtonAllPokemons,
  ButtonDeletePokemon,
} from "./HeaderStyle";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const { pokemon, adicionarAoPokedex, removerDaPokedex, pokedex  } =
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
          <img src="../src/assets/logo.png" alt="logo" />
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
          <img src="../src/assets/logo.png" alt="logo" />
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
          <img src="../src/assets/logo.png" alt="logo" />
        </div>
        {console.log(pokemon.capturado)}
        {pokemon.capturado ? (
          <ButtonDeletePokemon onClick={() => adicionarPokemon(pokemon)}>
            Adicionar na Pokédex
          </ButtonDeletePokemon>
        ) : (
          <ButtonDeletePokemon onClick={() => removerPokemon(pokemon)}>
            Excluir da Pokédex
          </ButtonDeletePokemon>
        )}
      </Nav>
    );
  }
}

export default Header;
