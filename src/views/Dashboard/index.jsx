import React, { useState } from "react";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import routes from "routes.js";
import MainPanel from "../../components/Layout/MainPanel";


export default function Dashboard() {
  const [fixed, setFixed] = useState(false);
  
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";

  return (
    <> 
    <Sidebar
        routes={routes}
        logoText={"VERIFYY.co"}
        display="none"
        sidebarVariant='transparent'
      />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >

   
      </MainPanel>
      </>
);
}
