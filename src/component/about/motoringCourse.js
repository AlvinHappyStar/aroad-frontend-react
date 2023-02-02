import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, H2_Mobile, Body_Title_Desktop, H5_Desktop, H5_Mobile } from '../../style/typography';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';
import TextEdit_Custom from '../../style/form';
import { Button_Contained } from '../../style/button';

function MotoringCourse() {
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
                }
            }}>
                <Box sx={{
                    ...DISPLAY_FLEX_COLUMN,
                    ...{
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
                        maxWidth: '850px',
                        textAlign: 'center',
                        marginTop: '30px',
                    }}>A-Road School Of Motoring offers a suite of driving courses and programs in our test centres located in the following locations: Yeading, Mitcham, Pinner, Tolworth, Southall, Hendon, Isleworth, West Wickham, Slough, and Morden.</Body_Title_Desktop>
                    
                </Box>
            </Box>
        </Box >
    );
}

export default MotoringCourse;