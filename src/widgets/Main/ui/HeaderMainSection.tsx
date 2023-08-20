import { Container, Button, VStack,Image, Flex,Text, Box } from '@chakra-ui/react';
import BgImg from 'src/shared/assets/bg.jpg';
import React from 'react';

export const HeaderMainSection = () => {
    return (
        <Box
            px={['40px','50px','60px','70px','80px']}
            pt={['12px','20px','25px','30px','40px']}
            height={[450,620,750,750]}
            fontFamily="Exo 2"
            bgColor="black"
            color="white"
            pb="30px"
        >
            <Container  height={[450,620,750,750]}  maxWidth="container.xl" position="relative" mx="auto" px={0}>
                <Box>
                    <Flex flexDirection="column" justifyContent="end" >
                        <Flex
                            direction={{base:'column','xl':'row'}}
                            justify={{base:"center",xl:'start'}}
                            align={{base:"center",xl:'end'}}
                            height={[550,620,750,750]}
                            gap={{base:"20px",xl:'0'}}
                            mt={2}
                        >
                            <VStack  display="flex" align="start" zIndex={1001}>
                                <Text
                                    textAlign={{base:"center",xl:'start'}}
                                    w={{ base:"full",md:'700px' }}
                                    left={{ xl:'10px',base:0 }}
                                    mb={{xl:"500px",base:0}}
                                    position="relative"
                                    fontWeight="medium"
                                    fontFamily="Exo 2"
                                    lineHeight="28px"
                                    color="lightGray"
                                    fontSize="20px"
                                    opacity="60%"
                                >
                                    Сильні Знання. Могутні Результати. Ваша Конкурентна Перевага.
                                </Text>
                            </VStack>
                            <Image
                                position={{ base:'static',xl:'absolute' }}
                                top={['10%','10%','10%','10%','0%']}
                                right={{base:'20%',xl:"0"}}
                                w={{base:'full',md:"auto"}}
                                src={BgImg}
                                zIndex={1}
                                alt="alt"
                            />
                            <Box
                                width={{'2xl':"625px",base:'full',lg:'500px'}}
                                ml={{base:' 0px',lg:"30px"}}
                                textTransform="uppercase"
                                letterSpacing="0.1px"
                                fontWeight="medium"
                                lineHeight="18px"
                                fontSize="15px"
                                color="black"
                                mb="150px"
                            >
                                <Button
                                    onClick={() => alert('Якось потім :)')}
                                    height="60px"
                                    w="full"
                                >
                                    <Text textTransform="uppercase" >
                                        Зв'язатися з нами
                                    </Text>
                                </Button>
                            </Box>
                        </Flex>
                    </Flex>
                </Box>
            </Container>
        </Box>
    );
};

