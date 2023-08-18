import { Container, List, Flex, Text, Box } from '@chakra-ui/react';
import { useTransform, useScroll, motion } from 'framer-motion';
import { DrawerLinks } from 'src/entities/Drawer';
import { NavLinks } from 'src/entities/NavLinks';
import { Lang } from 'src/features/Lang';
import React, { useState } from 'react';

const Navbar = () => {
    const {   scrollY } = useScroll();
    
    const posX = useTransform(scrollY, [0, 200],  [ '0vw','5vw']);
    const posY = useTransform(scrollY, [0, 200], [ '50vh','0vh']);
    
    const fontSz = useTransform(scrollY, [0, 200], [ 460,40]);
    const [font, setFont] = useState(460);
   
    
    fontSz.on('change', (v) => {
      setFont(v)
    })
    posX.on('change', (v) => {
       console.log(v)
    })
    return (
        <>
            <Box position="sticky"  bgColor="black" zIndex={111} as="header" top={0}>
                
                <Container maxWidth="container.lg" as="nav" >
                    <Flex justifyContent={{base:'space-between',lg:'end' }}  display="flex" align="center" color="white"  py={5}   >
                        <List   width={{base:'100px',lg:'652px'}}  marginX={{lg:'auto' ,base:0 }} >
                            <Flex display={{base:'none',lg:"flex"}} justify="space-between" >
                                <Text
                                    //@ts-ignore
                                    style={{fontSize:`${font}px`,x:posX,y:posY }}
                                    letterSpacing="0.03em"
                                    position="absolute"
                                    fontWeight="medium"
                                  
                                    lineHeight="none"
                                    fontFamily="DAMN"
                                    as={motion.h1}
                                    color="blue"
                                    left="90px"
                                >
                                    OSINT
                                </Text>
                                <NavLinks />
                            </Flex>
                            <DrawerLinks />
                        </List>
                        <Lang />
                    </Flex>
                   
                </Container>
            
            </Box>
        </>
    );
};

export default Navbar;
