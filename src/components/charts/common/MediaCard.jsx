import React from "react";
import {
  Box,
  Button,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

const MediaCard = ({ image, name, category, description, src_url }) => {
  const textColor = useColorModeValue("gray.700", "white");

  return (
    <Flex direction='column'>
      <Box mb='20px' position='relative' borderRadius='15px'>
        <Image src={image} borderRadius='15px' boxSize='sm' objectFit='cover' maxH='220px' />
        <Box
          w='100%'
          h='100%'
          position='absolute'
          top='0'
          borderRadius='15px'
          bg='linear-gradient(360deg, rgba(49, 56, 96, 0.16) 0%, rgba(21, 25, 40, 0.88) 100%)'></Box>
      </Box>
      <Flex direction='column'>
        <Text fontSize='md' color='gray.500' fontWeight='600' mb='10px'>
          {name}
        </Text>
        <Text fontSize='xl' color={textColor} fontWeight='bold' mb='10px'>
          {category}
        </Text>
        <Text fontSize='md' color='gray.500' fontWeight='400' mb='20px'>
          {description}
        </Text>
        <Flex justifyContent='space-between'>
          <Link href={src_url} isExternal>
            <Button
              variant='outline'
              colorScheme='blue'
              minW='110px'
              h='36px'
              fontSize='xs'
              px='1.5rem'>
              VIEW MEDIA
            </Button>
          </Link>

        </Flex>
      </Flex>
    </Flex>
  );
};

export default MediaCard;
