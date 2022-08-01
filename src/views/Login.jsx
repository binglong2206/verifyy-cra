import React, {useEffect} from "react";
import { useParams } from "react-router-dom";
import { Box, Portal, useColorMode } from "@chakra-ui/react";
import Footer from '../components/Footer'
import LoginNavBar from "../components/Navbar/LoginNavBar";
import Login from "../components/Login";
import SignUp from "../components/SignUp";


export default function AuthPage() {
  const navRef = React.useRef();
  const wrapper = React.createRef();
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    document.body.style.overflow = "unset";
    return function cleanup() {};
  });


  return (
      <Box ref={navRef} w="100%">
        <Portal containerRef={navRef}>
        <LoginNavBar />
        </Portal>
        <Box w="100%">
          <Box ref={wrapper} w="100%">
           <Login />
          </Box>
        </Box>
        <Box px="24px" mx="auto" width="1044px" maxW="100%">
          <Footer />
        </Box>
      </Box>
  );
}
