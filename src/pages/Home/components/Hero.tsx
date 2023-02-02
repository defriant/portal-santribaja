import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Container,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import ROUTE_URL from '../../../router/urlRouter';

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
                <Stack as={Container} maxW={'container.xl'} align={{ base: 'center', md: 'flex-start' }} spacing={6}>
                    <Text
                        textAlign={{ base: 'center', md: 'left' }}
                        width={{ base: '100%', md: '50%' }}
                        color={'white'}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={{ base: '30px', md: '36px' }}
                    >
                        {data?.title}
                    </Text>
                    <Text
                        textAlign={{ base: 'center', md: 'left' }}
                        width={{ base: '100%', md: '50%' }}
                        color={'white'}
                        fontWeight={600}
                        fontSize={{ base: '18px', md: '24px' }}
                    >
                        {data?.description}
                    </Text>
                    <Button
                        as={NavLink}
                        to={ROUTE_URL.ABOUT}
                        rounded='full'
                        bgColor='primary.60'
                        color='white'
                        _hover={{
                            backgroundColor: 'primary.50'
                        }}
                        _active={{}}
                        _focus={{}}
                    >Tentang Kami</Button>
                </Stack>
            </VStack>
        </Flex>
    );
}