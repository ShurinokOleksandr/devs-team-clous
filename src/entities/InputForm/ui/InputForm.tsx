import { FormErrorMessage, Input, Text } from '@chakra-ui/react';
import { HTMLChakraProps } from '@chakra-ui/system';
import {  UseFormRegister } from 'react-hook-form';

interface InputFormProps extends HTMLChakraProps<"input">{
    register: UseFormRegister<any>; // Replace any with your form's type
    error: string;
    label: string;
}

export const InputForm = ({
                              placeholder,
                              register,
                              label,
                              error,
                              ...props
                          }:InputFormProps) => {
    return (
        <div>
            <Input
                borderColor="brand.border"
                placeholder={placeholder}
                color="brand.border"
                rounded="4px"
                type="text"
                h="56px"
                {...props}
            />
            <FormErrorMessage>
                <Text ml={2}>
                    {error || `Write down ${label}!`}
                </Text>
            </FormErrorMessage>
        </div>
    );
};
