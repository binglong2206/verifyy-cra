import React from "react";
import {
    Button,
    Flex,
    Icon,
    Spacer,
    Text,
    Image,
    Link,
    useColorModeValue
  } from "@chakra-ui/react";
  import Card from "../../card/Card.js";
  import CardBody from "../../card/CardBody.js";
  import { BsArrowRight } from "react-icons/bs";


export default function Title({title, username, description, src_url, profile_image}) {
    const textColor = useColorModeValue("gray.700", "white");


    return (
        <Card minHeight='290.5px' p='1.2rem'>
            <CardBody w='100%'>
                <Flex flexDirection={{ sm: "column", lg: "row" }} w='100%'>
                <Flex
                    flexDirection='column'
                    h='100%'
                    lineHeight='1.6'
                    width={{ lg: "45%" }}>
                    {/* <Text fontSize='sm' color='gray.400' fontWeight='bold'>
                    {title}
                    </Text>
                    <Text fontSize='lg' color={'gray.400'} fontWeight='bold' pb='.5rem'>
                    {username}
                    </Text>
                    <Text fontSize='sm' color='gray.500' fontWeight='normal'>
                    {description}
                    </Text> */}
                    <Text fontSize='lg' color={textColor} fontWeight='bold'>
                        {title}
                    </Text>
                    <Text fontSize='sm' color='gray.500' fontWeight='400'>
                        {username}
                    </Text>
                    <Spacer />
                    <Flex align='center'>
                    <Link href={'/edit'}> 
                        <Button
                            p='0px'
                            variant='no-hover'
                            bg='transparent'
                            my={{ sm: "1.5rem", lg: "0px" }}>
                            <Text
                            fontSize='sm'
                            color={'gray.500'}
                            fontWeight='bold'
                            cursor='pointer'
                            transition='all .5s ease'
                            my={{ sm: "1.5rem", lg: "0px" }}
                            _hover={{ me: "4px" }}>
                            Visit Page
                            </Text>
                            <Icon
                            as={BsArrowRight}
                            w='20px'
                            h='20px'
                            fontSize='2xl'
                            transition='all .5s ease'
                            mx='.3rem'
                            cursor='pointer'
                            pt='4px'
                            _hover={{ transform: "translateX(20%)" }}
                            />
                        </Button>
                    </Link>
                    </Flex>
                </Flex>
                <Spacer />
                <Flex
                    // bg='blue.300'
                    align='center'
                    justify='center'
                    // borderRadius='15px'
                    width={{ lg: "40%" }}
                    h={{ sm: "250px" }}
                    >
                    <Image
                        src={profile_image}
                        alt='Profile Image'
                        borderRadius='xl'
                        objectFit='cover'
                        h='100%'
                        w='100%'
                    />
                </Flex>
                </Flex>
            </CardBody>
            </Card>
     
    )
}