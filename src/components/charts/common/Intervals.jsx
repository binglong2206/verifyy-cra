import React, {useEffect, useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import classNames from 'classnames';
import { Box, Button, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import { ApexOptions } from 'apexcharts';
import CardBody from '../../card/CardBody';
import Card from '../../card/Card';
import CardHeader from '../../card/CardHeader';
import {useWindowSize} from 'react-use'
import IntervalDropDown from '../../IntervalDropDown';

const Intervals = () => {
    const width = useWindowSize();
    const [activeTab, setActiveTab] = useState('m')

    const textColor = useColorModeValue("gray.700", "gray.600");
    const borderProfileColor = useColorModeValue(
      "white",
      "rgba(255, 255, 255, 0.31)"
    );
    const emailColor = useColorModeValue("gray.400", "gray.500");
    const selectedTabStyle = {
      bg:'hsla(0,0%,100%,.3)',
      boxShadow:'inset 0 0 1px 1px hsl(0deg 0% 100% / 90%), 0 20px 27px 0 rgb(0 0 0 / 5%)'
    }
    const buttonColor = useColorModeValue("gray.700", "gray.700")
    const bgProfile = useColorModeValue(
      "hsla(0,0%,100%,.8)",
      "linear-gradient(112.83deg, rgba(255, 255, 255, 0.21) 0%, rgba(255, 255, 255, 0) 110.84%)"
    );

	return (
        <Card p='16px' pb="1.5rem">
            <CardBody>
                <Flex direction='column' w='100%'>
                    <CardHeader p='12px 5px' mb='12px' justifyContent='space-between'>
                        <Flex direction='column'>
                            <Text fontSize='lg' color={'gray.800'} fontWeight='bold'>
                            {'In-depth Analytics'}
                            </Text>
                            <Text fontSize='sm' color='gray.500' fontWeight='400'>
                            {'description'}
                            </Text>
                        </Flex>
                        <Flex>
                            <IntervalDropDown activeTab={activeTab} setActiveTab={setActiveTab} />
                        </Flex>
                            
                     </CardHeader>

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
                        height: 370,
                        type: 'line',
                        stacked: false,
                        toolbar: { show: false },
                    },
                    plotOptions: {
						candlestick: {
							colors: {
								upward: '#42d7f5',
								downward: '#42d7f5',
							},
						},
						boxPlot: {
							colors: {
								upper: '#42d7f5',
								lower: '#42d7f5',
							},
						},
					},
                    dataLabels: {
                        enabled: true,
                    },
                    stroke: {
                        width: [1.5, 1.5, 1.5],
                        curve: 'smooth',
                    },
                    plotOptions: {
                        bar: {
                            borderRadius: 5,
                            columnWidth: '20px',
                        },
                    },
                    xaxis: {
                        categories: [
                            'Jan',
                            'Feb',
                            'Mar',
                            'Apr',
                            'May',
                            'Jun',
                            'Jul',
                            'Aug',
                            'Sep',
                            'Oct',
                            'Nov',
                            'Dec',
                        ],
                    },
                    yaxis: [
                        {
                            axisTicks: {
                                show: true,
                            },
                            axisBorder: {
                                show: true,
                                color: process.env.REACT_APP_INFO_COLOR,
                            },
                            labels: {
                                style: {
                                    colors: process.env.REACT_APP_INFO_COLOR,
                                },
                            },
                            title: {
                                text: 'Income (thousand cores)',
                                style: {
                                    color: process.env.REACT_APP_INFO_COLOR,
                                },
                            },
                            tooltip: {
                                enabled: true,
                            },
                        },
                        {
                            seriesName: 'Income',
                            opposite: true,
                            axisTicks: {
                                show: true,
                            },
                            axisBorder: {
                                show: true,
                                color: process.env.REACT_APP_SUCCESS_COLOR,
                            },
                            labels: {
                                style: {
                                    colors: process.env.REACT_APP_SUCCESS_COLOR,
                                },
                            },
                            title: {
                                text: 'Operating Cash Flow (thousand cores)',
                                style: {
                                    color: process.env.REACT_APP_SUCCESS_COLOR,
                                },
                            },
                        },
                        {
                            seriesName: 'Revenue',
                            opposite: true,
                            axisTicks: {
                                show: true,
                            },
                            axisBorder: {
                                show: true,
                                color: process.env.REACT_APP_WARNING_COLOR,
                            },
                            labels: {
                                style: {
                                    colors: process.env.REACT_APP_WARNING_COLOR,
                                },
                            },
                            title: {
                                text: 'Revenue (thousand cores)',
                                style: {
                                    color: process.env.REACT_APP_WARNING_COLOR,
                                },
                            },
                        },
                    ],
                    tooltip: {
                        theme: 'dark',
                        fixed: {
                            enabled: true,
                            position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
                            offsetY: 30,
                            offsetX: 60,
                        },
                    },
                    legend: {
                        horizontalAlign: 'left',
                        offsetX: 40,
                    }
				}}
				series={[
                    {
                        name: 'Followers',
                        type: 'column',
                        data: [
                            20,
                            15,
                            35,
                            20,
                            50,
                            60,
                            70,
                            35,
                        ],
                    },
                    {
                        name: 'Likes',
                        type: 'column',
                        data: [
                            40,
                            20,
                            50,
                            35,
                            15,
                            25,
                            30,
                            90,
                        ],
                    },
                    {
                        name: 'Uploads',
                        type: 'column',
                        data: [
                            (20),
                            (29),
                            (37),
                            (36),
                            (44),
                            (45),
                            (50),
                            (58),
                        ],
                    },
                ]}
				type='line'
				width={750}
				height={300}
			/>
		</Box>
            </Flex>
        </CardBody>
    </Card>
	);
};

export default Intervals;
