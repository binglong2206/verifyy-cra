import React from "react";
import {
    Flex,
    Stat,
    StatHelpText,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from "@chakra-ui/react";
  import Card from "../../card/Card.js";
  import CardBody from "../../card/CardBody.js";
  import IconBox from "../../Icons/IconBox";
  
  const StatsCard = ({ title, amount, percentage, icon }) => {
    const iconTeal = useColorModeValue("teal.300", "teal.300");
    const textColor = useColorModeValue("gray.700", "white");
  
    return (
      <Card minH='83px'>
        <CardBody>
          <Flex flexDirection='row' align='center' justify='center' w='100%'>
            <Stat me='auto'>
              <StatLabel
                fontSize='sm'
                color='gray.400'
                fontWeight='bold'
                pb='.1rem'>
                {title}
              </StatLabel>
              <Flex>
                <StatNumber fontSize='lg' color={textColor}>
                  {amount}
                </StatNumber>
                <StatHelpText
                  alignSelf='flex-end'
                  justifySelf='flex-end'
                  m='0px'
                  color="green.400"
                  fontWeight='bold'
                  ps='3px'
                  fontSize='md'>
                  {percentage ? `${percentage}%` : null}
                </StatHelpText>
              </Flex>
            </Stat>
            <IconBox as='box' h={"45px"} w={"45px"} bg={iconTeal}>
              {icon}
            </IconBox>
          </Flex>
        </CardBody>
      </Card>
    );
  };
  
  export default StatsCard;
  