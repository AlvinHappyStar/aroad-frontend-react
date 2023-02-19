import React, { useState, useEffect } from 'react';
import { Box, Grid } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, H2_Mobile, Body_Title_Desktop, H5_Desktop } from '../../style/typography';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';
import TextEdit_Custom from '../../style/form';
import { Button_Contained } from '../../style/button';

function FindLesson() {
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
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            alignItems: 'center',
                        }
                    }}>
                        <img alt='' src='./images/flow_horizontal.png'
                            style={{
                                width: '270px',
                                height: '28px',
                                marginBottom: '20px',
                            }} />
                    </Box>
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <H2_Desktop style={{
                            width: 'calc(100% - 60px)',
                            maxWidth: '750px',
                            textAlign: 'center',
                        }}>Find lessons near you today</H2_Desktop>
                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <H2_Mobile style={{
                            width: 'calc(100% - 60px)',
                            maxWidth: '750px',
                            textAlign: 'center',
                        }}>Find lessons near you today</H2_Mobile>
                    }
                    <Box sx={{
                        width: 'calc(100% - 60px)',
                        maxWidth: '600px',
                        padding: '25px',
                    }}>
                        <H5_Desktop style={{
                            width: 'calc(100% - 60px)',
                            maxWidth: '550px',
                            textAlign: 'left',
                        }}>Post Code*</H5_Desktop>
                        <TextEdit_Custom
                            placeholder={''}
                            label={''}
                            icon={0}
                            style={{
                                marginBottom: '22px',
                                '& input': {
                                    width: 'calc(100vw - 140px)',
                                    maxWidth: '550px',
                                },
                            }}
                        />
                        <H5_Desktop style={{
                            width: 'calc(100% - 60px)',
                            maxWidth: '550px',
                            textAlign: 'left',
                        }}>Phone Number</H5_Desktop>
                        <TextEdit_Custom
                            placeholder={''}
                            label={''}
                            icon={0}
                            style={{
                                marginBottom: '22px',
                                '& input': {
                                    width: 'calc(100vw - 140px)',
                                    maxWidth: '550px',
                                },
                            }}
                        />

                        <Box sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                justifyContent: 'center',
                                margin: '30px 0 10px',
                            }
                        }}>
                            <Button_Contained sx={{
                            ...DISPLAY_FLEX_ROW,
                            ...{
                                width: '550px',
                            }
                        }}>Find</Button_Contained>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}

export default FindLesson;