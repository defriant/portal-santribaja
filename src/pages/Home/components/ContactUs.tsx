import { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { useMutation, useQuery } from 'react-query'
import { sendContactApi } from '../../../api/request/contactUs'
import {
    MdPhone,
    MdEmail,
    MdOutlineEmail,
} from 'react-icons/md'
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Icon,
    useToast,
    Grid,
    Container,
    Stack,
} from '@chakra-ui/react'
import { getCompanyInformationApi } from '../../../api/request/company'

export default function ContactUs() {
    const toast = useToast()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const companyInformation = useQuery('get-company-information', () => getCompanyInformationApi())
    const sendMessage = useMutation(() => sendContactApi({
        name, email, phone, message
    }), {
        onSuccess: (resp: any) => {
            toast({
                title: resp?.message ?? resp,
                status: 'success',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            })
            setName('')
            setEmail('')
            setPhone('')
            setMessage('')
        },
        onError: (resp: any) => {
            toast({
                title: resp?.message ?? resp,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            })
        }
    })

    return (
        <Box
            bg="green.100"
        >
            <Container
                maxW='container.xl'
                paddingY='50px'
            >
                <Heading
                    textAlign='center'
                    color='primary'
                    mb='50px'
                >Hubungi Kami</Heading>
                <Grid
                    gap='50px'
                    templateColumns={{ base: '1fr', md: 'auto 1fr' }}
                >
                    <Stack spacing='1.5rem'>
                        <Flex
                            align='flex-start'
                            gap='.75rem'
                        >
                            <Icon as={MdEmail} color="primary" fontSize='26px' />
                            <Stack>
                                <Text fontWeight='semibold' fontSize='20px' color='primary'>Email</Text>
                                <Text>{companyInformation?.data?.data?.email}</Text>
                            </Stack>
                        </Flex>
                        <Flex
                            align='flex-start'
                            gap='.75rem'
                        >
                            <Icon as={MdPhone} color="primary" fontSize='26px' />
                            <Stack>
                                <Text fontWeight='semibold' fontSize='20px' color='primary'>Telepon</Text>
                                <Text>{companyInformation?.data?.data?.telepon}</Text>
                            </Stack>
                        </Flex>
                    </Stack>
                    <Flex justify={{ base: 'unset', md: 'flex-end' }}>
                        <Stack
                            padding='2rem'
                            bg="white"
                            borderRadius="lg"
                            spacing='1rem'
                            w='100%'
                            maxW='650px'
                        >
                            <FormControl>
                                <FormLabel>Nama</FormLabel>
                                <InputGroup borderColor="#E0E1E7">
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<BsPerson color="gray.800" />}
                                    />
                                    <Input
                                        type="text"
                                        size="md"
                                        value={name}
                                        onChange={(e: any) => setName(e.target.value)}
                                    />
                                </InputGroup>
                            </FormControl>
                            <Grid
                                templateColumns={{ base: '1fr', md: '1fr 1fr' }}
                                gap='1rem'
                            >
                                <FormControl>
                                    <FormLabel>Email</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<MdOutlineEmail color="gray.800" />}
                                        />
                                        <Input
                                            type="text"
                                            size="md"
                                            value={email}
                                            onChange={(e: any) => setEmail(e.target.value)}
                                        />
                                    </InputGroup>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>No. Telepon</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                        <InputLeftElement
                                            pointerEvents="none"
                                            children={<MdPhone color="gray.800" />}
                                        />
                                        <Input
                                            type="number"
                                            size="md"
                                            value={phone}
                                            onChange={(e: any) => setPhone(e.target.value)}
                                        />
                                    </InputGroup>
                                </FormControl>
                            </Grid>
                            <FormControl>
                                <FormLabel>Pesan</FormLabel>
                                <Textarea
                                    borderColor="gray.300"
                                    _hover={{
                                        borderRadius: 'gray.300',
                                    }}
                                    placeholder=""
                                    value={message}
                                    onChange={(e: any) => setMessage(e.target.value)}
                                    height='200px'
                                    resize='none'
                                />
                            </FormControl>
                            <Box />
                            <Button
                                variant="solid"
                                bg="primary"
                                color="white"
                                _hover={{}}
                                isLoading={sendMessage?.isLoading}
                                isDisabled={!name || !email || !phone || !message}
                                onClick={() => sendMessage?.mutate()}
                            >
                                Kirim
                            </Button>
                        </Stack>
                    </Flex>
                </Grid>
            </Container>
        </Box>
    );
}