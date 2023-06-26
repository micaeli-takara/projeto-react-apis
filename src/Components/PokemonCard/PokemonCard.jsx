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
  ModalContent,
  ModalHeader,
  ModalFooter,
  Button,
  useDisclosure,
  Text,
} from "@chakra-ui/react";
import { pokebola } from "../../assets/others/pokebola.png";

function PokemonCard({ pokemon, cardColor }) {
  const { adicionarAoPokedex, removerDaPokedex, setPokemon } =
    useContext(GlobalContext);

  const location = useLocation();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalMessage, setModalMessage] = useState("");
  const [modalTitle, setModalTitle] = useState("");
  const [aberto, setAberto] = useState(false);

  const handleDelete = () => {
    setModalTitle(`Oh No!`);
    setModalMessage(`Pokémon removido da Pokédex com sucesso!`);
    setAberto(true);
    setTimeout(() => {
      removerDaPokedex(pokemon);
    }, 1000);
  };

  const handleCapture = () => {
    setModalTitle(`Gotcha!`);
    setModalMessage(`O Pokémon foi adicionado a sua Pokédex`);
    setAberto(true);
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
        <ImagePokeball src={pokebola} alt="pokeball" />
      </ContainerCard>

      <Modal isOpen={aberto} onClose={onClose} size="md">
        <ModalContent
          width="28rem"
          height="13rem"
          borderRadius="12px"
          background="#FFF"
        >
          <ModalHeader
            fontFamily="Poppins"
            fontSize="48px"
            fontWeight="700"
            textAlign="center"
          >
            {modalTitle}
          </ModalHeader>
          <Text
            fontFamily="Poppins"
            fontSize="16px"
            fontWeight="700"
            textAlign="center"
          >
            {modalMessage}

          </Text>

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
