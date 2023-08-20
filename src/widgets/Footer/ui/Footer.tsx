import {
    Container,
    GridItem,
    ListItem,
    Divider,
    Button,
    Center,
    Link,
    Flex,
    Grid,
    List,
    Text,
    Box
} from '@chakra-ui/react';
import React from 'react';

export const Footer = () => {
    return (
        <Box bgColor="black" as="footer">
            <Container maxWidth="container.xl" color='white' mx="auto"  >
                <Grid templateColumns={{ base: 'repeat(1, 1fr)',md: 'repeat(3, 1fr)',xl: 'repeat(3, 1fr)' }} color='white' pt={10} mb={15}>
                    <GridItem colSpan={1} >
                        <Flex justify={{base: 'start',md:'start' }} columnGap={{md: 20 }} mb={15}>
                            <Box>
                                <Text
                                    fontSize={{ base:'150px',sm:'250px',md:'200px' }}
                                    lineHeight="200px"
                                    fontFamily="DAMN"
                                    color="blue"
                                >
                                    OSINT
                                </Text>
                                <List columnGap='20px' display="flex" role="list" >
                                    <ListItem >
                                        <Link href="/">
                                            Instagram
                                        </Link>
                                    </ListItem>
                                    <ListItem >
                                        <Link href="/">
                                            Facebook
                                        </Link>
                                    </ListItem>
                                </List>
                            </Box>
                            <Divider display={{base:'none',lg:'block'}} orientation='vertical' h="200px" w={2} />
                        </Flex>
                    </GridItem>
                    <GridItem pl={{base:'0px',md:'31px' }} colSpan={1}>
                        <Flex justify={{lg: 'space-between',base:'start' }} columnGap={{base: 20 }} mb={15}>
                            <Box display={{base:'flex',md:'block'}} px={{ md:'30px',base:0 }} flexWrap="wrap" columnGap={10} pt="10px">
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
                        <Box px={{ md:'30px',base:0 }}>
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
                                onClick={() => alert('Якось потім :)')}
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
                    pb="33px"
                >
                    OSINT Conception, 2021. Всі права захищені.
                </Center>
            </Container>
        </Box>
    );
};

