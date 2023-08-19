import { Container, VStack, HStack } from '@chakra-ui/react';
import { ContactForm } from 'src/features/ContactForm';
import ContactImg from 'src/shared/assets/form.jpg';
import Image from 'react-image-webp';
import React from 'react';

import { Clients } from './Clients';

export const FormSection = () => {
    return (
        <Container maxWidth="container.xl" position="relative" my="60px" px={0} >
            <HStack flexDirection={{ base: "column", xl: 'row' }} mb='100px' >
                <Image webp={ContactImg} src={ContactImg} />
                <VStack
                    position={{base:'static',xl:'absolute'}}
                    height={{base:'full',xl:'570px' }}
                    width={{base:'full',xl:'700px' }}
                    right={{base: 'auto', lg: '0px'}}
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
