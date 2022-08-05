import React, {useRef} from "react";
import { Button, useColorModeValue, useColorMode } from "@chakra-ui/react";
import { SettingsIcon, SlackLogo } from "./Icons/Icons";
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';


export default function DarkModeButton() {

  let navbarIcon = useColorModeValue("gray.500", "gray.200");
  let bgButton = useColorModeValue("white", "gray.600");
  let hoverColor = useColorModeValue("gray.200", "gray.700");
  const { colorMode, toggleColorMode } = useColorMode();



  const settingsRef = useRef();



  return (
    <>
      <Button
        h="60px"
        w="60px"
        onClick={toggleColorMode}
        bg={bgButton}
        position="fixed"
        // variant="no-hover"
        left=""
        right="35px"
        bottom="30px"
        borderRadius="50px"
        boxShadow="sm"
        // _focus={{ boxShadow: 'none', bg:'red' }}
        _hover={{bg: hoverColor}}
      >
      {colorMode === 'light' ? <BsMoonStarsFill /> : <BsSun />}  
      </Button>
    </>
  );
}


