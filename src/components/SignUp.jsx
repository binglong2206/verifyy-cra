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
  FormErrorMessage,
  FormHelperText
} from "@chakra-ui/react";
import {Formik, Form, Field} from 'formik';
import signInImage from "../assets/img/signInImage.png";
import axios from 'axios'

export default function SignUp() {
  const titleColor = useColorModeValue("teal.300", "teal.200");
  const textColor = useColorModeValue("gray.400", "white");
  const [isLoading, setLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const [showError, setShowError] = useState(false)


  const [state, dispatch] = useReducer( // (reducerFunction, initialState)
    (state, param) => { // param is whatever defined in dispatch params
      return { ...state, ...param }; // merge initial state with dispatch params
    },
    {
      email: "",
      username: "",
      password: "",
    }
  )

  const inputHandler = async (e) => {
    setLoading(true);
    setDisabled(true); // Reset if user change input
    setShowError(false); // Hide previous errors
    const { name, value } = e.target;

    // Make POST request to check username
    // await axios.post()

    // Simulate after request
    setTimeout(()=> {
      if(value === '' || !value){
        setShowError(true);
        setDisabled(true);
        setLoading(false);
        return;
      }

      if(value === 'demo'){
        setShowError(true);
        setDisabled(true);
        setLoading(false);
        return;
      }

      dispatch({ [name]: value });
      setLoading(false);
      setDisabled(false);
      setShowError(false);
    }, 1000);

   
  };


  const onSubmit = async(e) => {
    e.preventDefault(); // prevent form from default refresh;
    await axios.post('http://localhost:8000/login', state, {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    })
  }




  return (
    <Flex position='relative' mb='40px'>
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
                  Claim your free URL
                </FormLabel>
                <Flex>
                  <Flex ms='4px' fontSize='md' fontWeight='bold' alignItems='center'>
                    verifyy.co/
                  </Flex>
                    <Input onChange={inputHandler} name='username' placeholder='Username' borderRadius='10px' 
                    mb='0px'ml='7px' fontSize='sm' type='text' size='lg' maxLength='25' />
                </Flex>
                {!isDisabled && <FormHelperText pl='5px'>
                      Username available!
                    </FormHelperText>}
                {!showError && isDisabled ? (
                    <FormHelperText pl='5px'>
                      Tips: spaces will be replaced with an underscore "_"
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage pl='5px'>Input Error</FormErrorMessage>
                  )}
                <Button
                  onClick={()=>{console.log(state)}}
                  isLoading={isLoading}
                  disabled={isDisabled}
                  borderRadius='10px'
                  fontSize='10px'
                  type='submit'
                  bg='teal.300'
                  w='100%'
                  h='45'
                  mb='20px'
                  color='white'
                  mt='20px'
                  _hover={{
                    bg: "teal.200",
                  }}
                  _active={{
                    bg: "teal.400",
                  }}>
                  CONTINUE
                </Button>
              </FormControl>


            <Flex
              flexDirection='column'
              justifyContent='center'
              alignItems='center'
              maxW='100%'
              mt='0px'>
              <Text color={textColor} fontWeight='medium'>
                Others:
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Login
                </Link>
                {" "} or 
                <Link color={titleColor} as='span' ms='5px' fontWeight='bold'>
                  Demo Login
                </Link>
       
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
            bgImage={signInImage}
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

