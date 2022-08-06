
import React from "react"
import { Flex } from "@chakra-ui/react"
import PulseLoader from 'react-spinners/PulseLoader'



export default function FullScreenSpinner({username}) {
    return (
      <Flex h="100%" w="100%" zIndex={999} position="fixed" 
        left={0} top={0} overflowX="none" bgColor='black' justifyContent='center' alignItems='center' >
          <Flex flexDir={'column'} alignItems='center'>
            {/* <Text margin='auto' color="white">Loading</Text> */}
            <PulseLoader size={30} color="white"/>
          </Flex>
      </Flex>
    )
  }