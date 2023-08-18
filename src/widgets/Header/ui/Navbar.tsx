import { useBreakpointValue, Container, List, Box } from '@chakra-ui/react';
import { useTransform, useScroll, motion } from 'framer-motion';
import { DrawerLinks } from 'src/entities/Drawer';
import { NavLinks } from 'src/entities/NavLinks';
import { Lang } from 'src/features/Lang';
import React, { useState } from 'react';

export  const Navbar = () => {
    const { scrollY } = useScroll();
    const responsiveFontSizeForAnimation = useBreakpointValue({
        base:'50',
        lg:'180',
        xl:'460'
    })
    const responsiveYPositionForAnimation = useBreakpointValue({
        lg:'650px',
        xl:'550px',
        base:'0px'
    })
    const responsiveXPositionForAnimation = useBreakpointValue({
        base:'45px',
        lg:'0',
        
    })
    const posX = useTransform(scrollY, [0, 200],  [responsiveXPositionForAnimation,'45px']);
    const posY = useTransform(scrollY, [0, 200], [responsiveYPositionForAnimation,'0px']);
    const fontSz = useTransform(scrollY, [0, 200], [responsiveFontSizeForAnimation ,'50']);
    const [font, setFont] = useState(responsiveFontSizeForAnimation);
    
    
    fontSz.on('change', (v = '460') => {
        setFont(v)
    })
    return (
        <>
            <Box position="sticky"  bgColor="black" zIndex={1111} as="nav" top={0}>
                <Container
                    justifyContent={{base:'space-between',xl:'end' }}
                    gap={{ md:'277px',base:0 }}
                    maxWidth="container.xl"
                    alignItems="center"
                    position="relative"
                    display="flex"
                    color="white"
                    h='60px'
                    as="nav"
                >
                    <Box>
                        <Box
                            style={{fontSize:`${font}px`,x:posX,y:posY }}
                            lineHeight={{base:'25px',xl: '37px' }}
                            letterSpacing="0.03em"
                            fontWeight="medium"
                            position="absolute"
                            fontFamily="DAMN"
                            as={motion.h1}
                            left="-10px"
                            color="blue"
                        >
                            OSINT
                        </Box>
                        <List   display={{base:'none',xl:"flex"}} justifyContent="space-between"  gap="60px">
                            <NavLinks />
                        </List>
                        <DrawerLinks />
                    </Box>
                    <Lang />
                </Container>
            </Box>
        </>
    );
};

