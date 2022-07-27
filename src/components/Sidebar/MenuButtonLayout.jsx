import React from "react";
import {
    Box,
    Button, Flex,
    Link,
    Stack,
    Text,
    useColorModeValue
} from "@chakra-ui/react";
import IconBox from "../Icons/IconBox";
import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  SupportIcon,
} from "../Icons/Icons";



const MenuButtonLayout = ({text, isActive, icon}) => {
    /*eslint-disable*/
    const activeBg = useColorModeValue("white", "gray.700");
    const inactiveBg = useColorModeValue("white", "gray.700");
    const activeColor = useColorModeValue("gray.700", "white");
    const inactiveColor = useColorModeValue("gray.400", "gray.400");

    const getIcon = () => {
      switch(text){
        case 'Dashboard':
          return <StatsIcon color="inherit" />
       case 'Profile':
          return <StatsIcon color="inherit" />
        case 'Background':
          return <StatsIcon color="inherit" />
        case 'Youtube':
          return <StatsIcon color="inherit" />
        case 'Instagram':
         return <StatsIcon color="inherit" />
        case 'Facebook':
        return <StatsIcon color="inherit" />

        default:
          return null
      }
    }
  

  return ( 
  <Button
    boxSize="initial"
    justifyContent="flex-start"
    alignItems="center"
    bg={isActive ? activeBg: "transparent"}
    mb={{
      xl: "12px",
    }}
    mx={{
      xl: "auto",
    }}
    ps={{
      sm: "10px",
      xl: "16px",
    }}
    py="12px"
    borderRadius="15px"
    _hover="none"
    w="100%"
    _active={{
      bg: "inherit",
      transform: "none",
      borderColor: "transparent",
    }}
    _focus={{
      boxShadow: "none",
    }}
  >
    <Flex>
        <IconBox
          bg={isActive ? "red.500" : inactiveColor }
          color="white"
          h="30px"
          w="30px"
          me="12px"
        >
          {getIcon()}
        </IconBox>
      <Text color={isActive ? activeColor: inactiveColor} my="auto" fontSize="sm">
        {text}
      </Text>
    </Flex>
  </Button>)
   
}

export default MenuButtonLayout