import { ReactNode } from 'react'
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
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
import { useQuery } from 'react-query'
import { getCompanyInformationApi } from '../../api/request/company'

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
            target='_blank'
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
    const companyInformation = useQuery('get-company-information', () => getCompanyInformationApi())

    return (
        <Box color={useColorModeValue('gray.700', 'gray.200')} boxShadow='rgb(0 0 0 / 12%) 0px 1px 6px 0px'>
            <Container maxW={'container.xl'} py='50px'>
                {/* <Divider /> */}
                <Grid
                    templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr' }}
                    gap={8}
                    paddingY='25px'
                >
                    <Stack spacing={6}>
                        <Box>
                            <Image src={`https://studio.santribaja.com/assets/images/logo.png?v=${new Date().getTime()}`} width='100px' />
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
                            <SocialButton label={'YouTube'} href={companyInformation?.data?.data?.youtube}>
                                <FaYoutube color='#ff0000' />
                            </SocialButton>
                            <SocialButton label={'Facebook'} href={companyInformation?.data?.data?.facebook}>
                                <FaFacebook color='#4867aa' />
                            </SocialButton>
                            <SocialButton label={'Instagram'} href={companyInformation?.data?.data?.instagram}>
                                <FaInstagram color='#f70b52' />
                            </SocialButton>
                            <SocialButton label={'Whatsapp'} href={companyInformation?.data?.data?.whatsapp}>
                                <FaWhatsapp color='#0dc143' />
                            </SocialButton>
                        </Stack>
                    </GridItem>
                </Grid>
                {/* <Divider />
                <Box height='25px' /> */}
            </Container>
            <Divider />
            <Box paddingY='1rem'>
                <Text fontSize={'sm'} textAlign='center'>
                    © 2023 PT. Santi Baja. All rights reserved
                </Text>
            </Box>
        </Box>
    )
}