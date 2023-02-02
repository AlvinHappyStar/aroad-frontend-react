import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { DISPLAY_FLEX_COLUMN, DISPLAY_FLEX_ROW } from '../../style/default';
import { H2_Desktop, H2_Mobile, H4_Desktop, H5_Desktop, Body_Text_Desktop, Description_Text_Desktop, H3_Desktop } from '../../style/typography';
import { SCREEN_MEDIUM_WIDTH, SCREEN_SMALL_WIDTH } from '../../default/value';
import { Button_Contained } from '../../style/button';

function CarTestDate() {
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
                marginBottom: '130px'
            }
        }}>

            <Box
                sx={{
                    ...DISPLAY_FLEX_COLUMN,
                    ...{
                        width: windowWidth > SCREEN_SMALL_WIDTH ? 'calc(100vw - 100px)' : 'calc(100vw - 40px)',
                        maxWidth: '1440px',
                        margin: windowWidth > SCREEN_SMALL_WIDTH ? '15px 0 0 15px' : '30px 0 0 0',
                        padding: '30px 0',
                        borderRadius: '30px',
                        boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                        alignItems: 'center',
                    }
                }}>
                <H3_Desktop style={{
                    marginTop: '40px',
                    textAlign: 'center'
                }}>Available Car Test Dates</H3_Desktop>
                <H4_Desktop style={{
                    marginTop: '20px',
                    marginBottom: windowWidth > SCREEN_SMALL_WIDTH ? '20px' : '0px',
                    color: '#545F70',
                }}>Manual & Auto</H4_Desktop>

                <Box sx={{
                    ...windowWidth > SCREEN_SMALL_WIDTH ? DISPLAY_FLEX_ROW : DISPLAY_FLEX_COLUMN,
                    ...{
                        justifyContent: 'center',
                    }
                }}>
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                        <img alt='' src='./images/flow-bar-vertical.png'
                            style={{
                                width: '28px',
                                height: '155px',
                                marginRight: '95px',
                            }} />

                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&
                        <img alt='' src='./images/flow-bar-vertical.png'
                            style={{
                                width: '28px',
                                height: '200px',
                                marginLeft:'100px',
                                transform: 'rotate(-90deg)',
                            }} />
                    }
                    <Grid container sx={{
                        marginTop:windowWidth > SCREEN_SMALL_WIDTH? '35px' : '0px',
                        justifyContent: 'center',
                    }}>
                        <Grid item xs={12}
                            sx={{
                                ...DISPLAY_FLEX_ROW,
                                ...{
                                    justifyContent: 'center',
                                }
                            }}>
                            <Box sx={{
                                ...windowWidth > SCREEN_SMALL_WIDTH ? DISPLAY_FLEX_ROW : DISPLAY_FLEX_COLUMN,
                                ...{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        alignItems: 'center',
                                        marginRight: windowWidth > SCREEN_SMALL_WIDTH ? '95px' : '10px',
                                        marginBottom: '20px'
                                    }
                                }}>
                                    <H5_Desktop style={{
                                        marginBottom: '20px',
                                    }}>Modern Test Centre</H5_Desktop>
                                    <Box sx={DISPLAY_FLEX_ROW}>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '15px'
                                            }
                                        }}>
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>28/11/22</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Thu, 14:22</Description_Text_Desktop>
                                        </Box>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }
                                        }} >
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>20/11/23</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Fri, 08:57</Description_Text_Desktop>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        alignItems: 'center',
                                        marginRight: windowWidth > SCREEN_SMALL_WIDTH ? '95px' : '10px',
                                        marginBottom: '20px'
                                    }
                                }}>
                                    <H5_Desktop style={{
                                        marginBottom: '20px',
                                    }}>Tolworth Test Centre</H5_Desktop>
                                    <Box sx={DISPLAY_FLEX_ROW}>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                marginRight: '15px'
                                            }
                                        }}>
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>18/11/22</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Fri, 10:04</Description_Text_Desktop>
                                        </Box>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }
                                        }} >
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>11/01/23</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Wed, 07:03</Description_Text_Desktop>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        alignItems: 'center',
                                        marginRight: windowWidth > SCREEN_SMALL_WIDTH ? '95px' : '10px',
                                        marginBottom: windowWidth > SCREEN_SMALL_WIDTH ? '20px' : '0px'
                                    }
                                }}>
                                    <H5_Desktop style={{
                                        marginBottom: '20px',
                                    }}>Isleworth Test Centre</H5_Desktop>
                                    <Box sx={DISPLAY_FLEX_ROW}>
                                        <Box sx={{
                                            ...DISPLAY_FLEX_COLUMN,
                                            ...{
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }
                                        }}>
                                            <Typography sx={{
                                                backgroundColor: '#31373E',
                                                color: 'white',
                                                width: '100px',
                                                textAlign: 'center',
                                                padding: '10px 0',
                                                borderRadius: '30px',
                                            }}>31/12/22</Typography>
                                            <Description_Text_Desktop style={{
                                                width: '100px',
                                                textAlign: 'center',
                                            }}>Sat, 12:05</Description_Text_Desktop>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    {
                        windowWidth > SCREEN_SMALL_WIDTH &&
                            <img alt='' src='./images/flow-bar-vertical.png'
                                style={{
                                    width: '28px',
                                    height: '155px',
                                    justifyContent: 'center',
                                    transform: 'rotate(180deg)'
                                }} />

                    }
                    {
                        windowWidth <= SCREEN_SMALL_WIDTH &&

                        <img alt='' src='./images/flow-bar-vertical.png'
                            style={{
                                width: '28px',
                                height: '200px',
                                marginLeft:'100px',
                                transform: 'rotate(90deg)',
                            }} />

                    }

                </Box>

                <Box>
                    <Button_Contained>More Dates/Book</Button_Contained>
                </Box>
            </Box>
        </Box >
    );
}

export default CarTestDate;