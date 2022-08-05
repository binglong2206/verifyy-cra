
import React, {useState, useEffect} from "react"
import { Flex, Button, useDisclosure, Modal, ModalOverlay, ModalContent, Spinner, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"

export default function FullScreenSpinner(userStatus) {
  
    return (
      <Flex h="100%" w="100%" zIndex={999} position="fixed" 
        left={0} top={0} overflowX="none" bgColor='red' justifyContent='center' alignItems='center' >
        Loading...
      </Flex>
    )
  }