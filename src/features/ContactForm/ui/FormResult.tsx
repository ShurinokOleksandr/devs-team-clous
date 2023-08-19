import { VStack, Text, Box } from '@chakra-ui/react';
import { Title } from 'src/shared/ui';
import React from 'react';

export const FormResult = () => {
    return (
        <VStack h={{base:'full',lg: '570px' }} w={{ base:'full',lg:'640px' }} justify="center" >
            <Box   m={5}>
                <Title
                    text=" Повідомлення надіслано"
                    textAlign="center"
                    width="full"
                />
                <Text textAlign="center">
                    Наша команда відповість на ваш запит найближчим часом. Дякуємо, що обрали нас!
                </Text>
            </Box>
        </VStack>
    );
};


