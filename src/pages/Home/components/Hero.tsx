import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Container,
} from '@chakra-ui/react';

export default function Hero() {
    return (
        <Flex
            w={'full'}
            h={'calc(100vh - 67px)'}
            backgroundImage={
                'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
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
                        fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
                        Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                        eiusmod tempor
                    </Text>
                    <Flex width='max-content' gap='10px'>
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
                    </Flex>
                </Stack>
            </VStack>
        </Flex>
    );
}