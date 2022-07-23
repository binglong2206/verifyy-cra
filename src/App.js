import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './themes'
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <div className="App">Hellow World</div>
    </ChakraProvider>
  );
}

export default App;
