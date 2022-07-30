import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ChakraProvider, Portal, useDisclosure, useColorModeValue, Flex } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import MainPanel from "../components/layouts/MainPanel";
import PanelContainer from "../components/layouts/PanelContainer";
import PanelContent from "../components/layouts/PanelContent";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ConfigFixedButton from "../components/config/ConfigFixedButton";
import ConfigSideBar from "../components/config/ConfigSideBar";
import ProfileBgImage from "../assets/img/ProfileBackground.png";
import avatar from "../assets/img/avatar.png";
import DashboardHeader from "../components/DashboardHeader";
import axios from "axios";



export default function Dashboard() {
  const {username} = useParams();
  const [userStatus, setUserStatus] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  // document.documentElement.dir = "ltr";



  useEffect(()=> {
    axios.get(`http://localhost:8000/dashboard/edit/${username}`, {
      withCredentials: true
    }).then(r=> {
      console.log('ready to fetch')
    }).catch(e=>{
      setUserStatus(false)
      console.error(e)
    })
  })


  return (
    <> 
    {!userStatus && <Navigate to={`/404}`} push={true} />}
    <Sidebar />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <Portal>
            <Navbar />
        </Portal>

        <PanelContent>
          <PanelContainer>
            <Flex direction='column'>
              <DashboardHeader
                  backgroundHeader={ProfileBgImage}
                  backgroundProfile={bgProfile}
                  avatarImage={avatar}
                  name={"Matthew Ryu"}
                  email={"MatthewFireHand@gmail.com"} />

                <div>THIS PRIVATE EDIT PAGE BELONGS TO  {username}</div>
              </Flex>
          </PanelContainer>
        </PanelContent>
        <Footer />

        <Portal>
          <ConfigFixedButton onOpen={onOpen} />
        </Portal>
        <ConfigSideBar 
          isOpen={isOpen}
          onClose={onClose} />
      </MainPanel>
    </>
);
}
