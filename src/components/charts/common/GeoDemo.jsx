import React from "react";
import { Flex, SimpleGrid, Text, useColorModeValue, Progress, Button } from "@chakra-ui/react";
import Card from "../../card/Card.js";
import CardBody from "../../card/CardBody.js";
import CardHeader from "../../card/CardHeader.js";
import {
  RocketIcon
} from "../../Icons/Icons.js";
import IconBox from "../../Icons/IconBox.jsx";
import Geographics from "./DemographicsChart.jsx";
import { BsGenderMale, BsGenderFemale, BsGenderTrans } from "react-icons/bs";

const GeoDemo = ({male, female, others, age, geographics}) => {
  const iconBoxInside = useColorModeValue("white", "white");
  const textColor = useColorModeValue("gray.700", "white");
  const iconTeal = useColorModeValue("blue.300", "blue.300");

  
  return (
    <Card p='16px' pb="1.5rem">
      <CardBody>
        <Flex direction='column' w='100%'>          
          <CardHeader p='12px 5px' mb='12px'>
            <Flex direction='column'>
              <Text fontSize='lg' color={textColor} fontWeight='bold'>
                {'Geographics & Demographics'}
              </Text>
              <Text fontSize='sm' color='gray.500' fontWeight='400'>
                {'Data verified by Verifyy.co'}
              </Text>
            </Flex>
          </CardHeader>

          {geographics && <Geographics data={geographics} />}

          <SimpleGrid gap={{ sm: "12px" }} columns={3} mt='30px'>
            <Flex direction='column'>
                <Flex alignItems='center'>
                    <IconBox as='box' h={"30px"} w={"30px"} bg={iconTeal} me='6px'>
                        <BsGenderMale h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400' fontWeight='semibold'>
                    {"Male"}
                    </Text>
                </Flex>
                <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px' my='6px'>
                    {male ? male.toFixed(1) : 0}%
                </Text>
                <Progress
                    colorScheme='blue'
                    borderRadius='12px'
                    h='5px'
                    value={male}
                />
                </Flex>
                <Flex direction='column'>
                <Flex alignItems='center'>
                    <IconBox as='box' h={"30px"} w={"30px"} bg={iconTeal} me='6px'>
                        <BsGenderFemale h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400' fontWeight='semibold'>
                    {"Female"}
                    </Text>
                </Flex>
               <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px' my='6px'>
                    {female ? female.toFixed(1) : 0}%
                </Text>
                <Progress
                    colorScheme='blue'
                    borderRadius='12px'
                    h='5px'
                    value={female}
                />
                </Flex>
              
                <Flex direction='column'>
                <Flex alignItems='center'>
                    <IconBox as='box' h={"30px"} w={"30px"} bg={iconTeal} me='6px'>
                        <BsGenderTrans h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400' fontWeight='semibold'>
                    {"Others"}
                    </Text>
                </Flex>
                <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px' my='6px'>
                  {others ? others.toFixed(1) : 0}%
                </Text>
                <Progress
                    colorScheme='blue'
                    borderRadius='12px'
                    h='5px'
                    value={others}
                />
                </Flex>
          </SimpleGrid>
          
        </Flex>
      </CardBody>
    </Card>
  );
};

export default GeoDemo;
