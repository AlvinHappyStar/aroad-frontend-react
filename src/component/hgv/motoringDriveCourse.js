import React, { useState, useEffect } from 'react';
import { Box, Grid} from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, H2_Mobile, Body_Title_Desktop, H5_Desktop, H5_Mobile } from '../../style/typography';
import { SCREEN_SMALL_WIDTH } from '../../default/value';
import SelectOptions from './selectOptions';
import FindLesson from './findLesson';


function MotoringDriveCourse() {
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
                    margin: windowWidth > SCREEN_SMALL_WIDTH ? '50px 50px' : '50px 20px',
                    height: 'fit-content',
                    padding: '30px 0',
                    borderRadius: '30px',
                    boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                    alignItems: 'center',
                }
            }}>
                {
                    windowWidth > SCREEN_SMALL_WIDTH &&
                    <H2_Desktop style={{
                        width: 'calc(100% - 60px)',
                        maxWidth: '750px',
                        textAlign: 'center',
                    }}>A-Road School Of Motoring Driving Courses</H2_Desktop>
                }
                {
                    windowWidth <= SCREEN_SMALL_WIDTH &&
                    <H2_Mobile style={{
                        width: 'calc(100% - 60px)',
                        maxWidth: '750px',
                        textAlign: 'center',
                    }}>A-Road School Of Motoring Driving Courses</H2_Mobile>
                }
                <Body_Title_Desktop style={{
                    width: 'calc(100% - 60px)',
                    maxWidth: '1100px',
                    textAlign: 'center',
                    marginTop: '30px',
                }}>A-Road School Of Motoring offers a suite of driving courses and programs in our test centres located in the following locations: Yeading, Mitcham, Pinner, Tolworth, Southall, Hendon, Isleworth, West Wickham, Slough, and Morden.</Body_Title_Desktop>

                <Box sx={{
                    ...DISPLAY_FLEX_ROW,
                    ...{
                        justifyContent: 'center',
                        marginTop: '45px',
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
                                <img alt='' src='./images/quicker_test_date.png'
                                    style={{
                                        width: '66px',
                                        height: '66px',
                                        marginBottom: '20px',
                                    }} />
                            </Box>
                            {
                                windowWidth > SCREEN_SMALL_WIDTH &&
                                <H5_Desktop style={{

                                    textAlign: 'center',
                                }}>Quicker test dates</H5_Desktop>
                            }
                            {
                                windowWidth <= SCREEN_SMALL_WIDTH &&
                                <H5_Mobile style={{
                                    textAlign: 'center',
                                }}>Quicker test dates</H5_Mobile>
                            }
                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    width: '100%',
                                    justifyContent: 'center',
                                }
                            }}>
                                <img alt='' src='./images/manual_auto_gear.png'
                                    style={{
                                        width: '66px',
                                        height: '66px',
                                        marginBottom: '20px',
                                    }} />
                            </Box>
                            {
                                windowWidth > SCREEN_SMALL_WIDTH &&
                                <H5_Desktop style={{
                                    textAlign: 'center',
                                }}>Manual and auto gears</H5_Desktop>
                            }
                            {
                                windowWidth <= SCREEN_SMALL_WIDTH &&
                                <H5_Mobile style={{
                                    textAlign: 'center',
                                }}>Manual and auto gears</H5_Mobile>
                            }
                        </Grid>
                        <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                            <Box sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    width: '100%',
                                    justifyContent: 'center',
                                }
                            }}>
                                <img alt='' src='./images/mock_test.png'
                                    style={{
                                        width: '66px',
                                        height: '66px',
                                        marginBottom: '20px',
                                    }} />
                            </Box>
                            {
                                windowWidth > SCREEN_SMALL_WIDTH &&
                                <H5_Desktop style={{
                                    textAlign: 'center',
                                }}>Mock test included</H5_Desktop>
                            }
                            {
                                windowWidth <= SCREEN_SMALL_WIDTH &&
                                <H5_Mobile style={{
                                    textAlign: 'center',
                                }}>Mock test included</H5_Mobile>
                            }
                        </Grid>
                    </Grid>
                </Box>
                <SelectOptions />
                <FindLesson />
            </Box>
        </Box >
    );
}

export default MotoringDriveCourse;