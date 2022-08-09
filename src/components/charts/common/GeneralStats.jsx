import React from "react";
import {
    Button,
    Flex,
    Text,
    useColorModeValue,
    Image,
  } from "@chakra-ui/react";
import IconBox from "../../Icons/IconBox";
import Card from "../../card/Card";
import CardBody from "../../card/CardBody";
import CardHeader from "../../card/CardHeader";
import { BsFillPersonCheckFill } from "react-icons/bs";
  
  const GeneralStats = ({props}) => { // props: {title, value, icon}[]
    const textColor = useColorModeValue("gray.700", "white");
  
    return (
      <Card maxHeight='290.5px' p='1rem'> 
        <CardHeader p='12px 5px' mb='12px'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {'General Statistics'}
          </Text>
        </CardHeader>
        <CardBody px='5px'>
          <Flex direction='column' w='100%'>

            {props && props.map(e => {
              return (
                <Flex justifyContent='space-between' mb='21px'>
                  <Flex align='center'>
                    <IconBox as='box' h={"45px"} w={"45px"} bg={'blue'}>
                      {e.icon}
                    </IconBox>
                    <Flex direction='column' ml={4}>
                      <Text fontSize='sm' color={textColor} fontWeight='400'>
                        {e.title}
                      </Text>
                    </Flex>
                  </Flex>
                  <Button p='0px' bg='transparent' variant='no-hover'>
                    <Text
                      fontSize='sm'
                      fontWeight='600'
                      color='blue.300'
                      alignSelf='center'>
                      {e.value}
                    </Text>
                  </Button>
                </Flex>
              )
            })}

            
          
          </Flex>
        </CardBody>
      </Card>
    );
  };
  
  export default GeneralStats;
  