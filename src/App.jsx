import { GlobalStyle } from "./GlobalStyle";
import Router from "./Router/Router";
import { ChakraProvider } from "@chakra-ui/react";
import { GlobalStates } from "./contexts/GlobalStates";

function App() {
  return (
    <>
      <GlobalStates>
        <ChakraProvider>
          <GlobalStyle />
          <Router />
        </ChakraProvider>
      </GlobalStates>
    </>
  );
};

export default App;
