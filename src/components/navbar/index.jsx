import React, { useState } from "react";
import {
  Box,
  Flex,
  useColorModeValue,
} from "@chakra-ui/react";
import { SettingsIcon } from "../Icons/Icons";
import SidebarMobile from "../sidebar/Mobile";


export default function Navbar({onOpen}) {

  // Some default chakra colors, easier to change later
  let mainText = useColorModeValue("gray.700", "gray.200");
  let secondaryText = useColorModeValue("gray.400", "gray.200");
  let navbarPosition = "absolute";
  let navbarFilter = "none";
  let navbarBackdrop = "none"; //blur(21px)
  let navbarShadow = "none";
  let navbarBg = "none";
  let navbarBorder = "transparent";
  let secondaryMargin = "22px"; // 0px
  let paddingX = "30px";

  return (
    <Flex
      position={navbarPosition}
      boxShadow={navbarShadow}
      bg={navbarBg}
      borderColor={navbarBorder}
      filter={navbarFilter}
      backdropFilter={navbarBackdrop}
      borderWidth="1.5px"
      borderStyle="solid"
      transitionDelay="0s, 0s, 0s, 0s"
      transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
      transition-property="box-shadow, background-color, filter, border"
      transitionTimingFunction="linear, linear, linear, linear"
      alignItems={{ xl: "center" }}
      borderRadius="16px"
      display="flex"
      minH="75px"
      justifyContent={{ xl: "center" }}
      lineHeight="25.6px"
      mx="auto"
      mt={secondaryMargin}
      pb="8px"
      left={ ""}
      right={"30px"}
      px={{
        sm: paddingX,
        md: "30px",
      }}
      ps={{
        xl: "12px",
      }}
      pt="8px"
      top="18px"
      w={{ sm: "calc(100vw - 30px)", xl: "calc(100vw - 75px - 275px)" }}
    >
      <Flex
        w="100%"
        flexDirection={{
          sm: "column",
          md: "row",
        }}
        alignItems={{ xl: "center" }}
      >
        
      <Box ms="auto" w={{ sm: "100%", md: "unset" }}>
      <Flex
        pe={{ sm: "0px", md: "16px" }}
        w={{ sm: "100%", md: "auto" }}
        alignItems="center"            
        flexDirection="row">
          <SidebarMobile />
      </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}

