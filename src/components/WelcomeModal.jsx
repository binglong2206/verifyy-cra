import React from "react";
import {
  ModalBody,
  Text,
  TextProps,
  useColorModeValue,
  Box,
  Modal,
  ModalOverlay,
  ModalCloseButton,
  ModalHeader,
  ModalContent,
  HStack,
  Button,
  ModalFooter,
} from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";

export default function WelcomeModal({ isOpen, onOpen, onClose }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent minW="2xl">
        <ModalCloseButton />
        <ModalHeader>
          <Text>Let's get started</Text>
          <Text
            fontSize="sm"
            color={useColorModeValue("gray", "whiteAlpha")}
            fontWeight="normal"
          >
            Select how to proceed
          </Text>
        </ModalHeader>
        <ModalBody display="flex" flexWrap={{ base: "wrap", md: "nowrap" }}>
          <Box
            p="4"
            m="2"
            cursor="pointer"
            flexBasis="50%"
            borderRadius="10px"
            border="2px solid"
            bg="blue.50"
            borderColor="blue.500"
            _hover={{ bg: "red.500" }}
          >
            <Box mb="8">
              <Text fontSize={"md"} fontWeight="semibold">
                Title
              </Text>
              <Box p={"20px"} />
              <Text fontSize={"sm"}>Subtitle</Text>
            </Box>
          </Box>
          <Box
            p="4"
            m="2"
            cursor="pointer"
            flexBasis="50%"
            borderRadius="10px"
            border="2px solid"
            bg="blue.50"
            borderColor="blue.500"
            _hover={{ bg: "red.500" }}
          >
            <Box mb="8">
              <Text fontSize={"md"} fontWeight="semibold">
                Title
              </Text>
              <Box p={"20px"} />
              <Text fontSize={"sm"}>Subtitle</Text>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="flex-end">
          <HStack>
            <Button
              onClick={() => onClose()}
              colorScheme="teal"
              rightIcon={<FiArrowRight />}
              loadingText="..."
            >
              Get Started
            </Button>
            <Button onClick={() => onClose()} variant="ghost">
              Cancel
            </Button>
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
