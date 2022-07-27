import {
    Button,
    HStack,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Progress,
    Text,
    useColorModeValue,
    useToast,
    useDisclosure
  } from "@chakra-ui/react";
  import React, { useState } from "react";
  import { FiUpload } from "react-icons/fi";
  // import firebaseSDK from "../../services/firebase";
  
  const MAX_FILE_SIZE = 524288; //512KB
  

  
// THIS COMPONENT WILL BE USED IN THE SIDEBAR MENU COMPONENT
const ProfileUploadModal = (isOpen, onOpen, onClose) => {
    const toast = useToast();
    const [status, setStatus] = useState('idle');
    const [progress, setProgress] = useState(0);
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
      // make post request to server
      
    };
  
    return (
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
    );
  };
  
  export default ProfileUploadModal;
  