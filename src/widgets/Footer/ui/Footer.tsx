import { Container, ListItem, GridItem, Divider, Center, Button, Text, List, Grid, Flex, Box } from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
    return (
        <Box bgColor="black">
            <Container maxWidth="container.xl"  color='white' p={5}>
                <Grid templateColumns={{ base: 'repeat(1, 1fr)',md: 'repeat(3, 1fr)' , xl: 'repeat(3, 1fr)' }} color='white' pt={10} mb={15}>
                    <GridItem colSpan={1} >
                        <Flex justify={{base: 'center',md:'start' }} columnGap={{base: 20 }} mb={15}>
                            <Box>
                                <Text
                                    fontSize={{ base:'150px',sm:'250px',md:'200px' }}
                                    lineHeight="200px"
                                    fontFamily="DAMN"
                                    color="blue"
                                >
                                    OSINT
                                </Text>
                                <List columnGap='20px' display="flex" >
                                    <ListItem href="/" as="a">
                                        Instagram
                                    </ListItem>
                                    <ListItem href="/" as="a">
                                        Facebook
                                    </ListItem>
                                </List>
                            </Box>
                            <Divider display={{base:'none',lg:'block'}} orientation='vertical' h="200px" w={2} />
                        </Flex>
                    </GridItem>
                    <GridItem pl={{base:'0px',md:'31px' }} colSpan={1}>
                        <Flex justify={{lg: 'space-between',base:'start' }} columnGap={{base: 20 }} mb={15}>
                            <Box display={{base:'flex',md:'block'}} flexWrap="wrap" columnGap={10} px="30px" pt="10px">
                                <Text
                                    textTransform="uppercase"
                                    fontWeight="medium"
                                    fontFamily="Exo 2"
                                    fontSize="20px"
                                    mb="20px"
                                >
                                    Контакти
                                </Text>
                                <Text opacity="60%">
                                    UA: +380 98 123 456 78
                                </Text>
                                <Text opacity="60%">
                                    test@gmail.com
                                </Text>
                            </Box>
                            <Divider display={{base:'none',lg:'block'}} orientation='vertical' h="200px" w={2} />
                        </Flex>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Box px="30px">
                            <Text
                                textTransform="uppercase"
                                fontWeight="medium"
                                fontFamily="Exo 2"
                                fontSize="20px"
                                mb="10px"
                                pt="10px"
                            >
                                Звʼяжіться з Нами
                            </Text>
                            <Text
                                fontFamily="Exo 2"
                                opacity="60%"
                                mb="15px"
                            >
                                Заповніть форму і ми звʼяжемося з вами якнайшвидше.
                            </Text>
                            <Button
                                _hover={{bgColor:'blue.400'}}
                                textTransform='uppercase'
                                userSelect="none"
                                bgColor="blue"
                                color='white'
                                w="full"
                                h="60px"
                            >
                                Замовити дзвінок
                            </Button>
                        </Box>
                    </GridItem>
                </Grid>
                <Center
                    opacity='30%'
                    color='white'
                >
                    OSINT Conception, 2021. Всі права захищені.
                </Center>
            </Container>
        </Box>
    );
};

