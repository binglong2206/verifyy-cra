import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { 
  Portal, 
  useDisclosure, 
  useColorModeValue, 
  Flex, 
  Button,
  Link
 } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import MainPanel from "../components/layouts/MainPanel";
import PanelContainer from "../components/layouts/PanelContainer";
import PanelContent from "../components/layouts/PanelContent";
import Footer from "../components/Footer";
import ConfigFixedButton from "../components/config/ConfigFixedButton";
import ConfigSideBar from "../components/config/ConfigSideBar";
import ProfileBgImage from "../assets/img/ProfileBackground.png";
import avatar from "../assets/img/avatar.png";
import DashboardHeader from "../components/DashboardHeader";
import { useTabStore, useUserStore, useYoutubeStore, useInstagramStore, useFacebookStore } from "../state/useStore";
import axios from "axios";
import OverviewChart from "../components/charts/overview";
import YoutubeChart from "../components/charts/youtube";
import InstagramChart from "../components/charts/instagram";
import FacebookChart from "../components/charts/facebook";
import WelcomeModal from "../components/WelcomeModal";
import FullScreenSpinner from "../components/preloader";


export default function Dashboard() {
  const [userStatus, setUserStatus] = useState(true);
  const [loading, setLoading] = useState(true);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isWelcomeOpen, onOpen: onWelcomeOpen, onClose: onWelcomeClose } = useDisclosure();
  const bgProfile = useColorModeValue(
    "hsla(0,0%,100%,.8)",
    "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.8s4%)"
  );
  // document.documentElement.dir = "ltr";



  // Data States
  const setYoutubeState = useYoutubeStore(state=>state.setYoutubeState)
  const setInstagramState = useInstagramStore(state=> state.setInstagramState)
  const setFacebookState = useFacebookStore(state=>state.setFacebookState);
  const setStatState = useUserStore(state=>state.setStatState);
  const userState =  useUserStore(state=> state)
  const youtubeState = useYoutubeStore(state=> state);
  const instagramState = useInstagramStore(state=>state);
  const facebookState = useFacebookStore(state=>state);
  const tabState = useTabStore(state=>state)



  useEffect(()=> {
    const getDashboard = async() => {
      await axios.get(`/api/dashboard/edit`, {
        withCredentials: true // include cookies
      }) // Will run check on param too
        .then(r=> {
          // onWelcomeOpen();
            setStatState(r.data.stat)
          if (!r.data.stat.follower_count) { // if first time user, no agg followers
            onWelcomeOpen();
          } else {
            setYoutubeState(r.data.yt);
            setInstagramState(r.data.ig);
            setFacebookState(r.data.fb);
          }
        })
        .then(()=> setLoading(false))
        .catch(e=>{
          setUserStatus(false);
        })
    };
     
    getDashboard();
  },[setFacebookState, setInstagramState, setYoutubeState, setStatState, onWelcomeOpen]);




  return (
    <> 
    
  
    {loading && <FullScreenSpinner />}
    
    {!userStatus && <Navigate to={`/login}`} push={true} />}
    <WelcomeModal isOpen={isWelcomeOpen} onOpen={onWelcomeOpen} onClose={onWelcomeClose} />
    <Sidebar />
      <MainPanel
        w={{
          base: "100%",
          xl: "calc(100% - 275px)",
        }}
      >
        <PanelContent>
          <PanelContainer>
            <Flex direction='column'>
              {/* <Link href="http://localhost:8000/api/youtube/redirect">
                <Button>Connect Youtube</Button>
              </Link> */}
              <DashboardHeader
                  backgroundHeader={ProfileBgImage}
                  backgroundProfile={bgProfile}
                  avatarImage={avatar}
                  name={userState.username}
                  email={userState.email} 
                  />

                {userState.follower_count && <OverviewChart /> }
                {(tabState.ytTab && youtubeState.id ) && <YoutubeChart />}
                {(tabState.igTab && instagramState.id) && <InstagramChart />}
                {(tabState.fbTab && facebookState.id) && <FacebookChart />}
                
              </Flex>
          </PanelContainer>
        </PanelContent>
        <Footer />

        <Portal>
          <ConfigFixedButton onOpen={onOpen} />
        </Portal>
        <ConfigSideBar 
          isOpen={isOpen}
          onClose={onClose} 
          charts_order={userState.charts_order}
          />
      </MainPanel>
    </>
);
}
