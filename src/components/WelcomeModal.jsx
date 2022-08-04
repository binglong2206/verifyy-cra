import React, {useState} from "react";
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
import axios from "axios";
import InitDashboard from "../hooks/InitDashboard";
import { useTabStore, useUserStore, useYoutubeStore, useInstagramStore, useFacebookStore } from "../state/useStore";


export default function WelcomeModal({ isOpen, onOpen, onClose }) {
  const [selected, setSelected] = useState('L')

  // Data States
  const setYoutubeState = useYoutubeStore(state=>state.setYoutubeState)
  const setInstagramState = useInstagramStore(state=> state.setInstagramState)
  const setFacebookState = useFacebookStore(state=>state.setFacebookState);
  const setStatState = useUserStore(state=>state.setStatState);

  const handleStart = async ()=> {
    await axios.get('http://localhost:8000/user/sampleData', { // POST needs body
      withCredentials: true
    }).then(r=>{
      setStatState(r.data.stat)
      setYoutubeState(r.data.yt);
      setInstagramState(r.data.ig);
      setFacebookState(r.data.fb);
    }).then(()=>onClose())
  }


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
            onClick={()=>setSelected('L')}
            p="4"
            m="2"
            cursor="pointer"
            flexBasis="50%"
            borderRadius="10px"
            border="2px solid"
            bg={selected==='L' ? "blue.50" : ""}
            borderColor={selected==='L' ? "blue.500" : ""}
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
            onClick={()=>setSelected('R')}
            p="4"
            m="2"
            cursor="pointer"
            flexBasis="50%"
            borderRadius="10px"
            border="2px solid"
            bg={selected==='R' ? "blue.50" : ""}
            borderColor={selected==='R' ? "blue.500" : ""}
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
              onClick={handleStart}
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
