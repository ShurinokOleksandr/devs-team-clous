import { MainAboutFirstSection } from 'src/widgets/Main/ui/MainAboutSection';
import { HeaderMainSection } from 'src/widgets/Header/ui/HeaderMainSection';
import { MainTextAbout } from 'src/shared/lib/lists/MainTextAbout';
import { Container, Text, Box } from '@chakra-ui/react';
import React from 'react';

import { MainVideoSection } from './MainVideoSection';

export function Main() {
    return (
        <>
            <HeaderMainSection />
            <Container maxWidth="container.xl" >
                <MainVideoSection />
                <Box mb={5}>
                    <Text
                        textTransform="uppercase"
                        color="titleMain"
                        fontFamily="DAMN"
                        fontSize="70px"
                    >
                        Про
                        <Text
                            color="blue"
                            as="span"
                            ml={3}
                        >
                            OSINT
                        </Text>
                    </Text>
                </Box>
                {
                    MainTextAbout.map((item) =>
                        <MainAboutFirstSection
                            key={item.firstTitle}
                            {...item}
                        />
                    )
                }
            </Container>
        </>
    );
}
