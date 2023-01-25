import {
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
    Icon,
} from '@chakra-ui/react';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdOutlineEmail,
} from 'react-icons/md';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BsPerson } from 'react-icons/bs';

export default function ContactUs() {
    return (
        <Flex 
            bg="green.100"
            gap={{ base: 20, sm: 3, md: 5, lg: 20 }} 
            justifyContent='space-around'
            borderRadius="lg"
            padding='50px 20px'
            margin='50px 0px'
            direction={{ base: 'column', md: 'row'}}
        >
            <Flex direction='column'>
                <Heading color='black' textAlign={{ base: 'center', md: 'left' }}>Contact Us</Heading>
                <Text mt={{ sm: 3, md: 3, lg: 5 }} color='black' textAlign={{ base: 'center', md: 'left' }}>
                    Fill out the form to contact
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
                            +62 8534 3434 294
                        </Button>
                        <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color='black'
                            _hover={{}}
                            leftIcon={<Icon as={MdEmail} color="primary" size="20px" />}>
                            team@santribaja.com
                        </Button>
                        <Button
                            size="md"
                            height="48px"
                            variant="ghost"
                            color='black'
                            _hover={{}}
                            leftIcon={<Icon as={MdLocationOn} color="primary" size="20px" />}>
                            Pondok Indah
                        </Button>
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
                    <FormLabel>Name</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                    </InputGroup>
                </FormControl>
                <FormControl id="name">
                    <FormLabel>Email</FormLabel>
                    <InputGroup borderColor="#E0E1E7">
                        <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                        />
                        <Input type="text" size="md" />
                    </InputGroup>
                </FormControl>
                <FormControl id="name">
                    <FormLabel>Message</FormLabel>
                    <Textarea
                        borderColor="gray.300"
                        _hover={{
                            borderRadius: 'gray.300',
                        }}
                        placeholder=""
                    />
                </FormControl>
                <FormControl id="name" float="right">
                    <Button
                        variant="solid"
                        bg="primary"
                        color="white"
                        _hover={{}}>
                        Send
                    </Button>
                </FormControl>
            </VStack>
        </Flex>
    );
}