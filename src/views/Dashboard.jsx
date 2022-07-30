import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
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
import axios from 'axios'
import { CheckUser } from "../hooks/checkUser";
import FullScreenSpinner from "../components/FullScreenSpinner";



export default function Dashboard() {
  const [userStatus, setUserStatus] = useState(true);
  const [isLoading, setLoading] = useState(true);
  const {username} = useParams()
  const { isOpen, onOpen, onClose } = useDisclosure();
  const textColor = useColorModeValue("gray.700", "white");
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
  );
  document.documentElement.dir = "ltr";

  const navigate = useNavigate();



  useEffect(()=> {
    const checkUser = async() => {
     await axios.get(`http://localhost:8000/checkUser/${username}`)
      .then(r=> {
        if (!r.data.result) setUserStatus(false);
        setLoading(false)
      })
      .catch(e=>{})
    };
     
    checkUser();

    //Start fetching data
  });


  return (
    <> 
    {!userStatus && <Navigate to={`/404`} push={true} /> }
     <FullScreenSpinner userStatus={true} />
      <MainPanel
        w={{
          base: "100%",
          xl: "100%",
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

                  <div>THIS PUBLIC DASHBOARD BELONGS TO  {username}</div>
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
