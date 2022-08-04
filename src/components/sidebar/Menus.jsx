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
import axios from 'axios'
import { UploadProfile, UploadBackground } from "../../apis/uploadFirebase";
import YoutubeModal from '../whiteListModal/YoutubeModal'
import InstagramModal from '../whiteListModal/InstagramModal'
import FacebookModal from '../whiteListModal/FacebookModal'
import CustomToast from "../../hooks/CustomToast";


const MAX_FILE_SIZE = 524288; //512KB


const Menus = () => {
  let location = useLocation();
  const [modal, setModal] = useState('Profile');
  const activeBg = useColorModeValue("white", "gray.700");
  const inactiveBg = useColorModeValue("white", "gray.700");
  const activeColor = useColorModeValue("gray.700", "white");
  const inactiveColor = useColorModeValue("gray.400", "gray.400");
  const {isOpen, onOpen, onClose} = useDisclosure(); 
  const { isOpen: isYoutubeOpen , onOpen: onYoutubeOpen, onClose: onYoutubeClose } = useDisclosure()
  const { isOpen: isinstagramOpen , onOpen: onInstagramOpen, onClose: onInstagramClose } = useDisclosure()
  const { isOpen: isFacebookOpen , onOpen: onFacebookOpen, onClose: onFacebookClose } = useDisclosure()


  const getModalTitle = () => {
    if (modal === 'Profile') {
      return 'UPLOAD A NEW PROFILE'
    } else return 'UPLOAD A NEW BACKGROUND'
  }


  const [status, setStatus] = useState('idle');
  const [image, setImage] = useState({
      file: null,
      url: ""
    });

   
  const showSuccessToast = CustomToast('Upload Success.', 'Image uploaded.', 'success');
  const showErrorToast = CustomToast('Error', 'Something went wrong', 'error')
  // const toast = useToast();  
  // const showSuccessToast = () => {
  //       toast({
  //           title: 'Upload Success.',
  //           description: "Image uploaded.",
  //           status: 'success',
  //           duration: 9000,
  //           isClosable: true,
  //         });
  //   }

  // const showErrorToast = () => {
  //       toast({
  //           title: 'Error',
  //           description: "We've .",
  //           status: 'error',
  //           duration: 9000,
  //           isClosable: true,
  //         });
  //   }
    

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
  
 
    // const uploadToFirebase = async (file) => {
    //   setStatus('loading')

    //   // Create a FormData object and store the file and then make an axios post to server
    //   const formData = new FormData();
    //   formData.append('profile', file);
    //   await axios.post('http://localhost:8000/user/profile', formData , {
    //     withCredentials: true,
    //     headers: {
    //       'Content-Type': 'multipart-formdata'
    //     }
    //    }).then(r=> console.log('done uploading'))
     
    // };

    const uploadHandler = async() => {
      setStatus('loading');

      if (modal === 'Profile') {
        await UploadProfile(image.file)
          .then(r=> {
            setStatus('Upload Profile Done');
            showSuccessToast()
            onClose()
          })
      } else  {
        await UploadBackground(image.file)
          .then(r=> {
            setStatus('Upload Background Done');
            showSuccessToast()
            onClose()
          })
      }
    }



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
        <MenuButton text='Dashboard' isActive={true} />
        <MenuButton text='Profile' onOpen={onOpen} setModal={setModal} />
        <MenuButton text='Background' onOpen={onOpen} setModal={setModal} />
        <Text color={activeColor} fontWeight="bold" mb={{ xl: "12px"}} mx="auto" ps={{sm: "10px", xl: "16px"}} py="12px" > 
           CONNECT ANALYTICS
        </Text>
        <MenuButton text='Youtube' onOpen={onYoutubeOpen}/>
        <MenuButton text='Instagram' onOpen={onInstagramOpen}/>
        <MenuButton text='Facebook' onOpen={onFacebookOpen} />
      </Box>
    </Stack>    
    <YoutubeModal isOpen={isYoutubeOpen} onOpen={onYoutubeOpen} onClose={onYoutubeClose} />
    <InstagramModal isOpen={isinstagramOpen} onOpen={onInstagramOpen} onClose={onInstagramClose} />
    <FacebookModal isOpen={isFacebookOpen} onOpen={onFacebookOpen} onClose={onFacebookClose} />


    <OpenSourceCard />


    <Modal isOpen={isOpen} onClose={handleModalClose}>
        <ModalOverlay />
        <ModalContent minW="lg">
          <ModalCloseButton />
          <ModalHeader>
            <Text>{getModalTitle()}</Text>
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
                colorScheme="gray"
                size="sm"
                variant="solid"
                onClick={uploadHandler}
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