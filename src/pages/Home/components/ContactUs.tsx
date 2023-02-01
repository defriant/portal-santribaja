import { useState } from 'react'
import { BsPerson } from 'react-icons/bs'
import { useMutation, useQuery } from 'react-query'
import { sendContactApi } from '../../../api/request/contactUs'
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md'
import {
    Flex,
    Box,
    Heading,
    Text,
    Button,
    VStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Icon,
    useToast,
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
                title: resp?.message??resp,
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
                title: resp?.message??resp,
                status: 'error',
                duration: 3000,
                isClosable: true,
                position: 'top-right',
            })
        }
    })

    return (
        <Flex 
            bg="green.100"
            gap={{ base: 20, sm: 3, md: 5, lg: 20 }} 
            justifyContent='space-around'
            padding='50px 20px'
            margin='50px 0px'
            direction={{ base: 'column', md: 'row'}}
        >
            <Flex direction='column'>
                <Heading color='black' textAlign={{ base: 'center', md: 'left' }}>Hubungi Kami</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color='black' textAlign={{ base: 'center', md: 'left' }}>
                    Isi formulir untuk mengirim pesan
                </Text>
                <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems={{ base: 'center', md: "flex-start"}}>
                        <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color='black'
                            _hover={{}}
                            leftIcon={<Icon as={MdPhone} color="primary" size="20px" />}>
                            {companyInformation?.data?.data?.telepon}
                        </Button>
                        <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color='black'
                            _hover={{}}
                            leftIcon={<Icon as={MdEmail} color="primary" size="20px" />}>
                            {companyInformation?.data?.data?.email}
                        </Button>
                        {/* <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color='black'
                            _hover={{}}
                            leftIcon={<Icon as={MdLocationOn} color="primary" size="20px" />}>
                            Pondok Indah
                        </Button> */}
                    </VStack>
                </Box>
            </Flex>
            <VStack 
                padding='20px'
                color="#0B0E3F" 
                bg="white" 
                borderRadius="lg" 
                spacing={5}
            >
                <FormControl id="name">
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
                <FormControl id="name">
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
                <FormControl id="name">
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
                <FormControl id="name">
                    <FormLabel>Pesan</FormLabel>
                    <Textarea
                        borderColor="gray.300"
                        _hover={{
                            borderRadius: 'gray.300',
                        }}
                        placeholder=""
                        value={message}
                        onChange={(e: any) => setMessage(e.target.value)}
                    />
                </FormControl>
                <FormControl id="name" float="right">
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
                </FormControl>
            </VStack>
        </Flex>
    );
}