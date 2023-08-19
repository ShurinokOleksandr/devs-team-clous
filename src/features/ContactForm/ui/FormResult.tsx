import { Button, VStack, Text, Box } from '@chakra-ui/react';
import { Title } from 'src/shared/ui';
import React from 'react';
interface FormResultType {
    setIsSentForm:(value:boolean) => void
}
export const FormResult = ({setIsSentForm}:FormResultType) => {
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
            <Button onClick={() => setIsSentForm(false)}>
                Відправити ще раз
            </Button>
        </VStack>
    );
};


