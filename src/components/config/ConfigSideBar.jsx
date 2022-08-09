// Chakra Imports
import React, { useRef } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  Flex,
  Switch,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import Separator  from "../Separator";
import Options from "./optionsHooks";
import { useUserStore } from "../../state/useStore";
import CustomToast from "../../hooks/CustomToast";
import axios from "axios";

export default function ConfigSideBar({isOpen, onClose}) {
  const chartsOrder = useUserStore(state=> state.charts_order)
  const {youtubeOptions, instagramOptions, facebookOptions} = Options();
  const { colorMode, toggleColorMode } = useColorMode();

  const settingsRef = useRef();
  const showSuccessToast = CustomToast('Success', 'Layout updated', 'success' );



  const handleSwitch = async (chartId) => {
    // Determine if switch is patch or delete
    const action = chartsOrder.indexOf(chartId) === -1 ? 'patch' : 'delete'

    if (action === 'patch'){
      // Not sure why axios patch doesn't work
      // const res = await axios.patch(`http://localhost:8000/user/charts/${chartId}`,{
      //   withCredentials: true
      // })
      // .then(r=>console.log('chart patched'));
      const r = await fetch(`/api/user/charts/${chartId}`, {
        method: 'PATCH',
        credentials: 'include',
      })

      useUserStore.setState(state => {
        const order = [...state.charts_order] // deep clone
        order.push(chartId)
        showSuccessToast();
        return {charts_order: order}
      });
      return;
    } 

    if (action === 'delete') {
      const res = await axios.delete(`/api/user/charts/${chartId}`,{
        withCredentials: true
      })
      
      useUserStore.setState(state => {
        const order = [...state.charts_order] // deep clone
        order.splice(order.indexOf(chartId), 1);
        showSuccessToast();
        return {charts_order: order}
      })
      return;
    }

    
  }

  const displayOptions = (options) => {
    const jsx = options.map((e, key)=> {
      return (
        <Flex
        key={key}
        justifyContent="space-between"
        alignItems="center"
        px='10px'
      >
        <Text fontSize="md" fontWeight="600" mb="4px">
          {e.title}
        </Text>
        <Switch onChange={()=>handleSwitch(e.id)} colorScheme="teal" 
            isChecked={chartsOrder.indexOf(e.id) !== -1} />
      </Flex>
      )
    });

    return jsx
  }

  return (
    <>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        finalFocusRef={settingsRef}
        blockScrollOnMount={false}
      >
        <DrawerContent>
          <DrawerHeader pt="24px" px="24px">
            <DrawerCloseButton />
            <Text fontSize="xl" fontWeight="bold" mt="16px">
              Configure Dashboard
            </Text>
            <Text fontSize="md" mb="16px">
              Select your charts
            </Text>
            <Separator />
          </DrawerHeader>
          <DrawerBody w="340px" ps="24px" pe="40px">
            <Flex flexDirection="column">
              <Flex
                justifyContent="space-between"
                alignItems="center"
                mb="24px"
              >
                <Text fontSize="md" fontWeight="600" mb="4px">
                  Dark/Light
                </Text>
                <Button onClick={toggleColorMode}>
                  Toggle {colorMode === "light" ? "Dark" : "Light"}
                </Button>
              </Flex>
              <Separator />
              <Box mt='24px'> 
                <Text fontSize="md" fontWeight="600" >
                    Youtube Configuration
                  </Text>
                  <Text fontSize="sm" mb="16px">
                    Modify the visibility of charts.
                  </Text>
              </Box>
              {displayOptions(youtubeOptions)}


              <Box mt='24px'> 
                <Text fontSize="md" fontWeight="600" >
                    Instagram Configuration
                  </Text>
                  <Text fontSize="sm" mb="16px">
                    Modify the visibility of charts.
                  </Text>
              </Box>
              {displayOptions(instagramOptions)}

              <Box mt='24px'> 
                <Text fontSize="md" fontWeight="600" >
                    Facebook Page Configuration
                  </Text>
                  <Text fontSize="sm" mb="16px">
                    Modify the visibility of charts.
                  </Text>
              </Box>
              {displayOptions(facebookOptions)}


            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

