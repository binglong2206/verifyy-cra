
import React, {useState, useEffect} from "react"
import { Flex, Text, Box, Button, useDisclosure, Modal, ModalOverlay, ModalContent, Spinner, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"
import PulseLoader from 'react-spinners/PulseLoader'
import PropagateLoader from 'react-spinners/PropagateLoader'
import Zoom from 'react-reveal/Zoom';


export default function FullScreenSpinner({username}) {
    return (
      <Flex h="100%" w="100%" zIndex={999} position="fixed" 
        left={0} top={0} overflowX="none" bgColor='black' justifyContent='center' alignItems='center' >
          <Flex flexDir={'column'} alignItems='center'>
            {/* <Text margin='auto' color="white">Loading</Text> */}
            <PulseLoader size={30} color="white"/>
          </Flex>
      </Flex>
    )
  }