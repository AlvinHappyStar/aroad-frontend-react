import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, Body_Text_Desktop, H2_Mobile, Body_Text_Mobile } from '../../style/typography';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';
import { Button_Contained } from '../../style/button';

function WhyTakeCourse() {
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
                backgroundColor: 'white',
            }
        }}>
            <Box sx={{
                ...windowWidth > SCREEN_SMALL_WIDTH ? DISPLAY_FLEX_ROW : DISPLAY_FLEX_COLUMN,
                ...{
                    width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(100vw - 100px)' : 'calc(100vw - 40px)',
                    maxWidth: '1440px',
                    margin: windowWidth > SCREEN_SMALL_WIDTH ? '20px 50px 50px' : '20px 20px 50px',
                    height: 'fit-content',
                }
            }}>
                {
                    windowWidth > SCREEN_SMALL_WIDTH &&
                    <Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                    }}>
                        <img alt='' src='./images/car-ico.png'
                            style={{
                                width: windowWidth > SCREEN_SMALL_WIDTH ? '66px' : '50px',
                                height: windowWidth > SCREEN_SMALL_WIDTH ? '66px' : '50px',
                                marginBottom: '20px',
                            }} />
                        {
                            windowWidth > SCREEN_SMALL_WIDTH &&
                            <H2_Desktop style={{
                                marginBottom: '50px',
                            }}>Why Take Our Driving Courses?</H2_Desktop>
                        }
                        {
                            windowWidth > SCREEN_SMALL_WIDTH &&
                            <Body_Text_Desktop style={{
                                marginBottom: '30px',
                            }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</Body_Text_Desktop>
                        }
                        {
                            windowWidth <= SCREEN_SMALL_WIDTH &&
                            <H2_Mobile style={{
                                marginBottom: '50px',
                            }}>Why Take Our Driving Courses?</H2_Mobile>
                        }
                        {
                            windowWidth <= SCREEN_SMALL_WIDTH &&
                            <Body_Text_Mobile style={{
                                marginBottom: '30px',
                            }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</Body_Text_Mobile>
                        }
                        <Box>
                            <Button_Contained>Apply Now</Button_Contained>
                        </Box>
                    </Box>
                }
                {
                    windowWidth > SCREEN_SMALL_WIDTH &&
                    <img alt='' src='./images/whyTakeCourse.png'
                        style={{
                            width: windowWidth > SCREEN_MEDIUM_WIDTH ? '515px' :
                                windowWidth > SCREEN_SMALL_WIDTH ? '360px' : '187px',
                            height: windowWidth > SCREEN_MEDIUM_WIDTH ? '515px' :
                                windowWidth > SCREEN_SMALL_WIDTH ? '360px' : '187px',
                            margin: windowWidth > SCREEN_SMALL_WIDTH ? '50px 0 0 0' : '0 auto 20px',
                        }} />
                }
                {
                    windowWidth <= SCREEN_SMALL_WIDTH &&
                    <img alt='' src='./images/whyTakeCourse.png'
                        style={{
                            width: windowWidth > SCREEN_MEDIUM_WIDTH ? '515px' :
                                windowWidth > SCREEN_SMALL_WIDTH ? '360px' : '187px',
                            height: windowWidth > SCREEN_MEDIUM_WIDTH ? '515px' :
                                windowWidth > SCREEN_SMALL_WIDTH ? '360px' : '187px',
                            margin: windowWidth > SCREEN_SMALL_WIDTH ? '50px 0 0 0' : '0 auto 20px',
                        }} />
                }
                {
                    windowWidth <= SCREEN_SMALL_WIDTH &&
                    <Box sx={{
                        ...DISPLAY_FLEX_COLUMN,
                    }}>
                        <img alt='' src='./images/car-ico.png'
                            style={{
                                width: windowWidth > SCREEN_SMALL_WIDTH ? '66px' : '50px',
                                height: windowWidth > SCREEN_SMALL_WIDTH ? '66px' : '50px',
                                marginBottom: '20px',
                            }} />
                        {
                            windowWidth > SCREEN_SMALL_WIDTH &&
                            <H2_Desktop style={{
                                marginBottom: '50px',
                            }}>Why Take Our Driving Courses?</H2_Desktop>
                        }
                        {
                            windowWidth > SCREEN_SMALL_WIDTH &&
                            <Body_Text_Desktop style={{
                                marginBottom: '30px',
                            }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</Body_Text_Desktop>
                        }
                        {
                            windowWidth <= SCREEN_SMALL_WIDTH &&
                            <H2_Mobile style={{
                                marginBottom: '50px',
                            }}>Why Take Our Driving Courses?</H2_Mobile>
                        }
                        {
                            windowWidth <= SCREEN_SMALL_WIDTH &&
                            <Body_Text_Mobile style={{
                                marginBottom: '30px',
                            }}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea</Body_Text_Mobile>
                        }
                        <Box>
                            <Button_Contained>Apply Now</Button_Contained>
                        </Box>
                    </Box>
                }
            </Box>
        </Box >
    );
}

export default WhyTakeCourse;