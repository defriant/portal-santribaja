import React, { useMemo } from 'react'
import { Wrapper } from '../../components'
import { useQuery } from 'react-query'
import { getDistributorsApi } from '../../api/request/distributor'
import { MdOutlineLocationOn } from 'react-icons/md'
import { AiOutlineHome, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai'
import { Flex, Grid, GridItem, Heading, Text, Icon, Skeleton, useToast } from '@chakra-ui/react'
import Head from '../../components/Head'

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
    const toast = useToast()

    const distributors = useQuery('get-galleries', () => getDistributorsApi(), {
        onError: (resp: any) => {
            toast({
                status: 'error',
                description: resp?.message ?? resp,
                position: 'top-right',
                isClosable: false,
                duration: 3000
            })
        }
    })

    return (
        <>
            <Head title='Cabang' />
            <Wrapper>
                <Flex direction='column' minHeight='calc(100vh - 117px)'>
                    <Heading
                        color='primary'
                        textAlign='center'
                        marginBottom='30px'
                    >
                        Distributor Kami
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
                        {distributors?.isLoading && [...Array(3)].map((_, index) => {
                            return (
                                <Flex
                                    as={GridItem}
                                    direction='column'
                                    boxShadow='0px 0px 10px 1px #e8e8e8'
                                    rounded='md'
                                    padding='20px'
                                    gap='10px'
                                    key={index}
                                >
                                    <Skeleton height='33px' marginBottom='10px' />
                                    <Skeleton height='24px' />
                                    <Skeleton height='24px' />
                                    <Skeleton height='24px' />
                                    <Skeleton height='24px' />
                                </Flex>
                            )
                        })}

                        {distributors?.data?.data?.map((distributor: any, index: number) => {
                            return (
                                <Flex
                                    as={GridItem}
                                    direction='column'
                                    boxShadow='0px 0px 10px 1px #e8e8e8'
                                    rounded='md'
                                    padding='20px'
                                    gap='10px'
                                    key={index}
                                >
                                    <Text marginBottom='10px' fontSize='22px'>{distributor?.nama}</Text>
                                    <Flex alignItems='center' gap='10px'>
                                        <Icon as={AiOutlineHome} />
                                        <Text>{distributor?.wilayah}</Text>
                                    </Flex>
                                    <Flex alignItems='center' gap='10px'>
                                        <Icon as={AiOutlineInstagram} color='#f70b52' />
                                        <Text>{distributor?.instagram}</Text>
                                    </Flex>
                                    <Flex alignItems='center' gap='10px'>
                                        <Icon as={AiOutlineWhatsApp} color='#0dc143' />
                                        <Text>{distributor?.whatsapp}</Text>
                                    </Flex>
                                    <Flex gap='10px'>
                                        <Icon marginTop='3px' as={MdOutlineLocationOn} color='#4867aa' />
                                        <Text>{distributor?.alamat}</Text>
                                    </Flex>
                                </Flex>
                            )
                        })}
                    </Grid>
                </Flex>
            </Wrapper>
        </>
    )
}

export default Distributor