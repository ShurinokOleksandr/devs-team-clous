import { VStack, Text, Box } from '@chakra-ui/react';
import { Title } from 'src/shared/ui';
import React from 'react';

export const FormResult = () => {
    return (
        <VStack justify="center" w="740px" h="570px" >
            <Box w={{ base:"330px",md:'470px' }} m={10}>
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


