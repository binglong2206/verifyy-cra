import React from "react";
import { Grid } from "@chakra-ui/react";
import Title from "../common/Title";
import Medias from "../common/Medias";
import GeneralStats from "../common/GeneralStats";
import GeoDemo from "../common/GeoDemo";
import Intervals from "../common/Intervals";
import { useUserStore, useYoutubeStore } from "../../../state/useStore";
import { BsFillPersonCheckFill } from "react-icons/bs";



export default function YoutubeChart() {
    const user = useUserStore(state=>state)
    const youtube = useYoutubeStore(state=>state)
    const charts = useUserStore(state=>state.charts_order)

    const stats = [{
            title: 'Subscribers',
            value: youtube.follower_count,
            icon: <BsFillPersonCheckFill h={"24px"} w={"24px"} />
        },
        {
            title: 'Views',
            value: youtube.view_count,
            icon: <BsFillPersonCheckFill h={"24px"} w={"24px"} />
        },
        {
            title: 'Uploads',
            value: youtube.media_count,
            icon: <BsFillPersonCheckFill h={"24px"} w={"24px"} />
            }
    
    ]
    return (
        <>
        {charts.indexOf(1) !== -1 && 
            <Grid
            templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
            templateRows={{ md: "1fr auto", lg: "1fr" }}
            mb={{ lg: "26px" }}
            gap='24px'>
                <Title 
                    title={'Youtube Channel Analytics'}
                    username={youtube.username}
                    description={'Data verified by Verifyy.co'}
                    src_url={youtube.src_url}
                    profile_image={youtube.profile_image}
                    />
                <GeneralStats props={stats}/>
            </Grid>
        }

        {charts.indexOf(2) !== -1 && 
            <Grid
            templateColumns={{ sm: "1fr", lg: "1.1fr 1.9fr" }}
            templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
            gap='24px'
            mb={{ lg: "26px" }}>
                <GeoDemo />
                <Intervals />
            </Grid>
        }

        {charts.indexOf(3) !== -1 &&  <Medias />}

        </>
    )
}