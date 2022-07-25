import React from "react";
import { Box, Portal } from "@chakra-ui/react";
import Footer from '../components/Footer'

export default function Pages() {
  const navRef = React.useRef();
  const wrapper = React.createRef();
  React.useEffect(() => {
    document.body.style.overflow = "unset";
    // Specify how to clean up after this effect:
    return function cleanup() {};
  });

  return (
      <Box ref={navRef} w="100%">
        <Portal containerRef={navRef}>
        <div>login nav bar</div>
        </Portal>
        <Box w="100%">
          <Box ref={wrapper} w="100%">
           <div>sign in component</div>
          </Box>
        </Box>
        <Box px="24px" mx="auto" width="1044px" maxW="100%">
          <Footer />
        </Box>
      </Box>
  );
}
