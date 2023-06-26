import { useContext, useState } from "react";
import {
  ContainerHome,
  ContainerListCard,
  TituloAllPokemons,
  ButtonWrapper,
  StyledButton,
} from "./PokemonsListPageStyle";
import { getColors } from "../../utils/ReturnPokemonColor";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokemonsListPage() {
  const {
    adicionarAoPokedex,
    mostrarMaisPokemons,
    mostrarMenosPokemons,
    currentPage,
    homePokemons,
    isFetching,
  } = useContext(GlobalContext);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalMessage, setModalMessage] = useState("");
  const [enableButton, setEnableButton] = useState(true);

  const handleClickMostrarMenos = () => {
    setModalMessage("20 pokémons foram retirados da sua Home");
    onOpen();
    mostrarMenosPokemons();
    if (homePokemons.length == 40){
      setEnableButton(true);
    }
    
  };

  const handleClickMostrarMais = () => {
    setModalMessage("20 pokémons foram adicionados a sua Home");
    onOpen();
    mostrarMaisPokemons();
    setEnableButton(false);
  };

  return (
    <>
      <ContainerHome>
        <ButtonWrapper>
          <StyledButton
            onClick={handleClickMostrarMenos}
            disabled={enableButton}
            grayedOut={currentPage === 1 || isFetching}
          >
            Mostrar Menos
          </StyledButton>
          <StyledButton
            onClick={handleClickMostrarMais}
            disabled={isFetching}
            grayedOut={isFetching}
          >
            Mostrar Mais
          </StyledButton>
        </ButtonWrapper>
        <TituloAllPokemons>Todos Pokémons</TituloAllPokemons>
        <ContainerListCard>
          {homePokemons.map((pkmn, idx) => {
            return !pkmn.cancelado ? (
              <PokemonCard
                key={idx}
                pokemon={pkmn}
                adicionarAoPokedex={adicionarAoPokedex}
                cardColor={getColors(pkmn.types[0].type.name)}
              />
            ) : (
              false
            );
          })}
        </ContainerListCard>
      </ContainerHome>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mensagem Divertida</ModalHeader>
          <ModalBody>{modalMessage}</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PokemonsListPage;
