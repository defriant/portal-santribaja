import React from 'react'
import { Wrapper } from '../../components'
import { Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { getCompanyInformationApi } from '../../api/request/company'

const About = () => {
    const companyInformation = useQuery('get-company-information', () => getCompanyInformationApi())

    return (
        <Wrapper>
            <Flex direction='column' minHeight='calc(100vh - 117px)'>
                <Grid
                    templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                    gap={{ base: '50px', md: '25px' }}
                >
                    <GridItem display={{ base: 'block', md: 'none' }}>
                        <Image src={companyInformation?.data?.data?.about_images[0]} width={{ base: '200px', md: '350px' }} margin={{ base: 'auto', md: '0px 0px 0px auto' }} />
                    </GridItem>
                    <GridItem>
                        <Heading
                            textAlign={{ base: 'center', md: 'left' }}
                            color='primary'
                            marginBottom='30px'
                        >
                            Tentang Kami
                        </Heading>
                        <Text textAlign={{ base: 'center', md: 'justify' }} whiteSpace='pre-line'>{companyInformation?.data?.data?.about}</Text>
                    </GridItem>
                    <GridItem display={{ base: 'none', md: 'block' }}>
                        <Image src={companyInformation?.data?.data?.about_images[0]} width={{ base: '200px', md: '350px' }} margin={{ base: 'auto', md: '0px 0px 0px auto' }} />
                    </GridItem>
                </Grid>
            </Flex>
        </Wrapper>
    )
}

export default About