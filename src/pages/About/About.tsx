import React, { useRef } from 'react'
import { Wrapper } from '../../components'
import { Box, Flex, Grid, GridItem, Heading, Image, Stack, Text } from '@chakra-ui/react'
import { useQuery } from 'react-query'
import { getCompanyInformationApi } from '../../api/request/company'
import { Autoplay, Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Slider from './components/Slider'
import Head from '../../components/Head'

const About = () => {
    const carouselPrev = useRef(null)
    const carouselNext = useRef(null)

    const companyInformation = useQuery('get-company-information', () => getCompanyInformationApi())

    return (
        <>
            <Head title='Tentang Kami' />
            <Wrapper>
                <Flex direction='column' minHeight='calc(100vh - 117px)'>
                    <Grid
                        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
                        gap={{ base: '50px', md: '25px' }}
                        justifyContent='space-between'
                    >
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
                        <GridItem gridRow={1} gridColumn={{ base: 1, md: 2 }}>
                            {companyInformation?.data && <Slider data={companyInformation?.data?.data?.about_images} />}
                        </GridItem>
                    </Grid>
                </Flex>
            </Wrapper>
        </>
    )
}

export default About