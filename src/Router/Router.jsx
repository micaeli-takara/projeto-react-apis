import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PokemonsListPage from "../Pages/PokemonsListPage/PokemonsListPage";
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage";
import PokedexPage from "../Pages/PokedexPage/PokedexPage";
import Header from '../Components/Header/Header';

function Router() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route index="/" element={<PokemonsListPage />} />
        <Route path="/pokedex" element={<PokedexPage />}  />
        <Route path="/detalhes/:id" element={<PokemonDetailPage />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default Router