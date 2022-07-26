import React, {useRef} from "react";
import {
    Box
  } from "@chakra-ui/react";
import Menus from "./Menus";
  
  
const Sidebar = () => {
    const mainPanel = useRef();
    let variantChange = "0.2s linear";
    let sidebarBg = "none";
    let sidebarRadius = "0px";
    let sidebarMargins = "0px";

  
    return (
      <Box ref={mainPanel}>
        <Box display={{ sm: "none", xl: "block" }} position="fixed">
          <Box
            bg={sidebarBg}
            transition={variantChange}
            w="260px"
            maxW="260px"
            ms={{
              sm: "16px",
            }}
            my={{
              sm: "16px",
            }}
            h="calc(100vh - 32px)"
            ps="20px"
            pe="20px"
            m={sidebarMargins}
            borderRadius={sidebarRadius}
          >
            <Menus />
          </Box>
        </Box>
      </Box>
    );
  }
  
  
  
  
  export default Sidebar;
  