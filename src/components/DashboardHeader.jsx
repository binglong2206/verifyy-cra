import React from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaCube } from "react-icons/fa";
import { useTabStore } from "../state/useStore";
import { useUserStore } from "../state/useStore";
import ProfileBgImage from "../assets/img/ProfileBackground.png";


const DashboardHeader = ({
  backgroundHeader,
  backgroundProfile,
  avatarImage,
  name,
  email,
}) => {
  // State and action are auto params set by usereducer
  // const tabReducer = (state, action) => {
  //   switch(action.tab){
  //     case 'ytTab': 
  //       return {...state, ytTab: !state.ytTab};
  //     case 'igTab': 
  //       return {...state, igTab: !state.igTab};
  //     case 'fbTab': 
  //       return {...state, fbTab: !state.fbTab};
  //     default: 
  //       throw new Error()
  //   }
  // }
  // const [activeTab, setActiveTab] = useReducer(tabReducer, {
  //   ytTab: true,
  //   igTab: true,
  //   fbTab: true
  // })

  const { background_image} = useUserStore(state=>state)
  const profile_image = useUserStore(state=>state.profile_image)
  const activeTabs = useTabStore(state=>state)
  const setTab = useTabStore(state=> state.setTab);


  const textColor = useColorModeValue("gray.700", "gray.600");

  const emailColor = useColorModeValue("gray.400", "gray.500");
  const selectedTabStyle = {
    bg:'hsla(0,0%,100%,.3)',
    boxShadow:'inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)'
  }
  const buttonColor = useColorModeValue("gray.700", "gray.700")


  return (
    <Box
      mb={{ sm: "205px", md: "75px", xl: "70px" }}
      borderRadius='15px'
      px='0px'
      display='flex'
      flexDirection='column'
      justifyContent='center'
      align='center'>
      <Box
        bgImage={background_image ? background_image : '' }
        bgColor={!background_image ? 'gray.500' : ''}
        w='100%'
        h='300px'
        objectFit='cover'
        borderRadius='25px'
        bgPosition='50%'
        bgRepeat='no-repeat'
        position='relative'
        display='flex'
        justifyContent='center'>
        <Flex
          direction={{ sm: "column", md: "row" }}
          mx='1.5rem'
          maxH='330px'
          w={{ sm: "90%", xl: "95%" }}
          justifyContent={{ sm: "center", md: "space-between" }}
          align='center'
          backdropFilter='saturate(200%) blur(50px)'
          position='absolute'
          boxShadow='0px 2px 5.5px rgba(0, 0, 0, 0.02)'
          border='2px solid'
          borderColor={'rgba(255, 255, 255, 0.31)'}
          bg={"hsla(0,0%,100%,.55)"}
          p='24px'
          borderRadius='20px'
          transform={{
            sm: "translateY(45%)",
            md: "translateY(110%)",
            lg: "translateY(160%)",
          }}>
          <Flex
            align='center'
            mb={{ sm: "10px", md: "0px" }}
            direction={{ sm: "column", md: "row" }}
            w={{ sm: "100%" }}
            textAlign={{ sm: "center", md: "start" }}>
            <Avatar
              me={{ md: "22px" }}
              src={profile_image}
              key={profile_image}
              w='80px'
              h='80px'
              borderRadius='15px'
            />
            <Flex direction='column' maxWidth='100%' my={{ sm: "14px" }}>
              <Text
                fontSize={{ sm: "lg", lg: "xl" }}
                color={textColor}
                fontWeight='bold'
                ms={{ sm: "8px", md: "0px" }}>
                {name}
              </Text>
              <Text
                fontSize={{ sm: "sm", md: "md" }}
                color={emailColor}
                fontWeight='semibold'>
                {email}
              </Text>
            </Flex>
          </Flex>
          <Flex
            direction={{ sm: "column", lg: "row" }}
            w={{ sm: "100%", md: "50%", lg: "auto" }}>
            <Button p='0px' color={buttonColor} bg='transparent' _hover={{ bg: "none" }} onClick={()=>setTab('ytTab')}>
              <Flex
                {...(activeTabs.ytTab ? selectedTabStyle : null)}
                align='center'
                w={{ sm: "70%", lg: "135px" }}
                borderRadius='15px'
                justifyContent='center'
                py='10px'
                border='1px solid gray.200'
                cursor='pointer'>
                <FaCube w='100%' h='100%' />
                <Text
                  fontSize='xs'
                  color={textColor}
                  fontWeight='bold'
                  ms='6px'>
                  Youtube
                </Text>
              </Flex>
            </Button>
            <Button p='0px' color={buttonColor} bg='transparent' _hover={{ bg: "none" }} onClick={()=>setTab('igTab')}>
              <Flex
               {...(activeTabs.igTab ? selectedTabStyle : null)}
                align='center'
                w={{ sm: "70%", lg: "135px" }}
                borderRadius='15px'
                justifyContent='center'
                py='10px'
                mx={{ lg: "1rem" }}
                cursor='pointer'>
                <FaCube w='100%' h='100%' />
                <Text
                  fontSize='xs'
                  color={textColor}
                  fontWeight='bold'
                  ms='6px'>
                  Instagram
                </Text>
              </Flex>
            </Button>
            <Button p='0px' color={buttonColor} bg='transparent' _hover={{ bg: "none" }} onClick={()=>setTab('fbTab')}>
              <Flex
                {...(activeTabs.fbTab ? selectedTabStyle : null)}
                align='center'
                w={{ sm: "70%", lg: "135px" }}
                borderRadius='15px'
                justifyContent='center'
                py='10px'
                cursor='pointer'>
                <FaCube w='100%' h='100%' />
                <Text
                  fontSize='xs'
                  color={textColor}
                  fontWeight='bold'
                  ms='6px'>
                  Facebook
                </Text>
              </Flex>
            </Button>
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default DashboardHeader;
