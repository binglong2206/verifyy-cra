import React, {useReducer, useState} from "react";
import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  FormErrorMessage
} from "@chakra-ui/react";
import signInImage from "../assets/img/signInImage.png";
import modernBackground from '../assets/img/modernBackground.webp'
import axios from 'axios'
import { Navigate, NavLink } from "react-router-dom";


export default function LoginComponent() {
  const titleColor = useColorModeValue("blue.300", "blue.200");
  const textColor = useColorModeValue("gray.400", "white");

  const [navigate, setNavigate] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [showError, setShowError] = useState(false);
  const [state, dispatch] = useReducer( // (reducerFunction, initialState)
    (state, param) => { // param is whatever defined in dispatch params
      return { ...state, ...param }; // merge initial state with dispatch params
    },
    {
      username: "demo", // Default states
      password: "demo",
    }
  )

  const handleInput = (e) => {
    const { name, value } = e.target;
    dispatch({ [name]: value });
  };


  const onSubmit = async(e) => {
    setLoading(true);
    setShowError(false)
    e.preventDefault(); // prevent form from default refresh;
    await axios.post('/api/login', state, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    }).then(r => {
      // setLoading(false)
      setNavigate(true)
    }).catch(e=>{
      setLoading(false);
      setShowError(true)
      console.error(e)
    })
  }


  return (
    <Flex position='relative' mb='40px'>
      {navigate && <Navigate to={`/edit`} push={true} /> }
      <Flex
        h={{ sm: "initial", md: "75vh", lg: "85vh" }}
        w='100%'
        maxW='1044px'
        mx='auto'
        justifyContent='space-between'
        mb='30px'
        pt={{ sm: "100px", md: "0px" }}>
        <Flex
          alignItems='center'
          justifyContent='start'
          style={{ userSelect: "none" }}
          w={{ base: "100%", md: "50%", lg: "42%" }}>
          <Flex
            direction='column'
            w='100%'
            background='transparent'
            p='48px'
            mt={{ md: "150px", lg: "80px" }}>
            <Heading color={titleColor} fontSize='32px' mb='10px'>
              Welcome Back
            </Heading>
            <Text
              mb='36px'
              ms='4px'
              color={textColor}
              fontWeight='bold'
              fontSize='14px'>
              Enter your email and password to sign in
            </Text>
            <FormControl onSubmit={onSubmit} isInvalid={showError}>
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Username
              </FormLabel>
              <Input
                onChange={handleInput}
                value={state.username}
                name='username'
                borderRadius='15px'
                mb='24px'
                fontSize='sm'
                type='text'
                placeholder='Your email adress'
                size='lg'
              />
              <FormLabel ms='4px' fontSize='sm' fontWeight='normal'>
                Password
              </FormLabel>
              <Input
                onChange={handleInput}
                value={state.password}
                name='password'
                borderRadius='15px'
                mb='5px'
                fontSize='sm'
                type='password'
                placeholder='Your password'
                size='lg'
              />
              <FormErrorMessage mb='10px'>Either username or password is incorrect. </FormErrorMessage>
              <FormControl display='flex' alignItems='center' mt={'15px '}>
                <Switch id='remember-login' colorScheme='blue' me='10px' />
                <FormLabel
                  htmlFor='remember-login'
                  mb='0'
                  ms='1'
                  fontWeight='normal'>
                  Remember me
                </FormLabel>
              </FormControl>
              <Button
                onClick={onSubmit}
                isLoading={isLoading}
                fontSize='10px'
                type='submit'
                colorScheme={'blue'}
                // bg='blue.300'
                w='100%'
                h='45'
                mb='20px'
                color='white'
                mt='20px'
                >
                SIGN IN
              </Button>
            </FormControl>
            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Don't have an account?
                <NavLink to='/' color={titleColor} as='span' ms='5px' fontWeight='bold'>
                 {" "}Sign Up
                </NavLink>
             
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={{ base: "none", md: "block" }}
          overflowX='hidden'
          h='100%'
          w='40vw'
          position='absolute'
          right='0px'>
          <Box
            bgImage={modernBackground}
            bgColor= 'black'
            w='100%'
            h='100%'
            bgSize='cover'
            bgPosition='50%'
            position='absolute'
            borderBottomLeftRadius='20px'></Box>
        </Box>
      </Flex>
    </Flex>
  );
}

