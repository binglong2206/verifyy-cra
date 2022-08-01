import React from "react";
import { useUserStore } from "../../state/useStore";

const Options = () => {
    const chartsOrder = useUserStore(state=> state.charts_order);
    console.log(chartsOrder)

    let youtubeOptions = [
        {
            id: 1,
            title: 'chart1',
            swtich: chartsOrder.indexOf(1) !== -1 ? true : false
        },
        {
            id: 2,
            title: 'chart22',
            swtich: chartsOrder.indexOf(2) !== -1 ? true : false
        },
        {
            id: 3,
            title: 'chart333',
            swtich: chartsOrder.indexOf(3) !== -1 ? true : false
        }
    ]

    let instagramOptions = [
        {
            id: 4,
            title: 'chart4',
            swtich:  chartsOrder.indexOf(4) !== -1 ? true : false
        },
        {
            id: 5,
            title: 'chart5',
            swtich:  chartsOrder.indexOf(5) !== -1 ? true : false
        },
        {
            id: 6,
            title: 'chart6',
            swtich:  chartsOrder.indexOf(6) !== -1 ? true : false
        }
    ]

    let  facebookOptions = [
        {
            id: 7,
            title: 'chart7',
            swtich: chartsOrder.indexOf(7) !== -1 ? true : false
        },
        {
            id: 8,
            title: 'chart8',
            swtich: chartsOrder.indexOf(8) !== -1 ? true : false
        },
        {
            id: 9,
            title: 'chart9',
            swtich: chartsOrder.indexOf(9) !== -1 ? true : false
        }
    ]


    return {youtubeOptions, instagramOptions, facebookOptions}
}

export default Options