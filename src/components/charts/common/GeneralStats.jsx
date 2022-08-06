import React from "react";
import {
    Button,
    Flex,
    Text,
    useColorModeValue,
    Image
  } from "@chakra-ui/react";
import Card from "../../card/Card";
import CardBody from "../../card/CardBody";
import CardHeader from "../../card/CardHeader";
  
  const GeneralStats = ({ title }) => {
    const textColor = useColorModeValue("gray.700", "white");
  
    return (
      <Card maxHeight='290.5px' p='1rem'> 
        <CardHeader p='12px 5px' mb='12px'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {'stats'}
          </Text>
        </CardHeader>
        <CardBody px='5px'>
          <Flex direction='column' w='100%'>
            <Flex justifyContent='space-between' mb='21px'>
              <Flex align='center'>
                <Image
                  src={'avatar2'}
                  alt='asd'
                  w='50px'
                  h='50px'
                  borderRadius='15px'
                  me='10px'
                />
                <Flex direction='column'>
                  <Text fontSize='sm' color={textColor} fontWeight='bold'>
                    Followers
                  </Text>
                </Flex>
              </Flex>
              <Button p='0px' bg='transparent' variant='no-hover'>
                <Text
                  fontSize='sm'
                  fontWeight='600'
                  color='teal.300'
                  alignSelf='center'>
                  800
                </Text>
              </Button>
            </Flex>
            <Flex justifyContent='space-between' mb='21px'>
              <Flex align='center'>
              <Image
                  src={'avatar2'}
                  alt='asd'
                  w='50px'
                  h='50px'
                  borderRadius='15px'
                  me='10px'
                />
                <Flex direction='column'>
                  <Text fontSize='sm' color={textColor} fontWeight='bold'>
                    Likes
                  </Text>
      
                </Flex>
              </Flex>
              <Button p='0px' bg='transparent' variant='no-hover'>
                <Text
                  fontSize='sm'
                  fontWeight='600'
                  color='teal.300'
                  alignSelf='center'>
                  700
                </Text>
              </Button>
            </Flex>
            <Flex justifyContent='space-between' mb='21px'>
              <Flex align='center'>
              <Image
                  src={'avatar2'}
                  alt='asd'
                  w='50px'
                  h='50px'
                  borderRadius='15px'
                  me='10px'
                />
                <Flex direction='column'>
                  <Text fontSize='sm' color={textColor} fontWeight='bold'>
                    Uploads
                  </Text>
                </Flex>
              </Flex>
              <Button p='0px' bg='transparent' variant='no-hover'>
                <Text
                  fontSize='sm'
                  fontWeight='600'
                  color='teal.300'
                  alignSelf='center'>
                  500
                </Text>
              </Button>
            </Flex>
          
          </Flex>
        </CardBody>
      </Card>
    );
  };
  
  export default GeneralStats;
  