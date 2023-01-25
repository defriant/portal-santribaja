import React, { useMemo } from 'react'
import { Wrapper } from '../../components'
import { AiOutlineHome, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { MdOutlineLocationOn } from 'react-icons/md'
import { Flex, Grid, GridItem, Heading, Text, Icon } from '@chakra-ui/react'

const Distributor = () => {
    const dummyDistributors = useMemo(() => [
        {
            name: 'DISTRIBUTOR JAKARTA TIMUR',
            instagram: '-',
            city: 'JAKARTA TIMUR (DKI)',
            phone: '0821 2344 4272',
            address: 'Jl. Persahabatan raya, No. 10, Kelurahan Cipinang, Kecamatan Pulogadung, Jakarta Timur',
        },
        {
            name: 'DISTRIBUTOR JAKARTA TIMUR',
            instagram: '-',
            city: 'JAKARTA TIMUR (DKI)',
            phone: '0821 2344 4272',
            address: 'Jl. Persahabatan raya, No. 10, Kelurahan Cipinang, Kecamatan Pulogadung, Jakarta Timur',
        },
        {
            name: 'DISTRIBUTOR JAKARTA TIMUR',
            instagram: '-',
            city: 'JAKARTA TIMUR (DKI)',
            phone: '0821 2344 4272',
            address: 'Jl. Persahabatan raya, No. 10, Kelurahan Cipinang, Kecamatan Pulogadung, Jakarta Timur',
        },
        {
            name: 'DISTRIBUTOR JAKARTA TIMUR',
            instagram: '-',
            city: 'JAKARTA TIMUR (DKI)',
            phone: '0821 2344 4272',
            address: 'Jl. Persahabatan raya, No. 10, Kelurahan Cipinang, Kecamatan Pulogadung, Jakarta Timur',
        },
        {
            name: 'DISTRIBUTOR JAKARTA TIMUR',
            instagram: '-',
            city: 'JAKARTA TIMUR (DKI)',
            phone: '0821 2344 4272',
            address: 'Jl. Persahabatan raya, No. 10, Kelurahan Cipinang, Kecamatan Pulogadung, Jakarta Timur',
        },
        {
            name: 'DISTRIBUTOR JAKARTA TIMUR',
            instagram: '-',
            city: 'JAKARTA TIMUR (DKI)',
            phone: '0821 2344 4272',
            address: 'Jl. Persahabatan raya, No. 10, Kelurahan Cipinang, Kecamatan Pulogadung, Jakarta Timur',
        },
    ], [])

    return (
        <Wrapper>
            <Flex direction='column' minHeight='calc(100vh - 117px)'>
                <Heading 
                    color='primary' 
                    textAlign='center' 
                    marginBottom='30px'
                >
                    Our Distributor
                </Heading>
                <Grid
                    templateColumns={{
                        base: 'repeat(1, 1fr)',
                        sm: 'repeat(2, 1fr)',
                        md: 'repeat(2, 1fr)',
                        lg: 'repeat(3, 1fr)',
                    }} 
                    paddingY='25px' 
                    gap='20px'
                >
                    {dummyDistributors?.map((distributor, index) => {
                        return (
                            <Flex 
                                as={GridItem} 
                                direction='column'
                                boxShadow='0px 0px 10px 1px #e8e8e8'
                                rounded='md'
                                padding='20px'
                                gap='10px'
                            >
                                <Text marginBottom='10px' fontSize='22px'>{distributor?.name}</Text>
                                <Flex alignItems='center' gap='10px'>
                                    <Icon as={AiOutlineHome} />
                                    <Text>{distributor?.city}</Text>
                                </Flex>
                                <Flex alignItems='center' gap='10px'>
                                    <Icon as={AiOutlineInstagram} color='#f70b52' />
                                    <Text>{distributor?.instagram}</Text>
                                </Flex>
                                <Flex alignItems='center' gap='10px'>
                                    <Icon as={AiOutlineWhatsApp} color='#0dc143' />
                                    <Text>{distributor?.phone}</Text>
                                </Flex>
                                <Flex gap='10px'>
                                    <Icon marginTop='3px' as={MdOutlineLocationOn} color='#4867aa' />
                                    <Text>{distributor?.address}</Text>
                                </Flex>
                            </Flex>
                        )
                    })}
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default Distributor