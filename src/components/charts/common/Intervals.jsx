import React, {useState} from 'react';
import ReactApexChart from 'react-apexcharts';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import CardBody from '../../card/CardBody';
import Card from '../../card/Card';
import CardHeader from '../../card/CardHeader';
import IntervalDropDown from '../../IntervalDropDown';

const Intervals = ({data}) => {    
    const [activeTab, setActiveTab] = useState('w');

    

    const getTabData = () => {
        switch(activeTab){
            case 'm': {
                return {
                    categories: data.monthCategories,
                    series: data.monthSeries
                }
            }
            case 'w': {
                return {
                    categories: data.weekCategories,
                    series: data.weekSeries
                }
            }
            case 'd': {
                return {
                    categories: data.dayCategories,
                    series: data.daySeries
                }
            }
            default: return null
        }
    }

  


	return (
        <Card p='16px' pb="1.5rem">
            {/* <Button onClick={()=>console.log(weekCategories)}>test click</Button> */}
            <CardBody>
                <Flex direction='column' w='100%'>
                    <CardHeader p='12px 5px' mb='12px' justifyContent='space-between'>
                        <Flex direction='column'>
                            <Text fontSize='lg' color={'gray.800'} fontWeight='bold'>
                            {'In-depth Analytics'}
                            </Text>
                            <Text fontSize='sm' color='gray.500' fontWeight='400'>
                            Updated as of {data ? data.dayCategories[0] : null}
                            </Text>
                        </Flex>
                        <Flex>
                            <IntervalDropDown activeTab={activeTab} setActiveTab={setActiveTab} />
                        </Flex>
                            
                     </CardHeader>

                {data && <Box margin='auto'>
                    <ReactApexChart
                        options={{
                            colors: [
                                '#42d7f5', 
                                '#73159e', 
                                '#6e856d', 
                                '#d1bf88', 
                                '#eb4c17', 
                                '#eb4c97', 
                            ],
                            chart: {
                                height: 370,
                                type: 'line',
                                stacked: false,
                                toolbar: { show: false },
                            },
                            // plotOptions: {
                            // 	candlestick: {
                            // 		colors: {
                            // 			upward: '#42d7f5',
                            // 			downward: '#42d7f5',
                            // 		},
                            // 	},
                            // 	boxPlot: {
                            // 		colors: {
                            // 			upper: '#42d7f5',
                            // 			lower: '#42d7f5',
                            // 		},
                            // 	},
                            // },
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
                                categories: getTabData().categories,
                            },
                            yaxis: [
                                {
                                    seriesName: data.legends[0],
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
                                        text: data.legends[0],
                                        style: {
                                            color: process.env.REACT_APP_INFO_COLOR,
                                        },
                                    },
                                    tooltip: {
                                        enabled: true,
                                    },
                                },
                                {
                                    seriesName: data.legends[1],
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
                                        text: data.legends[1],
                                        style: {
                                            color: process.env.REACT_APP_SUCCESS_COLOR,
                                        },
                                    },
                                },
                                {
                                    seriesName: data.legends[2],
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
                                        text: data.legends[2],
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
                        series={getTabData().series}
                        type='line'
                        width={750}
                        height={300}
                    />
                </Box>}
            </Flex>
        </CardBody>
    </Card>
	);
};

export default Intervals;
