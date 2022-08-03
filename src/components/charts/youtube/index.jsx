import React from "react";
import { Grid } from "@chakra-ui/react";
import Title from "./Title";
import Medias from "./Medias";
import GeneralStats from "./GeneralStats";
import Geographics from "./Geographics";
import Demographics from "./Demographics";

export default function YoutubeChart() {
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
        templateColumns={{ sm: "1fr", lg: "1.3fr 1.7fr" }}
        templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
        gap='24px'
        mb={{ lg: "26px" }}>
            <Geographics />
        </Grid>


        <Medias />
        </>
    )
}