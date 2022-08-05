
import React, {useState, useEffect} from "react"
import { Flex, Button, useDisclosure, Modal, ModalOverlay, ModalContent, Spinner, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import PulseLoader from 'react-spinners/PulseLoader'
import PropagateLoader from 'react-spinners/PropagateLoader'

export default function FullScreenSpinner(userStatus) {
  
    return (
      <Flex h="100%" w="100%" zIndex={999} position="fixed" 
        left={0} top={0} overflowX="none" bgColor='black' justifyContent='center' alignItems='center' >
        <PulseLoader size={20} color="white"/>
      </Flex>
    )
  }