import React from "react";
import {
    Button,
    Flex,
    HStack,
    Link,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import {
    CreativeTimLogo,
    DocumentIcon,
    HomeIcon,
    RocketIcon,
  } from "../Icons/Icons";
  import { NavLink } from "react-router-dom";
  
  export default function LoginNavBar() {
    let navbarIcon = useColorModeValue("gray.700", "gray.200");
    let mainText = useColorModeValue("gray.700", "gray.200");
    let navbarBg = useColorModeValue(
      "linear-gradient(112.83deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 255, 255, 0.8) 110.84%)",
      "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
    );
    let navbarBorder = useColorModeValue(
      "1.5px solid #FFFFFF",
      "1.5px solid rgba(255, 255, 255, 0.31)"
    );
    let navbarShadow = useColorModeValue(
      "0px 7px 23px rgba(0, 0, 0, 0.05)",
      "none"
    );
    let navbarFilter = useColorModeValue(
      "none",
      "drop-shadow(0px 7px 23px rgba(0, 0, 0, 0.05))"
    );
    let navbarBackdrop = "blur(21px)";
    let bgButton = useColorModeValue(
      "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
      "gray.800"
    );
    let navbarPosition = "fixed";
    let colorButton = "white";
  
   
   
    return (
      <Flex
        position={navbarPosition}
        top="16px"
        left="50%"
        transform="translate(-50%, 0px)"
        background={navbarBg}
        border={navbarBorder}
        boxShadow={navbarShadow}
        filter={navbarFilter}
        backdropFilter={navbarBackdrop}
        borderRadius="15px"
        px="16px"
        py="22px"
        mx="auto"
        width="1044px"
        maxW="90%"
        alignItems="center"
      >
        <Flex w="100%" justifyContent={{ sm: "start", lg: "space-between" }}>
          
        <Link
        href={`/`}
        target="_blank"
        display="flex"
        lineHeight="100%"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        color={mainText}
      >
        <RocketIcon w="32px" h="32px" me="10px" />
        <Text fontSize="sm" mt="3px">
          verifyy.co
        </Text>
      </Link>
  
          
      <HStack display={{ sm: "none", lg: "flex" }}>
        <NavLink to="/edit">
          <Button
            fontSize="sm"
            ms="0px"
            // me="0px"
            px="0px"
            me={{ sm: "2px", md: "16px" }}
            color={navbarIcon}
            variant="transparent-with-icon"
            leftIcon={<HomeIcon color={navbarIcon} w="12px" h="12px" me="0px" />}
          >
            <Text>Dashboard</Text>
          </Button>
        </NavLink>
        <Link href="https://github.com/binglong2206/verifyy-cra"
          target="_blank">
          <Button
            fontSize="sm"
            ms="0px"
            // me="0px"
            px="0px"
            me={{ sm: "2px", md: "16px" }}
            color={navbarIcon}
            variant="transparent-with-icon"
            leftIcon={
              <RocketIcon color={navbarIcon} w="12px" h="12px" me="0px" />
            }
          >
            <Text>Source Code</Text>
          </Button>
          </Link>
  
        <NavLink to="/">
          <Button
            fontSize="sm"
            ms="0px"
            // me="0px"
            px="0px"
            me={{ sm: "2px", md: "16px" }}
            color={navbarIcon}
            variant="transparent-with-icon"
            leftIcon={
              <RocketIcon color={navbarIcon} w="12px" h="12px" me="0px" />
            }
          >
            <Text>Sign Up</Text>
          </Button>
        </NavLink>
        <NavLink to="/login">
          <Button
            fontSize="sm"
            ms="0px"
            px="0px"
            me={{ sm: "2px", md: "16px" }}
            color={navbarIcon}
            variant="transparent-with-icon"
            leftIcon={
              <DocumentIcon color={navbarIcon} w="12px" h="12px" me="0px" />
            }
          >
            <Text>Login</Text>
          </Button>
        </NavLink>
      </HStack>
  
          <Link href="/login">
            <Button
              bg={bgButton}
              color={colorButton}
              fontSize="xs"
              variant="no-hover"
              borderRadius="35px"
              px="30px"
              display={{
                sm: "none",
                lg: "flex",
              }}
            >
              Demo Login
            </Button>
          </Link>
        </Flex>
      </Flex>
    );
  }
  
  