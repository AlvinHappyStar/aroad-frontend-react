import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { DISPLAY_FLEX_ROW } from '../../style/default';
import { SCREEN_SMALL_WIDTH } from '../../default/value';

function Banner() {
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
            width: '100vw',
        }}>
            {
                windowWidth > SCREEN_SMALL_WIDTH &&
                <Box sx={{
                    position: 'relative',
                }}>
                    <img alt='' src='./images/Motor_banner.png'
                        style={{
                            position: 'relative',
                            width: '100vw',
                        }} />
                </Box>
            }
            {
                windowWidth <= SCREEN_SMALL_WIDTH &&
                <Box sx={{
                    position: 'relative',
                }}>
                    <Box sx={{
                        ...DISPLAY_FLEX_ROW,
                        ...{
                            justifyContent: 'center',
                            overflow: 'hidden',
                            width: '100vw',
                        }
                    }}>
                        <img alt='' src='./images/Car_banner.png'
                            style={{
                                width: '100vw',
                                minWidth: '640px',
                            }} />
                    </Box>
                </Box>
            }

        </Box >
    );
}

export default Banner;