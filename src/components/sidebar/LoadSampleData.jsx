import React, {useState} from "react";
import { QuestionIcon } from "@chakra-ui/icons";
import { Button, Flex, Text, Link } from "@chakra-ui/react";
import SidebarHelpImage from "../../assets/img/SidebarHelpImage.png";
import IconBox from "../Icons/IconBox";
import axios from "axios";
import { useUserStore, useYoutubeStore, useInstagramStore, useFacebookStore } from "../../state/useStore";
import { NavLink } from "react-router-dom";


export default function LoadDataCard({children, ...rest}) {
  const [loading, setLoading] = useState(false)

  // Data States
  const setYoutubeState = useYoutubeStore(state=>state.setYoutubeState)
  const setInstagramState = useInstagramStore(state=> state.setInstagramState)
  const setFacebookState = useFacebookStore(state=>state.setFacebookState);
  const setStatState = useUserStore(state=>state.setStatState);

  const handleStart = async ()=> {
    setLoading(true)
    await axios.get('/api/user/sampleData', { // POST needs body
    withCredentials: true
      }).then(r=>{
        setStatState(r.data.stat)
        setYoutubeState(r.data.yt);
        setInstagramState(r.data.ig);
        setFacebookState(r.data.fb);
      })
      .then(()=>setLoading(false))
    } 

  return (
    <Flex
      borderRadius="15px"
      flexDirection="column"
      bgColor={'blue.400'}
      justifyContent="flex-start"
      alignItems="start"
      boxSize="border-box"
      p="16px"
      h="200px"
      w="100%"
    >
      <IconBox width="35px" h="35px" bg="white" mb="auto">
        <QuestionIcon color="blue.300" h="18px" w="18px" />
      </IconBox>
      <Text fontSize="sm" color="white" fontWeight="bold">
        Waiting for registration?
      </Text>
      <Text fontSize="xs" color="white" mb="10px">
        Insert demo data and start testing!
      </Text>
        <Button
          onClick={handleStart}
          isLoading={loading}
          loadingText="Updating dataset"
          fontSize="10px"
          fontWeight="bold"
          w="70%"
          bg="white"
          _hover="none"
          _active={{
            bg: "white",
            transform: "none",
            borderColor: "transparent",
          }}
          _focus={{
            boxShadow: "none",
          }}
          color="black"
        >
          Load Sample Data
        </Button>
        <Link href={'https://github.com/binglong2206/verifyy-server-db'} isExternal> 
          <Button
            mt='7px'
            fontSize="10px"
            fontWeight="bold"
            bg="white"
            _hover="none"
            _active={{
              bg: "white",
              transform: "none",
              borderColor: "transparent",
            }}
            _focus={{
              boxShadow: "none",
            }}
            color="black"
          >
            Github Source Code
          </Button>
        </Link>
    </Flex>
  );
}
