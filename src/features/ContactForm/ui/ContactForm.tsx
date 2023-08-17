import { FormErrorMessage, FormControl, Textarea, GridItem, Button, Input, Text, Grid, Box } from '@chakra-ui/react';
import { SubmitHandler, useForm } from 'react-hook-form';
import React from 'react';

type Inputs = {
    phoneNumber: number,
    reviews:string,
    company:string,
    name: string,
    email:string,
};
export const ContactForm = () => {
    const { formState: { errors }, handleSubmit, register } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => console.log(data);
    
    return (
        <Box >
            <Text textTransform="uppercase" fontFamily="DAMN" fontSize="44px" >
                Зв'язатися з нами
            </Text>
            <Text fontFamily="Exo 2">
                Маєте запитання або зацікавлені в наших послугах OSINT? Залиште свої контактні дані, і наша команда експертів з радістю допоможе вам.
            </Text>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormControl  >
                    <Grid
                        templateColumns='repeat(4, 1fr)'
                        templateRows='repeat(2, 1fr)'
                        columnGap="30px"
                        rowGap="15px"
                        my="30px"
                    >
                        <GridItem colSpan={{base:4,md:2 }}>
                            <Input
                                borderColor={errors.name ? "red" : 'brand.border'}
                                rounded="4px"
                                h="56px"
                                {...register("name",{ required: true })}
                                placeholder='Ваше імʼя *'
                                color="brand.border"
                            />
                        </GridItem>
                        <GridItem colSpan={{base:4,md:2 }}>
                            <Input borderColor={errors.phoneNumber ? "red" : 'brand.border'}
                                   rounded="4px"
                                   type="tel" h="56px"
                                   {...register("phoneNumber", { required: true })}
                                   placeholder='Номер телефону *'
                                   color="brand.border"
                            />
                        </GridItem>
                        <GridItem colSpan={{base:4,md:2 }}>
                            <Input borderColor={errors.email ? "red" : 'brand.border'}
                                   rounded="4px"
                                   type="email" h="56px"
                                   {...register("email", { required: true })}
                                   placeholder='Email *'
                                   color="brand.border"
                            />
                        </GridItem>
                        <GridItem colSpan={{base:4,md:2 }}>
                            <Input borderColor={errors.company ? "red" : 'brand.border'}
                                   rounded="4px"
                                   h="56px"
                                   {...register("company", { required: true })}
                                   placeholder='Ваша компанія'
                                   color="brand.border"
                            />
                        </GridItem>
                        <GridItem colSpan={4}>
                            <Textarea
                                {...register("reviews", { required: true })}
                                borderColor={errors.reviews ? "red" : 'brand.border'}
                                placeholder='Залишіть повідомлення'
                                rounded="4px" h="118px"
                            />
                        </GridItem>
                    </Grid>
                    <FormErrorMessage>
                        {errors.name && errors.name.message}
                    </FormErrorMessage>
                </FormControl>
                <Button _hover={{bgColor:'blue.500'}} display="block" bgColor="blue" color="white" type="submit" w="full">
                    Відправити повідомлення
                </Button>
            </form>
        
        </Box>
    );
};

