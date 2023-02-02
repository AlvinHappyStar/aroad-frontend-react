import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, H2_Mobile, Body_Text_Desktop } from '../../style/typography';
import { SCREEN_SMALL_WIDTH } from '../../default/value';

function OfferCourse() {
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
                width: '100vw',
            }
        }}>
            <Box sx={{
                ...DISPLAY_FLEX_COLUMN,
                ...{
                    width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(100vw - 100px)' : 'calc(100vw - 40px)',
                    maxWidth: '1440px',
                    margin: windowWidth > SCREEN_SMALL_WIDTH ? '40px' : '20px',
                    height: 'fit-content',
                    backgroundColor: '#545F70',
                    borderRadius: '100px',
                }
            }}>
                <Box sx={{
                    ...DISPLAY_FLEX_ROW,
                    ...{
                        justifyContent: 'center',
                    }
                }}>
                    {
                        // windowWidth > SCREEN_SMALL_WIDTH &&
                        <H2_Desktop style={{
                            width: 'calc(100% - 60px)',
                            maxWidth: '750px',
                            textAlign: 'center',
                            color: 'white',
                            margin: '97px',
                        }}>Our Driving Courses We Offer</H2_Desktop>
                    }
                    {/* {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H2_Mobile style={{
                            width: 'calc(100% - 60px)',
                            maxWidth: '750px',
                            textAlign: 'center',
                            color: 'white',
                        }}>Our Driving Courses We Offer</H2_Mobile>
                    } */}
                </Box>
                <Box sx={{
                    ...DISPLAY_FLEX_ROW,
                    ...{
                        justifyContent: 'center',
                    }
                }}>
                    <Grid container spacing={4}
                        sx={{
                            width: 'calc(100vw - 160px)',
                            maxWidth: '750px',
                            justifyContent: 'center',
                            marginBottom: '60px',
                        }}>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    width: '100%',
                                    justifyContent: 'center',
                                }
                            }}>
                                <img alt='' src='./images/Car_training.png'
                                    style={{
                                        width: '128px',
                                        height: '128px',
                                        marginBottom: '20px',
                                    }} />
                            </Box>
                            <Body_Text_Desktop style={{
                                marginBottom: '30px',
                                textAlign: 'center',
                                color: 'white',
                            }}>Car Training</Body_Text_Desktop>
                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    width: '100%',
                                    justifyContent: 'center',
                                }
                            }}>
                                <img alt='' src='./images/HGV_training.png'
                                    style={{
                                        width: '128px',
                                        height: '128px',
                                        marginBottom: '20px',
                                    }} />
                            </Box>
                            <Body_Text_Desktop style={{
                                marginBottom: '30px',
                                textAlign: 'center',
                                color: 'white',
                            }}>HGV Training</Body_Text_Desktop>
                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    width: '100%',
                                    justifyContent: 'center',
                                }
                            }}>
                                <img alt='' src='./images/Motorcycle_training.png'
                                    style={{
                                        width: '128px',
                                        height: '128px',
                                        marginBottom: '20px',
                                    }} />
                            </Box>
                            <Body_Text_Desktop style={{
                                marginBottom: '30px',
                                textAlign: 'center',
                                color: 'white',
                            }}>Motorcycle Training</Body_Text_Desktop>
                        </Grid>
                    </Grid>
                </Box>



            </Box>
        </Box>
    );
}

export default OfferCourse;