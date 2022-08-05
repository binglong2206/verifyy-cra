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
  const [selectSample, setSelectSample] = useState(true);
  const [loading, setLoading] = useState(false)

  // Data States
  const setYoutubeState = useYoutubeStore(state=>state.setYoutubeState)
  const setInstagramState = useInstagramStore(state=> state.setInstagramState)
  const setFacebookState = useFacebookStore(state=>state.setFacebookState);
  const setStatState = useUserStore(state=>state.setStatState);

  const handleStart = async ()=> {
    setLoading(true)
    if (selectSample) {
      await axios.get('http://localhost:8000/user/sampleData', { // POST needs body
      withCredentials: true
        }).then(r=>{
          setStatState(r.data.stat)
          setYoutubeState(r.data.yt);
          setInstagramState(r.data.ig);
          setFacebookState(r.data.fb);
        }).then(()=>onClose())
    } else {
      onClose();
      setLoading(false)
    }
    
  }


  return (
    <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
      <ModalOverlay />
      <ModalContent minW="2xl" p="8px">
        {/* <ModalCloseButton /> */}
        <ModalHeader>
          <Text>Let's get started</Text>
          <Text
            mt="7px"
            fontSize="md"
            color={useColorModeValue("gray", "whiteAlpha")}
            fontWeight="normal"
          >
            Our OAuth 2.0 APIs are currently only available to whitelisted user. Please consider loading a sample dataset to get started,
            or register to get whitelisted by providing the username & email to your relevant social platforms(Youtube, Instagram, Facebook) 
          </Text>
        </ModalHeader>
        <ModalBody display="flex" flexWrap={{ base: "wrap", md: "nowrap" }}>
          <Box
            onClick={()=>setSelectSample(true)}
            p="4"
            m="2"
            cursor="pointer"
            flexBasis="50%"
            borderRadius="10px"
            border="2px solid"
            bg={selectSample ? "gray.100" : ""}
            borderColor={selectSample ? "gray.400" : "gray.200"}
            _hover={{ bg: "gray.200" }}
          >
            <Box mb="8">
              <Text fontSize={"md"} fontWeight="semibold">
                Load Sample Data
              </Text>
              <Box p={"12px"} />
              <Text fontSize={"sm"}>Insert a demo dataset into your dashboard and start testing!</Text>
            </Box>
          </Box>
          <Box
            onClick={()=>setSelectSample(false)}
            p="4"
            m="2"
            cursor="pointer"
            flexBasis="50%"
            borderRadius="10px"
            border="2px solid"
            bg={!selectSample ? "gray.50" : ""}
            borderColor={!selectSample ? "gray.300" : "gray.200"}
            _hover={{ bg: "gray.200" }}
          >
            <Box mb="8">
              <Text fontSize={"md"} fontWeight="semibold">
                Whitelist Registration
              </Text>
              <Box p={"12px"} />
              <Text fontSize={"sm"}>Click on any of the 3 social icons on the left sidebar to start the registration.</Text>
            </Box>
          </Box>
        </ModalBody>
        <ModalFooter display="flex" justifyContent="flex-end">
          <HStack>
            <Button
              onClick={handleStart}
              colorScheme="gray"
              rightIcon={<FiArrowRight />}
              loadingText="Uploading dataset"
              isLoading={loading}
            >
              Get Started
            </Button>
            {/* <Button onClick={() => onClose()} variant="ghost">
              Cancel
            </Button> */}
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
