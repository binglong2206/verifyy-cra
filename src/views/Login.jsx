import React from "react";
import { useParams } from "react-router-dom";
import { Box, Portal } from "@chakra-ui/react";
import Footer from '../components/Footer'
import LoginNavBar from "../components/Navbar/LoginNavBar";
import LoginComponent from "../components/LoginComponent";

export default function Pages() {
  const navRef = React.useRef();
  const wrapper = React.createRef();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    return function cleanup() {};
  });

  const {userId} = useParams();

  return (
      <Box ref={navRef} w="100%">
        <Portal containerRef={navRef}>
        <LoginNavBar />
        </Portal>
        <Box w="100%">
          <Box ref={wrapper} w="100%">
           <LoginComponent />
          </Box>
        </Box>
        <Box px="24px" mx="auto" width="1044px" maxW="100%">
          <h1>{userId}</h1>
          <Footer />
        </Box>
      </Box>
  );
}
