import React, {useState} from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,

    ModalCloseButton,
    Button,
    useColorModeValue,
    Text,
    Input,
    FormControl,
    Stack,
    Flex, 
    Heading,
    Image,
    Box,
    Link,
  } from '@chakra-ui/react'
  import { CheckCircleIcon, ExternalLinkIcon } from '@chakra-ui/icons';
import axios from 'axios';
import { Navigate } from "react-router-dom";




export default function YoutubeModal({isOpen, onOpen, onClose}) {
    const [modalStep, setModalStep] = useState(1);
    const [isLoading, setLoading] = useState(false)
    const [input, setInput] = useState('')
    const [redirect, setRedirect] = useState('');


    const textColor = useColorModeValue("gray.400", "white");

    const handleSubmit = async () => {
      setLoading(true);

      setTimeout(async ()=> {
        setModalStep(2);
        setLoading(false);

        await axios.patch('/api/user/whitelist/youtube', {input}, {
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
                <Text color={'red.600'} as={'span'}>
                    Register your Youtube Account
                  </Text>
                </Heading>
                <Text fontSize={{ base: 'sm', lg: 'sm' }} color={textColor}>
                Our OAuth 2.0 APIs are currently only available to whitelisted user. Please consider loading a sample dataset to get started, or register to get whitelisted by providing the username & email to your relevant social platforms(Youtube, Instagram, Facebook)
                </Text>
                {/* <Text fontSize='10px' onClick={() => setRedirect(true)}>Super Special Link</Text>
                {redirect ? <Navigate to={`https://verifyy.co/api/youtube/redirect}`} push={true} /> : null} */}
                <Link href='https://verifyy.co/api/youtube/redirect'>
                    YT Oauth Dev Link <ExternalLinkIcon mx='2px' />
                      </Link>
                <FormControl id="facebookPageName" >
                <Input
                  onChange={(e)=> setInput(e.target.value)}
                  placeholder="Youtube Gmail Account"
                  _placeholder={{ color: 'gray.500' }}
                />
                
              </FormControl>
                  <Button
                    onClick={handleSubmit}
                    isLoading={isLoading}
                    rounded={'md'}
                    colorScheme='red'
                    >
                    Submit
                  </Button>

              </Stack>
            </Flex> }

            {modalStep === 2 && 
            <Flex p={8} flex={1} align={'center'} justify={'center'}>
              <Box textAlign="center" py={10} px={6}>
                  <CheckCircleIcon boxSize={'50px'} color={'red.600'} />
                  <Heading as="h2" size="lg" mt={6} mb={2}>
                      Registration received.
                  </Heading>
                  <Text color={'gray.500'} fontSize='lg'>
                    Your Youtube OAuth2.0 endpoints will be available within 24H.
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