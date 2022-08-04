import React from "react";
import { useUserStore } from "../../state/useStore";

const Options = () => {
    const chartsOrder = useUserStore(state=> state.charts_order);
    let youtubeOptions = [
        {
            id: 1,
            title: 'Basic Statistics',
            swtich: chartsOrder.indexOf(1) !== -1 ? true : false
        },
        {
            id: 2,
            title: 'In-depth Analytics',
            swtich: chartsOrder.indexOf(2) !== -1 ? true : false
        },
        {
            id: 3,
            title: 'Latest Video Uploads',
            swtich: chartsOrder.indexOf(3) !== -1 ? true : false
        }
    ]

    let instagramOptions = [
        {
            id: 4,
            title: 'Basic Statistics',
            swtich:  chartsOrder.indexOf(4) !== -1 ? true : false
        },
        {
            id: 5,
            title: 'In-depth Analytics',
            swtich:  chartsOrder.indexOf(5) !== -1 ? true : false
        },
        {
            id: 6,
            title: 'Latest Posts',
            swtich:  chartsOrder.indexOf(6) !== -1 ? true : false
        }
    ]

    let  facebookOptions = [
        {
            id: 7,
            title: 'Basic Statistics',
            swtich: chartsOrder.indexOf(7) !== -1 ? true : false
        },
        {
            id: 8,
            title: 'In-depth Analytics',
            swtich: chartsOrder.indexOf(8) !== -1 ? true : false
        },
        {
            id: 9,
            title: 'Latest Posts',
            swtich: chartsOrder.indexOf(9) !== -1 ? true : false
        }
    ]


    return {youtubeOptions, instagramOptions, facebookOptions}
}

export default Options