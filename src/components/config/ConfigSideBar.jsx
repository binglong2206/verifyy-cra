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
import { Separator } from "components/Separator/Separator";

export default function Configurator({isOpen, onClose}) {

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
              config sidebar
            </Text>
            <Text fontSize="md" mb="16px">
              Sblah blah chart stuff
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
       <div>content</div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

