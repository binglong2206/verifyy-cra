import React from "react";
import {
    Box,
    Button, Flex,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure
} from "@chakra-ui/react";
import IconBox from "../Icons/IconBox";
import { CreativeTimLogo } from "../Icons/Icons";
import Separator from "../Separator";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes/sidebarRoutes";
import OpenSourceCard from "./OpenSourceCard";
import MenuButton from "./MenuButtonLayout";
import ProfileUpload from "../ProfileUpload";



const Menus = () => {
  let location = useLocation();
  const activeBg = useColorModeValue("white", "gray.700");
  const inactiveBg = useColorModeValue("white", "gray.700");
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("gray.400", "gray.400");

  const {isOpen, onOpen, onClose} = useDisclosure; 

  


    return (
    <>
    <Box pt={"25px"} mb="12px">
      <Link
        href="google.com"
        target="_blank"
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <CreativeTimLogo w="32px" h="32px" me="10px" />
        <Text fontSize="sm" mt="3px">
          verifyy.co
        </Text>
      </Link>
      <Separator></Separator>
    </Box>
    <Stack direction="column" mb="40px">
      <Box key='asd'>
        <MenuButton text='Dashboard' isActive={true} />
        <MenuButton text='Profile' onClick={}/>
        <MenuButton text='Background' />
        <Text color={activeColor} fontWeight="bold" mb={{ xl: "12px"}} mx="auto" ps={{sm: "10px", xl: "16px"}} py="12px" > 
           CONNECT ANALYTICS
        </Text>
        <MenuButton text='Youtube' />
        <MenuButton text='Instagram' />
        <MenuButton text='Facebook' />
      </Box>
    </Stack>
    <OpenSourceCard />
    </>
  )
}

export default Menus