import { useLocation, useNavigate } from "react-router-dom";
import { goToHome, goToPokeDex } from "../../Router/coordinator"
import { ButtonPokedex, Nav, ButtonAllPokemons, ButtonDeletePokemon } from "./HeaderStyle";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const renderHeader = () => {
    switch (location.pathname) {
      case "/":
        return (
          <Nav>
            <div>
              <img src="../src/assets/logo.png" alt="logo" />
            </div>
            <ButtonPokedex onClick={() => {goToPokeDex(navigate)}}>Pokédex</ButtonPokedex>
          </Nav>
        );

      case "/pokedex":
        return (
          <Nav>
            <ButtonAllPokemons onClick={() => {goToHome(navigate)}}>
              {"<"}<u>Todos Pokémons</u>
            </ButtonAllPokemons>
            <div>
              <img src="../src/assets/logo.png" alt="logo" />
            </div>
          </Nav>
        );

      default:
        return (
          <Nav>
            <ButtonAllPokemons onClick={() => {goToHome(navigate)}}>
            {"<"}<b>Todos Pokémons</b>
            </ButtonAllPokemons>
            <div>
              <img src="../src/assets/logo.png" alt="logo" />
            </div>
            <ButtonDeletePokemon>Excluir da Pokédex</ButtonDeletePokemon>
          </Nav>
        );
    }
  };
  return <>{renderHeader()}</>;
}

export default Header;
