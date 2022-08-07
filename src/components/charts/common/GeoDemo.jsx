import React from "react";
import { Flex, SimpleGrid, Text, useColorModeValue, Progress } from "@chakra-ui/react";
import Card from "../../card/Card.js";
import CardBody from "../../card/CardBody.js";
import CardHeader from "../../card/CardHeader.js";
import {
  RocketIcon
} from "../../Icons/Icons.js";
import IconBox from "../../Icons/IconBox.jsx";
import Demographics from "./DemographicsChart.jsx";

const Geographics = ({ title, percentage, chart }) => {
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
                {'description'}
              </Text>
            </Flex>
          </CardHeader>

          <Demographics />

          <SimpleGrid gap={{ sm: "12px" }} columns={3} mt='30px'>
            <Flex direction='column'>
                <Flex alignItems='center'>
                    <IconBox as='box' h={"30px"} w={"30px"} bg={iconTeal} me='6px'>
                        <RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400' fontWeight='semibold'>
                    {"title"}
                    </Text>
                </Flex>
                <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px' my='6px'>
                    {"amount"}
                </Text>
                <Progress
                    colorScheme='blue'
                    borderRadius='12px'
                    h='5px'
                    value={40}
                />
                </Flex>
                <Flex direction='column'>
                <Flex alignItems='center'>
                    <IconBox as='box' h={"30px"} w={"30px"} bg={iconTeal} me='6px'>
                        <RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400' fontWeight='semibold'>
                    {"title"}
                    </Text>
                </Flex>
                <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px' my='6px'>
                    {"amount"}
                </Text>
                <Progress
                    colorScheme='blue'
                    borderRadius='12px'
                    h='5px'
                    value={40}
                />
                </Flex>
              
                <Flex direction='column'>
                <Flex alignItems='center'>
                    <IconBox as='box' h={"30px"} w={"30px"} bg={iconTeal} me='6px'>
                        <RocketIcon h={"15px"} w={"15px"} color={iconBoxInside} />
                    </IconBox>
                    <Text fontSize='sm' color='gray.400' fontWeight='semibold'>
                    {"title"}
                    </Text>
                </Flex>
                <Text fontSize='lg' color={textColor} fontWeight='bold' mb='6px' my='6px'>
                    {"amount"}
                </Text>
                <Progress
                    colorScheme='blue'
                    borderRadius='12px'
                    h='5px'
                    value={40}
                />
                </Flex>
          </SimpleGrid>
          
        </Flex>
      </CardBody>
    </Card>
  );
};

export default Geographics;
