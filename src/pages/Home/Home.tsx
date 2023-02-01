import React from 'react'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import Album from './components/Album'
import Article from './components/Article'
import Grid2 from './components/Grid2'
import Grid3 from './components/Grid3'
import Category from './components/Category'
import ContactUs from './components/ContactUs'
import { useQuery } from 'react-query'
import { getHomeDataApi } from '../../api/request/home'
import { Center, Flex, Spinner, useToast } from '@chakra-ui/react'

const Home = () => {
    const toast = useToast()

    const homeData = useQuery('get-home-data', () => getHomeDataApi(), {
        onError: (resp: any) => {
            toast({
                status: 'error',
                description: resp?.message??resp,
                position: 'top-right',
                isClosable: false,
                duration: 3000
            })
        }
    })

    function renderSection(data: any, index: number) {
        switch(data?.type) {
            case 'banner_grid_2':
                return <Grid2 key={index} firstGrid={data?.data[0]} secondGrid={data?.data[1]} />
            case 'banner_grid_3':
                return <Grid3 key={index} firstGrid={data?.data[0]} secondGrid={data?.data[1]} thirdGrid={data?.data[2]} />
            case 'gallery':
                return <Gallery key={index} data={data} />
            case 'album':
                return <Album key={index} data={data} />
            case 'article':
                return <Article key={index} data={data} />
            case 'category':
                return <Category key={index} data={data} />
        }
    }

    return (
        <Flex direction='column'>
            {homeData?.isLoading &&
                <Center minHeight='calc(100vh - 67px)'>
                    <Spinner color='primary' />
                </Center>
            }

            {homeData?.data && <Hero data={homeData?.data?.data?.main_banner} />}
            <Flex marginTop='calc(100vh - 67px)' />
            {homeData?.data?.data?.sections?.map((data: any, index: number) => {
                return renderSection(data, index)
            })}

            <ContactUs />
        </Flex>
    )
}

export default Home