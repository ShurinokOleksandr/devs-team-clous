import { Container, VStack, HStack, Image } from '@chakra-ui/react';
import { ContactForm } from 'src/features/ContactForm';
import ContactImg from 'src/shared/assets/form.jpg';
import React from 'react';

import { Clients } from './Clients';

export const FormSection = () => {
    return (
        <Container maxWidth="container.xl" position="relative" my="60px" px={0} >
            <HStack flexDirection={{ base: "column", xl: 'row' }} mb='100px' >
                <Image src={ContactImg} />
                <VStack
                    position={{base:'static',xl:'absolute'}}
                    right={{base: 'auto', lg: '0px'}}
                    width={{base:'full',xl:'700px' }}
                    bgColor="white"
                    zIndex={1}
                    p="30px"
                >
                    <ContactForm />
                </VStack>
            </HStack>
            <Clients />
        </Container>
    );
};
