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
                            <img alt='' src='./images/flow_horizontal.png'
                                style={{
                                    width: '200px',
                                    height: '55px',
                                    marginLeft: '250px',
                                }} />



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
                                }}>Driver Certificate of Professional Competence (CPC) Training</H3_Desktop>
                                <Body_Text_Desktop>For a professional driver to maintain his or her Certificate of Professional Competence (CPC), 35 hours of periodic training must be completed every five years. Our Driver CPC Training course lasts five days with 7 hours of training per day, so it counts toward that requirement. Our course is delivered in accordance with DVSA requirements and covers a wide range of topics to ensure your learning is varied and enhanced.</Body_Text_Desktop>
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
                            height: '550px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                // marginTop: '20px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                            }
                        }}>

                            <img alt='' src='./images/flow_horizontal.png'
                                style={{
                                    width: '325px',
                                    height: '55px',
                                    marginRight: '150px',
                                }} />

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
                                }}>Class C1 Truck Driver Training</H3_Desktop>
                                <Body_Text_Desktop>This is the course you need to take in order to become a Class C1 LGV 7.5 Ton - 18 Ton truck/lorry driver. This class will teach you how to operate and maintain commercial vehicles, as well as the skills necessary for safe driving.</Body_Text_Desktop>
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
                            height: '550px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '20px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                            }
                        }}>

                            <img alt='' src='./images/flow_horizontal.png'
                                style={{
                                    width: '325px',
                                    height: '55px',
                                    marginRight: '150px',
                                }} />

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
                                }}>Class 2 / Class C HGV Driver Training</H3_Desktop>
                                <Body_Text_Desktop>Designed for new drivers who want to get their Class C license. It is also a requirement for you to get your Class1 Category C+E, it teaches you the ins and outs of driving a Class C truck/lorry, including traffic laws, how to park and turn, and what to do when you're on the road.</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>

                <Grid item xs={windowWidth > SCREEN_SMALL_WIDTH ? 4 : 12}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'left',
                            marginTop: '20px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '20px',
                                padding: '30px 0',
                                borderRadius: '30px',
                                boxShadow: '0px 6px 8px rgba(0, 0, 0, 0.16)',
                                alignItems: 'center',
                            }
                        }}>
                            <img alt='' src='./images/flow_horizontal.png'
                                style={{
                                    width: '325px',
                                    height: '55px',
                                    marginRight: '150px',
                                }} />

                            <Box sx={{
                                ...DISPLAY_FLEX_COLUMN,
                                ...{
                                    justifyContent: 'center',
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <H3_Desktop style={{
                                    width: 'calc(100% - 40px)',
                                    maxWidth: '750px',
                                    textAlign: 'left',
                                    marginBottom: '10px'
                                }}>Class 1/ Class C+E Truck Driver Training</H3_Desktop>
                                <Body_Text_Desktop>This type of training requires you to have a Class C license first by law for new drivers before they are allowed to drive any Class 1 or Class C + E vehicle. The training includes basic safety procedures, such as how to properly secure items in the back of the truck during transport. The class is also designed to help students become more familiar with the different regulations that apply to these vehicles.</Body_Text_Desktop>
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
                                marginTop: '20px',
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
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <H5_Desktop style={{
                                        width: 'calc(100% - 10px)',
                                        maxWidth: '750px',
                                        textAlign: 'left',
                                        marginBottom: '10px'
                                    }}>For only</H5_Desktop>
                                </Box>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <img alt='' src='./images/flow_horizontal.png'
                                        style={{
                                            width: '200px',
                                            height: '55px',
                                            marginLeft: '250px',
                                        }} />
                                </Box>

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
                                }}>Car to HGV Class 2 / Category C - Ridgit Training Package</H3_Desktop>
                                <Body_Text_Desktop>Fast Track from Provisional car license to HGV, when you take this training package where you’ll get assistance from provisional licence application, medical, an online theory study & LGV driving book, DVSA theory tests (multiple choice, hazard perception, and Driver CPC case study). This Package includes practical tests from car to HGV.</Body_Text_Desktop>
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
                            height: '500px',
                        }
                    }}>
                        <Box sx={{
                            ...DISPLAY_FLEX_COLUMN,
                            ...{
                                justifyContent: 'center',
                                marginTop: '20px',
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
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <img alt='' src='./images/flow_horizontal.png'
                                        style={{
                                            width: '200px',
                                            height: '55px',
                                            marginLeft: '250px',
                                        }} />
                                </Box>

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
                                }}>Provisional Package</H3_Desktop>
                                <Body_Text_Desktop>This package includes assistance with obtaining a medical and provisional licence, an online theory study and LGV driving book, DVSA theory tests (multiple choice, hazard perception, and Driver CPC case study).</Body_Text_Desktop>
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
                                marginTop: '20px',
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
                                    alignContent: 'center',
                                    margin: '20px',
                                }
                            }}>
                                <Box sx={{
                                    ...DISPLAY_FLEX_COLUMN,
                                    ...{
                                        justifyContent: 'center',
                                    }
                                }}>
                                    <img alt='' src='./images/flow_horizontal.png'
                                        style={{
                                            width: '325px',
                                            height: '55px',
                                            marginRight: '150px',
                                        }} />
                                </Box>

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
                                }}>Car to HGV – Articulated Training Package</H3_Desktop>
                                <Body_Text_Desktop>For only £4295, you will receive assistance with the medical and provisional licence, application and get an online theory study and LGV driving book, DVSA theory tests (hazard perception, multiple choice, and Driver CPC case study), full car license up to 45Hrs with DVSA approved instructors an eleven-day LGV to HGV Training.</Body_Text_Desktop>
                            </Box>
                        </Box>
                    </Box>
                </Grid>


            </Grid>
        </Box>
    );
}

export default CourseList;