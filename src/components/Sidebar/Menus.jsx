import React, {useState} from "react";
import {
    Box,
    Button, Flex,
    Link,
    Stack,
    Text,
    useColorModeValue,
    useDisclosure,
    ModalOverlay,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    Input,
    ModalCloseButton,
    ModalHeader,
    HStack,
    useToast
} from "@chakra-ui/react";
import { FiUpload } from "react-icons/fi";
import IconBox from "../Icons/IconBox";
import { CreativeTimLogo } from "../Icons/Icons";
import Separator from "../Separator";
import { NavLink, useLocation } from "react-router-dom";
import routes from "../../routes/sidebarRoutes";
import OpenSourceCard from "./OpenSourceCard";
import MenuButton from "./MenuButtonLayout";
import ProfileUpload from "../ProfileUploadModal";

const MAX_FILE_SIZE = 524288; //512KB


const Menus = () => {
  let location = useLocation();
  const activeBg = useColorModeValue("white", "gray.700");
  const inactiveBg = useColorModeValue("white", "gray.700");
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("gray.400", "gray.400");

  const {isOpen, onOpen, onClose} = useDisclosure(); 
  const toast = useToast();
    const [status, setStatus] = useState('idle');
    const [image, setImage] = useState({
      file: null,
      url: ""
    });
  
    const showSuccessToast = () => {
        toast({
            title: 'Upload Success.',
            description: "We've created your account for you.",
            status: 'success',
            duration: 9000,
            isClosable: true,
          });
    }

    const showErrorToast = () => {
        toast({
            title: 'Error',
            description: "We've created your account for you.",
            status: 'error',
            duration: 9000,
            isClosable: true,
          });
    }
    

    const handleModalClose = () => {
      setImage({ ...image, file: null });
      onClose();
    };


    const handleImageChange = async (e) => {
      const file = e.target.files[0];
  
      if (file) {
        if (file.size > MAX_FILE_SIZE) {
          setImage({ ...image, file: null });
          return showErrorToast();
        }
          setImage({ ...image, file });

      } else {
        setImage({ ...image, file: null });
      }
    };
  
 
    const uploadToFirebase = async (file) => {
      setStatus('loading')
      // make post request to server
       setTimeout(()=> {
        showSuccessToast();
        setStatus('done');
        onClose()
       },3000)
    };




    return (
    <>
    <Box pt={"25px"} mb="12px">
      <Link
        href="google.com"
        target="_blank"
        display="flex"
        lineHeight="100%"
        mb="30px"
        fontWeight="bold"
        justifyContent="center"
        alignItems="center"
        fontSize="11px"
      >
        <CreativeTimLogo w="32px" h="32px" me="10px" />
        <Text fontSize="sm" mt="3px">
          verifyy.co
        </Text>
      </Link>
      <Separator></Separator>
    </Box>
    <Stack direction="column" mb="40px">
      <Box key='asd'>
        <button onClick={onOpen}>yoyo</button>
        <MenuButton text='Dashboard' isActive={true} />
        <MenuButton text='Profile' />
        <MenuButton text='Background' />
        <Text color={activeColor} fontWeight="bold" mb={{ xl: "12px"}} mx="auto" ps={{sm: "10px", xl: "16px"}} py="12px" > 
           CONNECT ANALYTICS
        </Text>
        <MenuButton text='Youtube' />
        <MenuButton text='Instagram' />
        <MenuButton text='Facebook' />
      </Box>
    </Stack>    
    <OpenSourceCard />

    <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent minW="lg">
          <ModalCloseButton />
          <ModalHeader>
            <Text>Upload New Photo</Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray", "whiteAlpha")}
              fontWeight="normal"
            >
              Choose a file to upload
            </Text>
          </ModalHeader>
          <ModalBody>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray", "whiteAlpha.600")}
            >
              Supported Format: PNG/JPEG. Max file size = 512KB
            </Text>
            <Input
              type="file"
              accept="image/x-png, image/jpeg"
              onChange={handleImageChange}
              pt="1"
              variant="filled"
              my="4"
            />
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button
                rightIcon={<FiUpload />}
                colorScheme="purple"
                size="sm"
                variant="solid"
                onClick={() => uploadToFirebase(image.file)}
                isLoading={status === 'loading'}
                loadingText="Uploading"
                isDisabled={!image.file}
              >
                Upload
              </Button>
              <Button
                colorScheme="gray"
                size="sm"
                variant="ghost"
                onClick={handleModalClose}
                isDisabled={status === 'loading'}
              >
                Cancel
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Menus