import React from 'react';
import ReactApexChart from 'react-apexcharts';
import classNames from 'classnames';
import { Box } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';

const Demographics = () => {
	return (
		<Box margin='auto'>
			<ReactApexChart
				options={{
					colors: [
						'#42d7f5', // process.env.REACT_APP_PRIMARY_COLOR
						'#73159e', // process.env.REACT_APP_SECONDARY_COLOR,
						'#6e856d', // process.env.REACT_APP_SUCCESS_COLOR,
						'#d1bf88', // process.env.REACT_APP_INFO_COLOR,
						'#eb4c17', // process.env.REACT_APP_WARNING_COLOR,
                        '#eb4c97', // process.env.REACT_APP_WARNING_COLOR,
					],
					chart: {
                        type: 'donut',
                        height: 350,
                    },
                    stroke: {
                        width: 0,
                    },
                    labels: ['TH', 'US', 'GH', 'JP', 'GE', 'Others'],
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
                                        fontFamily: 'Poppins',
                                        fontWeight: 900,
                                        offsetY: 0,
                                        formatter(val) {
                                            return val;
                                        },
                                    },
                                    value: {
                                        show: true,
                                        fontSize: '16px',
                                        fontFamily: 'Poppins',
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
				series={[76, 55, 41, 20, 68, 15]}
				type='donut'
				width={325}
				height={325}
			/>
		</Box>
	);
};

export default Demographics;
