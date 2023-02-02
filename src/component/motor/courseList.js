import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H3_Desktop, H5_Desktop, Body_Text_Desktop } from '../../style/typography';
import { SCREEN_SMALL_WIDTH } from '../../default/value';
import Custom_Typo from '../../style/custom_typo';

function CourseList() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        function handleResize() {
            console.log('Navbar handleResize log - 1 : ', window.innerWidth);
            setWindowWidth(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [windowWidth]);

    return (
        <Box sx={{
            ...DISPLAY_FLEX_ROW,
            ...{
                justifyContent: 'center',
                marginBottom:'20px'
            }
        }}>
            <Grid container spacing={4}
                sx={{
                    width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(100vw - 100px)' : 'calc(100vw)',
                    maxWidth: '1600px',
                    margin: windowWidth > SCREEN_SMALL_WIDTH ? '10px 20px' : '10px 20px',
                    height: 'fit-content',
                    justifyContent: 'left',
                    // marginBottom: '60px',
                }}>
                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '20px',
                            // height: '400px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '10px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                            }
                        }}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                }
                            }}>
                                <Custom_Typo
                                    s1={'36 hrs'}
                                    s2={'£1,499'} />

                                <img alt='' src='./images/flow_horizontal.png'
                                    style={{
                                        width: '200px',
                                        height: '55px',
                                        marginLeft:'50px'
                                    }} />
                            </Box>
                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <H3_Desktop style={{
                                    width: 'calc(100% - 60px)',
                                    maxWidth: '750px',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>Introduction to Motorcycling</H3_Desktop>
                                <Body_Text_Desktop>This course is designed for people who want a 1 to 1 and have never ridden a motorcycle before, have concerns about being on 2 wheels or might have been asked to retake their CBT. This course will cover the basics of operating a motorcycle, including how to start and stop, how to change gears safely, how to accelerate and brake smoothly, and how to handle turns. This course will not take place on public roads.</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '20px',
                            // height: '400px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '10px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                                height:'430px',
                            }
                        }}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                }
                            }}>

                                <img alt='' src='./images/flow_horizontal.png'
                                    style={{
                                        width: '200px',
                                        height: '55px',
                                        marginLeft:'250px'
                                    }} />
                            </Box>
                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <H3_Desktop style={{
                                    width: 'calc(100% - 60px)',
                                    maxWidth: '750px',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>CBT (Compulsory Basic Training) and Renewal</H3_Desktop>
                                <Body_Text_Desktop>CBT is a course that all new riders must take to ride a motorcycle on public roads. It's meant to teach you how to ride safely and responsibly, and it's required by law for anyone who wants to drive a motorcycle in the UK.</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            marginTop: '20px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '10px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                                height:'430px',
                            }
                        }}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                }
                            }}>

                                <img alt='' src='./images/flow_horizontal.png'
                                    style={{
                                        width: '200px',
                                        height: '55px',
                                        marginLeft:'250px'
                                    }} />
                            </Box>
                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <H3_Desktop style={{
                                    width: 'calc(100% - 60px)',
                                    maxWidth: '750px',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>DAS (Direct Access Scheme)</H3_Desktop>
                                <Body_Text_Desktop>By taking DAS, you can obtain a full motorcycle licence without previously holding a smaller bike licence must be over 24 – you will have no restrictions on what capacity motorbike you can operate. Direct access course includes CBT, Theory test, Off road & On road practical tests, discounts if you have been riding for 2 years , have CBT or Theory already</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>


            </Grid>
        </Box>
    );
}

export default CourseList;