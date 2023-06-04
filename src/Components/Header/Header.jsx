import { ImageLogo, Nav, ButtonAllPokemons, ButtonPokedex } from "./HeaderStyle";

function Header() {
  return (
    <Nav>
      <ButtonAllPokemons>
        <img src="../src/assets/Vector.png" alt="setinha" />
        <u>Todos Pokémons</u>
      </ButtonAllPokemons>
      <ImageLogo src="../src/assets/logo.png" alt="logo" />
      <ButtonPokedex>Pokédex</ButtonPokedex>
    </Nav>
  );
}

export default Header;
