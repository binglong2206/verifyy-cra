import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './theme'
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import './App.css';

function App() {
  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <BrowserRouter>
        <Routes>
          <Route path='/edit/dashboard' element={<Dashboard />}/>
          <Route path='/:userId' element={<Login /> }/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
