import { Container, VStack, Button, Image, Text, Flex, Box } from '@chakra-ui/react';
import BgImg from 'src/shared/assets/bg.jpg';
import React from 'react';

export const HeaderMainSection = () => {
    return (
        <Box
            pt={['12px','20px','25px','30px','40px']}
            px={['40px','50px','60px','70px','80px']}
            height={[450,620,750,750]}
            bgColor="black"
            color="white"
            as="header"
            pb="30px"
        >
            <Container  height={[450,620,750,750]}  maxWidth="container.xl" position="relative" mx="auto" px={0}>
                <Box>
                    <Flex flexDirection="column" justifyContent="end" >
                        <Flex
                            direction={{base:'column','xl':'row'}}
                            justify={{base:"center",xl:'start'}}
                            align={{base:"center",xl:'end'}}
                            height={[450,620,750,750]}
                            gap={{base:"20px",xl:'0'}}
                            mt={2}
                        >
                            <VStack  display="flex" align="start" zIndex={1001}>
                                <Text
                                    textAlign={{base:"center",xl:'start'}}
                                    fontSize={{base:"14px",xl:"20px"}}
                                    w={{ base:"full",md:'600px' }}
                                    mb={{xl:"500px",base:0}}
                                    fontWeight="medium"
                                    position="relative"
                                    fontFamily="Exo 2"
                                    opacity="60%"
                                    left="-10px"
                                >
                                    Сильні Знання. Могутні Результати. Ваша Конкурентна Перевага.
                                </Text>
                            </VStack>
                            <Image
                                position={{ base:'static',xl:'absolute' }}
                                top={['10%','10%','10%','10%','0%']}
                                w={{base:'full',md:"auto"}}
                                right={{base:'20%',xl:"0"}}
                                src={BgImg}
                                zIndex={1}
                            />
                            <Box  width={{'2xl':"625px",base:'full',lg:'500px'}} ml={{base:' 0px',lg:"30px"}} mb="150px" >
                                <Button height="60px" w="full">
                                    <Text  >
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
