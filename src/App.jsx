import React from "react";
import { ChakraProvider } from '@chakra-ui/react'
import theme from './themes'
import {Route, Routes, BrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard/Dashboard";
import Login from "./views/Login/Login";
import './App.css';

function App() {

  const login = async () => {
    await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: "include",
      body: JSON.stringify({username: 'logan', password: 'logan'})
    }).then(()=> console.log('logged in'))
  }


  return (
    <ChakraProvider theme={theme} resetCss={false}>
      <BrowserRouter>
        <Routes>
          <Route path='/edit/dashboard' element={<Dashboard />}/>
          <Route path='/' element={<Login /> }/>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
