// Chakra Imports
import React, { useState, useRef } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Icon,
  Link,
  Switch,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Separator  from "../Separator";

export default function ConfigSideBar({isOpen, onClose}) {

  const { colorMode, toggleColorMode } = useColorMode();
  let bgButton = useColorModeValue(
    "linear-gradient(81.62deg, #313860 2.25%, #151928 79.87%)",
    "white"
  );
  let colorButton = useColorModeValue("white", "gray.700");
  const buttonBg = useColorModeValue("white", "transparent");
  const buttonBorder = useColorModeValue("gray.700", "white");
  const buttonColor = useColorModeValue("gray.700", "white");
  const settingsRef = useRef();

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px">
              Configure Dashboard
            </Text>
            <Text fontSize="md" mb="16px">
              Select your charts
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb="24px"
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Button onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
              </Flex>
              <Separator />
              <Box mt='24px'> 
                <Text fontSize="md" fontWeight="600" >
                    Youtube Configuration
                  </Text>
                  <Text fontSize="sm" mb="16px">
                    Modify the visibility of charts.
                  </Text>
              </Box>
              <Box> 
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  px='10px'
                >
                  <Text fontSize="md" fontWeight="600" mb="4px">
                    Dark/Light
                  </Text>
                  <Switch colorScheme="teal"/>
                </Flex>
                <Flex
                justifyContent="space-between"
                alignItems="center"
                px='10px'
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Switch colorScheme="teal"/>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                px='10px'
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Switch colorScheme="teal"/>
              </Flex>
              </Box>

              <Box mt='24px'> 
                <Text fontSize="md" fontWeight="600" >
                    Instagram Configuration
                  </Text>
                  <Text fontSize="sm" mb="16px">
                    Modify the visibility of charts.
                  </Text>
              </Box>
              <Box> 
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  px='10px'
                >
                  <Text fontSize="md" fontWeight="600" mb="4px">
                    Dark/Light
                  </Text>
                  <Switch colorScheme="teal"/>
                </Flex>
                <Flex
                justifyContent="space-between"
                alignItems="center"
                px='10px'
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Switch colorScheme="teal"/>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                px='10px'
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Switch colorScheme="teal"/>
              </Flex>
              </Box>

              <Box mt='24px'> 
                <Text fontSize="md" fontWeight="600" >
                    Facebook Page Configuration
                  </Text>
                  <Text fontSize="sm" mb="16px">
                    Modify the visibility of charts.
                  </Text>
              </Box>
              <Box> 
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  px='10px'
                >
                  <Text fontSize="md" fontWeight="600" mb="4px">
                    Dark/Light
                  </Text>
                  <Switch colorScheme="teal" disabled={true}/>
                </Flex>
                <Flex
                justifyContent="space-between"
                alignItems="center"
                px='10px'
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Switch colorScheme="teal" disabled={true}/>
              </Flex>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                px='10px'
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Switch colorScheme="teal" disabled={true}/>
              </Flex>
              </Box>





            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

