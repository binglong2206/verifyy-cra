import React from "react";
import { SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { GlobeIcon } from "../../Icons/Icons";
import StatsCard from "./StatsCard";
import {useUserStore, useYoutubeStore, useInstagramStore, useFacebookStore} from '../../../state/useStore'
import {BsYoutube, BsFacebook, BsInstagram, BsFillPersonCheckFill} from 'react-icons/bs'


const OverviewChart = () => {
    const iconBoxInside = useColorModeValue("white", "black");
    const user = useUserStore(state => state)
    const youtube = useYoutubeStore(state=>state);
    const instagram = useInstagramStore(state=>state);
    const facebook = useFacebookStore(state=>state)



return (
    <SimpleGrid columns={{ sm: 1, md: 2, xl: 4 }} spacing='24px' mb={'26px'}>
        <StatsCard
          title={"Total Followers"}
          amount={user.follower_count ? user.follower_count : 0}
          icon={<BsFillPersonCheckFill h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <StatsCard
          title={"Youtube's Subscribers"}
          amount={youtube.follower_count}
          // percentage={5}
          icon={<BsYoutube h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <StatsCard
          title={"Instagram Followers"}
          amount={instagram.follower_count}
          icon={<BsInstagram h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
        <StatsCard
          title={"Facebook Fans"}
          amount={facebook.follower_count}
          // percentage={8}
          icon={<BsFacebook h={"24px"} w={"24px"} color={iconBoxInside} />}
        />
      </SimpleGrid>
)   
}



export default OverviewChart