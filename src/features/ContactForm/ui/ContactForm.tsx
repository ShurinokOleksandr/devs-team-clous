import {
    InputRightElement,
    FormErrorMessage,
    FormControl,
    InputGroup,
    Textarea,
    GridItem,
    Button,
    Input,
    Text,
    Grid,
    Box
} from '@chakra-ui/react';
import { ReactComponent as UnValidIcon } from 'src/shared/assets/unvalidForm.svg';
import { SubmitHandler, useForm } from 'react-hook-form';
import React, { useState } from 'react';

import { FormResult } from './FormResult';

type Inputs = {
    phoneNumber: number,
    reviews:string,
    company:string,
    name: string,
    email:string,
};
export const ContactForm = () => {
    const [isSentForm,setIsSentForm] = useState(false)
    const { formState: { errors }, handleSubmit, register, reset } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        setIsSentForm(true)
        console.log(data)
        reset()
    };
    
    return (
        <Box lineHeight="28px" bgColor="white">
            {
                !isSentForm ?
                    <>
                        <Text textTransform="uppercase" fontFamily="DAMN" fontSize="44px" mb="10px">
                            Зв'язатися з нами
                        </Text>
                        <Text fontFamily="Exo 2">
                            Маєте запитання або зацікавлені в наших послугах OSINT? Залиште свої контактні дані, і наша команда експертів з радістю допоможе вам.
                        </Text>
                        <form  onSubmit={handleSubmit(onSubmit)} autoComplete="off">
                            <Grid
                                templateColumns='repeat(4, 1fr)'
                                templateRows='repeat(2, 1fr)'
                                columnGap="30px"
                                rowGap="15px"
                                my="30px"
                            >
                                <GridItem colSpan={{base:4,md:2 }}>
                                    <FormControl isInvalid={!!errors.name}>
                                        <InputGroup textAlign="center">
                                            <Input
                                                placeholder="Ваше імʼя *"
                                                borderColor=" border"
                                                color=" border"
                                                rounded="4px"
                                                type="text"
                                                key="name"
                                                h="56px"
                                                {...register("name", { minLength: { message: 'Minimum length should be 4', value: 4 }, required: true, })}
                                            />
                                            {
                                                errors.name &&
                                                <InputRightElement  top="13%">
                                                    <UnValidIcon   />
                                                </InputRightElement>
                                            }
                                        </InputGroup>
                                        <FormErrorMessage>
                                            <Text ml={2}>
                                                {errors.name && errors.name.message || 'Write down name!'}
                                            </Text>
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={{base:4,md:2 }}>
                                    <FormControl isInvalid={!!errors.phoneNumber}>
                                        <InputGroup textAlign="center">
                                            <Input
                                                borderColor=" border"
                                                key="phoneNumber"
                                                rounded="4px"
                                                type="tel"
                                                h="56px"
                                                {...register("phoneNumber", {
                                                    minLength:
                                                        {
                                                            message: 'Minimum length should be 8 and only numbers',
                                                            value: 8
                                                        },
                                                    pattern: {
                                                        message: 'Please enter a number',
                                                        value: /^[0-9]+$/,
                                                    },
                                                    required: true,
                                                })}
                                                placeholder='Номер телефону *'
                                                color="border"
                                            />
                                            {
                                                errors.phoneNumber &&
                                                <InputRightElement top="13%">
                                                    <UnValidIcon   />
                                                </InputRightElement>
                                            }
                                        
                                        </InputGroup>
                                        <FormErrorMessage>
                                            <Text ml={2}>
                                                {errors.phoneNumber && errors.phoneNumber.message || 'Write down phone!'}
                                            </Text>
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={{base:4,md:2 }}>
                                    <FormControl isInvalid={!!errors.email}>
                                        <InputGroup textAlign="center">
                                            <Input borderColor="border"
                                                   rounded="4px"
                                                   type="email"
                                                   key="email" h="56px"
                                                   {...register("email", { required: true })}
                                                   placeholder='Email *'
                                                   color="border"
                                            />
                                            {
                                                errors.email &&
                                                <InputRightElement  top="13%">
                                                    <UnValidIcon   />
                                                </InputRightElement>
                                            }
                                        </InputGroup>
                                        <FormErrorMessage>
                                            <Text ml={2}>
                                                {errors.email && errors.email.message || "Write down email!"}
                                            </Text>
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={{base:4,md:2 }}>
                                    <FormControl isInvalid={!!errors.company}>
                                        <InputGroup textAlign="center">
                                            <Input borderColor="border"
                                                   key="company"
                                                   rounded="4px"
                                                   h="56px"
                                                   {...register("company", { required: true })}
                                                   placeholder='Ваша компанія'
                                                   color="border"
                                            />
                                            {
                                                errors.company && <InputRightElement  top="13%">
                                                    <UnValidIcon   />
                                                </InputRightElement>
                                            }
                                        
                                        </InputGroup>
                                        <FormErrorMessage>
                                            <Text ml={2}>
                                                {errors.company && errors.company.message|| "Write down company!"}
                                            </Text>
                                        </FormErrorMessage>
                                    </FormControl>
                                </GridItem>
                                <GridItem colSpan={4}>
                                    <InputGroup textAlign="center">
                                        <Textarea
                                            key="reviews"
                                            resize="none"
                                            {...register("reviews", { required: true })}
                                            placeholder='Залишіть повідомлення'
                                            borderColor="border"
                                            rounded="4px" h="118px"
                                        />
                                        {
                                            errors.reviews && <InputRightElement  top="10%">
                                                <UnValidIcon   />
                                            </InputRightElement>
                                        }
                                    
                                    </InputGroup>
                                    
                                    <FormErrorMessage>
                                        <Text ml={2}>
                                            {errors.reviews && errors.reviews.message|| "Write down reviews!"}
                                        </Text>
                                    </FormErrorMessage>
                                </GridItem>
                            </Grid>
                            <Button _hover={{bgColor:'blue.500'}} display="block" bgColor="blue" color="white" type="submit" w="full">
                                Відправити повідомлення
                            </Button>
                        </form>
                    </>
                    : <FormResult setIsSentForm={setIsSentForm} />
            }
        </Box>
    );
};
