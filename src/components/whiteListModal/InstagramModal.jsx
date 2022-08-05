import React, {useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useColorModeValue,
    Text,
    Input,
    HStack,
    FormControl,
    Stack,
    Flex, 
    Heading,
    useBreakpointValue,
    Image,
    Box
  } from '@chakra-ui/react'
  import { CheckCircleIcon } from '@chakra-ui/icons';
  import { FiUpload } from "react-icons/fi";
import axios from 'axios';



export default function InstagramModal({isOpen, onOpen, onClose}) {
    const [modalStep, setModalStep] = useState(1);
    const [isLoading, setLoading] = useState(false)
    const [input, setInput] = useState('')


    const textColor = useColorModeValue("gray.400", "white");

    const handleSubmit = async () => {
      setLoading(true);

      setTimeout(async ()=> {
        setModalStep(2);
        setLoading(false);

        await axios.patch('http://localhost:8000/user/whitelist/instagram', {input}, {
          withCredentials: true
        })
          .then(r=>console.log('youtube whitelist requested'))
          .catch(e=>console.error(e))
      },1500)
    }

    return (
      <>  
        <Modal onClose={onClose} size={'3xl'} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
         
          <Stack direction={{ base: 'column', md: 'row' }}>
            <Flex flex={1}>
              <Image
                alt={'Login Image'}
                objectFit={'cover'}
                src={
                  'https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                }
              />
            </Flex>

            {modalStep === 1 && 
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
              <Stack spacing={7} w={'full'} maxW={'lg'}>
                <Heading fontSize={{ base: 'sm', md: 'md', lg: 'xl' }}>
                <Text color='purple.600' as={'span'}>
                    Register your Instagram Account
                  </Text>
                </Heading>
                <Text fontSize={{ base: 'sm', lg: 'sm' }} color={textColor}>
                  Verifyy.co is currently still in beta phase, so every users are technically beta-users. Please subtmit the Page name you intend to connect, 
                  and our team will promptly whitelist your account. No sensitive information would be shared and 
                  you will be able connect to your analytics within 24H.
                </Text>
                <FormControl id="facebookPageName" >
                <Input
                  onChange={(e)=> setInput(e.target.value)}
                  placeholder="Instagram Business Account Name"
                  _placeholder={{ color: 'gray.500' }}
                />
              </FormControl>
                  <Button
                    onClick={handleSubmit}
                    isLoading={isLoading}
                    rounded={'md'}
                    colorScheme='purple'
                    color={'white'}
                    >
                    Submit
                  </Button>
              </Stack>
            </Flex> }

            {modalStep === 2 && 
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
              <Box textAlign="center" py={10} px={6}>
              <CheckCircleIcon boxSize={'50px'} color={'purple.600'} />
                  <Heading as="h2" size="lg" mt={6} mb={2}>
                      Registration received.
                  </Heading>
                  <Text color={'gray.500'} fontSize='lg'>
                    Our Instagram OAuth2.0 endpoints will be available within 24H.
                    Please check back later.
                  </Text>
              </Box>
            </Flex> }
            
      </Stack>
        </ModalContent>
      </Modal>
      </>
    )
  }