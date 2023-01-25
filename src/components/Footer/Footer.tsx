import { ReactNode } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { IMG_LOGO } from '../../assets'
import {
    Box,
    chakra,
    Container,
    Link,
    Stack,
    Text,
    VisuallyHidden,
    useColorModeValue,
    Image,
    GridItem,
    Grid,
    Divider,
} from '@chakra-ui/react'
import ROUTE_URL from '../../router/urlRouter'

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode
    label: string
    href: string
}) => {
    return (
        <chakra.button
            bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
            rounded={'full'}
            w={8}
            h={8}
            cursor={'pointer'}
            as={'a'}
            href={href}
            display={'inline-flex'}
            alignItems={'center'}
            justifyContent={'center'}
            transition={'background 0.3s ease'}
            _hover={{
                bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
            }}>
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    )
}

const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
        <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
            {children}
        </Text>
    )
}

export default function Footer() {
    return (
        <Box color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'6xl'} py={10}>
                <Grid
                    templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
                    gap={8}
                    marginBottom='25px'
                >
                    <Stack spacing={6}>
                        <Box>
                            <Image src={IMG_LOGO} width='100px' />
                        </Box>
                    </Stack>
                    <Stack align={{ base: 'flex-start', sm: 'flex-end', md: 'center' }}>
                        <ListHeader>Company</ListHeader>
                        <Link href={ROUTE_URL.ABOUT}>About</Link>
                        <Link href={ROUTE_URL.DISTRIBUTOR}>Distributor</Link>
                        <Link href={ROUTE_URL.PRODUCT}>Our Product</Link>
                    </Stack>
                    <GridItem colSpan={{ base: 1, sm: 2, md: 1 }}>
                        <Stack 
                            justifyContent={{ base: 'flex-start', sm: 'center', md: 'flex-end' }}
                            direction={'row'} 
                            spacing={6}
                        >
                            <SocialButton label={'YouTube'} href={'#'}>
                                <FaYoutube color='#ff0000' />
                            </SocialButton>
                            <SocialButton label={'Facebook'} href={'#'}>
                                <FaFacebook color='#4867aa' />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={'#'}>
                                <FaInstagram color='#f70b52' />
                            </SocialButton>
                            <SocialButton label={'Whatsapp'} href={'#'}>
                                <FaWhatsapp color='#0dc143' />
                            </SocialButton>
                        </Stack>
                    </GridItem>
                </Grid>
                <Divider />
                <Text fontSize={'sm'} textAlign='center'>
                    © 2023 PT. Santi Baja. All rights reserved
                </Text>
            </Container>
        </Box>
    )
}