import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { getTypes } from "../../utils/ReturnPokemonType";
import {
  ContainerCard,
  ImagePokemon,
  ButtonCapture,
  ImagePokeball,
  PokemonName,
  TypesContainer,
  ButtonDetails,
  ButtonDelete,
  PokemonId,
} from "./PokemonCardStyle";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

function PokemonCard({ pokemon, cardColor }) {
  const { adicionarAoPokedex, removerDaPokedex, setPokemon } = useContext(
    GlobalContext
  );

  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [aberto, setAberto] = useState(false);  
  
  const handleDelete = () => {
    setModalTitle("Oh No!");
    setModalMessage(`${pokemon.name} removido da Pokédex com sucesso!`);
    setAberto(true);
    setTimeout(() => {
      removerDaPokedex(pokemon);  
    }, 1000);
  };

  const handleCapture = () => {
    setModalTitle("Pokemon Captured");
    setModalMessage(`Parabéns! Você capturou o Pokémon ${pokemon.name}!`);
    setAberto(true);
    //onOpen();
    setTimeout(() => {
      adicionarAoPokedex(pokemon);
    }, 1000); 
  };

  const goToPokeDetail = () => {
    setPokemon(pokemon);
    navigate(`/detalhes/${pokemon.id}`);
  };

  const formattedId = String(pokemon.id).padStart(2, "0");

  const renderTypes = () => {
    return pokemon.types.map((type, index) => (
      <img key={index} src={getTypes(type.type.name)} alt="type" />
    ));
  };

  const renderButton = () => {
    if (location.pathname === "/" || location.pathname === "") {
      return <ButtonCapture onClick={handleCapture}>Capturar!</ButtonCapture>;
    } else if (location.pathname === "/pokedex") {
      return <ButtonDelete onClick={handleDelete}>Excluir</ButtonDelete>;
    } else {
      return null;
    }
  };

  return (
    <>
      <ContainerCard color={cardColor}>
        <div>
          <PokemonId>#{formattedId}</PokemonId>
          <PokemonName>{pokemon.name}</PokemonName>
          <TypesContainer>{renderTypes()}</TypesContainer>
          <ButtonDetails onClick={goToPokeDetail}>
            <u>Detalhes</u>
          </ButtonDetails>
        </div>
        <div>
          <ImagePokemon
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt="fotinho"
          />
          <div>{renderButton()}</div>
        </div>
        <ImagePokeball src="../src/assets/pokebola.png" alt="pokeball" />
      </ContainerCard>

      
      <Modal isOpen={aberto} onClose={(onClose)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalBody>
            <p>{modalMessage}</p>
          </ModalBody>
          <ModalFooter>
          <Button colorScheme="blue" onClick={() => setAberto(false)}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PokemonCard;
