import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "../Components/Constants/BASE_URL";
import { ImagePokeballLoading } from "../Components/PokemonCard/PokemonCardStyle";

export const GlobalStates = (props) => {
  const [homePokemons, setHomePokemons] = useState([]); // Estado para armazenar os pokémons exibidos na página inicial
  const [pokedex, setPokedex] = useState([]); // Estado para armazenar os pokémons capturados na Pokédex
  const [pokemon, setPokemon] = useState(null); // Estado para armazenar o pokémon selecionado
  const [loading, setLoading] = useState(true); // Estado para controlar o estado de carregamento
  const [currentPage, setCurrentPage] = useState(1); // Estado para controlar a página atual da lista de pokémons

  const getPokemons = async (page) => {
    try {
      const response = await axios.get(
        `${BASE_URL}?limit=20&offset=${(page - 1) * 20}`
      ); // Faz uma requisição para a API para obter uma lista de pokémons

      const { results } = response.data; // Obtém os resultados da resposta da API

      const promises = results.map(({ url }) => axios.get(url)); // Cria um array de promessas para buscar detalhes de cada pokémon
      const responses = await axios.all(promises); // Aguarda a resolução de todas as promessas

      const allPokemons = responses.map(({ data }) => ({
        ...data,
        capturado: false,
      })); // Mapeia as respostas da API para adicionar a propriedade "capturado" a cada pokémon

      setHomePokemons((prevPokemons) => [...prevPokemons, ...allPokemons]); // Atualiza a lista de pokémons exibidos na página inicial
      setLoading(false); // Define o estado de carregamento como falso
      setCurrentPage((prevPage) => prevPage + 1); // Atualiza o número da página atual
    } catch (error) {
      console.log(error.response); // Lida com erros e exibe no console
    }
  };

  useEffect(() => {
    setHomePokemons([]); // Limpa a lista de pokémons exibidos na página inicial
    setLoading(true); // Define o estado de carregamento como verdadeiro
    getPokemons(currentPage); // Obtém os pokémons da página atual
  }, []);

  const mostrarMaisPokemons = () => {
    getPokemons(currentPage); // Obtém os pokémons da próxima página
  };

  const mostrarMenosPokemons = () => {
    const quantidadeExibida = (currentPage - 1) * 20;
    const pokemonsExibidos = homePokemons.slice(0, quantidadeExibida);
    setHomePokemons(pokemonsExibidos);
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const adicionarAoPokedex = (pokemonAdicionar) => {
    const pokemonAtualizado = { ...pokemonAdicionar, capturado: true }; // Cria uma cópia do objeto pokemonAdicionar e define a propriedade capturado como true
    const novaPokedex = [...pokedex, pokemonAtualizado]; // Adiciona o pokémon capturado à Pokédex
    setPokedex(novaPokedex); // Atualiza a Pokédex
    const updatedHomePokemons = homePokemons.map((pokemon) =>
      pokemon.id === pokemonAdicionar.id
        ? pokemonAtualizado : pokemon
    ); // Atualiza a propriedade "capturado" do pokémon na lista de pokémons exibidos na página inicial
    const filteredPokemoms = updatedHomePokemons.filter(
      (pkmn) => !pkmn.capturado
    ); // Filtra os pokémons que não foram capturados
    setHomePokemons(filteredPokemoms); // Atualiza a lista de pokémons exibidos na página inicial
  };

  const removerDaPokedex = (pokemonRemover) => {
    const novaPokedex = pokedex.filter(
      (pokemonNaPokedex) => pokemonNaPokedex.id !== pokemonRemover.id
    ); // Remove o pokémon da Pokédex
    setPokedex(novaPokedex); // Atualiza a Pokédex
    const novoHome = [...homePokemons, { ...pokemonRemover, capturado: false }];
    novoHome.sort((a, b) => a.id - b.id); // Adiciona o pokémon novamente à lista de pokémons exibidos na página inicial e ordena por ID
    setHomePokemons(novoHome); // Atualiza a lista de pokémons exibidos na página inicial
  };

  if (loading) {
    return (
      <ImagePokeballLoading
        src="https://w7.pngwing.com/pngs/620/521/png-transparent-poke-ball-pokemon-pokemon-rim-mobile-phones-pokemon.png"
        alt="foto"
      />
    ); // Renderiza uma imagem de carregamento enquanto os dados estão sendo buscados
  }

  const context = {
    pokemon,
    setPokemon,
    homePokemons,
    pokedex,
    setPokedex,
    adicionarAoPokedex,
    removerDaPokedex,
    mostrarMaisPokemons,
    mostrarMenosPokemons,
  };
  
  return (
    <GlobalContext.Provider value={context}>
      {props.children}
    </GlobalContext.Provider>
  ); // Renderiza o contexto global para compartilhar os estados e as funções com os componentes filhos
};
