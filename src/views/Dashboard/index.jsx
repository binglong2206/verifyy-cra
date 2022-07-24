import React, { useState } from "react";
import { ChakraProvider, Portal, useDisclosure } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import MainPanel from "../../components/layouts/MainPanel";
import PanelContainer from "../../components/layouts/PanelContainer";
import PanelContent from "../../components/layouts/PanelContent";


export default function Dashboard() {
  const [fixed, setFixed] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  document.documentElement.dir = "ltr";

  return (
    <> 
    <Sidebar />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
            <div>Nav bar</div>
        </Portal>

        <PanelContent>
          <PanelContainer>
              <div>main content</div>
          </PanelContainer>
        </PanelContent>
        <div>footer</div>

        <Portal>
            <div>dark light fixed button</div>
        </Portal>

        <div>github sidebar</div>
        
      </MainPanel>
      </>
);
}
