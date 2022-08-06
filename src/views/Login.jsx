import React, {useEffect} from "react";
import { Box, Portal } from "@chakra-ui/react";
import Footer from '../components/Footer'
import LoginNavBar from "../components/navbar/LoginNavBar";
import Login from "../components/Login";


export default function AuthPage() {
  const navRef = React.useRef();
  const wrapper = React.createRef();

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
