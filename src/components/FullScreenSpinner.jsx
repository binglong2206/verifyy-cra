
import React, {useState, useEffect} from "react"
import { Button, useDisclosure, Modal, ModalOverlay, ModalContent, Spinner, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react"

export default function FullScreenSpinner(userStatus) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [size, setSize] = useState('md')
  
  
    useEffect(()=> {
        onOpen();

 
        
    },[userStatus, onOpen, onClose])
  
    return (
      <>
        <Modal onClose={onClose} size={'full'} isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              sad
            </ModalBody>
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }