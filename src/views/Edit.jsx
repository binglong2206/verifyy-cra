import React, { useState, useEffect } from "react";
import { useParams, Navigate } from "react-router-dom";
import { ChakraProvider, Portal, useDisclosure, useColorModeValue, Flex, Text } from "@chakra-ui/react";
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
import { useUserStore, useYoutubeStore, useInstagramStore, useFacebookStore } from "../state/useStore";
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



  // Data States
  const setYoutubeState = useYoutubeStore(state=>state.setYoutubeState)
  const setInstagramState = useInstagramStore(state=> state.setInstagramState)
  const setFacebookState = useFacebookStore(state=>state.setFacebookState);
  const setUserState = useUserStore(state=>setUserState);
  const userState =  useUserStore(state=> state)
  const youtubeState = useYoutubeStore(state=> state);
  const instagramState = useInstagramStore(state=>state);
  const facebookState = useFacebookStore(state=>state)


  useEffect(()=> {
    const getDashboard = async() => {
      await axios.get(`http://localhost:8000/dashboard/edit/${username}`, {
        withCredentials: true // include cookies
      }) // Will run check on param too
        .then(r=> {
          setUserState(r.data.stat)
          setYoutubeState(r.data.yt);
          setInstagramState(r.data.ig);
          setFacebookState(r.data.fb);
        })
        .catch(e=>{
          setUserStatus(false);
        })
    };
     
    getDashboard();
  },[username, setFacebookState, setInstagramState, setYoutubeState]);


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
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>
                <Text fontSize={70}>AOISDJAOSPIdj</Text>

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
