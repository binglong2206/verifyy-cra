import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import SiteRoutes  from "./routes/SiteRoutes";
import './App.css';




function App() {

  

  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <SiteRoutes />
    </ChakraProvider>
  );
}

export default App;
