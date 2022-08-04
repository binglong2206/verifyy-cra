import React from "react";
import { Grid } from "@chakra-ui/react";
import Title from "../common/Title";
import Medias from "../common/Medias";
import GeneralStats from "../common/GeneralStats";
import GeoDemo from "../common/GeoDemo";
import Intervals from "../common/Intervals";
import { useUserStore } from "../../../state/useStore";

export default function FacebookChart() {
    const charts = useUserStore(state=>state.charts_order)


    return (
        <>
        <Grid
        templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
        templateRows={{ md: "1fr auto", lg: "1fr" }}
        my='26px'
        gap='24px'>
            <Title />
            <GeneralStats />
        </Grid>

        <Grid
        templateColumns={{ sm: "1fr", lg: "1.1fr 1.9fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
            <GeoDemo />
            <Intervals />
        </Grid>


        <Medias />
        </>
    )
}