import React, { useEffect, useState } from "react";
import { useParams, Navigate, useNavigate } from "react-router-dom";
import { ChakraProvider, Portal, useDisclosure, useColorModeValue, Flex } from "@chakra-ui/react";
import Sidebar from "../components/sidebar";
import MainPanel from "../components/layouts/MainPanel";
import MainPanelDashboard from "../components/layouts/MainPanelDashboard";
import PanelContainer from "../components/layouts/PanelContainer";
import PanelContent from "../components/layouts/PanelContent";
import Navbar from "../components/navbar";
import Footer from "../components/Footer";
import ConfigFixedButton from "../components/config/ConfigFixedButton";
import ConfigSideBar from "../components/config/ConfigSideBar";
import ProfileBgImage from "../assets/img/ProfileBackground.png";
import avatar from "../assets/img/avatar.png";
import DashboardHeader from "../components/DashboardHeader";
import axios from 'axios'
import { useUserStore, useYoutubeStore, useInstagramStore, useFacebookStore } from "../state/useStore";
import DarkModeButton from "../components/DarkModeButton";
import OverviewChart from "../components/charts/overview";
import YoutubeChart from "../components/charts/youtube";
import InstagramChart from "../components/charts/instagram";
import FacebookChart from "../components/charts/facebook";



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

  const charts_order = useUserStore(state=>state.charts_order)


  useEffect(()=> {
    const getDashboard = async() => {
      await axios.get(`http://localhost:8000/dashboard/${username}`) // Will run check on username param too, no need cookies
        .then(r=> {
          setStatState(r.data.stat)
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
    {!userStatus && <Navigate to={`/404`} push={true} /> }
      <MainPanelDashboard
        w={{
          base: "100%",
          xl: "85%",
        }}
        margin='auto !important'
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

                  {/* <div>THIS PUBLIC DASHBOARD BELONGS TO  {username}</div>
                  {charts_order.indexOf(1) !== -1 && <Chart1 />} */}
                  <OverviewChart />
                  <YoutubeChart />
                  <InstagramChart />
                  <FacebookChart />

              </Flex>
          </PanelContainer>
        </PanelContent>
        <Footer />

        <Portal>
          <DarkModeButton />
        </Portal>
      </MainPanelDashboard>
    </>
);
}
