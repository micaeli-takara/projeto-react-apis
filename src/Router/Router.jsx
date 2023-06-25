import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import Header from '../Components/Header/Header';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index="/" element={<><Header /><PokemonsListPage /></>} />
        <Route path="/pokedex" element={<><Header /><PokedexPage /></>}  />
        <Route path="/detalhes/:id" element={<><Header /><PokemonDetailPage /></>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default Router