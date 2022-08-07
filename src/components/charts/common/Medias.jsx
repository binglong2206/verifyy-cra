import React from "react";
import {
  Flex,
  Grid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Custom components
import Card from "../../card/Card";
import CardBody from "../../card/CardBody";
import CardHeader from "../../card/CardHeader";
import MediaCard from "./MediaCard";
import mediaThumbnail from '../../../assets/img/ImageArchitect1.png'

const Medias = () => {
  // Chakra color mode
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Card p='16px' my='0px'>
      <CardHeader p='12px 5px' mb='12px'>
        <Flex direction='column'>
          <Text fontSize='lg' color={textColor} fontWeight='bold'>
            {'title'}
          </Text>
          <Text fontSize='sm' color='gray.500' fontWeight='400'>
            {'description'}
          </Text>
        </Flex>
      </CardHeader>
      <CardBody px='5px'>
        <Grid
          templateColumns={{ sm: "1fr", md: "1fr 1fr", xl: "repeat(4, 1fr)" }}
          templateRows={{ sm: "1fr 1fr 1fr auto", md: "1fr 1fr", xl: "1fr" }}
          gap='24px'>
          <MediaCard
            image={mediaThumbnail}
            name={"Media #1"}
            category={"Title"}
            description={
              "Media Description"
            }
          />
          <MediaCard
            image={mediaThumbnail}
            name={"Media #2"}
            category={"Title"}
            description={
              "Media Description"
            }
          />
          <MediaCard
            image={mediaThumbnail}
            name={"Media #3"}
            category={"Title"}
            description={
              "Media Description"
            }
          />
          <MediaCard
            image={mediaThumbnail}
            name={"Media #3"}
            category={"Title"}
            description={
              "Media Description"
            }
          />
          
        </Grid>
      </CardBody>
    </Card>
  );
};

export default Medias;
