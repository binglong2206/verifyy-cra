import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box } from '@chakra-ui/react';

const Geographics = ({data}) => {

    const geoData = Object.entries(data) // [[key, value]...]
    const labels = geoData.map(e=> {return e[0]})
    const series = geoData.map(e=>{return Math.round(e[1] * 100)/100})

	return (
		<Box margin='auto'>
			<ReactApexChart
				options={{
					// colors: [
					// 	'#42d7f5',
					// 	'#73159e',
					// 	'#6e856d', 
					// 	'#d1bf88', 
					// 	'#eb4c17', 
                    //     '#eb4c97', 
					// ],
					chart: {
                        type: 'donut',
                        height: 350,
                    },
                    stroke: {
                        width: 0,
                    },
                    labels: labels,
                    dataLabels: {
                        enabled: false,
                    },
                    plotOptions: {
                        pie: {
                            expandOnClick: true,
                            donut: {
                                labels: {
                                    show: true,
                                    name: {
                                        show: true,
                                        fontSize: '24px',
                                        // fontFamily: 'Poppins',
                                        fontWeight: 900,
                                        offsetY: 0,
                                        formatter(val) {
                                            return val;
                                        },
                                    },
                                    value: {
                                        show: true,
                                        fontSize: '16px',
                                        // fontFamily: 'Poppins',
                                        fontWeight: 900,
                                        offsetY: 16,
                                        formatter(val) {
                                            let t = `${val}%`;
                                            return t
                                        },
                                    },
                                },
                            },
                        },
                    },
                    legend: {
                        show: true,
                        position: 'right',
                    },
				}}
				series={series}
				type='donut'
				width={325}
				height={325}
			/>
		</Box>
	);
};

export default Geographics;
