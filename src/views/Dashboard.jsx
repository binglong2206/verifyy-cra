import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Portal, useColorModeValue, Flex } from "@chakra-ui/react";

import MainPanelDashboard from "../components/layouts/MainPanelDashboard";
import PanelContainer from "../components/layouts/PanelContainer";
import PanelContent from "../components/layouts/PanelContent";
import Footer from "../components/Footer";

import ProfileBgImage from "../assets/img/ProfileBackground.png";
import avatar from "../assets/img/avatar.png";
import DashboardHeader from "../components/DashboardHeader";
import axios from 'axios'
import { useTabStore, useUserStore, useYoutubeStore, useInstagramStore, useFacebookStore } from "../state/useStore";
import DarkModeButton from "../components/DarkModeButton";
import OverviewChart from "../components/charts/overview";
import YoutubeChart from "../components/charts/youtube";
import InstagramChart from "../components/charts/instagram";
import FacebookChart from "../components/charts/facebook";
import FullScreenSpinner from "../components/preloader";




export default function Dashboard() {
  const [userStatus, setUserStatus] = useState(true);
  const [loading, setLoading] = useState(true);
  const {username} = useParams()

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
  const tabState = useTabStore(state=>state)




  useEffect(()=> {
    const getDashboard = async() => {
      await axios.get(`/api/dashboard/${username}`) // Will run check on username param too, no need cookies
        .then(r=> {
          setStatState(r.data.stat)
          setYoutubeState(r.data.yt);
          setInstagramState(r.data.ig);
          setFacebookState(r.data.fb);
        })
        .then(()=>setLoading(false))
        .catch(e=>{
          setUserStatus(false);
        })
    };
     
    getDashboard();
  },[username, setFacebookState, setInstagramState, setYoutubeState, setStatState]);


  return (
    <>
    {loading && <FullScreenSpinner />}
    {!userStatus && <Navigate to={`/login`} push={true} /> }
      <MainPanelDashboard
        w={{
          base: "100%",
          xl: "85%",
        }}
        margin='auto !important'
      >
        {/* <Portal>
            <Navbar />
        </Portal> */}
        <PanelContent>
          <PanelContainer>
            <Flex direction='column'>
              <DashboardHeader
                  backgroundHeader={ProfileBgImage}
                  backgroundProfile={bgProfile}
                  avatarImage={avatar}
                  name={userState.username}
                  email={userState.email} 
                  />

                  {/* <div>THIS PUBLIC DASHBOARD BELONGS TO  {username}</div>
                  {charts_order.indexOf(1) !== -1 && <Chart1 />} */}
                  {userState.follower_count && <OverviewChart /> }
                {(tabState.ytTab && youtubeState.id ) && <YoutubeChart />}
                {(tabState.igTab && instagramState.id) && <InstagramChart />}
                {(tabState.fbTab && facebookState.id) && <FacebookChart />}

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
