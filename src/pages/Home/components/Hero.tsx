import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Container,
} from '@chakra-ui/react';

interface IHero {
    data: any
}

export default function Hero(props: IHero) {
    const { data } = props

    return (
        <Flex
            w={'full'}
            h={'calc(100vh - 67px)'}
            backgroundImage={
                `url(${data?.filename})`
            }
            backgroundSize={'cover'}
            backgroundPosition={'center center'}
            position='absolute'
            left='0'
            right='0'
        >
            <VStack
                w={'full'}
                justify={'center'}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
                <Stack as={Container} maxW={'container.xl'} align={{ base: 'center', md: 'flex-start'}} spacing={6}>
                    <Text
                        textAlign={{ base: 'center', md: 'left' }}
                        width={{ base: '100%', md: '50%' }}
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
                    >
                        {data?.title}
                    </Text>
                    <Text
                        textAlign={{ base: 'center', md: 'left' }}
                        width={{ base: '100%', md: '50%' }}
                        color={'white'}
                        fontWeight={600}
                        lineHeight={1}
                        fontSize={useBreakpointValue({ base: 'md', md: 'lg' })}
                    >
                        {data?.description}
                    </Text>
                    {/* <Flex width='max-content' gap='10px'>
                        <Button
                            bg={'blue.400'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'blue.500' }}>
                            Show me more
                        </Button>
                        <Button
                            bg={'whiteAlpha.300'}
                            rounded={'full'}
                            color={'white'}
                            _hover={{ bg: 'whiteAlpha.500' }}>
                            Show me more
                        </Button>
                    </Flex> */}
                </Stack>
            </VStack>
        </Flex>
    );
}