import React, {useRef} from "react";
import { Button, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { SettingsIcon, SlackLogo } from "./Icons/Icons";

export default function DarkModeButton() {

  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let bgButton = useColorModeValue("white", "gray.600");
  const { colorMode, toggleColorMode } = useColorMode();



  const settingsRef = useRef();



  return (
    <>
      <Button
        h="52px"
        w="52px"
        onClick={toggleColorMode}
        bg={bgButton}
        position="fixed"
        variant="no-hover"
        left=""
        right="35px"
        bottom="30px"
        borderRadius="50px"
        boxShadow="0 2px 12px 0 rgb(0 0 0 / 16%)"
      >
       <SlackLogo
          cursor="pointer"
          ref={settingsRef}
          color={navbarIcon}
          w="20px"
          h="20px"
        /> 
        
      </Button>
    </>
  );
}


