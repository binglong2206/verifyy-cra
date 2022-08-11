import React from "react";
import { Grid } from "@chakra-ui/react";
import Title from "../common/Title";
import Medias from "../common/Medias";
import GeneralStats from "../common/GeneralStats";
import GeoDemo from "../common/GeoDemo";
import Intervals from "../common/Intervals";
import { useUserStore, useInstagramStore, useFacebookStore } from "../../../state/useStore";
import { BsFillPersonCheckFill } from "react-icons/bs";




export default function FacebookChart() {
    const facebook = useFacebookStore(state=> state)
    const intervalData = useFacebookStore(state=>state.data_intervals)
    const instagram = useInstagramStore(state=>state)
    // const intervalData = useInstagramStore(state=>state.data_intervals)
    const charts = useUserStore(state=>state.charts_order)

    const generalStats = [{
            title: 'Followers',
            value: facebook.follower_count,
            icon: <BsFillPersonCheckFill h={"24px"} w={"24px"} />
        },
        {
            title: 'Total Fans',
            value: facebook.like_count,
            icon: <BsFillPersonCheckFill h={"24px"} w={"24px"} />
        },
        {
            title: 'Total Posts',
            value: facebook.media_count,
            icon: <BsFillPersonCheckFill h={"24px"} w={"24px"} />
        }
    ]

    const getIntervalData = () => {
        let dayCategories, weekCategories, monthCategories,
            daySeries, weekSeries, monthSeries;

        const legends = ['Followers', 'Engagements (All Interactions)', 'Impressions']
        const intervalKeys = ['follower_count', 'engagement_count', 'impression_count'] // Temporary solution, to delete

        
        
        if (intervalData) { 
            // Get data by mapping over follower/impression/reach, doesn't matter
            dayCategories = [intervalData.day.follower_count[0].end_time.slice(0,10)] // Take end date of any key and format date
            weekCategories = intervalData.week.follower_count.map(e => {
                return e.end_time.slice(0,10)
            });
            monthCategories = intervalData.month.follower_count.map(e => {
                return e.end_time.slice(0,10)
            });

            daySeries = legends.map(legend => {
                return {
                    name: legend,
                    type: 'column',
                    // Select follower/impres/reach depending on the index of the mapped legends
                    // Daily has 2 value, prev[0] and current[1]. Use prev
                    data: [intervalData.day[intervalKeys[legends.indexOf(legend)]][0].value] 
                    
                }
            })

            weekSeries = legends.map(legend => {
                return {
                    name: legend,
                    type: 'column',
                    data: intervalData.week[intervalKeys[legends.indexOf(legend)]].map(e =>{
                        return e.value
                    })
                }
            })

            monthSeries = legends.map(legend => {
                return {
                    name: legend,
                    type: 'column',
                    data: intervalData.month[intervalKeys[legends.indexOf(legend)]].map(e =>{
                        return e.value
                    })
                }
            })
        }

        return {
            legends: legends,
            daySeries: daySeries,
            weekSeries: weekSeries,
            monthSeries: monthSeries,
            dayCategories: dayCategories,
            weekCategories: weekCategories,
            monthCategories: monthCategories
        }
    }


    return (
        <>
        {charts.indexOf(7) !== -1 && 
            <Grid
            templateColumns={{ md: "1fr", lg: "1.8fr 1.2fr" }}
            templateRows={{ md: "1fr auto", lg: "1fr" }}
            mb={{ lg: "26px" }}
            mt={{ lg: "26px" }}

            gap='24px'>
                <Title 
                    title={'Facebook Page Analytics'}
                    username={facebook.username}
                    // description={'Data verified by Verifyy.co'}
                    src_url={facebook.src_url}
                    profile_image={facebook.profile_image}
                    />
                <GeneralStats props={generalStats}/>
            </Grid>
        }

        {charts.indexOf(8) !== -1 && 
            <Grid
            templateColumns={{ sm: "1fr", lg: "1.1fr 1.9fr" }}
            templateRows={{ sm: "repeat(2, 1fr)", lg: "1fr" }}
            gap='24px'
            mb={{ lg: "26px" }}>
                <GeoDemo 
                    {...facebook.demographics} // male, female, age:{}
                    geographics={facebook.geographics}
                    />
                <Intervals 
                    data={getIntervalData()}
                    />
            </Grid>
        }

        {charts.indexOf(9) !== -1 &&  
            <Medias 
                title='Latest Posts'
                description=''
                medias={facebook.medias}
                statsKeys={['like_count', 'comment_count']}
                statsLabel={['Likes', "Comments"]}
            />
        }
   

        </>
    )
}