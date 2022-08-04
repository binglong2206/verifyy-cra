import React from "react";
import { useTabStore, useUserStore, useYoutubeStore, useInstagramStore, useFacebookStore } from "../state/useStore";



export default function InitDashboard(data){
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

  const initStates = async() => {
    setStatState(data.stat);
    setYoutubeState(data.yt);
    setInstagramState(data.ig);
    setFacebookState(data.fb);
  }


  return initStates
  
}